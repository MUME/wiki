---
title: Cast
tags:
- Commands
- Help files
- Spells
---

Cast is a [delayed](delayed "wikilink") command for issuing a magical
[spell](spell "wikilink").

**cast \[\<[effort](effort "wikilink")\>\] 'spell name' \[<target>\]**

Note that the name of the spell must be enclosed by apostrophes (').
Also, the spell name doesn't need to be typed fully -
[abbreviations](abbreviation "wikilink") are also accepted (e.g. cast
'ench' sword).

Since the quotes can be frustrating to type, most people set
[aliases](alias "wikilink") for their commonly used spells:

`> alias mm cast normal '`[`magic missile`](Magic_Missile "wikilink")`'`

Each spell takes a given amount of time to cast.

Some spells can only be cast without target, some must have a target,
and some can have it as an optional parameter.

`> cast 'armour'  (can only be cast on self)`
`> cast 'strength' (can be cast both on self and a target)`
`> cast 'strength' Elrond `
`> cast 'colour spray' orc`

If you already are in [combat](combat "wikilink"), your opponent is
automatically set as the target for offensive spells without argument.

\> cast 'lightning bolt' cavebear The lightning bolt hits the cavebear
with full impact. the cavebear:Fine\> cast quick 'lightning bolt' The
lightning bolt hits the cavebear with full impact. the cavebear:Hurt\>

## Spell Knowledge

Casting a spell uses up your [mana](mana "wikilink"). The actual
quantity used has a random component, which decreases if you
[learn](learn "wikilink") the spell very well. It can be further reduced
by wielding a [focus](focus "wikilink") staff.

Attempting a spell you don't know well, or that costs almost all your
mana, is likely to result in a [backfire](backfire "wikilink"). When you
start casting, you will be warned if the risk of backfire is higher than
normal: you will receive the message "You muster all of your
concentration..." instead of "You start to concentrate..."

The level at which a spell is cast depends on the effective class level
(mage or cleric), and the knowledge of the spell. Putting only a few
practices on a [spell](spell "wikilink") can mean casting it at a lower
effective level, with lesser effects and higher mana cost. Hard to
learn, high-level spells may require many practice sessions before you
can even attempt to use them.

The optimal number of practices spent differs between spells. For some
spells the effect scales strongly with spell knowledge. Higher knowledge
of '[breath of briskness](Breath_of_Briskness "wikilink")' for example
will grant more movement points and regeneration. For other spells the
primary effect is rather binary. An example is '[detect
magic](Detect_Magic "wikilink")'. In these cases, maxing practices is
not advisable, and it's best to just learn them enough to be able to
cast reliably with minimal mana and without backfire.

## Effort

[Casting](Cast "wikilink") also takes an optional
\<[effort](effort "wikilink")\> parameter, just before the name of the
spell. You can cast a spell more slowly but with greater effects, or
quickly but with a higher chance of backfire. The possible efforts are:

quick - casting time, + mana used, - spell power, + backfire fast normal
minimize mana usage; average casting time, power, backfire careful
thorough + casting time, + mana used, + spell power, - backfire

By default, casting without an "effort" parameter is equivalent to "cast
normal". You can however "change spellcasting" to choose a new default.

`> cha spell q`

## See also

- [Prompt](Prompt "wikilink"), [Backfire](Backfire "wikilink"), [Spell
  List](Spell "wikilink"), [Change
  Spellcasting](Change_Spellcasting "wikilink")
