---
title: Mail
tags: ["Help files", "Commands"]
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
[editor](editor "wikilink").

------------------------------------------------------------------------

Other commands:

[`look`](look "wikilink")` mail - lists mail addressed to you`
[`tail`](tail "wikilink")` - lists the 20 last mails to you`
`tail `<number>` - lists the `<number>` last mails to you`
[`read`](read "wikilink")` `<number>` - reads a specific mail`
`look sent mail - lists mail you have sent`
`read sent `<number>` - reads a mail you have sent`
[`reply`](reply "wikilink")` `<number>` - reply to a mail`
**`forward`**` `<number>` @dain - forward a mail to Dáin`
`forward sent `<number>` @dain - forward a previously sent mail to Dįin`
`forward sent `<number>` --retroactive-cc @dain - cc Dain on an existing mail`

Messages you have already read are marked with a "+." A "+" next to a
sent mail indicates it has been read by at least one person on the
recipient list.

To see exactly who has read a mail, use "look seen mail" or "look sent
seen mail".

You can remove messages with "remove <number>", or "remove sent
<number>", and reply to a message with "reply <number>
<optional title>".

Note that the mail you create will become a single message which is
accessible to the people you provide. As it only exists as one message,
should any of the recipients delete it from their mail box, it will be
deleted from all of the others too.

See also: [Write](Write "wikilink"), [Read](Read "wikilink")
 