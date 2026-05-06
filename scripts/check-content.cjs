const fs = require('fs');
const path = require('path');
const { EXCLUDED_FOR_FILENAME_CHECK, ILLEGAL_CHARS_REGEX, ALLOWED_CHARS_MSG } = require('./constants.cjs');
const { Validator } = require('./utils.cjs');

const docsDir = path.resolve(__dirname, '../docs');
const validator = new Validator('Filename validation');

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
                validator.logError(relPath, `Directory name contains spaces. Use underscores instead.`);
            }

            if (ILLEGAL_CHARS_REGEX.test(entry.name)) {
                validator.logError(relPath, `Directory name contains illegal characters. ${ALLOWED_CHARS_MSG}`);
            }

            checkFilenames(fullPath);
        } else {
            const isMarkdown = entry.name.endsWith('.md');

            // Check all filenames for spaces and illegal characters
            if (/\s/.test(entry.name)) {
                validator.logError(relPath, `Filename contains spaces. Use underscores instead.`);
            }

            if (ILLEGAL_CHARS_REGEX.test(entry.name)) {
                validator.logError(relPath, `Filename contains illegal characters. ${ALLOWED_CHARS_MSG}`);
            }

            // Article Check (English articles: A, An, The)
            // Match article at start followed by space, underscore, or dash
            if (isMarkdown) {
                const basename = path.parse(entry.name).name;
                if (/^(a|an|the)[ _-]/i.test(basename)) {
                    validator.logError(relPath, `Filename starts with an indefinite or definite article: ${entry.name}`);
                }
            }
        }
    }
}

console.log('Starting filename validation...');

checkFilenames(docsDir);

validator.finish();
