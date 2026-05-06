const fs = require('fs');
const path = require('path');
const { EXCLUDED_FOR_FILENAME_CHECK } = require('./constants.cjs');

const docsDir = path.resolve(__dirname, '../docs');

let errors = 0;

function logError(file, message) {
    console.error(`\x1b[31m[ERROR]\x1b[0m ${file}: ${message}`);
    errors++;
}

/**
 * Check filenames for spaces or illegal characters
 */
function checkFilenames(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = path.relative(docsDir, fullPath);

        if (entry.isDirectory()) {
            if (EXCLUDED_FOR_FILENAME_CHECK.includes(entry.name)) {
                continue;
            }

            // Check directory names for spaces and illegal characters
            if (/\s/.test(entry.name)) {
                logError(relPath, `Directory name contains spaces. Use underscores instead.`);
            }

            if (/[^a-zA-Z0-9\u00C0-\u017F\u0400-\u04FF_\-.\',()&!+]/.test(entry.name)) {
                logError(relPath, `Directory name contains illegal characters. Use only alphanumeric, underscores, hyphens, or standard punctuation (',', "'", '(', ')', '&', '!', '+').`);
            }

            checkFilenames(fullPath);
        } else if (entry.name.endsWith('.md')) {
            // Check for spaces
            if (/\s/.test(entry.name)) {
                logError(relPath, `Filename contains spaces. Use underscores instead.`);
            }

            // Allowed: alphanumeric (including unicode), _, -, ., ', ,, (, ), &, !, +
            // We allow these because they are prevalent in existing game content titles.
            // Using a range that covers most accented characters and non-ASCII letters.
            if (/[^a-zA-Z0-9\u00C0-\u017F\u0400-\u04FF_\-.\',()&!+]/.test(entry.name)) {
                logError(relPath, `Filename contains illegal characters. Use only alphanumeric, underscores, hyphens, or standard punctuation (',', "'", '(', ')', '&', '!', '+').`);
            }

            // Article Check (English articles: A, An, The)
            // Match article at start followed by space, underscore, or dash
            const basename = entry.name.slice(0, -3); // strip ".md"
            if (/^(a|an|the)[ _-]/i.test(basename)) {
                logError(relPath, `Filename starts with an indefinite or definite article: ${entry.name}`);
            }
        }
    }
}

console.log('Starting filename validation...');

checkFilenames(docsDir);

if (errors > 0) {
    console.error(`\n\x1b[31mValidation failed with ${errors} error(s).\x1b[0m`);
    process.exit(1);
} else {
    console.log('\n\x1b[32mValidation passed!\x1b[0m');
    process.exit(0);
}
