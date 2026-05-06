# MUME Wiki

Community wiki and guide to [Multi-Users in Middle-earth](https://mume.org/) — a free text-based multiplayer RPG set in Tolkien's world.

## Contributing

### Non-coders (edit via GitHub)

1. Browse to any page in [`docs/pages/`](docs/pages/) on GitHub
2. Click the pencil icon (Edit this file)
3. Make your changes and click **Commit changes** → **Create a new branch and pull request**
4. A preview build will be triggered automatically; a maintainer will review and merge

### Coders (local development)

> **Use Docker.** All development should be done via Docker to keep the environment consistent with CI.

Dev server with live reload:

```bash
docker compose up dev
```

The site will be available at [http://localhost:5174/wiki/](http://localhost:5174/wiki/).

Production build (mirrors CI exactly):

```bash
docker compose up --build wiki
```

The site will be available at [http://localhost:4173/wiki/](http://localhost:4173/wiki/).

#### Updating dependencies

Always update packages inside the container so the lock file stays CI-compatible:

```bash
docker run --rm -v "$(pwd):/app" -w /app node:22 npm install <package>
git add package.json package-lock.json
git commit -m "chore: update dependencies"
```

## Tech stack

- [VitePress](https://vitepress.dev/) — static site generator
- [GitHub Actions](https://github.com/features/actions) — CI/CD
- [GitHub Pages](https://pages.github.com/) — hosting

## Wiki Rules

### Content Rules

This wiki is a collection of mortal knowledge. If you learned about something as a mortal character and want to share it you may add it as long as you follow the spoiler rules. You may **NOT** add any information that you learned as an Ainur.

### Spoiler Rules

You must always hide spoilers that will remove the joy of discovery for players. This can be done by wrapping sensitive information in a `::: details Spoiler` tag. Examples of sensitive information are:

- Hidden door names
- Output from the `identify` spell
- Detailed information about how and where to get legendary equipment
- Detailed maps of new/remote/contested areas (detailed maps of cities are fine)

**Example:**

```md
::: details Spoiler
Secret information here...
:::
```
