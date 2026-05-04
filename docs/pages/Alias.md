---
title: Alias
description: 'The alias command allows you to define'
tags:
  - Help files
  - Commands
---
The **alias** command allows you to define
abbreviations for long commands frequently used, thus minimizing your
typing.

Usage:

```
 alias                                list aliases
 alias `&lt;word&gt;`                         delete alias
 alias `&lt;word&gt;` `&lt;expansion&gt;`             define alias
 alias please remove all of them      (sic!) delete all aliases
```

You cannot define "alias", or any of its abbreviations except "a" as an
alias.

The character "&" (ampersand) acts as a placeholder for arguments to
your alias. The rest of the line (after your alias) is inserted where &
is found in the definition.

If &lt;expansion&gt; does not contain any "&", any following words will be
added to the end of the command.

If &lt;word&gt; starts with a "%" it is a "keyword alias" which will be
expanded whenever a keyword lookup is done to find a character,
object, or [door](./Door.md).

Some words cannot be used as keyword aliases: words that the
[look](./Look.md) command treats specially ("at", "around",
"north", "east", ...) and some prepositions like "in", "from", and
"with".

To inhibit keyword alias expansion, you prepend the word in a command
with "%".

Examples:

```
> alias dw drink water
> dw               -> drink water
> alias ko kill &.orc
> ko 2             -> kill 2.orc
> alias rb ride behind
> rb gandalf       -> ride behind gandalf
> alias %o orc
> kill o           -> kill orc
> alias %sword longsword
> wield sword      -> wield longsword
> wield %sword     -> wield sword
```
