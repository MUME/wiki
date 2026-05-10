const { spawnSync } = require('child_process');
const path = require('path');

/**
 * Orchestrator for wiki prebuild tasks.
 * Runs all validation and metadata generation scripts.
 */

const tasks = [
    { name: 'Metadata Generation', script: 'gather-pages.cjs' },
    { name: 'Stub Detection', script: 'check-stubs.cjs' },
    { name: 'Filename Validation', script: 'check-content.cjs' },
    { name: 'Markdown Content Validation', script: 'check-markdown.cjs' },
    { name: 'Link & Anchor Validation', script: 'check-links.js' }
];

console.log('\x1b[1m%s\x1b[0m', 'Running prebuild tasks...\n');

let failed = false;

for (const task of tasks) {
    console.log(`\x1b[36m>>> ${task.name}...\x1b[0m`);

    const result = spawnSync('node', [path.join('scripts', task.script)], {
        stdio: 'inherit',
        shell: false
    });

    if (result.status !== 0) {
        console.error(`\x1b[31m[FAIL]\x1b[0m ${task.name} script failed.\n`);

        if (result.error) {
            console.error('\x1b[31mSpawn error:\x1b[0m', result.error);
        }

        failed = true;
    }
}

if (failed) {
    console.error('\x1b[31m\x1b[1mPrebuild failed. Please fix the errors above before building.\x1b[0m');
    process.exit(1);
} else {
    console.log('\n\x1b[32m\x1b[1mAll prebuild tasks passed successfully!\x1b[0m');
    process.exit(0);
}
