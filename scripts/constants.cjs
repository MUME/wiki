/**
 * Common constants for content validation scripts.
 *
 * NOTE:
 * - EXCLUDED_FOR_CONTENT_SCAN is used when scanning markdown/content.
 * - EXCLUDED_FOR_FILENAME_CHECK is used when validating filenames.
 * - EXCLUDED_DIRS is kept as a backwards-compatible alias for content scans.
 */

const EXCLUDED_FOR_CONTENT_SCAN = ['.vitepress', 'node_modules', 'public', 'includes'];
const EXCLUDED_FOR_FILENAME_CHECK = ['.vitepress', 'node_modules'];

// Backwards-compatible alias: historically used for content scanning.
const EXCLUDED_DIRS = EXCLUDED_FOR_CONTENT_SCAN;

// Allowed: alphanumeric (including unicode), _, -, ., ', ,, (, ), &, !, +
// We allow these because they are prevalent in existing game content titles.
// Using a range that covers most accented characters and non-ASCII letters.
const ALLOWED_CHARS_CLASS = "a-zA-Z0-9\\u00C0-\\u017F\\u0400-\\u04FF_\\-.\',()&!+";
const ILLEGAL_CHARS_REGEX = new RegExp(`[^${ALLOWED_CHARS_CLASS}]`);
const ALLOWED_CHARS_MSG = "Use only alphanumeric, underscores, hyphens, periods, or standard punctuation (',', \"'\", '(', ')', '&', '!', '+').";

module.exports = {
    EXCLUDED_DIRS,
    EXCLUDED_FOR_CONTENT_SCAN,
    EXCLUDED_FOR_FILENAME_CHECK,
    ILLEGAL_CHARS_REGEX,
    ALLOWED_CHARS_MSG
};
