---
title: Charset
permalink: /Charset/
---

MUME has two modes of displaying information to the players. Either it
uses the 7 bits of standard ASCII, or the 8 bit Latin-1 (iso 8859-1)
character set.

Your current character set is changed using one of: <nowiki>g

` > change charset ascii`
` > change charset latin-1`

</pre>

If your terminal doesn't support Latin-1, you should do "change charset
ascii" to get rid of garbled characters. In this mode, MUME changes
accented characters into their unaccented 7 bit version (or the closest
match available; e.g., the copyright sign gets replaced by 'C').

Using "change charset latin-1", MUME will send you accented characters.

On modern Unix installations, the default is to use the UTF-8 character
encoding. To run an application in latin-1 mode, you can use the "luit"
filter: <nowiki>g

` shell$ luit -encoding ISO-8859-1 powwow `<arguments to powwow>

</pre>

On some installations, sometimes the command above won't work due to a
race condition. In this case try the following: <nowiki>g

` shell$ luit -encoding ISO-8859-1 sh -c "sleep 1;powwow `<args>`"`

</pre>

In order to save people from having to type all the obscure characters
to identify objects, players and such, all keyword comparison is done on
unaccented letters.

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
found at <http://www.jwz.org/xkeycaps/>).

See also: [Change](Change "wikilink"), [Latin1](Latin1 "wikilink")

[Category:Help files](Category:Help_files "wikilink")