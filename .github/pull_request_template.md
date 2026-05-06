## Description
<!-- Provide a brief summary of the changes and what they solve. -->

## Related Issue
<!-- If applicable, link to the issue this PR addresses (e.g., Closes #123). -->

## Type of Change
<!-- Please check the options that are relevant. -->
- [ ] New content (new page)
- [ ] Content update (editing existing page)
- [ ] Bug fix (fixing a link, typo, etc.)
- [ ] Technical change (VitePress config, scripts, etc.)
- [ ] Other:

## Checklist
<!-- Please review and check all items that apply to your PR. -->

### Content & Formatting
- [ ] **Title**: Page has a `title` in YAML frontmatter.
- [ ] **Filenames**: New files use underscores for spaces (e.g., `Grey_Havens.md`).
- [ ] **Links**: Used relative Markdown links (e.g., `[Rivendell](./Rivendell.md)`) and verified no dead links. No wikilink syntax used.
- [ ] **Frontmatter**: (Optional) Added `aliases` and valid `tags` if applicable (refer to `docs/tags.md`).
- [ ] **Includes**: Shared content blocks used `<!--@include: ...-->` correctly on their own lines.
- [ ] **Images**: Reference images via `/img/filename.jpg` (stored in `docs/public/img/`).

### Verification
- [ ] **Local Build**: (For coders) Ran `docker compose up --build wiki` (or `npm run docs:build`) and verified changes locally.
- [ ] **Index Pages**: Updated top-level index pages (e.g., `docs/guides.md`, `docs/classes.md`) if a major new page was added.
- [ ] **Preview**: I will check the PR preview build once it's available.

---
<!-- If a section above is not necessary for this PR, you can leave it blank or mention it in the description. -->
