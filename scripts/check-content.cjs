const fs = require('fs');
const path = require('path');
const { getMarkdownFiles } = require('./utils.cjs');
const { EXCLUDED_DIRS } = require('./constants.cjs');

const docsDir = path.resolve(__dirname, '../docs');
const publicImgDir = path.resolve(docsDir, 'public/img');

let errors = 0;

function logError(file, message) {
    console.error(`\x1b[31m[ERROR]\x1b[0m ${file}: ${message}`);
    errors++;
}

/**
 * Check filenames for spaces or illegal characters
 */
function checkFilenames(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.relative(docsDir, fullPath);

        if (entry.isDirectory()) {
            if (EXCLUDED_DIRS.includes(entry.name)) {
                continue;
            }
            checkFilenames(fullPath);
        } else if (entry.name.endsWith('.md')) {
            // Check for spaces
            if (/\s/.test(entry.name)) {
                logError(relPath, `Filename contains spaces. Use underscores instead.`);
            }

            // Allowed: alphanumeric (including unicode), _, -, ., ', ,, (, ), &, !, +
            // We allow these because they are prevalent in existing game content titles.
            // Using a range that covers most accented characters and non-ASCII letters.
            if (/[^a-zA-Z0-9\u00C0-\u017F\u0400-\u04FF_\-.\',()&!+]/.test(entry.name)) {
                logError(relPath, `Filename contains illegal characters. Use only alphanumeric, underscores, hyphens, or standard punctuation (',', "'", '(', ')', '&', '!', '+').`);
            }

            // Article Check (English articles: A, An, The)
            // Match article at start followed by space, underscore, dash, or word boundary
            const baseName = entry.name.slice(0, -3); // strip ".md"
            if (/^(a|an|the)([ _-]|\b)/i.test(baseName)) {
                logError(relPath, `Filename starts with an indefinite or definite article: ${entry.name}`);
            }
        }
    }
}

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
            logError(relPath, `Missing YAML frontmatter.`);
        } else {
            const fm = fmMatch[1];
            const isHome = /^layout:\s*home\s*$/m.test(fm);

            const titleMatch = fm.match(/^title:\s*(.*)$/m);
            const title = titleMatch ? titleMatch[1].trim().replace(/^(['"])(.*)\1$/, '$2').trim() : '';

            if (title) {
                // Article Check for titles (English articles: A, An, The)
                // Use word boundary to avoid false positives on acronyms or other words
                if (!isHome && /^(a|an|the)\b/i.test(title)) {
                    logError(relPath, `Title starts with an indefinite or definite article: "${title}"`);
                }
            } else if (!isHome) {
                logError(relPath, `Missing 'title' in frontmatter.`);
            }

            // Check if aliases or tags are malformed (should be lists)
            if (/aliases:\s*[^\s\[]/.test(fm) && !/aliases:\s*\n/.test(fm)) {
                logError(relPath, `Malformed 'aliases'. Should be a list: [A, B] or multiline.`);
            }
        }

        // 2. Wikilink Check
        if (/\[\[.*?\]\]/.test(content)) {
            logError(relPath, `Found legacy [[wikilink]] syntax. Use standard [Text](./Page.md) links.`);
        }

        // 3. Absolute Internal Link Check
        if (/https?:\/\/(docs|wiki)\.mume\.org\/wiki/.test(content)) {
            logError(relPath, `Found absolute internal link. Use relative links instead.`);
        }

        // 4. Include Placement Check
        lines.forEach((line, index) => {
            if (line.includes('<!--@include:') && line.trim() !== line) {
                logError(relPath, `Line ${index + 1}: <!--@include--> must be on its own line without leading/trailing whitespace.`);
            }
        });

        // 5. Image Existence Check
        const imgMatches = content.matchAll(/!\[.*?\]\((.*?)\)/g);
        for (const match of imgMatches) {
            const imgPath = match[1];
            if (imgPath.startsWith('/img/')) {
                const fileName = imgPath.replace('/img/', '');
                const fullImgPath = path.join(publicImgDir, fileName);
                if (!fs.existsSync(fullImgPath)) {
                    logError(relPath, `Referenced image does not exist: ${imgPath}`);
                }
            } else if (imgPath.includes('img/') && !imgPath.startsWith('http')) {
                logError(relPath, `Image path '${imgPath}' should start with '/img/' (absolute from site root).`);
            }
        }
    });
}

console.log('Starting content validation...');

checkFilenames(docsDir);
checkMarkdownFiles();

if (errors > 0) {
    console.error(`\n\x1b[31mValidation failed with ${errors} error(s).\x1b[0m`);
    process.exit(1);
} else {
    console.log('\n\x1b[32mValidation passed!\x1b[0m');
    process.exit(0);
}
