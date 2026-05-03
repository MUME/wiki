const fs = require('fs');
const path = require('path');
const { getMarkdownFiles, isStub } = require('./utils.cjs');

const docsDir = path.resolve('docs');
const pagesDir = path.resolve(docsDir, 'pages');
const publicDir = path.resolve(docsDir, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

function extractMetadata(fullPath) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const relativePath = path.relative(docsDir, fullPath);
    const fileName = path.basename(fullPath, '.md');

    let urlPrefix = '/';
    if (relativePath.startsWith('pages' + path.sep)) {
        urlPrefix = '/pages/';
    }

    const fmMatch = content.match(/^---([\s\S]*?)---/);
    let title = '';
    let aliases = [];
    let tags = [];
    if (fmMatch) {
        const fm = fmMatch[1];
        const titleMatch = fm.match(/^title:\s*(.*)$/m);
        if (titleMatch) title = titleMatch[1].trim().replace(/^['"](.*)['"]$/, '$1');

        const aliasesMatch = fm.match(/^aliases:\s*\[(.*)\]/m);
        if (aliasesMatch) {
            aliases = aliasesMatch[1].split(',').map(s => s.trim().replace(/^['"](.*)['"]$/, '$1'));
        }

        // Handle tags in frontmatter
        const tagsMatch = fm.match(/^tags:\s*\[(.*)\]/m);
        if (tagsMatch) {
            tags = tagsMatch[1].split(',').map(s => s.trim().replace(/^['"](.*)['"]$/, '$1'));
        } else {
            // Check for multiline tags
            const multilineTagsMatch = fm.match(/^tags:\s*\n((?:\s*-\s*.*\n?)*)/m);
            if (multilineTagsMatch) {
                tags = multilineTagsMatch[1].split('\n')
                    .map(s => s.replace(/^\s*-\s*/, '').trim())
                    .filter(s => s.length > 0);
            }
        }
    }
    if (!title) title = fileName.replace(/_/g, ' ');

    return {
        title,
        name: fileName.replace(/_/g, ' '),
        url: urlPrefix + fileName,
        aliases,
        tags,
        isStub: isStub(content)
    };
}

const allMdFiles = getMarkdownFiles(docsDir);
const allPages = allMdFiles
    .filter(f => !f.endsWith('tags.md'))
    .map(extractMetadata);

const termMap = {};
const paths = new Set();
const stubs = new Set();
const tagsMap = {};

for (const p of allPages) {
    paths.add(p.url);
    if (p.isStub) stubs.add(p.url);

    const titleLower = p.title.toLowerCase();
    const nameLower = p.name.toLowerCase();
    if (titleLower.length > 3) termMap[titleLower] = p.url;
    if (nameLower.length > 3 && nameLower !== titleLower) termMap[nameLower] = p.url;

    for (const alias of p.aliases) {
        const aliasLower = alias.toLowerCase();
        if (aliasLower.length >= 2) termMap[aliasLower] = p.url;
    }

    for (const tag of p.tags) {
        if (!tagsMap[tag]) tagsMap[tag] = [];
        tagsMap[tag].push({ title: p.title, url: p.url });
    }
}

// Ensure base paths exist
paths.add('/');
paths.add('/tags');

const output = {
    terms: termMap,
    paths: Array.from(paths),
    stubs: Array.from(stubs),
    tags: tagsMap
};

const outputPath = path.resolve(publicDir, 'pages-meta.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Generated ${path.relative(process.cwd(), outputPath)} with ${stubs.size} stubs and ${Object.keys(tagsMap).length} tags identified.`);
