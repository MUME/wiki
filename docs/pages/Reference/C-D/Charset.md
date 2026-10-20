---
title: Charset
description: 'MUME character sets, encoding options, and Unicode support.'
tags:
  - Help files
---
MUME has different modes of displaying information to the players, using one of three character sets: 7-bit standard ASCII, 8-bit [Latin-1](./Latin1.md) (ISO 8859-1), or UTF-8 (the default Internet encoding).

There are two settings that control character handling:
1. Which character set you want to receive (`change charset`).
2. The network encoding your client uses (`change encoding`).

## Receiving Characters (`change charset`)

To change which character set you receive, use `change charset`:

```
> change charset auto         (default)
> change charset ascii
> change charset latin-1
> change charset utf-8
```

If you do not want to receive non-ASCII or non-Latin-1 characters, you can set `change charset ascii` or `change charset latin-1` independently of which encoding your client or mapper receives.

If you select a character set different from UTF-8, output will be transliterated: accented characters may be replaced with their closest counterpart, emojis may be replaced with `[:something:]`, and unsupported characters will be replaced by `?`.

## Network Encoding (`change encoding`)

If you receive garbled characters, your network encoding probably needs changing. Use `change encoding`:

```
> change encoding ascii
> change encoding latin-1
> change encoding utf-8
```

This is only necessary and possible for legacy clients that do not automatically negotiate character encoding via TELNET options. Most modern clients set encoding automatically.

## Unicode Support

Additional characters outside Latin-1 (ISO 8859-1) can be used with specific commands in the game:
- Communication commands such as `say`, `tell`, and `narrate`
- `info <format>`
- Board commands such as `write` and `reply`

Commands that do not handle these extended characters will display an "unsupported characters" error message. Note that not all Unicode code points are supported (for example, non-Latin scripts are not supported).

In order to save players from having to type obscure characters to identify objects, players, and other targets, all keyword comparison is done on unaccented letters.

## Typing Accented Characters

If your keyboard lacks keys to type accented letters:
- **Windows**: Use the "International" keyboard layout (e.g. typing `'A` yields an accented A).
- **Compose Key**: Use a Compose key to write compound characters (e.g. `Compose` `"` `E` produces `Ë`).
- **Linux/Unix**: Modern desktop environments allow configuring a Compose key in standard keyboard settings.

See also: [Change](./Change.md), [Latin1](./Latin1.md)
