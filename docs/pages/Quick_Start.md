---
title: Quick Start & Command Cheat Sheet
description: Essential first-hour survival guide and command cheat sheet for new players in MUME.
tags:
  - Newbie
  - Commands
  - Cheat Sheet
  - Basics
aliases:
  - Command Cheat Sheet
  - Starter Commands
  - Newbie Quick Start
---

# Quick Start & Command Cheat Sheet

Welcome to **MUME** (Multi-Users in Middle-earth)! If you are brand new to text-based games (MUDs) or Middle-earth, this guide is designed to get you moving, surviving, and enjoying the world within your first hour.

---

## Your First 15 Minutes Checklist

When you enter Middle-earth for the first time, follow these immediate setup steps:

1. **Set Your Auto-Flee Safety (`change wimpy`)**:
   Type `change wimpy 15`. If your health drops below 15 Hit Points, your character will automatically attempt to flee combat to keep you alive.
2. **Reduce Text Velocity (`change spam all`)**:
   Text moves quickly in MUME. Type `change spam all` to hide unnecessary spam and keep the screen clean and readable.
3. **Check Your Character (`score` & `stat`)**:
   Type `score` (or `sc`) to see your current Health (HP), Mana, and Movement points. Type `stat` to check your combat attributes and experience needed for your next level.
4. **Look Around (`look` & `exits`)**:
   Type `look` (or `l`) to inspect your current surroundings. Type `exits` to list obvious movement directions.
5. **Tutorial Transition Note**:
   ::: warning Note on Gandalf's Tutorial
   When you complete or leave Gandalf's tutorial sequence, **your equipment and inventory will change**. Do not panic! Type `equipment` (`eq`) and `inventory` (`i`) immediately upon entering your starting town to see what items you are holding or carrying.
   :::

---

## Command Cheat Sheet

Below are the most essential commands grouped by task, using official MUME syntax.

### 1. Movement & Navigation

| Command | Short | Example | Description |
| :--- | :--- | :--- | :--- |
| **`north`**, **`south`**, etc. | `n`, `s`, `e`, `w`, `u`, `d` | `e` | Move in a cardinal direction, up (`u`), or down (`d`). |
| **`exits`** | | `exits` | List all obvious exits in your current room. |
| **`look`** | `l` | `look horse` | Look at a room, player, creature, or object. |
| **`examine`** | `ex` | `examine backpack` | Inspect a container, item, or room in detailed view. |
| **`search`** | | `search` | Search the area or hidden doors (uses Movement points). |

::: tip Keypad & Mapper Tip
You can use your numeric keypad for rapid movement! Many players also use [MMapper](./Guide_to_installing_MMapper_on_Windows.md) for a real-time visual map of Middle-earth.
:::

---

### 2. Equipment & Containers

| Task | Command | Syntax / Example | Notes |
| :--- | :--- | :--- | :--- |
| View worn gear | **`equipment`** | `eq` | Displays items currently worn or held. |
| View carried gear | **`inventory`** | `i` | Displays items inside your bags or hands. |
| Hold a weapon | **`wield`** | `wield sword` | Wields a weapon in your hand. |
| Draw / Sheathe | **`draw`** / **`sheathe`** | `draw sheath` / `sheathe` | Draws or sheathes a weapon; a sheath is needed for sheathed weapons, while bows and inventory weapons can also be drawn directly. |
| Wear armor | **`wear`** | `wear shield` / `wear all` | Wears clothing, armor, or shields. |
| Belt items | **`wear`** | `wear lantern belt` | Attaches lanterns, flasks, or pouches to your belt. |
| Remove gear | **`remove`** | `remove helmet` | Takes off worn gear so you can drop or store it. |
| **Give an item** | **`give`** | `give sword man` | **Syntax:** `give [item] [person]`. *(Item comes first!)* |
| Put in container | **`put`** | `put bread sack` | Stores an item inside a bag or container. |
| Get from container | **`get`** | `get bread sack` | Takes an item out of a bag or off the ground. |

---

### 3. Food, Water & Survival

| Command | Example | Description |
| :--- | :--- | :--- |
| **`eat`** | `eat bread` | Satisfies hunger so your HP and Movement regenerate. |
| **`drink`** | `drink fountain` / `drink skin` | Drinks water directly from a fountain or waterskin. |
| **`pour`** | `pour fountain skin` | Transfers liquid (e.g. pouring water from a fountain into a waterskin). |
| **`fill`** | `fill lantern` | Refills your lantern with oil from a flask or oil source. *(Use `pour` for water skins!)* |
| **`cook`** | `cook meat` | Cooks raw meat at a campfire or stove. |
| **`camp`** | `camp` | Sets up a campfire in the wilderness. |
| **`rest`** | `rest` | Sit down to recover HP, Mana, and Movement faster. |
| **`sleep`** | `sleep` | Sleep to recover at maximum speed. |
| **`wake`** / **`stand`** | `wake` / `st` | Stand up after sleeping or resting so you can move or fight. |

---

### 4. NPCs & Shops

| Task | Command Syntax | Example |
| :--- | :--- | :--- |
| Ask about quest/topic | **`ask <NPC> <topic>`** | `ask innkeeper quest` |
| View shop goods | **`list`** | `list` |
| Buy an item | **`buy <item>`** | `buy bread` |
| Sell an item | **`sell <item>`** | `sell pelt` |
| Change posture | **`change mood <mood>`** | `change mood aggressive` / `wimpy` / `normal` / `prudent` |

---

### 5. Combat Safety & Rules

| Command | Example | Description |
| :--- | :--- | :--- |
| **`consider`** | `consider snake` | Gauges how dangerous a target is relative to your level. |
| **`kill`** | `kill wolf` | Attacks a creature or mob. |
| **`flee`** | `flee` | Immediately attempts to run away through a random exit. |
| **`change wimpy`** | `change wimpy 15` | Sets HP threshold for automatic emergency fleeing. |
| **`change spam all`** | `change spam all` | Enables NoSpam settings to reduce text velocity. |

::: warning Starter Area Dangers
Avoid aggressive creatures early on (such as brown snakes, great spiders, or vultures) until you have leveled up and gotten basic armor. If you get into trouble, type `flee` immediately!
:::

---

### 6. Social Channels & Getting Help

| Channel | Syntax / Example | Who Hears It |
| :--- | :--- | :--- |
| **`say`** | `say Hello everyone!` | Players in the same room. |
| **`tell`** | `tell Gandalf can you help me?` | A specific player anywhere in the game. |
| **`narrate`** | `narrate Looking for a group near Bree!` | All players of your race/faction online. |
| **`who`** | `who` | Shows currently connected players. |

::: tip Join the MUME Community & Discord!
If you are lost, stuck, or lose your gear after dying, type `narrate New player here, can someone lend a hand?` in-game.
You can also join the active official [**MUME Discord Server**](https://discord.gg/XkZN55am9a) to chat with players, ask questions, find groups, and get live help!
:::

---

## What Happens If You Die?

Death is a learning experience in MUME, not the end of your adventure!

1. **Your Body Becomes a Corpse**:
   In most cases, your worn and carried equipment stays on your `corpse` at the location where you fell, but death-trap deaths do not leave a recoverable corpse, and corpse recovery is not guaranteed.
2. **Re-appearing in Mandos or Town**:
   You will reappear safely in a starter hall or town.
3. **Retrieving Your Gear**:
   Return to where you died and type `get all corpse`.
4. **Asking for Help**:
   If you died in a dangerous area or can't reach your corpse, ask on `narrate` in-game or post in the [**MUME Discord Server**](https://discord.gg/XkZN55am9a)! Higher level players will gladly escort you back to retrieve your belongings.

---

## Quests & Exploration Tips

- **Read Room Descriptions**: Hints for hidden doors, quest items, or NPC locations are often described in text.
- **Track Travel Points**: Exploring new regions grants Travel Points (`info`) which award bonus experience!
- **Getting Unstuck**: If a quest is confusing or you aren't sure where to go next, check the [Quest Guide](./Quest.md) or ask friendly players in town or on Discord.
