---
title: Climb
permalink: /Climb/
---

## CLIMB

(Ranger Skill) \[Toggle Command\] \[Movement Command\]

Usage: climb \[<direction>\|on\|off\|safe\|always\]

The "climb" command switches on and off your ability to climb. When
"climb" is turned off, you will not enter any areas which you need to be
climbing to access by moving, fleeing or following someone. It is
possible, however, to teleport to such an area.

You can choose to "climb always" (shown as "C" in your prompt): when
faced with a climb exit, you will always attempt it, regardless of its
difficulty or the potential damage. As an alternative, you can "climb
safe" (shown as "c" in your prompt) and climb only when the climb is
easy, when falling wouldn't hurt you much, or when (due to the presence
of a tied rope) you are safe from falling.

Examples:

`   > climb safe`
`   Ok, You will climb only when it is reasonably safe to do so.`
`   c > climb always`
`   You will try to climb even under unsafe conditions.`
`   C > climb`
`   You won't climb anymore.`
`   > climb`
`   You will try to climb even under unsafe conditions.`

When attempting to negotiate a hard climb, unless you have chosen to
"climb always", MUME requires you to confirm it by using the "climb"
command. For example:

`   c > up`
`   The ascent ahead seems quite difficult to climb, while falling down might`
`   inflict some pain.`
`   If you still want to try, you must 'climb' there.`
`   `
`   c HP:Fine> climb up`
`   Top of the Cliff`

If you fail a climb attempt, MUME calculates from which height you fell,
which in turn determines the actual damage. As a consequence, if you are
very unskilled and try to climb up a cliff, you will fall from a small
height and suffer little damage. Being slightly more skilled, but not
skilled enough to make it to the top, might actually result in a longer
fall (and in higher damage).

When climbing down, the situation is the opposite: if you are unskilled,
you are more likely to fall from the top, taking maximum damage; if you
are more skilled but still fail, the fall will be shorter. On average,
climbing down is more dangerous than climbing up.

You can now check how hard a climb would be, and how much you might get
hurt by falling from close to the top, by looking at the climb exit: for
example,

`   > look up`
`   The ascent ahead seems quite difficult to climb, while falling down might`
`   inflict some pain.`

Please note that difficulty and damage messages are relative to your
current skill and hit points.

See also: [Swim](Swim "wikilink"), [Prompt](Prompt "wikilink"),
[Rope](Rope "wikilink")