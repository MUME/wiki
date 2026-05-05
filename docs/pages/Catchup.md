---
title: Catchup
description: 'Syntax: catchup [&lt;number&gt;|&lt;name&gt;'
tags:
  - Commands
  - Help files
---
Syntax: **catchup** \[&lt;number&gt;\|&lt;name&gt;

This command is used to mark all messages on a bulletin board up to the
number given as read. It can only be used in a [room](./room.md)
with a bulletin [board](./Boards.md) (but see also
[news](./News.md)).

Mark all messages on a bulletin board up to &lt;number&gt;, or all messages
written by &lt;name&gt;, as read. If you do not specify a parameter, all the
messages are marked as read. If &lt;number&gt; is negative, mark all messages
except the last \&lt;-number\&gt; messages as read.

Example:

` > catchup 14201`

See also: [Boards](./Boards.md), [Mark](./Mark.md),
[Read](./Read.md), [Reply](./Reply.md),
[Write](./Write.md)
 