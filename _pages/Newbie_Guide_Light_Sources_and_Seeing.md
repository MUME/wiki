---
title: Newbie Guide Light Sources and Seeing
tags: ["Guides", "Newbie Help"]
---
**Newbie Guide Light Sources and Seeing**

This guide written and published by p(Baca/Endo)

"I give you the light of Earendil, our most beloved star. May it be a
light for you in dark places, when all other lights go out." Galadriel,
The Two Towers

This guide is about light and seeing in MUME, or what to do when you
cannot see.

Many parts of this guild reference to the MUME help pages which can be
found at:

<https://mume.org/help/help_index>

**Bold** words can be looked up in the games help files. Like help
**lantern**.

One of the most deciding factors of survival in MUME's Arda is if you
can see your foes or not. So we'll be going over some of the ways to
address vision in MUME.

## **Types of Vision**

Different **race**s have different ways to see the game. Almost all of
the Free Peoples of the West have what I call normal vision. Normal
vision means you can see when a room has **light** and you can't see
when a room is dark. Most of the tips in this guide apply to those with
normal vision.

But some **race**s in the game have dark vision. **Troll**s, all types
of **orc**s, and **Beorning**s metamorphed into **Bear**s can all see in
the dark. No light sources are needed.

------------------------------------------------------------------------

### **Cycles of Light**

The main cycle of light is the sun. If the sun is up you can see in many
rooms of the game. If the sun is down, it's dark and you can't see. In
the summer, it is daylight longer and the night is short. In the winter,
the days are shorter and the nights are longer.

For more about the cycles of light check out help **time** and help
**month**.

The **moon** has no effect on vision. The moon affects several other
things in the game however!! Like magical doors, Beornings becoming
Bears, or magical fountains. Just not vision in anyway. Does not matter
if the **moon** is up or down for the purpose of seeing.

Some evil races in the game have penalties in the sun. The sun doesn't
really affect Free Peoples of the West other then being able to see or
not.

------------------------------------------------------------------------

### **Types of Rooms**

Many rooms in the game have different ways of how they are lit. Here's
the main types:

OUTSIDE - this room types **light** level depends on the **day** and
night cycle from the sun. They can be either lit or dark from the time
of day. Type **time** to help.

LIT - these types of room always have light, regardless of the time of
**day**. Most of these rooms are indoor rooms in buildings that would be
assumed to have **torch**es, fireplaces, lamps, **lantern**s,
**campfire**s, candles, magical lighting, etc... They are always lit.

DARK - these types of rooms are default dark, unless you bring some
light in with you. Most of these rooms are in tunnels, mines, caves,
ruins, in buildings, underwater, but even very dense forests can be
dark.

Also rooms will be unseeable to you if you are **sleep**ing. You can't
see what's going on around you while asleep.

------------------------------------------------------------------------

### **Weather Vision Effects**

Over all the weather in MUME doesn't really affect your vision very
much. It can be a strong thunderstorm, heavy rain, a blizzard of snow...
and you can still see fine. As long as the sun is up or the room is lit.

There is one type of weather that DOES affect your vision in the game,
and that is **fog**. There is light **fog**, which reduces your senses
slightly and does make it harder to see. Then there is the dreaded heavy
**fog**. You can't see a damned thing. Even dark vision races have some
issues in heavy **fog**. About the only thing to do is leave the zone
that is foggy, or beg someone to come and cast **control weather** spell
to help clear the fog up.

To know the **weather** about you, your area, or even the entire **map**
try these commands,

`weather local, weather fog, weather global`

------------------------------------------------------------------------

### **Lighting up a Room**

You can bring or make your own **light** in a room, so it's not dark
anymore. That room is now treated as temporarily lit. One of the easiest
ways to do this is to make a **campfire**. That room is now lit, and
will stay that way, even if you walk in or out of it. Another way to
make a room lit is to light a pile of corpses on fire, like a funeral
pyre. The command **burn** corpse will help with this.

Another option is to **drop** a lit lantern in the room. It will stay
lit and keep providing light from the floor. You can always pick it up
later.

`camp, burn corpse, drop lantern, get lantern, light lantern`

------------------------------------------------------------------------

### **Types of Light You Can Use**

Most commonly people just bring the **light** with them. You can use
**torch**es, candles, **lantern**s, or even magical lights.

TORCHES - you can find torches laying around or in containers in many
areas of the game. You can even purchase them pretty cheap from general
stores, travellers shops, or some grocers. Torches can last you an
entire night easily. To light a **torch**, simply **hold** it. If a
**torch** is burned out, simply **remove** it and **drop** it. It's now
just useless **weight**.

CRUDE TORCHES - these you can make from a **campfire**. Make a campfire
and then just type **get torch fire**. They do have a drawback of not
lasting very long however.

CANDLES - like torches, just **hold** them to light them. They are not
very common and really can be kind of heavy. Most players don't use them
for light.

LANTERNS - Lanterns last for a few MUME days easily. You can **light** a
**lantern** or **snuff** a lantern to put it out. Lanterns run on oil.
If you **snuff** a lantern, it does not burn up your oil. Most mobs
snuff their lanterns during the day to save oil. You can loot both
lanterns and flasks of oil in many different areas, containers, and mobs
in the game. Or you can also buy lanterns and flasks of oil pretty cheap
from most shops.

Lanterns are better then torches in that they last longer, can be
refilled, and you can wear them on your belt instead of having to hold
them. To keep a lantern full with oil, just type **fill** lantern if you
have a flask of oil in your inventory or on your belt. If a flask of oil
is empty, simply drop it. You don't need to carry around that extra now
useless weight.

`hold torch, get torch campfire, light lantern, snuff lantern, wear lantern belt, fill lantern`

Also you can control if your light source is emitting light or not.
Sometimes you might want it dark where you are at. Many scout and thief
characters prefer this at times. To lower the light level your light
source is giving out, type cover item. To let it produce more light
again, type uncover. This may help some characters who hide or sneak
alot.

`cover lantern, cover ruby, cover campfire, uncover lantern, uncover ruby`

------------------------------------------------------------------------

### **Magical Light or Vision**

A few rooms in the game are lit up by magical light. But there are even
more magical choices when it comes to light sources.

**CREATE LIGHT** - this low level mage spell basically recharges torches
and lanterns. For torches it makes them like a brand new **torch**, that
you can burn up all over again. For lanterns it magically recharges the
**lantern** as if you had filled it up with oil. About the greatest
benefit of this spell is it can save you all the **weight** of carting
around flasks of oil. It is mostly only used by low level casters, and
not even some of them.

NIGHT VISION - this mid level mage spell gives you a version of dark
vision... but not quite as good. You cannot see some information in the
room, like a description or some clues in the room if you **look** or
**search** around. But it does allow you to see any of the mobs in the
room. Another benefit of this spell is it helps in light fog and dense
fog to see mobs and enemies that might attack you. **Night Vision** is
handy for some scouts, thieves, and mage/thief combos.

SEEING POTION - this is an **herblore** you can possibly learn if you
battle the evil witch outside of Fornost's south gate. Becareful, she's
pretty difficult for low levels to take on, unless you have a group. You
need an herbal kit and the ingredients to make it. If you drink the
seeing potion, you will gain an increase in **Perception** and the
effects of the spell **Night Vision**. The potion reduces your
**Constitution** a little bit while you are under the effects. If you
need this potion, you can always ask on narrates if anyone can **mix**
it for you. Most players would do it for free if you have the
ingredients ready.

AWARENESS SKILL - While not really magical, it mimics a magical spell.
If you practice 95%+ of the **Awareness** skill, you now have a
permanent **Night Vision** spell effect. This is really only feasible
for characters with high **Perception** and **Intelligence**. Mostly
only Rangers, Scouts, and Thieves might go this route, and some of them
don't bother.

RED RUBY - this is one of the best, earliest magical items most players
get in the game. A red ruby is a permanently, magically lit gem. One of
the main benefits is it's VERY light **weight** to carry. Also you can
**wear** it in either a neck slot OR on a belt slot, making it more
flexible to use. Red ruby light gems can be purchased at most of the
jewellery shops in the game, including Grey Havens (Forlond), Blue
Mountains, Rivendell, Lorien, and if you want to risk it, Tharbad. They
cost around 52 gold or so, depending on your **race** and
**citizenship** in different towns. A magical item definitely worth
saving up for and very useful. No more lanterns, torches, or flasks of
oil to deal with!

LEGEND FOCUS - Some legend **focus** items also act as a permanent light
sources, like the red ruby. They are the phial and a legend staff. These
items are difficult to make, and require you to be level 21 to even try.
Help **create focus** for more information.

Strange Black Helmet - this is a pretty rare **artifact** item. If you
wear it you get the same dark vision that trolls and orcs get while you
have it on. It will decay after about 7 real life days.

------------------------------------------------------------------------

### **Game Commands Affected by Vision and Light Levels**

"Someone is here." That is what mobs and characters in the game will
look like when you can't see in the room you are in.

Multiple commands do not work well or don't work at all when you cannot
see. Any command that targets a mob or player mostly don't work.
**Look**, **examine**, **kill**, etc...

To fix this issue, you need to find a way to see in that room. Lighting
a lantern, lighting a campfire, or getting out and try to find the light
or sun.

These commands are not affected:

`camp, light lantern, wear lantern, get torch fire, hold torch`

------------------------------------------------------------------------

### **Why Can't I See It?!?!?!?**

It is very common to have an issue in the game with seeing something.
The most common issue you can't see is you forgot to light your lantern,
or you ran out of oil. Or simply the sun went down. You might run into
some more difficult issues like these:

SAURON DARKNESS - randomly and periodically, a **darkness** will spread
out from Dol Guldur. It can spread out for a few zones and rarely for
many many zones. Under the darkness, there is no sunlight. It's safer
for **orc**s, **troll**s, and **Black Númenóreans** to roam and fight.
The **darkness** will shrink and contract after several hours (real life
minutes), returning to normal. Very much like in the Lord of the Rings
movies when darkness was spreading out from Mordor.

If you use the map darkness you'll see the extent of Saruon's Darkness
near you. If you use map global darkness, you'll see the entire map and
any of Sauron's Darkness there.

`map dark, map g dark`

DARKNESS SPELL - This is an orc **shaman** spell or a **Black
Númenóreans** spell that can make temporary areas of **darkness**
similar to Sauron's Darkness. This can be an area of a few rooms up to a
couple of dozen rooms. This **darkness** is rumored to affect torches
and lanterns, and makes any rooms dark, even during the day.

SHROUD - if you see "someone" in a room, but cannot tell who it is,
there is a good chance it is another player with the **shroud** spell
cast on them. If you are below lvl 17 or so, you cannot see very well
through **shroud** spell. If you are higher level, you'll be able to see
the person and tell that they are shrouded. The spell **detect
invisibility** is the usual way to see through a **shroud** spell at
lower levels.

BLIND - **Blind** is another spell that can prevent you from seeing. It
basically makes all rooms seem dark to you. **Blind** does not last very
long, and will wear off in 2 minutes or so. Being affected by the
**Blind** spell lowers your **dodge bonus** (DB) and **offensive bonus**
(OB), and you cannot tell what is battling you in combat. There are a
couple of spells that remove blindness condition: **Cure Blindness** or
**Heal**

SNEAK AND HIDE - several mobs and players in the game can **sneak**.
Some players and mobs can even **hide**. Common mobs that do this are
moles, robbers, footpads, assassins, scouts, thieves, hunters, ghosts,
and more. There are some ways to deal with sneakers. Having a high
**Perception** helps, the Seeing **herblore** can help (it raises Per),
another is the **Awareness** skill, and the **Sense Life** spell can
slightly help see sneakers as well.

The main way to deal with sneakers is the **search** command. You need
to use a speed of search to do this, like **search fast**. The **flush**
command can also do it, but you will auto hit if you find anyone, even
your own party members. **Reveal** works as well. This can also find
hidden players, but they are harder to find.

`search normal, flush fast, reveal normal`

Now go out and see everything in Middle Earth that MUME has to offer!

Link back to the wiki guides:

- [Guide](Guide "wikilink")
 