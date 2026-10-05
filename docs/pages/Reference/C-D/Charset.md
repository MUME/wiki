---
title: Charset
description: 'MUME has two modes of displaying information to the players. Either it'
tags:
  - Help files
---
MUME has different modes of displaying information to the players, using one of three character sets: 7-bit standard ASCII, 8-bit Latin-1 (ISO 8859-1), or UTF-8.

Your current character encoding is changed using one of:
- `change encoding ascii`
- `change encoding latin-1`
- `change encoding utf-8`

If your terminal doesn't support Latin-1 or UTF-8, use `change encoding ascii` to display unaccented 7-bit characters (or closest match available).

Using "change charset latin-1", MUME will send you accented characters.

On modern Unix installations, the default is to use the UTF-8 character
encoding. To run an application in latin-1 mode, you can use the "luit"
filter: shell\$ luit -encoding ISO-8859-1 powwow \&lt;arguments to powwow\&gt;
On some installations, sometimes the command above won't work due to a
race condition. In this case try the following: shell\$ luit -encoding
ISO-8859-1 sh -c "sleep 1;powwow \&lt;args\&gt;" In order to save people from
having to type all the obscure characters to identify objects, players
and such, all keyword comparison is done on unaccented letters.

If your keyboard lacks the keys to type accented letters, there are
various ways to do this. If you are running Windows, you can either use
an "International" character set which lets you type "'A" for an
accented A. You can also install the very useful tool AllChars
(http://allchars.zwolnet.com/) which lets a computer running Windows
emulate the function of a "compose key", which can be found on some
keyboards.

A compose key is a special prefix key that you press in order to write
compound characters, so Compose " E would give you an E with an umlaut.

If your computer is running some Unix variant, you can use your xmodmap
file to reprogram your keyboard to give you a Compose key (a.k.a.
Multi_key). This may be slightly confusing, but there are tools
available that make this somewhat easier (e.g., xkeycaps which can be
found at &lt;http://www.jwz.org/xkeycaps/&gt;).

See also: [Change](./Change.md), [Latin1](./Latin1.md)
