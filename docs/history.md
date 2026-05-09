---
title: History
description: The real-world development history of MUME — from a 1991 DikuMUD experiment to one of the longest-running online games ever made.
---

# History

## Origins (1990–1992)

In September 1990, a group of students at the Swiss Federal Institute of Technology in Lausanne (EPFL) discovered online gaming through Sejnet, a MUD running in Sweden. After years of tabletop roleplaying, they had found something new: a living world you could share across the internet.

Philippe Rochat — later known in-game as *Eru* — decided in the fall of 1991 to fork a DikuMUD I engine and build their own world set in Tolkien's Middle-earth. It was his first C project. After considerable struggle he got it running, and MUME I (*Multi-Users in Middle-earth*) officially opened in **January 1992**.

Claude Indermitte (*CryHavoc*), Pier Donini (*Manwë*), and David Gay (*Nada*) joined the project early on. The team's goal was clear from the start: a faithful simulation of Middle-earth, set just before *The Hobbit*, built entirely from scratch — no imported zones from other MUDs, all mapped to a consistent scale using gridded hard-copy maps.

When Sejnet shut down in the winter of 1991, its refugee player base migrated to MUME. That original player file has never been wiped.

## Version Timeline

Each major version introduced significant new systems. Click any version for full details.

| Version | Date | Highlights |
|---------|------|------------|
| [MUME I](./pages/MUME_I.md) | Jan 1992 | DikuMUD base, password no-echo, trophy system |
| [MUME II](./pages/MUME_II.md) | Jun 1992 | Orc race, special procedure system, The War begins |
| [MUME III](./pages/MUME_III.md) | Feb 1993 | Mudlle scripting language, weather, shops, justice system, Trolls |
| [MUME IV](./pages/MUME_IV.md) | Feb 1994 | Mounts, Black Númenórean race, Mudlle compiler for SPARC |
| [MUME V](./pages/MUME_V.md) | Aug 1994 | War points, Linux port, tracking, line of sight |
| [MUME VI](./pages/MUME_VI.md) | Mar 1996 | ANSI colors, moved to FIRE server in Norway (Jan 1998) |
| [MUME VII](./pages/MUME_VII.md) | Apr 1999 | Chosen stats, dynamic classes, subraces |
| [MUME VIII](./pages/MUME_VIII.md) | Jan 2002 | Beorning shapechangers, third war faction |
| MUME IX | 2022 | Bree-land rebuild, 10 new areas, subraces expanded |

See [A Short History of MUME](./pages/History.md) for the full annotated changelog and founding narrative.

## Technical Foundation

MUME is built on the DikuMUD I engine, written in C/C++. To support the ongoing development of quests, mob behaviour, and world scripting, the team developed **Mudlle** — originally named *MUD Language for Little Extensions*, though the volume of code eventually made that a misnomer. Mudlle was written by David Gay (*Nada*) and later extended by Gustav Hållberg.

Unlike typical MUD scripting languages, Mudlle is a compiled language (to interpreted bytecode, or to native machine code on SPARC and later x86). This lets developers write and reload code without crashing or slowing down the live game.

Codebase growth over time:

| Year | Mudlle | C/C++ |
|------|--------|-------|
| 1998 | ~3 MB | ~3 MB |
| 2017 | 380,470 lines | 165,444 lines |

**Infrastructure timeline:**

| Date | Event |
|------|-------|
| 1991 | EPFL Database Lab, Lausanne — founding home |
| 1994 | Moved to EPFL Math Department |
| Jan 1998 | Moved to pvv.org FIRE server, Norway — first time open 24 hours a day |
| Mar 2004 | New machine funded by player donations |
| Nov 2011 | Migrated to another new machine (193.134.218.99) |
| Nov 2017 | Migrated to another new machine (193.134.218.98) |
| post-2017 | Moved back to Switzerland; now runs on a virtual machine |

The codebase was ported from 32-bit SPARC Solaris to 32-bit x86 Linux, then to 64-bit x86 Linux. Game data files are now versioned in git. Modern protocol support was added including TLS-encrypted connections, UTF-8, XML output mode (for mapper integration), and GMCP/MCCP2/MNES/MSSP telnet extensions.

**World scale** has grown steadily:

| Year | Rooms | Zones | Notes |
|------|-------|-------|-------|
| 1998 | 14,500+ | 150+ | Mud of the Month interview |
| 2002 | ~20,000 | — | MUME VIII launch |
| 2017 | 26,921 | 256 | 1,410 object types, 1,401 mobile types |
| 2022 | ~28,000 | — | MUME IX launch (+40% since 2002) |

In 2017 the player base numbered 2,965 registered accounts with 23,185 characters.

## Development Philosophy

In the 1998 [Mud of the Month interview](https://mume.org/resources/motm), co-founder Pier Donini (*Manwë*) described the project's guiding approach:

> "We have attempted, and I hope will continue, to code an engine whose mechanisms are always closer to those of the virtual reality we want our players to live in. Said shortly, and half kiddingly, we hope that our successive iterations of MUME are asymptotic towards the perfect simulation of Tolkien's Middle-earth."

He also credited the project's longevity to having a stable three-person core development team who knew each other in real life before the project began — helping the game survive personality clashes and real-life disruptions, and ensuring no single vision could dominate unchecked.

## Mapper Client History

From the beginning, players built tools to help navigate MUME's sprawling world. The following timeline traces the evolution of mapper clients, drawn from the [MMapper project history](https://github.com/MUME/MMapper/wiki/About):

**Early era (1992–1999)**
- **TinTin** — the original generic MUD client used by early players
- **Cancan** — the first MUME-directed client, authored by Yorick, Vivriel, Thuzzle, Ilie, and Owl, inspired by TinTin
- **CS**, **Powwow**, **Cancan95** — successive client iterations

**Growth phase (2001–2006)**
- **PowTTY** — combined Powwow-style scripting with a new interface
- **MUME Online Mapper** — the first publicly available mapper for MUME
- **CheeseLab** — community mapper experiment
- **MMapper1** — first version of the MMapper line
- **Expandora** — the first 3D mapper for MUME
- **MMapper2** (2006) — collaborative rewrite by Caligor, Alve, and Kovis

**Modern era (2008–present)**
- **PandoraMapper** (2008) — alternative mapper client
- **[MMapper](https://github.com/MUME/MMapper)** — the current actively maintained mapper

## Reception

- **April 1998** — Selected as [The Mud Connector's Mud of the Month](https://mume.org/resources/motm)
- **September 2000** — Raph Koster, lead designer of *Ultima Online* and chief creative officer of *EverQuest II*, cited MUME as one of the games that influenced him as a designer, praising it for "doing such interesting things with player conflict"
- **TotalBiscuit** called MUME his favorite MUD and described its PvP as "harder than Dark Souls" with "crazy... absolutely insane" PvP
- **November 2017** — Co-founder Pier Donini was invited to join the discussion panel on MUDs for [Roguelike Radio Episode 141](http://www.roguelikeradio.com/2017/11/episode-141-muds.html)

## Further Reading

- [A Short History of MUME](./pages/History.md) — full version changelog with founding narrative
- [Mud of the Month Interview](https://mume.org/resources/motm) — April 1998 interview covering world design, Mudlle, and future plans
- [MUME IX: Summary of Changes](https://mume.org/about/m9) — official summary of additions since MUME VIII
- [Web News](https://mume.org/news/web) — chronological log of infrastructure and website changes since 1997
- [Archive](./pages/Archive.md) — research articles and historical resources about MUME
