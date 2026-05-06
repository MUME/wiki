# MUME Wiki — Agent & Editor Guide

This wiki is built with [VitePress](https://vitepress.dev/) and hosted at https://docs.mume.org/wiki/.

## Tech stack

- [VitePress](https://vitepress.dev/) — static site generator
- [GitHub Actions](https://github.com/features/actions) — CI/CD
- [GitHub Pages](https://pages.github.com/) — hosting

## Rules

All contributors must follow the [Wiki Rules (Content & Spoilers)](CONTRIBUTING.md) defined in the contribution guide.

## Quick start (local dev)

Use Docker — do not run `npm install` directly.

```bash
docker compose up dev        # dev server at http://localhost:5174/wiki/ (hot reload)
docker compose up --build wiki   # production build at http://localhost:4173/wiki/
```

To update packages:

```bash
docker run --rm -v "$(pwd):/app" -w /app node:22 npm install <package>
# then commit package.json and package-lock.json
```

## Adding or editing pages

All wiki pages live in [`docs/pages/`](docs/pages/). Each is a standard Markdown file with YAML frontmatter:

```yaml
---
title: My Page Title
description: One-sentence description for SEO (auto-generated if omitted).
aliases: [Page Alias, Another Alias]
autolink: false
tags:
  - Guides
  - Newbie Help
---

# My Page Title

Content here...
```

**Rules:**
- `title` is required
- `aliases` (optional) is a list of alternative names for this page. The auto-linker uses these to create links from other pages automatically.
- `autolink: false` (optional) disables the automatic creation of links within the content of this page. Useful for guides or lists where too many links make the text hard to read.
- `tags` must match existing categories — see [docs/tags.md](docs/tags.md) for valid tags
- File names use underscores for spaces (e.g. `Grey_Havens.md`)

## Linking between pages

Use relative Markdown links with the `.md` extension:

```md
[Rivendell](./Rivendell.md)
[Back to classes](../classes.md)
```

Do **not** use wikilink syntax `[text](Page "wikilink")` — the migration script converts those but the VitePress site uses standard links.

## Adding images

1. Drop the image file into [`docs/public/img/`](docs/public/img/)
2. Reference it in Markdown as an absolute path (no `docs/public` prefix):

```md
![Legolas](/img/Legolas.jpg)
```

Images are served at the site root, so `/img/filename.jpg` always works regardless of which page you're on.

## Using includes (shared content blocks)

Common navigation tables are in [`docs/includes/`](docs/includes/):

| File | Purpose |
|------|---------|
| `ClassRace.md` | Classes & Races navigation table |
| `Items.md` | Item types navigation |
| `Place.md` | Key locations navigation |
| `Delete.md` | "Marked for deletion" warning box |

Include them in a page with:

```md
<!--@include: ../includes/ClassRace.md-->
```

## Tag system

Tags appear in frontmatter and power the [Tags index](https://wiki.mume.org/tags). Use existing tags where possible:

| Tag | Used for |
|-----|----------|
| `Guides` | Strategy and how-to articles |
| `Newbie Help` | Content for new players |
| `Playable races` | Race description pages |
| `Commands` | Game command reference |
| `Spells` | Spell reference pages |
| `Skills` | Skill reference pages |
| `Equipment` | General equipment pages |
| `Locations` | Area and location pages |
| `Mobiles` | NPC/monster pages |
| `Software` | Clients, mappers, tools |

## Section index pages

The top-level section pages (`docs/classes.md`, `docs/guides.md`, etc.) are hand-maintained summaries. Update them when adding important new pages.

## PR previews

Open a pull request — GitHub Actions will build your changes. Once a maintainer approves your PR, a live preview will be automatically deployed and accessible via the "View deployment" button in the GitHub PR interface.

## AI agent notes

This file (`AGENTS.md`) is read automatically by Claude Code, OpenAI Codex, Gemini CLI, and other agents that support the `AGENTS.md` convention. Keep it up to date so agents have accurate project context.

Key facts for agents:
- All wiki content is in `docs/pages/*.md` — edit there, not in `_pages/` (legacy source)
- Images live in `docs/public/img/` and are referenced as `/img/filename`
- Dev server: `docker compose up dev` (port 5174)
- Build command: `docker compose up --build wiki` (port 4173); or `npm run docs:build` inside the container
- Basic E2E verification is done via Playwright (if configured) or by running a production build and inspecting the result.
- `ignoreDeadLinks: false` in VitePress config — dead links cause the build to fail; fix them, don't disable the check
- CI environment: Node 22, `git` required (VitePress uses it for last-modified dates); use `Dockerfile`/`docker-compose.yml` to replicate locally
