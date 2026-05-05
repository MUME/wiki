const fs = require('fs');
const path = require('path');
const { getMarkdownFiles, isStub } = require('./utils.cjs');

const docsDir = path.join(__dirname, '../docs');
const pagesDir = path.join(docsDir, 'pages');

if (!fs.existsSync(pagesDir)) {
    console.log('Docs pages directory not found, skipping stub check.');
    process.exit(0);
}

const allFiles = getMarkdownFiles(pagesDir);
const stubs = [];

allFiles.forEach(fullPath => {
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (isStub(content)) {
        const file = path.relative(pagesDir, fullPath);
        stubs.push({ file });
    }
});

if (stubs.length > 0) {
    console.warn('\x1b[33m%s\x1b[0m', `\nFound ${stubs.length} potential stub pages:`);
    stubs.forEach(s => {
        console.warn(`  - ${s.file}`);
    });
    console.warn('\x1b[33m%s\x1b[0m', 'Consider merging these pages or adding more content to improve SEO.\n');
}
