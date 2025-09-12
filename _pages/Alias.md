---
title: Alias
---

The **alias** [command](commands "wikilink") allows you to define
abbreviations for long commands frequently used, thus minimizing your
typing.

Usage:

` alias                                list aliases`
` alias `<word>`                         delete alias`
` alias `<word>` `<expansion>`             define alias`
` alias please remove all of them      (sic!) delete all aliases`

You cannot define "alias", or any of its abbreviations except "a" as an
alias.

The character "&" (ampersand) acts as a placeholder for arguments to
your alias. The rest of the line (after your alias) is inserted where &
is found in the definition.

If <expansion> does not contain any "&", any following words will be
added to the end of the command.

If <word> starts with a "%" it is a "keyword alias" which will be
expanded whenever a keyword lookup is done to find a character,
[object](object "wikilink"), or [door](door "wikilink").

Some words cannot be used as keyword aliases: words that the
[look](look "wikilink") command treats specially ("at", "around",
"north", "east", ...) and some prepositions like "in", "from", and
"with".

To inhibit keyword alias expansion, you prepend the word in a command
with "%".

Examples:

`> alias dw drink water`
`> dw               -> drink water`
`> alias ko kill &.orc`
`> ko 2             -> kill 2.orc`
`> alias rb ride behind`
`> rb gandalf       -> ride behind gandalf`
`> alias %o orc`
`> kill o           -> kill orc`
`> alias %sword longsword`
`> wield sword      -> wield longsword`
`> wield %sword     -> wield sword`

[Category:Help files](Category:Help_files "wikilink")
[Category:Commands](Category:Commands "wikilink")