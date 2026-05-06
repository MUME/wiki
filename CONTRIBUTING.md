# Contributing to MUME Wiki

Thank you for your interest in contributing to the MUME Wiki! This guide explains how you can contribute, whether you are a non-coder or a developer.

## Wiki Rules

All contributors must adhere to these rules to ensure the quality and integrity of the wiki.

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

---

## Ways to Contribute

### Non-coders (edit via GitHub)

This is the easiest way to make quick changes or add content without setting up a local development environment.

1. Browse to any page in [`docs/pages/`](docs/pages/) on GitHub.
2. Click the pencil icon (Edit this file).
3. Make your changes and click **Commit changes** → **Create a new branch and pull request**.
4. A preview build will be triggered automatically; a maintainer will review and merge.

### Coders & Advanced Contributors

If you want to run the wiki locally, update dependencies, or perform large-scale refactoring, please refer to [AGENTS.md](AGENTS.md) for technical setup instructions and coding standards.

Local development requires [Docker](https://www.docker.com/).
