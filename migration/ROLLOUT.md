# Topic migration rollout

Status: Full migration requested by the user before the live pilot gate. All topics moved locally; live CMS and deployment checks pending.

`baseline.json` retains the original build title, description, anchors and sitemap inventory and baseline Git commit.

`articles.json` captures every original article's source, planned destination, topic, unchanged URL, byte size, frontmatter and normalized SHA-256. Include paths are the only normalization. Oversized pages are flagged. The manifest is a migration baseline, not a mutable content lock: run the content hash check explicitly at migration time; normal editor changes remain allowed. Duplicate filenames are rejected in every build.

## Required live pilot evidence

- Pilot commit and normal deployment URL/result
- Trusted editor and date
- Fresh uncached Software/C-Z collection load and reload evidence
- Saved edit commit on main and live article verification
- New-page creation commit, physical source and canonical public route
- Aliases, tags, images, spoilers, includes, search and GitHub edit links

Do not mark these passed from a local build. Inspect every one of the 54 leaf collections (including an empty Classes collection) live. Preserve the shared schema and nonrecursive leaf collections. Revert a failed batch's commit.

The reader-facing Contributing article is an intentional content update for topic collection selection and WYSIWYG/Source mode. Its permitted migration-time hash is recorded in `documentation-changes.json`; the original hash remains in the baseline manifest.

## Local verification

Docker builds and browser checks passed at `/wiki/`, `/`, and `/wiki/pr-99/`. All original article URLs, heading IDs, titles, descriptions, tags and aliases matched the baseline; production canonical URLs and sitemap entries matched the unchanged route inventory. Preview output had no sitemap and included `noindex, nofollow`. Browser checks exercised search, topic navigation, physical GitHub edit/create paths and legacy MediaWiki redirection. Live CMS loading/saving, rich-text round trips and deployment are still unverified.

The full-build CPU profile identified repeated autolinker work and per-file Git child processes. The autolinker now precomputes URL-to-term lookup lists and lowercases each text node once. With the same Node CPU-profiler settings in the same Docker container, one build comparison measured 156.04 seconds before and 78.69 seconds after (49.6% faster). This is a single measured pair, not a guaranteed runtime. All 1,149 unchanged article bodies rendered identically; Contributing is the separately recorded documentation update. The final production integrity, artifact and browser checks passed.
