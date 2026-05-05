---
title: Prompt
description: 'The prompt command allows you to customize what information is shown'
tags:
  - Help files
  - Commands
---
The **prompt** command allows you to customize what information is shown
on your prompt. The possible arguments (for mortals) are: points, light,
terrain, movement, twiddlers, all (of the previous options), or none.

- light - Display one of the following symbols according to lighting
  conditions:

\* - Sunlight, either direct or indirect ! - Artificial light ) -
Moonlight, either direct or indirect o - Darkness

- movement - Display R if you are [riding](/pages/Ride), r if you
  are being ridden, W if you are trying to [swim](./Swim.md), S if
  you are trying to [sneak](./Sneak.md), c if you are
  [climbing](./Climb.md) safely, and C if you're climbing
  no-matter-what.
- [terrain](./Terrain.md) - Display a symbol representing the
  terrain you are standing on
- [weather](./Weather.md) - Display the current weather conditions
  if you are outdoors and the sky is not clear (see "help weather");
  also display - or = in case of fog
- points - Show current [hit points](./Hit_points.md),
  [mana](./Mana.md) and [movement
  points](./Movement_points.md). Note that nothing is shown if you
  have full hit/mana/move.
- twiddlers - Show the twiddling bar (\|/-\\-...) when busy
  [casting](./Cast.md) [spells](./Spell.md) or similar.

Example: \> prompt points Your prompt will display health, mana and
stamina. HP:Wounded Mana:Burning Move:Tired\> \<---- this is the new
prompt To disable an option, re-type it.

It's very common to have all prompts active, to do this type 'prompt
all'. Note that "prompt all" will only turn on twiddlers if you are in
spam mode when you type it.

The prompt for unmounted mortals (not in combat) is at its fullest shown
as: \*%~- WSC HP:Fine Mana:Burning Move:Tired\> Immortals should consult
their own help file on prompt as well.

See Also: [Spam](./Spam.md)
