---
title: "Guide to installing MMapper on Windows"
---

mmapper2 mmapper2 is a graphical mud mapper especially written for the
mud MUME, combining the UI, network and storage modules from caligor's
mmapper1 (mmapper.czechian.net) with the auto-mapping engine of alve's
expandora (sf.net/projects/expandora).

It functions as a proxy, which stands betwen game server and text based
client (telnet or any other mud client with some extra functionality).
This program lets you play classic text-based mud game with graphical
environment. It has some nice features like: automatic room creating,
automatic connection of rooms, terrain detection, exits detections,
opengl rendering, pseudo 3D layers, drag and drop mouse operations, and
multi platform support!

`   * Edit post`
`   * Delete post`
`   * Report this post`
`   * Information`
`   * Reply with quote`

\[HowTo\] Install mmapper2 on Windows (Mapper Guide)

Postby Jahara on February 23rd, 2008, 6:26 pm mmapper2 mmapper2 is a
graphical mud mapper especially written for the mud MUME, combining the
UI, network and storage modules from caligor's mmapper1
(mmapper.czechian.net) with the auto-mapping engine of alve's expandora
(sf.net/projects/expandora).

It functions as a proxy, which stands betwen game server and text based
client (telnet or any other mud client with some extra functionality).
This program lets you play classic text-based mud game with graphical
environment. It has some nice features like: automatic room creating,
automatic connection of rooms, terrain detection, exits detections,
opengl rendering, pseudo 3D layers, drag and drop mouse operations, and
multi platform support!

Image

In order to run the mapper you need to:

1\. Download the mapper You can download the latest version of mmapper2
from sourceforce. Download the zip file and extract it to some directory
on your computer.

Image

2\. Run the mapper Make sure you allow the mapper to get past your local
firewall.

Image

3\. Load a map A map is included with the package named arda.mm2. Load
it by clicking "File", "Open" and then selecting the file name.

Image

3\. Configure your mud client The mapper works as a proxy, so you need
to change your mud client to connect to your own computer. As you
already know, MUME runs at mume.pvv.org on port 4242. The mapper runs on
your own computer at the same port and because of this you need to
direct your client to localhost on port 4242. (JMC directions here)

Image

4\. Configure MUME Once you log into MUME, disable brief mode, enable
spam mode, and toggle XML mode for your character:

Code: Select all

`   brief off`
`   spam on`
`   change xml`

Image

5\. Enjoy! Your mapper should sync to where you are!

Image

6\. Still having problems?? If you are still unable to get the mapper
working try to figure out if you are even able to connect to the mapper
(The mapper log will show a connection). If not, then you probably have
an issue with your firewall and need to open up port 4242. If you are
getting a connection through the mapper but nothing is syncing, then try
the following as well: Change all your colors to the default values
(change colour all default), display the full prompt (prompt all),
and/or disconnect and reconnect your client to the mapper. Also, make
sure the mapper is in the correct mode: "play mode"

If that still fails check the elvenrunes thread, post here, or contact
me in-game :-)