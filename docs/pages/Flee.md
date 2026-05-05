---
title: Flee
description: 'Usage: flee on|off|yes|no'
tags:
  - Help files
  - Commands
---
Usage: **flee** \[on\|off\|yes\|no

If you are fighting, and you want to leave the fight, you may type
'flee' or 'flee on'. Then you will almost immediately attempt to flee
out of the fight. After the first attempt, successive flee attempts are
automatically scheduled until you get out of the fight somehow or type
'flee off'.

Fleeing when not engaged is immediate. The delay between flee attempts
(called also 'flee round') while in a fight is modified by your
[dexterity, your encumbrance and your
[attack](./Attack.md) skill.

When you attack someone, you can't flee from the fight for a full flee
round. However, your victim gets a small delay during which he can't
flee either.

A flee attempt will only succeed if there is a clear exit in the
[room](./room.md), and even then you may well
[panic](./Panic.md) and fail to flee. You cannot choose which way
you will flee, and fleeing will often result in a temporary feeling of
panic. When you are in a state of panic you will find that your
offensive abilities are reduced. You may also lose some [movement
points](./Movement_points.md) as you flee the fight. Though the
durations of multiple panics are not cumulative, their effects on your
ability to fight are.

The chance of fleeing successfully depends to some extent on your
physical agility, on your mental strength, and how easily the area may
be left (which is determined by the number of exits, the number of
engaged mobs, and possibly other things like terrain).

While the fleeing direction is random, there are ways to influence the
option from which the rng will pick:

- You will not flee in the direction of water (unless you have
  [swim](./Swim.md) enabled).
- You will not flee into a direction requiring [climb](./Climb.md)
  (unless you have climb with the required safe/unsafe level enabled).
- You will not flee into a no-ride room when
  [mounted](./Mount.md).

Also, there are no-flee exits, and most exits into death traps are
marked as no-flee.

If you're not receiving any attacks, you should use
[disengage](./Disengage.md), as you will then stop fighting and
may leave the battle at your own leisure.

An alternative to fleeing for [thieves](./Thief.md) is the
[escape](./Escape.md) skill which comes with some advantages and
disadvantages.

See also: [Disengage](./Disengage.md),
[Escape](./Escape.md), [Panic](./Panic.md),
[Wimpy](./Wimpy.md)
