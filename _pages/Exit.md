---
title: Exit
tags: ["Commands", "Help files"]
---
The "**exits**" command shows information about the currently visible
exits out of your [room](room "wikilink"). Note that some exits may be
hidden and will require you to use your wits to discover them.

With "**change autoexits**" you can set whether to show (brief) exit
information each time you enter a room.

For both commands, the [direction](direction "wikilink") (north, east,
...) will be surrounded by certain flags showing (a)
[door](door "wikilink") information and (b)
[terrain](terrain "wikilink") information.

Door information can be one of the following:

` [...]   - A closed 'doorname'`
` (...)   - (doorname) Room Name        open door`
` #...#   - (doorname) Room Name        broken door`
` {...}   - Room Name                   `[`portal`](portal "wikilink")
` /...\   - Room Name                   upward `[`climb`](climb "wikilink")
` \.../   - Room Name                   downward climb`

Terrain information can be one of the following:

` =...=   - Room Name                   road leading that way`
` -...-   - Room Name                   trail leading that way`
` ~...~   - Room Name                   destination room requires `[`swimming`](swim "wikilink")

` ^...^   - Room Name                   outdoors room (`[`Trolls`](Troll "wikilink")` only)`
` *...*   - Room Name                   sunlit room (`[`Orcs`](Orc "wikilink")` and Trolls only)`

Flags from the two categories can be combined; e.g., =#up#= is a road
leading through a broken door.

The autoexits mode will show information like this:

` Exits: =(north)=, east, [west].`
 