---
title: Map
description: 'If you want a map of a portion of MUME, you have'
tags:
  - Help files
  - Commands
---
If you want a **map** of a portion of [MUME](./MUME.md), you have
to draw it yourself. We want to encourage people to explore the game. A
few pre-drawn maps of trivial areas (such as [Bree](./Bree.md),
the [Shire](./Shire.md)) exist in ASCII and can be bought at a
local grocery or travellers shop.

The **map** command is used to view your nearby surrounding areas.
Several options exist in order to view specific things:

- 'map [rooms](./Mechanics.md#room)' displays your surroundings, only works
  with good visibility.
- 'map weather' displays the nearby weather, see
  [weather](./Weather.md) for details.
- 'map fog' shows fog in the nearby zones.

These maps have the following key:

```
 A  Ingrove                      T  Tharbad
 B  Bree                         W  Troll Warrens
 C  Caras Galadhon               X  Your current location
 D  Dwarven Homes                Z  Zaugurz Outpost
 E  Edoras                       
 F  Fornost                      %  Swamps
 G  The Grey Havens              *  Forest
 H  Helm's Deep                  :  Plains, Fields
 I  Isengard                     =  Bridge
 M  Moria                        ?  Zone under construction
 N  Dol Guldur                   ^  Mountains
 O  Orc Caves                    ~  Hills
 R  Rivendell
```

'map darkness' shows the influence of [Sauron](./Sauron.md) in
nearby zones.

This map has the following key:

```
 +   Good zone. Sauron's influence is actively repelled
 .   Neutral zone
 -   Evil zone. Sauron's minions are most often encountered here
 =   Zone under the influence of Sauron's Darkness (treated as
     an evil zone, until the darkness dissolves)
```

Notes:

- All map commands may be abbreviated.
- The 'global' option can be used in all map commands except 'map rooms'
  to view the entire map of [Arda](./Arda.md) for the specified
  command.

Examples:

```
> map r       Map rooms.
> map g d     Shows a global map of Sauron's influence.
> map g w     Shows a global map of the weather on Arda.
```

There are also external client applications (called 'mapper') that can
help you in creating maps. See [mappers](./Mapper.md) and [Rules
Mappers](./Rules_Mappers.md) for further details.

See also: [Map Rooms](./Map_Rooms.md),
[Weather](./Weather.md)
 