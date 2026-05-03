---
title: Escape
description: 'Escape is a thief skill that'
tags:
  - Thief skills
  - Skills
---
**Escape** is a [thief](./Thief.md) [skill](./Skill.md) that
allows you to exit a fight without [fleeing](./Flee.md) if you are
the buffer. Escape offers the following advantages
and disadvantages:

- You can choose in which direction to move if you manage to escape:
  when you flee, you run in a random direction.
- You can escape even if there are no available exits. "Escape" with no
  arguments will simply interrupt the fight.
- Escape will not give you a temporary nosneak modifier (always happens
  with flee)
- Escape will not give you a temporary panic modifier (often happens
  with flee)
- Escape has a higher delay than flee. It will also not automatically
  repeat on a failed attempt, so the player need to reissue the command.

The chance of successfully escaping depends on your dexterity, on the
number of your opponents, on the difference between your and your
opponent's level and on how well you [practiced](./Practice.md)
this skill. Escaping automatically sets your [mood](./Mood.md) to
wimpy.

If nobody is attacking you, you should [disengage](./Disengage.md)
instead of escaping.

Examples:

` > escape`
` > escape north`

Knowledge of the escape skill also makes it easier for others to
[rescue](./Rescue.md) and [protect](./Protect.md) you.

<!--@include: ../includes/Skills.md-->
