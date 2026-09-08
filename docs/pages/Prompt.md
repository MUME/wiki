---
title: Prompt
description: 'Usage: change prompt [field] [on|off]'
tags:
  - Help files
  - Commands
---
# Prompt / Change Prompt

Usage: **change prompt** `[field]` `[on|off]`

The `change prompt` command allows you to customize what character status and environmental information is displayed in your command prompt.

To turn all prompt indicators on:
```text
change prompt all on
```

To toggle specific fields:

- **`points`**: Show current [hit points](./Hit_points.md), [mana](./Mana.md), and [movement points](./Movement_points.md) (only displayed when injured, spending mana, or tired).
- **`light`**: Displays lighting symbols (`*` sunlight, `!` artificial light, `)` moonlight, `o` darkness).
- **`movement`**: Displays posture indicators (`R` riding, `W` swimming, `S` sneaking, `H` hiding, `c` climbing).
- **`terrain`**: Displays a symbol representing the current [terrain](./Terrain.md).
- **`weather`**: Displays weather conditions and fog.
- **`alertness`**: Displays current alertness level (`A1` normal, `A2` careful, etc.).
- **`mood`**: Displays combat mood (`M1` wimpy, `M2` prudent, etc.).
- **`spell-effort`**: Displays default spellcasting effort level (`S1` quick, `S2` fast, etc.).
- **`position`**: Displays position status (`P5` resting, `P7` fighting, `P8` standing, etc.).
- **`fight`**: Displays combat status for your target and opponent.
- **`twiddlers`**: Shows an animated activity bar (`|/-\|`) when busy casting spells or performing delayed actions.

Example prompt display:
```text
*%~- CSW A1 M2 P8 S3 HP:Fine Mana:Burning Move:Tired>
```

See also: [Change](./Change.md), [Spam](./Spam.md)
