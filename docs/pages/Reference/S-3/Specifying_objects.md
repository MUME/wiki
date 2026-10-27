---
title: Specifying objects
description: 'Syntax and rules for specifying items or characters using keywords, prefixes, counts, and age restrictions in MUME.'
tags:
  - Help files
  - Commands
  - Mechanics
last_updated: 2026-10-27
external_resources:
  - https://mume.org/help/specifying_objects
  - https://mume.org/news/game/2800.php
---
In order to specify which particular [object](./Item.md) or [character](./Mobile.md) you want to act on in [MUME](./MUME.md), you use its keyword together with an (optional) list of prefixes.

```
get sword
```
Picks up the first sword in the room.

```
get 2.sword
```
Picks up the second sword in the room.

"First" and "second" here refer strictly to the order you see items in when you type `examine`.

Some [commands](/topics/commands) allow you to interact with an [object](./Item.md) that is either worn (in your [equipment](../equipment.md)), in your [inventory](./Inventory.md), or in your room. In that case, all three locations are searched in that exact order (equipment, then inventory, then room).

Note that the `look` command may group identical items on a single line (e.g., *There are two swords here.*) or display them in a different arrangement. For reliable ordinal selection (`1.sword`, `2.sword`), always use the item sequence listed by `examine`.

## Keywords

Objects and characters can have several keywords. For most they should be self-explanatory. Both nouns and adjectives are used, so a *red shirt* will have keywords `red` and `shirt`.

### Matching multiple keywords

By specifying several words separated by hyphens (`-`), an object or character will match if all words match.

For example, `shining-shirt` will match any object that has keywords `shining` and `shirt`. Similarly, `guard-uruk` will match any character ([NPC](./Mobile.md)) with keywords `guard` and `uruk`.

## Ordered selection

The following command will put the second sword that you have in your [inventory](./Inventory.md) into the third sack that you either have in your equipment, in your inventory, or in your room:

```
put 2.sword 3.sack
```

Note that the first argument, `sword`, can only be in your inventory, while the second one, `sack`, can be in any of the three locations.

You can also count "from the back" using negative numbers:

```
kill -1.orc
```
This will attack the last orc in "look order". `-2` would target the second to last, and so on. `last` can be used as an alias for `-1`:

```
drop last.sack
```

## Location restrictions

For objects, you can also use one of the `equipment.` (`eq.`), `inventory.` (`inv.`), and `room.` prefixes (they can be abbreviated!) to narrow the search:

```
put 2.sword inv.sack
```
Puts the 2nd sword into the 1st sack in your inventory.

```
put 2.sword room.2.sack
```
Puts the 2nd sword into the 2nd sack in the room.

## Matching many things

Some commands let you operate on several objects at once. Use `all` or `all.<keyword>` to do so:

```
get all
```
Picks up everything from the room.

```
put all.bread sack
```
Puts all bread you have into the sack.

## Special age restriction (`oldest.` or `o.`)

For objects that decay due to age, you can use the `oldest.` prefix (or abbreviations like `o.`) to target the object that will decay the soonest:

```
eat oldest.bread
eat o.bread
```

This will only ever match objects that actually decay due to age. It will never match an object that does not decay, nor will it work for special items such as artefacts.

## Special keywords and labels

- **`me`**, **`self`**, and **`myself`** are permanent labels for the character you are playing (e.g. `look me`).
- **`mount`** is a permanent label for any mount you are riding or leading (e.g. `saddle mount`).

See [Label](./Label.md) for details on how to create temporary labels for other characters.

## See also

- [Item](./Item.md)
- [Inventory](./Inventory.md)
- [Alias](./Alias.md)
- [Label](./Label.md)
