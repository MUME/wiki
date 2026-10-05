---
title: Reply
description: 'This command is used to reply to a message on a bulletin'
tags:
  - Help files
  - Commands
---
This command is used to **reply** to a message on a bulletin
[board](./Board.md).

Usage: reply \[quoted \[&lt;number&gt; \[by mail \[

&lt;title&gt;



If &lt;number&gt; is omitted (or replaced by some abbreviation of the word
'last') you reply to the last message you read.

If

&lt;title&gt;

is omitted your message will have the title of the message you are
replying to with 'Re: ' prepended to it.

If you include the word 'quoted', the messages you are replying to will
be included quoted using '\>'.

If you write 'by [mail](./Mail.md)', you will instead send a
private mail to the author. Example:

```
 reply 123 by mail             reply to message 123 by mail
 rep q b m                     reply quoted to last message by mail
```

Obviously, you must be in the same [room](./Mechanics.md#room) as the board
you wish to write on for this command to work.

See also: [Boards](./Boards.md), [Mark](./Mark.md),
[Read](./Read.md), [Tail](./Tail.md),
[Write](./Write.md)
