const fs = require('fs');
const path = require('path');
const YAML = require('yaml');
const { publicRoute } = require('./routes.cjs');
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

    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    let title = '';
    let aliases = [];
    let tags = [];
    let autolink = true;
    if (fmMatch) {
        // CMS editors serialize lists as block YAML and may quote strings.
        const fm = YAML.parse(fmMatch[1]) || {};
        title = typeof fm.title === 'string' ? fm.title.trim() : '';
        aliases = Array.isArray(fm.aliases) ? fm.aliases.filter(s => typeof s === 'string') : [];
        tags = Array.isArray(fm.tags) ? fm.tags.filter(s => typeof s === 'string') : [];
        autolink = ![false, 'false', 'no', 'off'].includes(fm.autolink);
    }
    if (!title) title = fileName.replace(/_/g, ' ');

    return {
        title,
        name: fileName.replace(/_/g, ' '),
        url: publicRoute(relativePath),
        aliases,
        tags,
        autolink,
        isStub: isStub(content)
    };
}

/**
 * Shared error logger and tracker
 */
class Validator {
    constructor(taskName) {
        this.taskName = taskName;
        this.errors = 0;
    }

    logError(file, message) {
        console.error(`\x1b[31m[ERROR]\x1b[0m ${file}: ${message}`);
        this.errors++;
    }

    finish() {
        if (this.errors > 0) {
            console.error(`\n\x1b[31m${this.taskName} failed with ${this.errors} error(s).\x1b[0m`);
            process.exit(1);
        } else {
            console.log(`\n\x1b[32m${this.taskName} passed!\x1b[0m`);
        }
    }
}

module.exports = {
    getMarkdownFiles,
    isStub,
    extractMetadata,
    normalizeTitle,
    Validator
};
