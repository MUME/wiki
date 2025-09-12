---
title: "Local Editor"
---

The MUME remote editing protocol is a mechanism that allows users to
edit files on their local machines, as opposed to using the standard
line editor.

## Requirements

Use of the protocol requires a special MUME-aware client to receive the
files and launch your favorite editor on your local machine.

Notable clients that support the protocol

`* powwow -- unix/windows/mac command line client (from the early 90s)`

`* powtty -- windows port of powwow using putty (from the late 90s)`

## Using the protocol with powwow or powtty

Set the POWWOWEDITOR and POWWOWPAGER environment variable and type "#I"
to initialize the protocol, which will automatically set you to "change
edit mume" and "change pager mume". Refer to your client documentation
for more detailed information about setting environment variables.

Important note for Powtty users: Make sure you check the "Use MUME local
editing" option in the PowTTY category of the configuration menu.

## Note for client implementors

The source code for the powwow client contains the defacto reference
implementation protocol; the powwow source is available for download on
the MUME website.

See also: [Change Editor](Change_Editor "wikilink")

[Category:Help files](Category:Help_files "wikilink")