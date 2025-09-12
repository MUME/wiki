---
title: Linkdrop
---

"Change linkdrop" sets an inactivity limit on a connection (in seconds).
When enough time elapses without any command having been sent, the
connection is automatically closed - just as if you had voluntarily
dropped link.

Automatic linkdrop is handled just as if you had voluntarily broken
link: it will set your wimpy level to maximum, and it will make you void
faster unless you have noquit or novoid.

If your link is shaky this feature may be worth using to ensure you get
the linkless flag quickly (due to the vagaries of the internet MUME
often cannot detect that you have lost link for several minutes
otherwise). Some players combine this feature with a client-trigger on
the timeout warning message ("WARNING: inactivity timeout").

Automatic linkdrop is off by default; you turn it on by specifying a
timeout in seconds. A timeout of zero switches auto-linkdrop off again.
Whenever you rent or MUME reboots/crashes, timeouts are switched off
again.

See also: [Idle](Idle "wikilink"), [Link](Link "wikilink"),
[Noquit](Noquit "wikilink"), [Novoid](Novoid "wikilink")

[Category:Help files](Category:Help_files "wikilink")