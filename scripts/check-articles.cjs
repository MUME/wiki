const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');
const violations = [];

function checkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // Skip non-content directories
            if (['node_modules', 'public', '.vitepress', 'includes'].includes(entry.name)) {
                return;
            }
            checkDir(fullPath);
        } else if (entry.name.endsWith('.md')) {
            const content = fs.readFileSync(fullPath, 'utf-8');

            // Check filename (English articles: A, An, The)
            if (/^(a|an|the)_/i.test(entry.name)) {
                violations.push({
                    path: fullPath,
                    reason: `Filename starts with an article: ${entry.name}`
                });
            }

            // Check frontmatter title
            const titleMatch = content.match(/^title:\s*(.*)$/m);
            if (titleMatch) {
                const title = titleMatch[1].trim().replace(/^['"](.*)['"]$/, '$1');
                if (/^(a|an|the)\s+/i.test(title)) {
                    violations.push({
                        path: fullPath,
                        reason: `Title starts with an article: "${title}"`
                    });
                }
            }
        }
    });
}

console.log('Checking for pages starting with indefinite or definite articles...');
checkDir(docsDir);

if (violations.length > 0) {
    console.error('\x1b[31m%s\x1b[0m', 'Violations found:');
    violations.forEach(v => {
        console.error(`  ${v.path}: ${v.reason}`);
    });
    console.error('\nPages should not start with Indefinite or Definite Articles (A, An, The).');
    console.error('Please rename the file and update the title in the frontmatter.');
    process.exit(1);
} else {
    console.log('\x1b[32m%s\x1b[0m', 'No article violations found.');
    process.exit(0);
}
