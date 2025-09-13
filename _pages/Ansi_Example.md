---
title: Ansi Example
tags: ["Help files"]
---
In MUME you can use the ANSI standard in room descriptions, keywords,
whois' and virtually any text that may be edited through the local
editing protocol. The Mume line-editor will however have problems
handling these codes since it will not support the <esc> character
that's needed for ANSI codes.

A simple explanation and some examples:

The ANSI Text style attributes is as follows "<esc>" + "\[" +
"<attribute>" + "m" Where <attribute> is a number between 0 and 9

The ANSI color codes are always used as follows (every character is in "
") "<esc>" + "\[" + "<attribute>" + "<colour>" + "m" Where <attribute>
is either 3(fg) or 4(bg) and <colour> is a value between 0 and 7.

You can also combine 2 or more styles (and/or colours) to get the wanted
colour and style by separating the numbers with ;

Example: bold(1) white text(37) on blue background(44) like this
"<esc>" + "\[" + "1" + ";" + "3" + "7" + ";" + "4" + "4" + "m"

Or you can just go balistic and make up funny little Christmas-trees
like this Norway beat Brazil 2-1 in the France -98 Soccer World Cup
__________________________________WARNING__________________________________
_________DO_NOT_USE_ANSI_TO_MESS_UP_THE_TERMINALS_OF_OTHER_PLAYERS_________
________________THIS CAN RESULT IN DEMOTION OF YOUR
CHARACTER______________

See also: [Colour](Colour "wikilink"),
[Ansicodes](Ansicodes "wikilink"), [Change](Change "wikilink"),
[Map](Map "wikilink")
