---
title: Label
tags: ["Commands", "Help files"]
---
With the **label** command, you can attach labels to characters or
[mobs](mob "wikilink"). These labels can be used as keywords to identify
them (when they are in the [room](room "wikilink")), and labels show
within parentheses after the character's name when you see it.

E.g., if you see \*an [Orc](Orc "wikilink")\*, you can

` > label orc target`

The orc will then show as:

` *an Orc* (target) is standing here.`

To list all labels, use 'label' without any arguments.

` > label remove target                removes the target label`
` > label please remove all of them    (sic!) removes all defined labels`

When you are fighting someone

` > label caster                       label your opponent as 'caster'`

The words me, self, and myself are permanent labels for the character
you're playing.

Labels can be a maximum of 16 characters and may only contain letters.
Some words cannot be used as labels; e.g., words that the
[look](look "wikilink") command treats specially ("at", "around",
"north", "east", ...) and some prepositions like "in", "from", and
"with".
 