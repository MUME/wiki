const fs = require('fs');
const path = require('path');
const { getMarkdownFiles, extractMetadata } = require('./utils.cjs');

const { topics, topicFor, topicRoute } = require('./routes.cjs');

const docsDir = path.resolve('docs');
const publicDir = path.resolve(docsDir, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const allMdFiles = getMarkdownFiles(docsDir);
const allPages = allMdFiles
    .filter(f => !f.endsWith('tags.md'))
    .sort((a,b) => {
      const { publicRoute } = require('./routes.cjs');
      const left = publicRoute(path.relative(docsDir,a)), right = publicRoute(path.relative(docsDir,b));
      return left < right ? -1 : left > right ? 1 : 0;
    })
    .map(f => extractMetadata(f, docsDir));

const termMap = {};
const paths = new Set();
const stubs = new Set();
const tagsMap = {};

for (const p of allPages) {
    paths.add(p.url);
    if (p.isStub) stubs.add(p.url);

    if (p.url.startsWith('/topics/')) continue;

    const titleLower = p.title.toLowerCase();
    const nameLower = p.name.toLowerCase();
    if (titleLower.length >= 2) termMap[titleLower] = p.url;
    if (nameLower.length >= 2 && nameLower !== titleLower) termMap[nameLower] = p.url;

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

const topicPages = Object.fromEntries(topics.map(topic => [topic, allPages.filter(p => p.url.startsWith('/pages/') && topicFor(p.tags) === topic).sort((a,b) => a.title.localeCompare(b.title)).map(p => ({title:p.title,url:p.url}))]));
const output = {
    topics: topicPages,
    collections: require('yaml').parse(fs.readFileSync('.pages.yml','utf8')).content.flatMap(group => group.items || [group]).map(leaf => leaf.path.replace(/^docs\//, '')).sort(),
    terms: termMap,
    paths: Array.from(paths),
    stubs: Array.from(stubs),
    tags: tagsMap
};

const outputPath = path.resolve(publicDir, 'pages-meta.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Generated ${path.relative(process.cwd(), outputPath)} with ${stubs.size} stubs and ${Object.keys(tagsMap).length} tags identified.`);
