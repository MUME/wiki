---
title: Regeneration
tags: ["Help files"]
---
The rate of which your character **regenerates** [hit
points](hit_points "wikilink"), [mana](mana "wikilink") and [movement
points](movement_points "wikilink") is determined by a number of
factors. Your base [abilities](abilities "wikilink") are important, as
are your [race](race "wikilink") and your [age](age "wikilink"), your
being hungry or thirsty and your position ([standing](stand "wikilink"),
sitting, [sleeping](sleep "wikilink")...)

<spoiler> The formula for mana regeneration is pretty close to:

`   Mana/min = (-5 + (Wil/2) + (race bonus) + (Max mana)/8 + (age/EQ/potion mana regen bonus)) * (fullness effect) * (resting effect) * (hunger effect)`

where

- (race bonus) is 0 for human, 1 for half-elf, 2 for elf
- (age bonus) can be found in [age](age "wikilink") (e.g., +3 at 3rd age
  and +6 at 4th age)
- (EQ bonus) can be found from identify (e.g., [a golden ruby
  ring](Other_equipment "wikilink") is +4).
- (Potion bonus) can also be found from identify (e.g., [a softly
  glowing green cup](Other_equipment "wikilink") starts out as +10)
- (Max mana) includes any bonus from eq (e.g., an archaic copper
  wristband is +10).
- (fullness effect) ranges from about 0.85 if empty to 1.17 if full.
- (resting effect) is 1.0 if standing, 1.25 if resting, 2.0 if sleeping.
- (hunger effect) is something like 0.5 if hungry or thirsty (not tested
  carefully, it might be worse).

So, for instance, a naked 3.5 age half-elf with 129 max mana while
standing will average

`  (4 + 129/8 + 4.5(age)) = 24.5 mana/minute`

when half full, and will take (129/24.5) minutes = 316 seconds to fully
regen from frozen. This rate increases to 28.5 when full, and decreases
to 20.5 when frozen.

If the same character wears a mana ring and sleeps, they will average

`  (4 + 129/8 + 4.5(age) + 4(ring)) * 2 = 57 mana/minute`

and fully recover from frozen in (129/57)\*60 = 136 seconds. Strangely,
the (fullness effect) seems to be slightly stronger when sleeping; it
ranges from 0.78 to 1.22 or so, or in this case 44 (frozen) to 69
(burning) mana/min.

Note that the formula implies that an archaic copper wristband (+10 max
mana) or rubellite (+11 max mana) actually give more regen than a slim
silvery wristband (+1 mana regen). </spoiler>
