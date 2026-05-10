import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const pagesMetaPath = 'docs/public/pages-meta.json';

// Ensure pages-meta.json exists
if (!fs.existsSync(pagesMetaPath)) {
    console.log('Generating pages-meta.json...');
    execSync('node scripts/gather-pages.cjs');
}

let pagesMeta = JSON.parse(fs.readFileSync(pagesMetaPath, 'utf-8'));

const validPaths = new Set();
pagesMeta.paths.forEach(p => {
    validPaths.add(p);
});

// Add static routes and special pages
['/guides', '/equipment', '/classes', '/races', '/lore', '/community', '/', '/tags'].forEach(p => validPaths.add(p));

function getFiles(dir, extension, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
        if (file !== '.vitepress' && file !== 'node_modules') {
            getFiles(filePath, extension, fileList);
        }
    } else if (file.endsWith(extension)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Add all markdown files as valid paths
const allMdFiles = getFiles('docs', '.md');
allMdFiles.forEach(file => {
    let relPath = '/' + path.relative('docs', file).replace(/\.md$/, '').replace(/\\/g, '/');
    if (relPath.endsWith('/index')) relPath = relPath.slice(0, -6) || '/';
    validPaths.add(relPath);
});

// Add images to valid paths
const images = getFiles('docs/public/img', '');
images.forEach(img => {
    validPaths.add('/' + img.replace(/docs\/public\//, '').replace(/\\/g, '/'));
});

// Convert a heading string to a VitePress/GitHub-style anchor slug
function headingToAnchor(heading) {
    return heading
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Build anchor index: maps absolute page path → Set of valid anchor strings
const anchorIndex = new Map();

allMdFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    let relPath = '/' + path.relative('docs', file).replace(/\.md$/, '').replace(/\\/g, '/');
    if (relPath.endsWith('/index')) relPath = relPath.slice(0, -6) || '/';

    const anchors = new Set();

    // Headings: ## Heading or ## Heading {#custom-id}
    for (const m of content.matchAll(/^#{1,6}\s+(.+)$/gm)) {
        const heading = m[1].trim();
        // Custom anchor override: ## Heading {#custom-id}
        const customId = heading.match(/\{#([\w-]+)\}\s*$/);
        if (customId) {
            anchors.add(customId[1]);
        } else {
            // Strip inline markdown (bold, italic, code, links)
            const plain = heading
                .replace(/\{[^}]*\}/g, '')
                .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
                .replace(/[*_`]/g, '')
                .trim();
            anchors.add(headingToAnchor(plain));
        }
    }

    // Explicit HTML id/name attributes: <span id="foo">, <a name="foo">, etc.
    for (const m of content.matchAll(/\s(?:id|name)="([\w-]+)"/g)) {
        anchors.add(m[1]);
    }

    anchorIndex.set(relPath, anchors);
});

// Resolve an absolute path to its canonical form in validPaths/anchorIndex
function resolveAbsPath(relDir, href) {
    let absolutePath;
    if (href.startsWith('/')) {
        absolutePath = href.replace(/\.md$/, '');
    } else {
        let parts = relDir.split(path.sep).filter(Boolean);
        let hrefParts = href.split('/').filter(Boolean);
        for (let part of hrefParts) {
            if (part === '..') parts.pop();
            else if (part !== '.') parts.push(part);
        }
        absolutePath = '/' + parts.join('/').replace(/\.md$/, '');
    }
    if (absolutePath === '/.') absolutePath = '/';
    let normalized = absolutePath.replace(/\/index$/, '') || '/';
    if (normalized.length > 1 && normalized.endsWith('/')) normalized = normalized.slice(0, -1);
    try { normalized = decodeURIComponent(normalized); } catch (e) {}
    return normalized;
}

let deadLinks = 0;
let deadAnchors = 0;

allMdFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const dir = path.dirname(file);
    const relDir = dir.replace(/^docs\/?/, '');
    let filePath = '/' + path.relative('docs', file).replace(/\.md$/, '').replace(/\\/g, '/');
    if (filePath.endsWith('/index')) filePath = filePath.slice(0, -6) || '/';

    // Improved regex to handle balanced parentheses (1 level deep)
    const links = content.matchAll(/\[.*?\]\(((?:[^)(]+|\([^)(]*\))*)\)/g);
    for (const match of links) {
        let rawHref = match[1];
        const hashIdx = rawHref.indexOf('#');
        let hrefPage = hashIdx >= 0 ? rawHref.slice(0, hashIdx) : rawHref;
        let anchor = hashIdx >= 0 ? rawHref.slice(hashIdx + 1) : null;

        // Skip external links
        if (hrefPage.startsWith('http') || hrefPage.startsWith('mailto:')) continue;

        if (!hrefPage) {
            // Same-page anchor only: [text](#anchor)
            if (anchor) {
                const pageAnchors = anchorIndex.get(filePath);
                if (pageAnchors && !pageAnchors.has(anchor)) {
                    console.error(`Dead anchor in ${file}: #${anchor} (not found in page)`);
                    deadAnchors++;
                }
            }
            continue;
        }

        const normalized = resolveAbsPath(relDir, hrefPage);

        if (!validPaths.has(normalized)) {
            console.error(`Dead link in ${file}: ${rawHref} (resolved to ${normalized})`);
            deadLinks++;
        } else if (anchor) {
            // Cross-page anchor validation
            const pageAnchors = anchorIndex.get(normalized);
            if (pageAnchors && !pageAnchors.has(anchor)) {
                console.error(`Dead anchor in ${file}: ${rawHref} (anchor #${anchor} not found in ${normalized})`);
                deadAnchors++;
            }
        }
    }
});

const total = deadLinks + deadAnchors;
if (total > 0) {
    if (deadLinks > 0) console.error(`\nFound ${deadLinks} dead link(s) across all pages.`);
    if (deadAnchors > 0) console.error(`\nFound ${deadAnchors} dead anchor(s) across all pages.`);
    process.exit(1);
} else {
    console.log(`\nVerified ${allMdFiles.length} files. No dead links or anchors found.`);
}
