---
title: Location
description: 'The continent of Middle-earth was shaped in'
tags:
  - Locations
aliases: ["Middle-earth"]
---
<script setup>
const mapAreas = [
  { type: 'circle', cx: 238, cy: 100, r: 15, title: 'Fornost', href: './Fornost' },
  { type: 'circle', cx: 224, cy: 159, r: 10, title: 'The Old Forest', href: './Newbie_Guide_Leveling_1_to_12#old-forest' },
  { type: 'rect', x: 561, y: 75, width: 119, height: 30, title: 'Iron Hills', href: './Iron_Hills' },
  { type: 'rect', x: 155, y: 133, width: 72, height: 40, title: 'The Shire', href: './Shire' },
  { type: 'rect', x: 364, y: 129, width: 25, height: 21, title: 'Rivendell', href: './Rivendell' },
  { type: 'circle', cx: 279, cy: 228, r: 15, title: 'Tharbad', href: './Tharbad' },
  { type: 'circle', cx: 404, cy: 242, r: 15, title: 'Lothlórien', href: './Lothlórien' },
  { type: 'circle', cx: 437, cy: 133, r: 15, title: 'Ingrove', href: './Anduin_Vale#ingrove' },
  { type: 'circle', cx: 345, cy: 128, r: 15, title: 'Warrens', href: './Trollshaws#warrens' },
  { type: 'circle', cx: 337, cy: 316, r: 15, title: 'Isengard', href: './Isengard' },
  { type: 'circle', cx: 461, cy: 234, r: 20, title: 'Dol Guldur', href: './Dol_Guldur' },
  { type: 'circle', cx: 340, cy: 352, r: 20, title: 'Helm\'s Deep', href: './Helms_Deep' },
  { type: 'circle', cx: 496, cy: 414, r: 20, title: 'Minas Tirith', href: './Minas_Tirith' },
  { type: 'circle', cx: 579, cy: 385, r: 20, title: 'Barad-dûr', href: './Barad-dûr' },
  { type: 'circle', cx: 385, cy: 353, r: 20, title: 'Edoras', href: './Edoras' },
  { type: 'circle', cx: 390, cy: 120, r: 15, title: 'Zaugurz Orc Caves', href: './Goblin_Caves#zaugurz-orc-caves' },
  { type: 'circle', cx: 411, cy: 123, r: 15, title: 'Tarkhnarb Orc Caves', href: './Goblin_Caves#new-orc-caves' },
  { type: 'circle', cx: 108, cy: 107, r: 20, title: 'Belegost', href: './Blue_Mountains' },
  { type: 'circle', cx: 331, cy: 145, r: 10, title: 'Last Bridge', href: './Old_East_Road' },
  { type: 'circle', cx: 265, cy: 146, r: 10, title: 'Midgewater Marshes', href: './Midgewater_Marshes' },
  { type: 'circle', cx: 295, cy: 147, r: 10, title: 'Weathertop', href: './Old_East_Road#weathertop' },
  { type: 'circle', cx: 527, cy: 110, r: 10, title: 'Dale', href: './Dale' },
  { type: 'circle', cx: 531, cy: 90, r: 20, title: 'The Lonely Mountain', href: './Lonely_Mountain' },
  { type: 'circle', cx: 491, cy: 352, r: 20, title: 'Dead Marshes', href: './Dead_Marshes' },
  { type: 'poly', points: '356,230 378,236 379,228 356,224', title: 'Redhorn Pass', href: './Misty_Mountains' },
  { type: 'circle', cx: 369, cy: 218, r: 15, title: 'Moria', href: './Moria' },
  { type: 'poly', points: '452,141 534,140 533,127 449,134', title: 'Old Forest Road', href: './Mirkwood' },
  { type: 'poly', points: '368,262 355,317 398,314 404,272', title: 'Fangorn', href: './Fangorn' },
  { type: 'poly', points: '335,145 364,148 367,130 336,135', title: 'Trollshaws', href: './Trollshaws' },
  { type: 'poly', points: '128,121 155,140 155,171 73,182 79,149', title: 'The Grey Havens', href: './Grey_Havens' },
  { type: 'poly', points: '227,146 240,143 255,142 255,152 271,156 259,167 241,160 230,163', title: 'Bree', href: './Bree' },
  { type: 'poly', points: '317,28 315,46 330,87 386,106 413,108 392,53', title: 'Misty Mountains', href: './Misty_Mountains' },
  { type: 'poly', points: '391,141 415,144 394,216 370,203 354,205 349,194 367,184', title: 'Misty Mountains', href: './Misty_Mountains' },
  { type: 'poly', points: '351,225 362,233 382,231 374,263 355,323 346,320 335,305 326,316 330,330 316,322 328,296 323,278 338,270 348,254', title: 'Misty Mountains', href: './Misty_Mountains' },
  { type: 'poly', points: '333,335 336,345 312,371 254,361 226,289 279,256 342,251 318,280 324,293 314,315 319,328', title: 'Dunland', href: './Dunland' },
  { type: 'poly', points: '272,243 269,259 343,248 351,214 295,223', title: 'Eregion', href: './Eregion' },
  { type: 'poly', points: '359,148 382,150 368,181 349,196 354,206 349,212 321,216 313,203', title: 'Ancient Broken Road', href: './Ancient_Broken_Road' },
  { type: 'poly', points: '239,163 258,168 259,185 276,211 260,218 238,197 233,185', title: 'Greenway', href: './Greenway' },
  { type: 'poly', points: '227,110 260,113 255,142 229,143', title: 'Road to Fornost', href: './Road_to_Fornost' },
  { type: 'poly', points: '140,6 67,34 81,148 120,137 98,101 102,71 106,43 148,16', title: 'Blue Mountains', href: './Blue_Mountains' },
  { type: 'poly', points: '121,161 144,171 127,195 149,221 114,240 85,197', title: 'Blue Mountains', href: './Blue_Mountains' },
  { type: 'poly', points: '247,142 250,161 380,149 380,134', title: 'Old East Road', href: './Old_East_Road' },
  { type: 'poly', points: '432,102 448,76 509,80 539,129 528,179 533,193 507,200 504,208 531,215 507,252 469,259 454,252 483,238 463,212', title: 'Mirkwood Forest', href: './Mirkwood' },
  { type: 'poly', points: '404,71 448,76 433,96 465,212 439,238 419,238 397,223 414,147', title: 'Anduin Vale', href: './Anduin_Vale' },
  { type: 'poly', points: '317,373 337,330 451,318 473,387 473,404 363,370', title: 'Rohan', href: './Rohan' },
  { type: 'poly', points: '213,456 271,383 352,368 522,409 526,506 422,514 377,444 325,439 264,464', title: 'Gondor', href: './Gondor' },
  { type: 'poly', points: '534,358 538,497 674,501 718,456 717,357', title: 'Mordor', href: './Mordor' },
  { type: 'rect', x: 155, y: 173, width: 102, height: 113, title: 'Eriador', href: './Eriador' }
]
</script>

The continent of Middle-earth was shaped in
the most ancient days of [Arda](./Arda). It lay to the east of the other great
continent of [Aman](./Aman) (Undying Lands), and was separated
from Middle-earth by the Great Sea Belegaer.

At the end of the [Third Age](./Third_Age), the continent of
Aman finally departs from Arda, leaving the mortal realm of Middle-earth
which would eventually evolve into Europe, Asia, Africa and Australia.

<ImageMap :areas="mapAreas" />

<!--@include: ../includes/Place.md-->
