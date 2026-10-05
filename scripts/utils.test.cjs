const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const YAML = require('yaml');
const { extractMetadata, getMarkdownFiles } = require('./utils.cjs');

test('CMS block lists and inline frontmatter produce the same metadata', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wiki-metadata-'));
    const file = path.join(dir, 'Example.md');
    try {
        const body = '\n::: details Spoiler\nHidden door\n:::\n<!--@include: ../includes/Place.md-->\n';
        const frontmatter = {
            title: 'Example: a quoted title',
            aliases: ['Other name', 'Name, with comma'],
            tags: ['Guides', 'Newbie Help'],
            autolink: false,
            custom: 'preserved by the CMS merge setting'
        };
        const block = '---\n' + YAML.stringify(frontmatter) + '---\n' + body;
        fs.writeFileSync(file, block);
        const metadata = extractMetadata(file, dir);
        assert.equal(metadata.title, frontmatter.title);
        assert.deepEqual(metadata.aliases, frontmatter.aliases);
        assert.deepEqual(metadata.tags, frontmatter.tags);
        assert.equal(metadata.autolink, false);
        assert.equal(fs.readFileSync(file, 'utf8'), block);
        fs.writeFileSync(file, '---\n' + Object.entries(frontmatter).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n') + '\n---\n' + body);
        assert.deepEqual(extractMetadata(file, dir), metadata);
        fs.writeFileSync(file, '---\ntitle: Example\n---\n' + body);
        assert.equal(extractMetadata(file, dir).autolink, true);
    } finally {
        fs.rmSync(dir, { recursive: true, force: true });
    }
});

test('Pages CMS category choices cover all existing wiki categories', () => {
    const config = YAML.parse(fs.readFileSync(path.join(__dirname, '../.pages.yml'), 'utf8'));
    const pages = config.content[0].items[0];
    const choices = new Set(pages.fields.find(field => field.name === 'tags').options.values);
    const docs = path.join(__dirname, '../docs');
    for (const file of getMarkdownFiles(path.join(docs, 'pages'))) {
        for (const tag of extractMetadata(file, docs).tags) {
            assert.ok(choices.has(tag), `${file}: category ${tag} missing from Pages CMS`);
        }
    }
});

test('Every article has exactly one CMS leaf collection and a unique public filename', () => {
    const config = YAML.parse(fs.readFileSync(path.join(__dirname, '../.pages.yml'), 'utf8'));
    const leaves = config.content.flatMap(group => group.items);
    const names = new Set();
    for (const file of getMarkdownFiles('docs/pages')) {
        assert.equal(leaves.filter(leaf => path.dirname(file) === leaf.path).length, 1, file);
        assert.ok(!names.has(path.basename(file)), 'Duplicate article filename: ' + file);
        names.add(path.basename(file));
    }
    for (const leaf of leaves) {
        assert.equal(leaf.subfolders, false);
        assert.equal(leaf.operations.rename, false);
        assert.equal(leaf.operations.delete, false);
        const body = leaf.fields.find(field => field.name === 'body');
        assert.equal(body.type, 'rich-text');
        assert.equal(body.options.format, 'markdown');
        assert.equal(body.options.switcher, true);
    }
});
