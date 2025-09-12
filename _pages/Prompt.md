---
title: "Prompt"
---

This command must be followed by one of the arguments below for mortals:
points, light, terrain, movement, twiddlers, all (of the previous
options), or none. This transforms your prompt in order to see the
option chosen.

light - Display one of the following symbols according to lighting

`           conditions:`

<nowiki>g

`              *   - Sunlight, either direct or indirect`
`              !   - Artificial light`
`              )   - Moonlight, either direct or indirect`
`              o   - Darkness`

</pre>

movement - Display R if you are riding, r if you are being ridden,

`           W if you are trying to swim, S if you are trying to sneak,`
`           c if you are climbing safely, and C if you're climbing`
`           no-matter-what.`

[terrain](terrain "wikilink") - Display a symbol representing the
terrain you are standing on [weather](weather "wikilink") - Display the
current weather conditions if you are outdoors and

`           the sky is not clear (see "help weather"); also display - or =`
`           in case of fog`

points - Show current hit points, mana and movement points. Note that

`           nothing is shown if you have full hit/mana/move.`

twiddlers - Show the twiddling bar (\|/-\\-...) when busy casting spells

`           or similar.`

Example: <nowiki>g

` > prompt points`
` Your prompt will display health, mana and stamina.`
` HP:Wounded Mana:Burning Move:Tired>   <---- this is the new prompt`

</pre>

To disable an option, re-type it.

It's very common to have all prompts active, to do this type 'prompt
all'. Note that "prompt all" will only turn on twiddlers if you are in
spam mode when you type it.

The prompt for unmounted mortals (not in combat) is at its fullest shown
as: <nowiki>g

` *%~- WSC HP:Fine Mana:Burning Move:Tired>`

</pre>

Immortals should consult their own help file on prompt as well.

See Also: [Spam](Spam "wikilink")

[Category:Help files](Category:Help_files "wikilink")