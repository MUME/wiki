---
title: Warrior Guide
---

Credits: Originally by Argor
([source](https://mume.org/forum/viewtopic.php?p=5970&sid=b7d0ef4db9c9ab9ad8f057abce07658c#p5970))

## Types of Warriors

Before you select your weapons or armour, or begin to practice any
skills, it is important that you decide what kind of warrior you plan on
being. Unless you have a plan, you will end up wasting practice points
in skills you do not need or use, and wasting money on equipment that
you don't want. So come up with some idea of how you plan on playing
(you can always change it later, without too much difficulty, once you
know more about the game).

Here are some ways that people commonly play warriors:

Tank - This warrior goes in for very heavy armour, and plans to go
toe-to-toe with his opponents. He often will serve as a buffer for a
group of other adventurers. Basically, the tank serves as a shield for
the rest of the group, letting them shoot missiles, cast spells, or
otherwise do damage without interruption. High endurance and wilderness
skills are vital, or he will always be running out of moves. Tanks can
either choose a weapon with a good parry bonus, or one that will do a
fair amount of damage, but should avoid two-handed weapons as their
primary weapon.

Buffer - Very similar to the tank, this warrior might decide to use
slightly lighter armour, and depend at least a little bit on his dodging
ability to avoid injury. Again, he needs farily high endurance and
wilderness, and may also spend some more practices on parry and dodge.
The notes on weapon selection above still apply.

Hitter - This warrior does not buff for others (if given a choice), so
he will typically use light armour (often soft leather). His focus is
doing as much damage to his opponents as possible. Hitters often use
two-handed (smiting) weapons, since they do lots of damage, and the
parry penalty of these weapons doesn't matter if he isn't the one
getting hit.

Balanced/Solo - This warrior may often wander alone, and so needs to
balance his ability to deal damage and absorb it. He might decide to use
ringmail armour to avoid the penalties of heavier metal (or even
hard/rigid leather at low levels, until he can afford ringmail) while
still being able to take a number of hits from his opponents. He also
will probably want a weapon that does moderate damage without being too
slow, so will typically avoid two-handed weapons.

Dodger - This warrior wears plain clothing or soft leather, and depends
on high dexterity and his skills in dodging and parrying to avoid
damage. This can be very effective against lower level creatures, but a
creature with a high offensive bonus can hurt him severely in just a few
hits. This type of warrior should either choose a weapon that is fast
and good at parrying, or follow the route of the hitter, and work in
groups behind a buffer.

These are of course just a few examples of the type of warrior you might
play. Once you have chosen your playing style, select the weapon class
and type of armour that you plan to use. Then you are ready to begin
practicing skills.

## Combat in MUME

The combat system in MUME can be rather confusing, but it is important
to have some understanding of how it works, as your choice of equipment
can be heavily controlled by it.

When you type STAT you will see several values (which are discussed in
detail below). These include:

- OB offensive bonus - the higher your offensive bonus, the more likely
  you will hit in combat
- M_OB missile offensive bonus - the same as regular offensive bonus,
  but it only applies when you are shooting a missile weapon (and only
  appears when you are wielding one)
- DB dodging bonus - the higher your dodging bonus, the harder it is for
  others to hit you
- PB parry bonus - again, a higher bonus makes it harder for you to be
  hit
- Armour represents the average percentage of damage that your armour
  will absorb
- Wimpy: when your hit points drop to this number or lower you will
  automatically try to flee out of combat
- Mood determines to what extent you are concentrating on attack or
  defense

There is one major difference between DB and PB when it comes to combat:
the full value of your DB will protect you from ALL of your opponents,
no matter how many there are. However, your PB is SPLIT equally between
all of your opponents, so the more people you fight, the less PB applies
to each one. So if your PB is 30, and you are fighting 3 opponents, only
10 points of your PB counts towards defending against each one of them.

The number that you set for Wimpy (with the CHANGE WIMPY command) can be
anywhere from 0 to your total hits minus 1. When you take damage in
combat, your remaining hits are compared to your Wimpy value. If your
hits drop below your Wimpy value, you will automatically attempt to flee
from combat. You will continue trying to flee until you are successful,
or until you change your Wimpy value so that it is less than your
current hits. Also, if your current hits are less than your Wimpy, and
you are not already fighting, you will not be able to attack. You should
probably set your Wimpy value at between 30-50% of your total hit
points, depending on how comfortable and familiar you are with the mobs
you are fighting (so if you have 50 hps, a Wimpy of 15 to 25 would be
appropriate).

This is my preference, of course; some people prefer a higher Wimpy,
especially for non-warriors. VERY IMPORTANT: when you start a new
character, your Wimpy starts at 0; you will never automatically flee.
This should be one of the first things you change!

Your mood can be set to one of six values: wimpy, prudent, normal,
brave, aggressive, and berserk. The more aggressive your mood, the
higher your OB will be and the lower your PB will be. If you go berserk,
there is the added effect that your Wimpy will be set to 0, and you will
not be able to flee until the combat is over. After combat, you can
change your mood, and will then need to reset your Wimpy. Also, every
time you leave the game and reenter, your mood is automatically set to
wimpy. Finally, please note that the wimpy MOOD has nothing to do with
your Wimpy value that is set with CHANGE WIMPY.

Armour has two values that relate to combat: percent of damage absorbed,
and maximum amount of damage absorbed. This is best understood through
an example.

You are wearing a piece of armour on your body that absorbs 50% of
damage, up to 6 points, and a piece of armour on your legs that absorbs
75% of damage, up to 4 points.

A mob hits you in the body, doing 10 damage. Because the armour on your
body absorbs 50%, it tries to stop 5 points of this damage. Since the
maximum it can stop (6 points) is higher than 5 points, the armour
absorbs 5 points, and you take 5 points of damage.

The mob then hits you very hard on the leg, doing 20 damage. Your leg
armour tries to absorb 75% of this, which would be 15 points. However,
your leg armour can absorb a maximum of 4 points of damage. Since the
damage it tries to absorb is higher than the damage it can absorb, it
will stop as much as it can (4 points), the rest goes through, and you
take 16 points of damage.

The Armour value that you see when using the STAT command shows the
average percentage of absorption your armour provides (this is the
average for all places you could be hit; if you have better armour on
one spot, it will obviously stop more damage). The Armour value DOES NOT
give you any indication of the maximum amount of damage that is absorbed
from each hit. So wearing ringmail armour will give you a lower Armour
value than wearing rigid leather armour, even though ringmail will
absorb more total damage.

## Choosing the armour that's right for you

NOTE: This section of the Guide is a little out of date, the names and
characteristics of some armours (for example mail armour) have changed
since then. Generally though it's not totally unusable, but yes, it
could use updating.

There are a variety of different armour types to be found in MUME. Each
has its own unique advantages and drawbacks, and choosing the right type
can be difficult for inexperienced players. Here is a brief summary of
the different types of armour that you might select.

Plain cloth - Plain clothing is not really armour per se, but it is worn
in the same locations on the body in place of other armour. Plain cloth
does not provide any protection from damage, but it does increase your
dodge bonus (DB), which makes it less likely that you will be hit in the
first place. Plain cloth is also much lighter than other armour, and
thus does not encumber you nearly as much. Fine and cotton clothing have
the same bonuses, and are slightly lighter, making them a better choice
when available. This type of armour is usually used by mages and thieves
rather than warriors.

Soft leather - Soft leather provides some limited protection against
injury, but not very much. It does not improve dodge bonus at all, but
also does not hinder it. Soft leather does, however, increase your
offensive bonus (OB), making you better able to hit your opponents. Soft
leather is still fairly light and useful for dodging warriors. This type
of armour is best suited for hitters and for bashing.

Rigid and hardened leather - Rigid and hard leather armours absorb a
very high percentage of damage, but only up to a moderate amount. Thus,
they are most effective against creatures that do not do very much
damage with each hit. This type of armour provides neither bonuses nor
penalties to either offense or dodging. Rigid leather can be a good
choice for low level characters who cannot afford metal armour, but is
almost never used by higher level warriors.

Ringmail and Chainmail - Mail armour absorbs a lower percentage of
damage from each hit than rigid leather, but can absorb a higher total
amount of damage per hit. Thus, it is more effective against creatures
that deal a large amount of damage with each hit. Chainmail will absorb
more damage than ringmail, but it is heavier and has slight penalties to
your offensive bonus (or dodging bonus, in the case of chain leggings).
This armour is commonly used for midlevel warriors, as well as other
classes who do not have enough strength for heavier armour, or by those
who wish to avoid the penalties of heavier armour.

Metal armour - Metal armour includes thin metal, metal, thick metal, and
plate armour. Metal armour provides a high level of damage absorption,
both in terms of percentage of damage per hit absorbed and total damage
per hit absorbed. It is also rather heavy, however, and will reduce your
offensive bonus, defensive bonus, or both, depending on the specific
piece. Naturally, thick metal provides the best absorption, along with
the worst penalties. This type of armour is best suited to warriors who
will act as a buffer for other characters, because it allows you to soak
up a number of attacks without taking a lot of damage.

Special armour - White chainmail, fine chainmail, and shining plate are
special types of armour that are difficult to acquire and seldom sold in
shops. Each provides more damage protection than normal armour of the
same types, and they usually have fewer penalties as well. White
chainmail is similar to regular chainmail, only with greater total
damage absorption. Fine chainmail has higher total damage absorption,
but a lower percentage per hit, and it is much lighter than regular
chainmail, significantly reducing encumbrance. Shining plate has the
highest absorption available, and is highly sought after (and hoarded)
by legendary warriors.

Boots - Boots follow the same guidelines as found above (but note that
ringmail and chainmail boots do not exist). In addition to providing
protection from injury, however, boots also serve to reduce the cost of
movement in most cases. As a rule, the more protection boots provide
from damage, the less they help to reduce movement cost. Thus, thin soft
leather boots have a very high bonus for movement, while thick metal
boots provide none at all.

Cloaks and furs - There are a variety of items that can be worn about
your body, the most common being cloaks and furs. Most cloaks increase
your dodge bonus, while most furs increase your offensive bonus. Some
items have additional abilities as well, that I will not go into here.

What is worn where:

- On head - cap, hat, hood, helm, helmet, coif
- On body - shirt, vest, tunic, jerkin, dress, blouse, robe,
  breastplate, hauberk
- On arms - sleeves, vambraces
- On hands - gloves, gauntlets
- On legs - pants, trousers, skirt, leggings, greaves
- On feet - boots, shoes, sandals, slippers
- About body - cloak, surcoat, cape, cassock, fur, coat, blanket, pelt

Hopefully by now you have a general idea of what each type of armour
will do for you. The best way to decide which is right for you, of
course, is to try each one out, but this should get you started.

## Choosing the weapon that's right for you

There are several different weapon classes in MUME. Each requires its
own skill, and each has some advantages and disadvantages. Hopefully
this guide will provide you with enough information to make an informed
choice about which weapon you want to use.

Slashing - Slashing weapons are often a good choice for new warriors.
They strength than many other weapons (the best weapons in many weapon
classes require 18 strength), and provide better defense in the form of
a higher parry bonus. However, they typically do less damage per hit
than other weapons.

Cleaving - Cleaving weapons usually do a little more damage than
slashing weapons, but often have lower parry bonuses. They are also good
against wooden creatures, such as roots, trees and vines. Dwarves gain
an additional offensive bonus when using cleaving weapons, but only when
they are on foot. Because of this, a number of dwarves use cleaving
weapons, but they are less commonly used by other races.

Concussion - Concussion weapons do more damage than other one-handed
weapons, but they are poor for defense, and often slower than other
weapons. Most concussion weapons do more damage against opponents in
metal armour, and thus are favoured for player-killing. However, this
has little effect on mobs, so this bonus does not come into play at
lower levels.

Stabbing - Stabbing weapons are similar in speed and damage to
concussion weapons. Stabbing weapons do extra damage against mounted
opponents, but only if you are on foot. Once again, this does not affect
most mobs and usually only comes up in player-killing situations. It can
also be difficult to find the better quality stabbing weapons in many
shops.

Charging - Charging weapons are only useful if you are planning on using
the charging skill. When not charging, charging weapons do little damage
and have fairly poor defense. If you plan on using a charging weapon, be
sure to learn another weapon skill, too, and carry a second weapon. In
general, charging is best left to experienced warriors.

Two-handed - Two-handed weapons usually do quite a bit of damage per
hit, but are often very slow. These weapons are particularly useful
against heavily armoured foes, where less damaging weapons may not even
penetrate the armour. Because of their slow speed, however, and their
generally poor defense, solo warriors might want to avoid two-handed
weapons until they are more experienced. You cannot use a normal shield
with two-handed swords, only bucklers, which further reduces your parry
bonus, making them a poor choice for buffers as well. Finally, note that
you cannot begin to practice the two-handed skill until you are level 3
or higher. At higher levels, though, two-handed weapons can be
devastating.

Piercing - The piercing skill is actually a thief skill, and is not used
very often by warriors. Piercing weapons generally do fairly low damage,
but can be very fast, especially if you have the attack skill practiced
as well. Piercing also takes very little strength, so this is often the
weapon class of choice for non-warriors.

Missiles - The missile skill is another thief skill. Missile weapons can
do a considerable amount of damage, and are faster than most other
weapons. However, they require that you carry the appropriate missiles
(arrows, bolts, or stones) with you, which can run out. Also, while
using a missile weapon, you receive no parry bonus from your weapon.
Shooting is also interrupted when you are hit in combat. For these
reasons, missile weapons can be difficult to work with as a new player.

Examples of weapons (this is not a complete list):

- Slashing - broadsword, longsword, bastard sword, falchion, scimitar,
  beorning sword, backsword, dirk, cutlass, sickle
- Cleaving - battle axe, black waraxe, brutal cleaver, woodsman's axe,
  handaxe, hatchet
- Concussion - morningstar, warhammer, large warhammer, spiked war club,
  iron-shod mace, mace, maul, wooden club, cudgel, hammer, pick
- Stabbing - elven hunting spear, pike, broad spear, short spear,
  longspear, pitchfork
- Charging - lance
- Two-handed - heavy warhammer, halberd, two-handed sword, two-handed
  axe, bastard sword, flail, quarterstaff
- Piercing - double-edged eket, sharp thorn, shortsword, brown thorn,
  rapier, horn, stiletto, dagger, butcher knife, hunting knife
- Missile - light crossbow, longbow, shortbow, sling

Note: a bastard sword can be used as either a slashing weapon or a
two-handed weapon

The best way to learn about different weapons, of course, is to try them
out, but this should get you started.

## Choosing the skills that're right for you

Now that you are at least somewhat familiar with the type of warrior you
wish to play, the weapons and armour that you plan to use, and issues
involved with combat, it is time to choose your skills. Skills are
learned at guilds using practice sessions (type PRAC to see what skills
you have learned and how many practice sessions you have remaining). The
two main guilds that you will use as a warrior are the warrior guild (of
course) and the ranger guild, though you should have some idea of what
the other guilds have to offer, as well.

The following skills can be quite useful, for the reasons listed below,
and are recommended for most warriors:

Weapon skills (cleaving, concussion, slashing, stabbing, two-handed) -
Put at least 2 practices into your main weapon each level. You might
want to put a practice or two into a secondary weapon, but do not spread
yourself too thinly.

Bash - This skill is fairly essential for warriors, as it allows you to
knock your opponents down, preventing them from attacking for a short
time and making them easier to hit. However, it is usually not effective
before level 5, and not very fast or reliable until level 10 or so.
Don't bother to practice it until at least level 5.

Parry - This increases your parry bonus (PB), making you harder to hit.
A useful skill, but 1 or 2 practices per level should be plenty.

Rescue - A useful skill for warriors in groups. Get 1 or 2 practices
(total, not per level) around level 5-8, then add a couple more after
level 10.

Endurance - This skill increases your total number of hits and moves
(and has other benefits as well), and is essential for warriors. It
takes a very long time to become proficient in this skill, but even a
few practices can show significant benefits. Put at least 1 practice
into endurance each level, more if you are able.

Climb, Ride and Swim - These ranger skills will help you move around
Arda, and will not hurt your warrior skills. Get them to at least 30% by
level 5 if you can (though many dwarves may elect to skip ride).

Wilderness - This ranger skill reduces the number of moves you use while
travelling, as well as the food and water you need. This skill is
essential for tanks and buffers, and is very useful for others as well.

First Aid - If you suffer an open wound (one that bleeds), this skill
will let you bind it so that it will stop bleeding and begin to heal.
Note that if you attempt first aid without a sufficiently high skill
level, you might even hurt yourself worse. Therefore, I suggest getting
at least 40% first aid by level 5, unless you plan to always travel with
someone else who knows it.

Kick, Charge, Awareness, Command, Leadership, Track - These skills are
either not very useful (at least at low levels), difficult for newbies
to use, or, in the case of awareness, not that vital for warriors (at
lower levels). You might consider trying these skills later, but don't
bother with them before level 10.

Dodge - This thief skill can be very useful for warriors, especially
balanced or dodging warriors. However, when you practice thief skills,
your warrior skills are somewhat hurt, so it can be a delicate balance
in deciding how far to develop each set of skills. Still, I highly
recommend at least 1-2 practices in dodge for all characters.

Cure Light - This cleric spell can literally be a life saver, and I
recommend it for all classes, including warriors (unless you wish to
avoid using magic at all for roleplaying reasons, which is quite
acceptable). While warriors, particularly those with very low wisdom,
may only be able to get this spell to work occasionally by level 5, by
level 25 you will be able to cast it 5-6 times in rapid succession,
restoring as much as a quarter of your total hits (which can make a huge
difference when fighting opponents who can't heal themselves).

Here is a sample set of skills that a balanced/solo warrior might
choose:

- Level 1 - weapon (2), parry (2), endurance (1), swim (1), climb
  (1),wilderness (1), dodge (2), first aid (2)
- Level 2 - weapon (2), parry (2), endurance (1-2), swim (1), climb (1),
  wilderness (2), dodge (1-2), first aid (1)
- Level 3 - weapon (2), parry (1-2), endurance (1-2), ride (2-3),
  wilderness (1), extra points into ride/swim/climb/first aid to get
  each to at least 30% (first aid to 40%)
- Level 4 - weapon (2), parry/dodge (1-2), endurance (1-2), second
  weapon (1-2),wilderness (1-2), cure light (3), extra points wherever
- Level 5 - weapon (2), parry/dodge (0-2), endurance (1-2), second
  weapon (0-1),wilderness (1), cure light (2-3), rescue (1), extra
  points wherever

After this point, continue to develop your weapon skills, endurance and
wilderness at each level, and begin to add in bash, as well as any other
skills you might want. If you are going to play a smiting warrior
(two-handed weapons), practice a different weapon at levels 1 and 2,
then put all additional weapon practices into two-handed weapons
beginning at level 3.

[\*](Category:Guides "wikilink") [Category:Newbie
Help](Category:Newbie_Help "wikilink")