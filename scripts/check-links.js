import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const pagesMetaPath = 'docs/.vitepress/pages-meta.json';

// Ensure pages-meta.json exists
if (!fs.existsSync(pagesMetaPath)) {
    console.log('Generating pages-meta.json...');
    execSync('node scripts/gather-pages.js');
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

let deadLinks = 0;

allMdFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const dir = path.dirname(file);
    const relDir = dir.replace(/^docs\/?/, '');

    // Improved regex to handle balanced parentheses (1 level deep)
    const links = content.matchAll(/\[.*?\]\(((?:[^)(]+|\([^)(]*\))*)\)/g);
    for (const match of links) {
        let rawHref = match[1];
        let href = rawHref.split('#')[0];

        // Skip external, anchors, and empty links
        if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;

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

        // URI decode for comparison
        try {
            normalized = decodeURIComponent(normalized);
        } catch (e) {}

        if (!validPaths.has(normalized)) {
            console.error(`Dead link in ${file}: ${rawHref} (resolved to ${normalized})`);
            deadLinks++;
        }
    }
});

if (deadLinks > 0) {
    console.error(`\nFound ${deadLinks} dead link(s) across all pages.`);
    process.exit(1);
} else {
    console.log(`\nVerified ${allMdFiles.length} files. No dead links found.`);
}
