---
title: Room
description: 'A room is the basic unit of location in MUME — every place you can stand, fight, or rest is a room.'
tags:
  - Mechanics
---
A **room** is the basic unit of location in [MUME](./MUME.md). Every location you can occupy — a forest clearing, a city street, a cave chamber, or an inn — is a room. Rooms have a name, a description, and a set of exits connecting them to adjacent rooms.

Moving between rooms costs [movement points](./Movement_points.md) depending on terrain type and your equipment load. The [look](./Look.md) command displays the current room's description and visible exits. Some exits are hidden and must be found with [search](./Search.md).

## Room types

Rooms have a terrain type that affects movement cost and certain game mechanics:

- **Road** — cheapest movement, found in cities and along major paths.
- **Forest/Hills/Mountains** — progressively more expensive movement.
- **Inside** — buildings, caves, dungeons.
- **Water/Underwater** — requires swimming ability or waterbreathing.

## Special room flags

Some rooms have flags that affect gameplay: **dark** (requires a light source), **no magic** (spells cannot be cast), **peaceful** (combat is impossible), or **death trap** (lethal to enter without preparation).

## See also

- [Direction](./Direction.md) — The commands to move between rooms.
- [Movement points](./Movement_points.md) — The resource consumed when moving.
- [Look](./Look.md) — Examining a room's description and exits.
