---
title: Guide to installing MMapper on Windows
tags:
- Guides
- Software
---

## MMapper

MMapper is a graphical mud mapper especially written for the mud MUME,
combining the UI, network and storage modules from caligor's mmapper1
(mmapper.czechian.net) with the auto-mapping engine of alve's expandora
(sf.net/projects/expandora).

It functions as a proxy, which stands betwen game server and text based
client (telnet or any other mud client with some extra functionality).
This program lets you play classic text-based mud game with graphical
environment. It has some nice features like: automatic room creating,
automatic connection of rooms, terrain detection, exits detections,
opengl rendering, pseudo 3D layers, drag and drop mouse operations, and
multi platform support!

***Warning! The Screenshots are rather dated in this article!***

In order to run the mapper you need to:

**1. Download the mapper**

You can [download](https://mume.github.io/MMapper) the latest version of
mmapper from GitHub. Download the appropriate file and run it on your
computer.

**2. Run the mapper**

You may get a security warning or two: this is because the binary code
has not been signed, but it is safe to run. If you're worried, you can
check (read) the code yourself on GitHub or submit the file to
VirusTotal for virus checking by every virus checker you can imagine.

Make sure you allow the mapper to get past your local firewall. Mac
users will need to right click and hit Open twice to get past the
security nag.

<figure>
<img src="Mmapper2_2.png" title="Image:Mmapper2_2.png" />
<figcaption>Image:Mmapper2_2.png</figcaption>
</figure>

**3. Load a map**

A map is included with the package named arda.mm2. It will load
automatically, but if not, load it by clicking "File", "Open" and then
selecting the file name.

<figure>
<img src="Mmapper2_3.png" title="Image:Mmapper2_3.png" />
<figcaption>Image:Mmapper2_3.png</figcaption>
</figure>

**4. Configure your mud client**

The mapper works as a proxy, so you need to change your mud client to
connect to your own computer (or there is also a basic built-in client).
As you already know, MUME runs at mume.org on port 4242. The mapper runs
on your own computer at the same port and because of this you need to
direct your client to localhost on port 4242 (not in secure mode).
[thumb](image:Mmapper2_4jmc.png "wikilink")

<figure>
<img src="Mmapper2_4.png" title="Image:Mmapper2_4.png" />
<figcaption>Image:Mmapper2_4.png</figcaption>
</figure>

**5. Enjoy!**

Your mapper should sync to where you are! (But it's possible that it
occasionally loses sync with where you are: this is probably not a bug,
it's probably because the map or rooms have changed slightly, or it
could be because you turned off terrain in the prompt, or xml mode.)

<figure>
<img src="Mmapper2_6.png" title="Image:Mmapper2_6.png" />
<figcaption>Image:Mmapper2_6.png</figcaption>
</figure>

**6. Still having problems??**

If you are still unable to get the mapper working try to figure out if
you are even able to connect to the mapper (The mapper log will show a
connection). If not, then you probably have an issue with your firewall
and need to open up port 4242. If you are getting a connection through
the mapper but nothing is syncing, then try the following as well:
Change all your colors to the default values (change colour all
default), display the full prompt (prompt all), and/or disconnect and
reconnect your client to the mapper. Also, make sure the mapper is in
the correct mode: "play mode"

If that still fails, ask on, or search the [MUME Discord server \#newbie
channel](https://discord.gg/QNwUnfsp3r) or, failing that, ask in-game
:-)

### Links

- [MUME Discord server, then go to the \#newbie
  channel](https://discord.gg/QNwUnfsp3r)

### Historical Reference

- [Original MUME Forum
  Thread](http://mume.org/forum/viewtopic.php?f=2&t=9)
- [ElvenRunes
  Thread](http://www.elvenrunes.com/cgi-bin/logs/secure/show.m?log=b60354,43762&disc=1&sort=&omode=&all=&typ=)
