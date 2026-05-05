---
title: Exit
description: 'The "exits" command shows information about the currently visible'
tags:
  - Commands
  - Help files
---
The "**exits**" command shows information about the currently visible
exits out of your [room](./room.md). Note that some exits may be
hidden and will require you to use your wits to discover them.

With "**change autoexits**" you can set whether to show (brief) exit
information each time you enter a room.

For both commands, the [direction](./Direction.md) (north, east,
...) will be surrounded by certain flags showing (a)
[door](./Door.md) information and (b)
[terrain](./Terrain.md) information.

Door information can be one of the following:

```
 [...]   - A closed 'doorname'
 (...)   - (doorname) Room Name        open door
 #...#   - (doorname) Room Name        broken door
```
` {...}   - Room Name                   `[`portal`](./Portal.md)
` /...\   - Room Name                   upward `[`climb`](./Climb.md)
` \.../   - Room Name                   downward climb`

Terrain information can be one of the following:

```
 =...=   - Room Name                   road leading that way
 -...-   - Room Name                   trail leading that way
```
` ~...~   - Room Name                   destination room requires `[`swimming`](./Swim.md)

` ^...^   - Room Name                   outdoors room (`[`Trolls`](./Troll.md)` only)`
` *...*   - Room Name                   sunlit room (`[`Orcs`](./Orc.md)` and Trolls only)`

Flags from the two categories can be combined; e.g., =#up#= is a road
leading through a broken door.

The autoexits mode will show information like this:

` Exits: =(north)=, east, [west].`
 