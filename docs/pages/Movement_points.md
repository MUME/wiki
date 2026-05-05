---
title: Movement points
description: 'All players have a limited number of movement points. When you reach'
tags:
  - Help files
---
# Overview

All players have a limited number of **movement points**. When you reach
0 movement points you will be too tired to move.
[Resting](./Rest.md) or [sleeping](./Sleep.md) can help you
replenish your strength. Naturally, it is easier to move in a field than
in the mountains. You will find it less tiring to move long distances if
you are riding a [mount](./Mount.md).

Movement points are per default displayed in your
[prompt](./Prompt.md). As long as you are somewhat rested, nothing
will be shown. As you get more and more tired, one of the following
words is displayed (in descending order of power): Tired, Slow, Weak,
Fainting, Exhausted. The exact number of movement points can be
displayed with the [score](./Score.md) and [info](./Info.md)
commands.

The dynamics of movement point loss and regeneration define a player's
**mobility** in the game. The mobility is a combination of

- Maximum Moves (the number of movement points you have when fully
  rested)
- Move Cost (the number of movement points you lose when moving)
- Move Regeneration (the number of movement points you regain per time)

# Maxmimum Moves

Is affected by

- The Constitution stat
- The Dexterity stat
- The [Age](./Age.md)

# Move cost

Is affected by

- When mounted:
  - The [Riding](./Ride.md) skill
  - Saddle (except for elves who don't need them)
- On foot:
  - The encumbrance of the weight of your equipment and inventory vs the
    Strength stat
  - The [Wilderness](./Wilderness.md) skill
  - Various shoes and boots
  - Some special items (such as the [stout oaken
    stick](./Stout_oaken_stick.md))
  - The [Terrain](./Terrain.md) in combination with its
    [Race](./Race.md) modifiers
  - Special room modifiers (such as on the redhorn pass)
  - The [weather](./Weather.md) (such as snow)
  - [Sneaking](./Sneak.md)
- Swimming:
  - The [Swim](./Swim.md) skill

# Move Regeneration

Is affected by

- The Constitution stat
- The [Age](./Age.md)
- The stance (whether you are standing, [resting](./Rest.md), or
  [sleeping](./Sleep.md))
- The [Breath of Briskness](./Breath_of_Briskness.md) spell
- Various [Cloaks](./Cloak.md) (such as Forest Green Cloak, Russet
  Cloak, etc)
- Some [Belts](./Belt.md) (such as Gleaming Belt, Golden Belt)
- Some Herblores (such as Travelling, Walking)
- Some Poisons (such as Belladonna, Hemlock)

# Other

Certain actions performed other than movement will also drain movement
points:

- [Bash](./Bash.md), [Track](./Track.md),
  [Assist](./Assist.md), [Search](./Search.md) etc
- [Backfire](./Backfire.md) of spells
- Using any of the communication channels (you will loose 3.33% for
  [Shout](./Shout.md), 2% for [Narrate](./Narrate.md) and
  [Sing](./Sing.md), and 0.66% for [Yell](./Yell.md))

# Tips for new players

- Monitor your encumbrance. When carrying large amounts of loot, give
  them to your mount instead and use the unsaddle
  command to get it back later.
- The forest green cloak is one of
  the standard clothing items to improve move regeneration. It is
  relatively easy to get and often sold in shops around Arda.
- Monitor your movement points and rest before they get too low. If you
  are out of moves and an aggressive mob or player enters your room you
  will not be able to flee.
