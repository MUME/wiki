---
title: Spam
description: 'Usage: change spam [field] [on|off]'
tags:
  - Help files
  - Commands
---
# Spam

Usage: **change spam** `[field]` `[on|off]`

Spam is a familiar problem with net-traffic and depending upon your situation in the game, can be disabling or overwhelming, especially for new players during combat or moving in groups.

To combat this, you can use `change spam` to tweak NoSpam settings. We strongly encourage everyone to use these settings to reduce text volume and keep the screen manageable.

To see your current settings:
```text
change spam
```

To enable or disable a setting:
```text
change spam <field> [on|off]
```

Where `<field>` can be one of:

- **`all`**: Enable all spam fields.
- **`none`**: Disable all spam fields.
- **`alias`**: Won't show alias substitutions.
- **`description`**: Won't show room descriptions on `look`. *(Note: Unless you are very familiar with the area, it is not advisable to hide descriptions as vital hints may be missed!)*
- **`detect`**: Won't show the auras of objects and people in a room and on worn equipment. Sanctuary is always shown due to its gameplay implications.
- **`fight`**: Missed fight messages are not sent except for the first attack. Highly recommended during fast-paced combat!
- **`group`**: While moving with a group, you will only see the leader move (the one you are following) rather than every entrance and exit of all group members.
- **`language`**: Won't show you what language other people are speaking (provided you don't know it well enough).
- **`mount`**: Won't show ridden mounts in a room (since they are already shown with their rider description).
- **`speech`**: Won't show your own speech.
- **`weapon`**: Won't show wielded weapons in a room.

::: tip Quick Tip
When you use the command **`examine`**, you will always see the full description of a room, ridden mounts, and wielded weapons regardless of your `change spam` settings.
:::

See also: [Compact](./Compact.md), [Prompt](./Prompt.md), [Rules Spam](./Rules_Spam.md)
