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

module.exports = {
    EXCLUDED_DIRS,
    EXCLUDED_FOR_CONTENT_SCAN,
    EXCLUDED_FOR_FILENAME_CHECK
};
