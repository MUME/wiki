---
title: Contributing
description: Help improve the MUME Wiki using Pages CMS or GitHub.
autolink: false
tags:
  - Guides
---

# Contributing to the MUME Wiki

You can fix mistakes, expand a stub, or share what you have learned in MUME using a browser. No development tools are needed.

## What you may share

Share knowledge learned as a mortal character. Do not add information learned as an Ainur. Hide spoilers that would remove the joy of discovery, including hidden door names, identify output, details for obtaining legendary equipment, and detailed maps of new, remote, or contested areas. Detailed city maps are fine.

Put sensitive information inside this block in the page body:

```md
::: details Spoiler
Secret information here...
:::
```

## Trusted members: edit with Pages CMS

Trusted members can edit and publish directly. Ask a wiki maintainer for a Pages CMS invitation if you have not received one. You do not need a GitHub account or repository commit access when invited by email. If you are not a trusted editor, use the GitHub pull request option below.

Accept your invitation using the link in the email, then [open Pages CMS](https://app.pagescms.org/) using the invited email address. If you already have authorized GitHub access, you can sign in with GitHub instead. A GitHub login alone does not give you permission to edit the wiki.

1. Open the **MUME/wiki** repository and select **`main`**. You do not need to create a branch.
2. Choose **Wiki pages**, search for a page, and open it. To add a page, create an entry and use a filename such as `Grey_Havens.md`, with underscores for spaces and no leading `A`, `An`, or `The`. Keep existing filenames when editing.
3. Fill in the title, an optional one-sentence description, and relevant categories. Aliases are other names readers might use for the page. Automatic linking is normally enabled; disable it for pages where links become distracting.
4. Edit the **Page content (Markdown)** field. Ordinary paragraphs can be typed directly. Use `## Heading` for sections and `[Rivendell](./Rivendell.md)` for links to other wiki pages. Keep existing spoiler blocks, `<!--@include: ...-->` lines, HTML, and components intact.
5. Upload images through **Images** and insert them as `![Gandalf](/img/Main_Gandalf.png)` (replace the example path with your uploaded image) in the body.
6. Check your changes, including spoiler blocks, then save. **Saving publishes your edit through the automatic site build**: it commits directly to `main`, and the live wiki updates after deployment succeeds. No pull request or maintainer approval is needed for each edit.
7. Once deployment completes, open the page on the live wiki and check the result. If you spot a mistake, correct it in Pages CMS and save again. If saving is denied, the page does not update, or you need to undo a change, contact a maintainer; they can check the build and restore an earlier version from Git history.

The body editor uses plain Markdown so existing spoilers and special wiki formatting remain intact. For a new page, start the body with `# My Page Title`, matching the title field.

## Other contributors: submit changes with GitHub

Use **Edit this page on GitHub** at the bottom of a wiki page. Sign in to GitHub, make your changes, and submit them on a new branch as a pull request. GitHub will offer to fork the repository if you do not have write access.

For setup details and the full contribution policy, see the [contribution guidelines](https://github.com/MUME/wiki/blob/main/CONTRIBUTING.md).
