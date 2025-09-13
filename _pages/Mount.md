---
title: Mount
tags:
  - Commands
  - Basics
---
Mounts are [mobiles](mobiles "wikilink") that can be lead and ridden to
help you to move further without getting tired or to carry extra
equipment.

Several types of such mounts are available, most prominently mules,
ponies, horses, and wargs.

The ride skill and various related commands provide means to interact
with them.

## Ride

The [ride](ride "wikilink") skill is a [ranger](general "wikilink")
[skill](skill "wikilink") that allows one to efficiently ride certain
rideable [mobiles](mobiles "wikilink"), like horses.

Riding will lower the amount of [movement
points](Movement_points "wikilink") you need while travelling and your
knowledge of the riding skills will influence how strong this movement
point reduction is and also how often you will get thrown off by the
mount. For new players, it is recommended to practice the riding skill
to 60%-80% knowledge early on.

To ride on a mobile, use the 'ride' command. If you type 'ride' without
any specification, you will try to ride any previously ridden mounts in
the area you are in. You can also specify the mount, for example

`> ride warhorse`
`> ride 2.pack`

Use 'dismount' or 'lead' to get off the mount.

You will only be able to control a horse if you are the first one to
ride it. To ride with a certain person on his mount, you can use 'ride
behind <person>'.

While riding, you will realize if your mount is becoming tired (in your
prompt). Expert riders can also do this by looking at a mount, even if
they are not riding it. The more tired your mount is, the higher the
chance it will refuse one of your movement orders.

If the controller of the horse is not in combat and neither is the
horse, the controller may encourage the horse to ride on, even if there
are other players on the horse who are fighting.

## Terrain

Each room has a flag whether it is rideable. If not, you have to
dismount to enter the room. Most commonly outdoor rooms are rideable and
indoor rooms not. But dense forests and brush, or steep mountainsides
may also make it impossible to ride and there are many other exceptions.
In [MMapper](Mmapper "wikilink") non rideable rooms are indicated by a
small red cross at the top right corner.

Horses cannot [climb](climb "wikilink") or [swim](swim "wikilink").
However, if you give your mount a boat, it will follow you into surface
water rooms. For example: 'give canoe mule'. It will never follow
underwater.

## Lead, Dismount, and Abandon

To move into a room that is not rideable, you have to '<b>lead</b>' your
mount. Typing 'lead' while [riding](ride "wikilink") will automatically
make you dismount and lead your mount.

Use '[dismount](dismount "wikilink")' if you want the mount not to
[follow](follow "wikilink") you. NOTE: Unlike lead, this command can be
used in combat.

If you are not riding and you type 'lead' without any parameters, you
will try to lead any mount in the room that you have previously been
riding. Similarly, typing ride with no argument will cause you to mount
the animal you are leading, if possible.

It is also possible to lead mounts that you previously haven't ridden if
you specify which one you want to lead (like 'lead horse'). This won't
work if someone else in the room is leading or riding the mount already.

If you are [leading](lead "wikilink") a [mount](mount "wikilink"), the
**abandon** command will make it stop following you. The mount will
remember its previous [rider](ride "wikilink"), so you can resume
leading it by typing "lead". If you abandon your mount but remain in the
[room](room "wikilink") with it, others will not be able to lead it
away. They can, however, ride the mount and then control it out of the
room.

## Saddle and Unsaddle

If you want to sit more securely on your mount, you can buy yourself a
saddle and '<b>saddle</b>' it. To remove the saddle, use
'<b>unsaddle</b>'.

This does not seem to affect movement points when riding but may reduce
the rate at which you get thrown off. An exception to this are
[elves](Elf "wikilink") (but not half elves), who can ride comfortably
even without saddles.

Saddles can be bought at grocers and traveller shops.

`> saddle mule (saddles the mule)`
`> unsaddle mule (removes the saddle from the mule)`

Saddles have the added benefit that your mount cannot be
[summoned](summon "wikilink") (as do saddle cloths).

There are other uses to the unsaddle command (see below).

## Inventory

To transfer items from your own inventory to the mount's inventory use

`> give sword mule (transfer a sword from your inventory to the mule's inventory)`

Entirely independent of the horse carrying an actual saddle or not is
the 'unsaddle all' command. This will make the mount to drop all of its
inventory (oddly except for its saddle).

`> unsaddle mule all (makes the mule drop everything it is carrying, except its saddle)`

This is the only way (except for renting or killing the mount or using
the steal skill) to get items from your mount's inventory. So to get
individual items, use unsaddle all, get all and then give everything you
don't need back to the mount.

To see your mount's current inventory you can simply use

`> examine mule`

## Types of mounts

The size of the mount determines which races can efficiently ride it.
Also, different types of mounts have different strengths, hit points,
moves, and regen. The following lists shows types of mounts for each
size in ascending order of these qualitites:

- For large [races](races "wikilink") ([Elves](Elves "wikilink") and
  [Men](Men "wikilink")):
  - [Docile horse](Horse "wikilink"): Not sold in shops but wanders
    certain areas of the map. Even when led, wanders off when not in
    same room with player.
  - [Pack Horse](Pack_horse "wikilink")
  - Trained Horse
  - Warhorse: Can be called.
  - Rohirrim: Can be called. Best in terms of moves but harder to obtain
    (not sold in shops and only available through Rohan's Haldir quest
    or from Wyrdda).

<!-- -->

- For small races ([Dwarves](Dwarves "wikilink") and
  [Hobbits](Hobbits "wikilink"))
  - Mule
  - Pony
  - [Dales Pony](Dales-pony "wikilink")

<!-- -->

- For [Orcs](Orc "wikilink"):
  - [Warg](Warg "wikilink")

## Buying and Renting

Horses can be found for free all over Arda (rooms marked with H or M in
MMapper).

Most types can also be purchased for a few gold in pet shops.

Stables allow you to rent your horse so you can keep it for your next
session:

` rent horse`

You will receive a ticket which you can use again at any stable to get
your horse back:

` trade ticket`

Renting itself is free, and trading the ticket will cost a few silver.

Mounts can be rented with a saddle but any other inventory will be
transferred to you.

## Calling a horse

Warhorses and Rohirrim can be called to come to the players location,
which can be useful if it got separated from you:

` tell horse here `

This will only work if the horse was being led by you and if the horse
is in your immediate vicinity (5 rooms distance).

## Miscellaneous Info

- Since you cannot [flee](flee "wikilink") into a no-ride room when
  mounted, riding vs dismounting can be used to influence flee
  directions.
- You cannot [sneak](sneak "wikilink") while riding. It does not
  influence movement cost if still enabled, so its safe to leave on to
  automatically reenable when dismounting.
- [Dwarves](Dwarves "wikilink") with [axe](Cleaving_weapon "wikilink")
  get an ob modifier when dismounted
- [Rohirrim](Rohirrim "wikilink") men get get various modifiers
  concerning mounts.
- The 'riding whip' item has alledgedly no effect
- Rattlesnakes are a mob that will attack your mount instead of you when
  you are riding and enter their room. When this happens, most mounts
  will throw you off, but warhorses and Rohirrim won't.

### Movement Point Tests

Each done fully fed/rested swith a Beorning man with 94% ride (unless
specified) 103% wilderness, fgc, fine metal boots (unless specified),
pack horse (unless specified).

- Terrain (spamming 50 rooms):
  - Hills: Foot: 109, Ride: 24
  - Forest: Foot: 93, Ride: 24
  - Plains: Foot: 73, Ride: 24
  - Road: Foot: 27, Ride: 24
  - Trail in Hill: Foot: 60, Ride: 24

<!-- -->

- Modifiers (spamming 200 road rooms):
  - pack horse: 99
  - saddled pack horse: 99
  - mule: 99
  - pack horse, soft leather boots: 99

<!-- -->

- Riding Skill (spamming 200 road rooms):
  - 64%, pack horse: 97
  - 64%, saddled pack horse: 97
  - 101%, pack horse: 97

Summary:

- Riding makes movement cost independent of terrain. On roads it reduces
  move cost only marginally, the more difficult the terrain the bigger
  the impact.
- Boots don't matter while riding.
- Wrong mount size affects the moves of the mount rather then your moves
- A saddle has no effect on move cost. If it has an effect then on
  getting thrown off or mount refusing (not tested).
- Riding skill has little effect on move cost. It seems to only affect
  getting thrown off or mount refusing (not tested).
 