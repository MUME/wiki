---
title: Mail
description: 'The mail system lets you send a message to one or more recipients.'
tags:
  - Help files
  - Commands
---
The **mail** system lets you send a message to one or more recipients.
Mail has a lifetime of 60 days if unread and 30 if read. Because mail is
persistent, it is used most often to communicate with someone who is not
always easy to reach.

To send or read mail you have to go to a mail box. This is a special
board where messages are addressed to one or many recipients.

To send mail, use 'write (title) @(recipient 1) @(recipient 2), etc. The
title is optional, but at least one recipient is needed.

Example:

`write Happy birthday @bilbo @frodo`

How it goes on depends on your editor. If you use the lineeditor, read
[editor](./Editor.md).

------------------------------------------------------------------------

Other commands:

| Skill | Sessions | Difficulty |
|-------|----------|------------|
| [look](./Look.md) | mail | - lists mail addressed to you |
| [tail](./Tail.md) | - | lists the 20 last mails to you |
`tail `&lt;number&gt;` - lists the `&lt;number&gt;` last mails to you`
| Guild | Sessions |
|-------|--------|
| [read](./Read.md) | `&lt;number&gt; |
```
look sent mail - lists mail you have sent
read sent `&lt;number&gt;` - reads a mail you have sent
```
| Guild | Sessions |
|-------|--------|
| [reply](./Reply.md) | `&lt;number&gt; |
**`forward`**` `&lt;number&gt;` @dain - forward a mail to Dáin`
```
forward sent `&lt;number&gt;` @dain - forward a previously sent mail to Dįin
forward sent `&lt;number&gt;` --retroactive-cc @dain - cc Dain on an existing mail
```

Messages you have already read are marked with a "+." A "+" next to a
sent mail indicates it has been read by at least one person on the
recipient list.

To see exactly who has read a mail, use "look seen mail" or "look sent
seen mail".

You can remove messages with "remove &lt;number&gt;", or "remove sent
&lt;number&gt;", and reply to a message with "reply &lt;number&gt;
&lt;optional title&gt;".

Note that the mail you create will become a single message which is
accessible to the people you provide. As it only exists as one message,
should any of the recipients delete it from their mail box, it will be
deleted from all of the others too.

See also: [Write](./Write.md), [Read](./Read.md)
 