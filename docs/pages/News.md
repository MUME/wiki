---
title: News
description: 'The News command allows you to see important information about the'
tags:
  - Help files
  - Commands
---
The **News** command allows you to see important information about the
game. It can be read on special news [boards](./Board.md)
available in every city but it can also be checked
from anywhere on [Arda](./Arda.md). For reading news away from
boards use the following commands:

`Syntax: news [all|whole|next|[tail] `&lt;number&gt;`]`

```
news `&lt;no-argument&gt;`          displays the news board (like 'l board')
news all (or whole)         displays the whole news board (like 'l w b')
news next                   displays the next unread message (like 'read next')
news `&lt;number&gt;`               displays the message `&lt;number&gt;` (like 'read `&lt;num&gt;`')
news reset                  mark all news messages as unread
news tail                   displays the latest news messages
news tail `&lt;number&gt;`          displays the `&lt;number&gt;` latest news messages
news catchup `&lt;number&gt;`       marks all news messages up to message `&lt;number&gt;` as
                            read. Omitting `&lt;number&gt;` marks all messages as read.
                            If `&lt;number&gt;` is negative, mark all news messages
                            except the last &lt;-number&gt; messages as read.
```

It is recommended that you check news every day. Ignorance of latest
news is no grounds for a [reimburse](./Rules_Reimbursement.md).

Example:

```
> news reset
> news catchup -12
> news
```

News are archived after a RL year: these entries will not be listed in
'news' and will be displayed last by 'news next'. See
[board](./Board.md) for more information.

You can also receive the latest news via the RSS feed.

See also: [Read](./Read.md), [View](./View.md)
 