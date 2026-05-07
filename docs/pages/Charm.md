---
title: Charm
description: 'Charm is a level 14 mage'
tags:
  - Spells
  - Mage spells
---
| Property | Value |
| :--- | :--- |
| Syntax | `cast 'charm' <victim>` |
| Type | Offensive, mental |
| Accumulative | No |
| Duration | Yes |
| Casting | Extremely long |
| Position | Standing |
| Level | 14 |
| Class | Magic User |
| Min. Mana | 20 |
| Example | `> cast 'charm' rabbit` |

**Charm** is a [level](./Level.md) 14 [mage](./Mage.md) [spell](./Spell.md). When cast upon a [creature](./Mobile.md) it will try to gain mental control over it. If successful the caster will be able to command the charmed creature (also called charmie) for some time. To command the charmie the charmer also needs to have some experience in the [command](./Command.md) skill which is taught by the [ranger](./Ranger.md) guilds.

The following is an example for issuing a command:

`> order followers groan`

The more active charmies a caster already has, the harder it becomes to successfully charm another one. Thus, you will hardly see casters with more than two charmies. [Sleeping](./Sleep.md) creatures are more susceptible to charm. For difficult charmies it can therefore be easier to use the [Sleep](./Sleep_Spell.md) spell first. Charm will eventually wear off (after roughly one rl hour) and to refresh the charm, it is best to first order the charmie to sleep.

Charmies still maintain their old aggressiveness against all other players except the caster. Charmies (or the vast majority of mobs) will target the first person in a room, so if the charmer is that first person, charmies won't hit anyone without orders. If, however, another player is the first person, an aggressive charmie will automatically attack. This mechanic makes using aggresive charmies with other grouped players hard to manage. Only few charmies exist that are both powerful and non aggressive. Charmies are thus primarily used as buffers, [bashers](./Bash.md), or [parry](./Parry.md) splitters for solo hunting.

Guards in most cities will attack charmed mobiles.

In PK charmies do not see an enemy player under their name but not under the keyword like orc or *orc* so you either need to use k \<name\> or just hit the target first and order the charmie to assist.

## Guilds

| Guild | Sessions |
|-------|--------|
| [Forlond Mage Guild](./Forlond_Mage_Guild.md) | 3 |
| [Lórien Mage Guild](./Lórien_Mage_Guild.md) | 12 |
| [Tharbad Mage Guild](./Tharbad_Mage_Guild.md) | 16 |

## See also

- [Order](./Order.md), [Call Familiar](./Call_Familiar.md),
  [Command](./Command.md)

<!--@include: ../includes/Spells.md-->
