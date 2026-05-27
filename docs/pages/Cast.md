---
title: Cast
description: 'Cast is a delayed command for issuing a magical'
---

Cast is a [delayed](./Delayed.md) command for issuing a magical
[spell](./Spell.md).

**cast \[\&lt;[effort](./Mechanics.md#effort)\&gt; 'spell name' \&lt;target&gt;**

Note that the name of the spell must be enclosed by apostrophes (').
Also, the spell name doesn't need to be typed fully -
[abbreviations are also accepted (e.g. cast
'ench' sword).

Since the quotes can be frustrating to type, most people set
[aliases](./Alias.md) for their commonly used spells:

`> alias mm cast normal '`[`magic missile`](./Magic_Missile.md)`'`

Each spell takes a given amount of time to cast.

Some spells can only be cast without target, some must have a target,
and some can have it as an optional parameter.

```
> cast 'armour'  (can only be cast on self)
> cast 'strength' (can be cast both on self and a target)
> cast 'strength' Elrond 
> cast 'colour spray' orc
```

If you already are in [combat](./Combat.md), your opponent is
automatically set as the target for offensive spells without argument.

\> cast 'lightning bolt' cavebear The lightning bolt hits the cavebear
with full impact. the cavebear:Fine\> cast quick 'lightning bolt' The
lightning bolt hits the cavebear with full impact. the cavebear:Hurt\>

## Spell Knowledge

Casting a spell uses up your [mana](./Mana.md). The actual
quantity used has a random component, which decreases if you
[learn](./Learn.md) the spell very well. It can be further reduced
by wielding a [focus](./Focus.md) staff.

Attempting a spell you don't know well, or that costs almost all your
mana, is likely to result in a [backfire](./Backfire.md). When you
start casting, you will be warned if the risk of backfire is higher than
normal: you will receive the message "You muster all of your
concentration..." instead of "You start to concentrate..."

The level at which a spell is cast depends on the effective class level
(mage or cleric), and the knowledge of the spell. Putting only a few
practices on a [spell](./Spell.md) can mean casting it at a lower
effective level, with lesser effects and higher mana cost. Hard to
learn, high-level spells may require many practice sessions before you
can even attempt to use them.

The optimal number of practices spent differs between spells. For some
spells the effect scales strongly with spell knowledge. Higher knowledge
of '[breath of briskness](./Breath_of_Briskness.md)' for example
will grant more movement points and regeneration. For other spells the
primary effect is rather binary. An example is '[detect
magic](./Detect_Magic.md)'. In these cases, maxing practices is
not advisable, and it's best to just learn them enough to be able to
cast reliably with minimal mana and without backfire.

## Effort

[Casting](./Cast.md) also takes an optional
\&lt;[effort](./Mechanics.md#effort)\&gt; parameter, just before the name of the
spell. You can cast a spell more slowly but with greater effects, or
quickly but with a higher chance of backfire. The possible efforts are:

quick - casting time, + mana used, - spell power, + backfire fast normal
minimize mana usage; average casting time, power, backfire careful
thorough + casting time, + mana used, + spell power, - backfire

By default, casting without an "effort" parameter is equivalent to "cast
normal". You can however "change spellcasting" to choose a new default.

`> cha spell q`

## See also

- [Prompt](./Prompt.md), [Backfire](./Backfire.md), [Spell
  List](./Spell.md), [Change
  Spellcasting](./Change_Spellcasting.md)
