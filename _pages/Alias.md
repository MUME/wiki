---
title: Alias
permalink: /Alias/
---

This command allows you to define abbreviations for long commands
frequently used, thus minimizing your typing.

Usage: ALIAS <arg1> <arg2>

` - If no arg       : the alias list is displayed.`
` - If just one arg : that alias is removed.`
` - If two args     : `<arg1>` is made an alias defined as `<arg2>`.`
` - "alias please remove all of them" (sic!) automagically `
`   removes all your aliases`
` - You cannot define "alias", or any of its abbreviations except "a",`
`   as an alias`

The character & acts as a placeholder for arguments to your alias. The
rest of the line (after your alias) is inserted where & is found in the
definition.

Example:

`> alias dw `[`Drink`](Drink "wikilink")` water            - Typing 'dw' is equivalent to 'drink water'`

`> alias bowc emote bows with a &  - For use in customising your bow`

[Category:Help files](Category:Help_files "wikilink")