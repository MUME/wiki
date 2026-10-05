---
title: Wimpy
description: 'Usage: change wimpy &lt;value&gt;'
tags:
  - Help files
---
Usage: [change](./Change.md) **wimpy** &lt;value&gt;

When you are in a fight and your [hit points](./Hit_points.md) go
below your wimpy value, you will almost immediately attempt to
[flee](./Flee.md) out of the fight. Then, successive flee attempts
are automatically scheduled until you get out of the fight somehow, or
reset the wimpy value.

You can flee due to autowimpy while [bashed](./Bash.md) or
otherwise stunned, but in this case on every attempt you get a saving
throw due to your condition. The more damaged you are, the more chances
you have to get an 'adrenaline rush' and thus try to flee.

Use 'change wimpy' without argument to avoid fleeing due to autowimpy.

You can't flee at all if your [mood](./Mood.md) is berserk.
