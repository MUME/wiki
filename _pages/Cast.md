---
title: Cast
permalink: /Cast/
---

cast \[<effort>\] 'spell name' \[<parameters>\]

For spell casters. If you want to throw a spell at someone or something.

Note that the name of the spell must be enclosed by apostrophes (').
Also, the spell name doesn't need to be typed fully - abbreviations are
also accepted (e.g. cast 'ench' sword).

Each spell takes a given amount of time to cast.

When already in combat, your opponent is automatically set to target if
you cast offensive spells with no argument. See the example for explicit
detail.

Example: <nowiki>g

` > cast 'lightning bolt' cavebear`
` The lightning bolt hits the cavebear with full impact.`
` the cavebear:Fine> cast quick 'lightning bolt'`

` The lightning bolt hits the cavebear with full impact.`
` the cavebear:Hurt>`

</pre>

Casting a spell uses up your mana. The actual quantity used has a random
component, which decreases if you learn the spell very well.

Attempting a spell you don't know well, or that costs almost all your
mana, is likely to result in a backfire. When you start casting, you
will be warned if the risk of backfire is higher than normal: you will
receive the message "You muster all of your concentration..." instead of
"You start to concentrate..."

- - The effects of a spell improve the higher you practice it. \*\*\*

This is true even of spells like enchant, sanctuary and heal, which used
to have a fixed effect. Putting only a few practices on a spell means
casting it at a lower effective level, with lesser effects and higher
mana cost. Hard to learn, high-level spells may require many practice
sessions before you can even attempt to use them.

Casting also takes an optional <effort> parameter, just before the name
of the spell. You can cast a spell more slowly but with greater effects,
or quickly but with a higher chance of backfire. The possible efforts
are:

<nowiki>g

`  quick       - casting time, + mana used, - spell power, + backfire`
`  fast`
`  normal      minimize mana usage; average casting time, power, backfire`
`  careful`
`  thorough    + casting time, + mana used, + spell power, - backfire`

</pre>

By default, casting without an "effort" parameter is equivalent to "cast
normal". You can however "change spellcasting" to choose a new default.

See also: [\[Prompt]([Prompt "wikilink"),
[Backfire](Backfire "wikilink"), [Spell List](Spell "wikilink"), [Change
Spellcasting](Change_Spellcasting "wikilink")

[Category:Spells](Category:Spells "wikilink") [Category:Help
files](Category:Help_files "wikilink")