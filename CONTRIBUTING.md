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

### Trusted members: edit and publish with Pages CMS

[Pages CMS](https://app.pagescms.org/) provides fields for page titles, descriptions, aliases, and categories, plus a Markdown body editor and an image library. No local setup is needed. Read the [browser editing guide](https://docs.mume.org/wiki/pages/Contributing) for instructions.

A maintainer must connect the repository first (see below). Editors can sign in with GitHub or accept a Pages CMS email invitation from a maintainer. If you do not have editor access, use the GitHub pull request route below.

Trusted members edit directly on **`main`**. Accept your invitation, open the wiki repository in Pages CMS, select `main`, and choose **Wiki pages** to edit an existing page or create one. Use **Images** to upload pictures. Check your content and spoilers before saving.

**Saving commits your changes directly to `main` and triggers the site build and deployment.** Your edit appears on the live wiki after deployment succeeds; there is no branch preparation, pull request, or per-edit maintainer approval. If saving is denied or the site does not update after deployment, contact a maintainer. See the [browser editing guide](https://docs.mume.org/wiki/pages/Contributing) for detailed steps.

### Other contributors: submit a GitHub pull request

If you have not been invited as a trusted editor, submit your changes for review through GitHub. No local development environment is needed.

1. Browse to any page in [`docs/pages/`](docs/pages/) on GitHub.
2. Click the pencil icon (Edit this file).
3. Make your changes and click **Commit changes** → **Create a new branch and pull request**.
4. CI will build the pull request. A live preview is deployed after maintainer approval; a maintainer will review and merge.

### Coders & Advanced Contributors

If you want to run the wiki locally, update dependencies, or perform large-scale refactoring, please refer to [AGENTS.md](AGENTS.md) for technical setup instructions and coding standards.

Local development requires [Docker](https://www.docker.com/).

## Maintainer setup for Pages CMS

1. Merge [`.pages.yml`](.pages.yml) so Pages CMS can discover the wiki schema.
2. Sign in at [Pages CMS](https://app.pagescms.org/) and install its GitHub App for this repository, following the [official quick start](https://pagescms.org/docs/quick-start/). Organization installation may require an owner.
3. Configure GitHub branch protection/rulesets so the Pages CMS GitHub App can commit directly to `main`. If pull requests or pre-merge checks are required, grant the installed app an appropriate bypass for direct publishing. Keep the normal review requirements for other contributors. `.pages.yml` does not grant access or change GitHub branch rules.
4. Open this repository on `main` in Pages CMS and invite trusted members through its collaborator interface. [Email collaborators](https://pagescms.org/docs/configuration/collaborators/) do not need GitHub accounts or repository write access: their edits use the installed GitHub App's access. Invitations grant direct publishing access, so invite only members trusted to follow the wiki rules. A GitHub login alone does not grant editing access.
5. Verify onboarding with a trusted editor: accept the invitation, open the repository on `main`, save a small valid edit, and confirm that the **Deploy to GitHub Pages** workflow succeeds and the live wiki updates. No PR is needed. Test aliases, images, spoilers, and includes before wider rollout.
6. Use GitHub history to inspect changes and revert mistakes, and remove the CMS collaborator invitation when someone should no longer publish. If that person also has GitHub repository access, manage that separately.

The existing deployment workflow runs on pushes to `main`. A saved edit remains in Git history even if validation or deployment fails; fix or revert the offending change and let deployment run again. Editors can ask a maintainer for help with failed builds or rollbacks.

The schema edits only `docs/pages/` and uploads images to `docs/public/img/`, writing `/img/…` URLs. Page bodies use plain text to preserve VitePress containers, includes, HTML, and Vue components; a visual rich-text round trip has not been validated for these constructs. Unknown frontmatter keys are preserved with `settings.content.merge`.

Page renaming and deletion are disabled in the CMS to avoid breaking links. New filenames must use the wiki convention (e.g. `Grey_Havens.md`); replace the suggested filename if needed, and omit leading `A`, `An`, or `The`. Section indexes and shared includes remain maintained through GitHub. When introducing a category, update the category choices in `.pages.yml` alongside the content.
