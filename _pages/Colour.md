---
title: "Colour"
---

To get your favourite MUD in ANSI colour, use the "change colour"
command.

You can change the colour settings for either of the following fields:
<nowiki>g damage narrate song zonebad

` emote          normal         status         zoneevil   `
` enemy          pray           tell           zonegood   `
` hit            say            weather        zoneneutral`
` look           shout          yell           zonenice   `
` roomdescription  `

</pre>

To see the current colour setting for one of the fields, use: <nowiki>g
\> change colour <field>

</pre>

where <field> is one of the above. To actually change it, use: <nowiki>g
\> change colour <field> <attribute>

</pre>

The <attribute> may be one of "none" (no colour), "default" (the MUME
built-in standard colour) or "monochrome" (the MUME built-in standard
monochrome settings).

You can also specify your own colour setting. Then the <attribute>
consists of zero or more of "bold", "inverse", "underline" and "blink",
optionally followed by a colour, optionally followed by the keyword "on"
and a background colour.

The colours available are: <nowiki>g black red green yellow blue magenta
cyan white

` BLACK   RED   GREEN   YELLOW   BLUE   MAGENTA   CYAN   WHITE`

</pre>

If you write the colour using capital letters (BLACK, BLUE etc) you get
a high intensity version of the colour.

Here are a few examples: <nowiki>g

` > cha col look bold green   make room names appear in bold green`
` > cha col narr underline    make narrates appear underlined`
` > cha col song default      make songs appear in the default colour (yellow)`
` > cha col hit GREEN on red  make hits show in high intensity green on a`
`                             red background`

</pre>

The "normal" field is mostly useful for people with bad terminal
programs that don't reset colours properly. Setting the colour to
anything but "none" will make all text from the game be forced into a
certain colour. So if you have problem with colours "bleeding" into
places where they don't belong, try "cha col norm white on black" (or
whatever setting you prefer).

You can also set groups of fields to one of the "none", "default" or
"monochrome" settigs using <nowiki>g \> cha col <group>
none\|default\|monochrome

</pre>

where <group> can be one of the following: <nowiki>g

` all              all the fields`
` communications   the pray, say, shout, song, tell and yell fields`
` fights           the damage and hit fields`
` zones            the zonebad, zoneevil, zonegood, zoneneutral and zonenice`
`                  fields (used by the "map" command)`

</pre>

For example: <nowiki>g \> cha col all default set all colours to the
default values

`  > cha col fight none      turn off colours in fights`
`  > cha col comm mono       make communications appear in monochrome`

</pre>

You can also toggle the use of colours on and off, overriding the
settings above. This is done with "change colour on" and "change colour
off".

See also: [Change](Change "wikilink"), [Map](Map "wikilink"),
[Ansicodes](Ansicodes "wikilink"), [Ansi
Example](Ansi_Example "wikilink")

[Category:Help files](Category:Help_files "wikilink")