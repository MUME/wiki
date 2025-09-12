---
title: Mudlle
---

**Mudlle** (MUD Language for Little Extensions) is the online
programming language designed especially for [MUME](MUME "wikilink").

It allows the creation of intelligent [mobiles](mobile "wikilink"),
[rooms](room "wikilink"), and objects. One example of a mudlled object
is the whetstone (if you are lucky enough to find one). Mudlle is quite
similar to the programming language Scheme (a Lisp dialect).

## Example code

This mudlle program on a mobile would cause it to repeat anything said
by a player in the same room:

module \[ \| repeat \| // Define repeat as a local variable repeat = fn
(me, who, verb, args) \[ if (verb == CMD_SAY && !is_mobile?(who)) \[ //
The one who said something not a mobile. actor = me; say (args) \]; \];
react_event (repeat, "Function that makes a mob repeat says",
event_command); \]

## External links

- Mudlle is available as a standalone program from
  <http://mume.org/Download>
- Wikipedia on [Mudlle](http://en.wikipedia.org/wiki/Mudlle)
- Wikipedia on
  [Scheme](http://en.wikipedia.org/wiki/Scheme_(programming_language))