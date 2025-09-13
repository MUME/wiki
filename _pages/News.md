---
title: News
tags: ["Help files", "Commands"]
---
The **News** command allows you to see important information about the
game. It can be read on special news [boards](board "wikilink")
available in every [city](city "wikilink") but it can also be checked
from anywhere on [Arda](Arda "wikilink"). For reading news away from
boards use the following commands:

`Syntax: news [all|whole|next|[tail] `<number>`]`

`news `<no-argument>`          displays the news board (like 'l board')`
`news all (or whole)         displays the whole news board (like 'l w b')`
`news next                   displays the next unread message (like 'read next')`
`news `<number>`               displays the message `<number>` (like 'read `<num>`')`
`news reset                  mark all news messages as unread`
`news tail                   displays the latest news messages`
`news tail `<number>`          displays the `<number>` latest news messages`
`news catchup `<number>`       marks all news messages up to message `<number>` as`
`                            read. Omitting `<number>` marks all messages as read.`
`                            If `<number>` is negative, mark all news messages`
`                            except the last <-number> messages as read.`

It is recommended that you check news every day. Ignorance of latest
news is no grounds for a [reimburse](Rules_Reimbursement "wikilink").

Example:

`> news reset`
`> news catchup -12`
`> news`

News are archived after a RL year: these entries will not be listed in
'news' and will be displayed last by 'news next'. See
[board](board "wikilink") for more information.

You can also receive the latest news via the [RSS](RSS "wikilink") feed.

See also: [Read](Read "wikilink"), [View](View "wikilink")
 