---
title: Shop commands
description: 'Use these commands in shops. ''Buy'' can also be'
tags:
  - Help files
  - Commands
---
Use these **commands** in [shops](./Shop.md). 'Buy' can also be
used in stables/pet-shops.

**Buy** syntax:

` buy [&lt;1..20&gt;|&lt;one...twenty&gt; of] `&lt;keyword&gt;`|`&lt;number&gt;

**Dye** syntax:

` dye `&lt;keyword&gt;` `&lt;colour&gt;

**Resize** allows you to instantly resize an item.

Resize syntax:

` resize `&lt;name&gt;

**Sell** syntax:

` sell [`&lt;number&gt;`.|all.]`&lt;keyword&gt;

**List** shows you what you can buy in the shops and the price of every
item.

List syntax:

` list { `&lt;keywords&gt;` or `&lt;number&gt;` }`

Use &lt;keyword&gt; to list items matching the keyword. If there are more than
one pieces of a particular item in the shop inventory, you can get an
itemized list of those pieces by using the &lt;number&gt; parameter. You can
also try these:

```
 list worn {head|body|on body|about body|...}
 list weapons that {slash|pierce|crush|cleave|...}
 list wielded {with one hand|with two hands|dual}
 list edible
 list containers
 list filter {[-]keyword} worn {head|body|on body|about body|...} (*)
```

(\*) Note: The filter sub-command only allows one keyword.

**Show** allows you to consider an item in the shop.

Show syntax:

` show { `&lt;keywords&gt;` or `&lt;number&gt;` }`

**Value** lets you know how much a shopkeeper would pay for a certain
item without actually selling it.

Value syntax:

` value `&lt;name&gt;

Examples:

```
 > show 43      
 > buy a dozen war arrows 
 > sell all.metal
 > list worn on legs
 > list wall shield
 > dye shirt black
 > value eket
 > resize 1.breastplate
 > buy horse Shadowfax       (to name your horse, for use in pet-shops)
```

See also: [Shop](./Shop.md), [Mend](./Mend.md),
[Citizen](./Citizen.md)
