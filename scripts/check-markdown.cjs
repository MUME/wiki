const fs = require('fs');
const path = require('path');
const { getMarkdownFiles, normalizeTitle, Validator } = require('./utils.cjs');

const docsDir = path.resolve(__dirname, '../docs');
const publicImgDir = path.resolve(docsDir, 'public/img');

const validator = new Validator('Markdown content validation');
const checkedImages = new Set();

/**
 * Check Markdown content and frontmatter
 */
function checkMarkdownFiles() {
    const mdFiles = getMarkdownFiles(docsDir);

    mdFiles.forEach(fullPath => {
        const relPath = path.relative(docsDir, fullPath);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const lines = content.split('\n');

        // 1. Frontmatter Check
        const fmMatch = content.match(/^---([\s\S]*?)---/);
        if (!fmMatch) {
            validator.logError(relPath, `Missing YAML frontmatter.`);
        } else {
            const fm = fmMatch[1];
            const isHome = /^layout:\s*home\s*$/m.test(fm);

            const titleMatch = fm.match(/^title:\s*(.*)$/m);
            const title = normalizeTitle(titleMatch ? titleMatch[1] : '');

            if (title) {
                // Article Check for titles (English articles: A, An, The)
                // Use word boundary to avoid false positives on acronyms or other words
                if (!isHome && /^(a|an|the)\b/i.test(title)) {
                    validator.logError(relPath, `Title starts with an indefinite or definite article: "${title}"`);
                }
            } else if (!isHome) {
                validator.logError(relPath, `Missing 'title' in frontmatter.`);
            }

            // Check if aliases or tags are malformed (should be lists)
            if (/aliases:\s*[^\s\[]/.test(fm) && !/aliases:\s*\n/.test(fm)) {
                validator.logError(relPath, `Malformed 'aliases'. Should be a list: [A, B] or multiline.`);
            }
        }

        // 2. Wikilink Check
        if (/\[\[.*?\]\]/.test(content)) {
            validator.logError(relPath, `Found legacy [[wikilink]] syntax. Use standard [Text](./Page.md) links.`);
        }

        // 3. Absolute Internal Link Check
        if (/https?:\/\/(docs|wiki)\.mume\.org\/wiki/.test(content)) {
            validator.logError(relPath, `Found absolute internal link. Use relative links instead.`);
        }

        // 4. Include Placement Check
        lines.forEach((line, index) => {
            if (line.includes('<!--@include:') && line.trim() !== line) {
                validator.logError(relPath, `Line ${index + 1}: <!--@include--> must be on its own line without leading/trailing whitespace.`);
            }
        });

        // 5. Image Existence Check
        const imgMatches = content.matchAll(/!\[[^\]]*]\(([^)]+)\)/g);
        for (const match of imgMatches) {
            const rawImgTarget = match[1].trim();
            if (!rawImgTarget) continue;

            // Strip optional title/attributes: `path/to/img.png "title"` → `path/to/img.png`
            const [imgUrl] = rawImgTarget.split(/\s+/);
            if (!imgUrl || imgUrl.startsWith('http')) continue;

            // Skip redundant filesystem checks for already-seen image URLs
            if (checkedImages.has(imgUrl)) {
                continue;
            }
            checkedImages.add(imgUrl);

            if (imgUrl.startsWith('/img/')) {
                const fileName = imgUrl.replace('/img/', '');
                const fullImgPath = path.join(publicImgDir, fileName);
                if (!fs.existsSync(fullImgPath)) {
                    validator.logError(relPath, `Referenced image does not exist: ${imgUrl}`);
                }
            } else if (imgUrl.includes('img/')) {
                validator.logError(relPath, `Image path '${imgUrl}' should start with '/img/' (absolute from site root).`);
            }
        }
    });
}

console.log('Starting markdown content validation...');

checkMarkdownFiles();

validator.finish();
