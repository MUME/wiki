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
    const pages = config.content.find(entry => entry.name === 'pages');
    const choices = new Set(pages.fields.find(field => field.name === 'tags').options.values);
    const docs = path.join(__dirname, '../docs');
    for (const file of getMarkdownFiles(path.join(docs, 'pages'))) {
        for (const tag of extractMetadata(file, docs).tags) {
            assert.ok(choices.has(tag), `${file}: category ${tag} missing from Pages CMS`);
        }
    }
});
