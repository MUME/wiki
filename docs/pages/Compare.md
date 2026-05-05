---
title: Compare
description: 'Syntax: compare &lt;object|number&gt; &lt;object|number&gt;'
tags:
  - Commands
  - Help files
---
Syntax: **compare** \&lt;object\|number\&gt; \&lt;object\|number\&gt;

This command will compare the first object with the second giving you an
idea of their relative merits. If used in a [shop](./Shop.md),
objects in the shopkeeper's stock can also be compared.

Comparing objects in your [inventory](./Inventory.md) or in
[room](./room.md):

```
 > compare sword spear
 > compare eq.sword inv.sword
```

Comparing objects in a shop:

```
 > compare 2122 233
 > compare 2122 sword
 > compare sword 233
```

See also: [Consider](./Consider.md), Show
 