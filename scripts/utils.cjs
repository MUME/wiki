const fs = require('fs');
const path = require('path');
const { EXCLUDED_FOR_CONTENT_SCAN } = require('./constants.cjs');

/**
 * Recursively find all Markdown files in a directory.
 */
function getMarkdownFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let mdFiles = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Skip infra, node_modules, and included content
            if (!EXCLUDED_FOR_CONTENT_SCAN.includes(entry.name)) {
                mdFiles = mdFiles.concat(getMarkdownFiles(fullPath));
            }
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
            mdFiles.push(fullPath);
        }
    }

    return mdFiles;
}

/**
 * Normalize title by trimming and stripping matching quotes.
 */
function normalizeTitle(rawTitle = '') {
    return rawTitle.trim().replace(/^(['"])(.*)\1$/, '$2').trim();
}

/**
 * Determine if a page's content qualifies as a stub.
 */
function isStub(content) {
    // Ignore pages that are intentional includes or templates
    if (content.includes('<!--@include')) {
        return false;
    }

    // Ignore home pages
    if (content.includes('layout: home')) {
        return false;
    }

    const lines = content.split('\n');
    let inFrontmatter = false;
    let bodyLines = 0;

    // Check for explicit stub tags or frontmatter
    const hasStubTag = content.includes('{{stub}}') ||
                     content.includes('stub: true') ||
                     /tags:[\s\S]*?-\s*Stubs/.test(content);

    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed === '---') {
            inFrontmatter = !inFrontmatter;
            return;
        }
        if (!inFrontmatter) {
            // Ignore headers (any level), empty lines, and comments
            if (trimmed.length > 0 && !trimmed.startsWith('<!--') && !trimmed.startsWith('#')) {
                bodyLines++;
            }
        }
    });

    // Content is <= 3 lines or has a stub tag
    return bodyLines <= 3 || hasStubTag;
}

/**
 * Extract metadata from a markdown file.
 */
function extractMetadata(fullPath, docsDir) {
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
    let autolink = true;
    if (fmMatch) {
        const fm = fmMatch[1];
        const titleMatch = fm.match(/^title:\s*(.*)$/m);
        if (titleMatch) title = normalizeTitle(titleMatch[1]);

        const aliasesMatch = fm.match(/^aliases:\s*\[(.*)\]/m);
        if (aliasesMatch) {
            aliases = aliasesMatch[1].split(',').map(s => s.trim().replace(/^['"](.*)['"]$/, '$1'));
        }

        const autolinkMatch = fm.match(/^autolink:\s*(.*)$/m);
        if (autolinkMatch) {
            const val = autolinkMatch[1].trim().toLowerCase();
            autolink = val !== 'false' && val !== 'no' && val !== 'off';
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
        autolink,
        isStub: isStub(content)
    };
}

module.exports = {
    getMarkdownFiles,
    isStub,
    extractMetadata,
    normalizeTitle
};
