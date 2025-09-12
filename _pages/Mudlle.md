---
title: Mudlle
---

Mudlle (MUD Language for Little Extensions) is the online programming
language designed especially for MUME.

It allows the creation of intelligent mobiles, rooms and objects. One
example of a mudlled object is the whetstone (if you are lucky enough to
find one). Mudlle is quite similar to the programming language Scheme (A
Lisp dialect).

This mudlle program on a mobile, would cause it to repeat anything said
by a player in the same room:

\[

` | repeat | // Define repeat as a local variable `

` repeat = fn (me, who, verb, args) [`
`   if (verb == CMD_SAY && !is_mobile?(who))`
`     [ `
`       // The one who said something not a mobile.`
`       actor = me;`
`       say (args)`
`     ];`
` ];`

` react_event (repeat, "Function that makes a mob repeat says",`
`              event_command);`

\]

Mudlle is available as a standalone program from
[1](http://www.mume.org/Download/)