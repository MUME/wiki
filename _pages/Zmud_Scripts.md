---
title: Zmud Scripts
---

# list Scripts

;D

## Friend list by Ari

I got tired of writing them all down in a paper \#CLASS {Friends}
\#ALIAS addfriend {#if !\$ismember( \$0, @Friends) {#var Friends
\$additem( \$0, @Friends)}} \#ALIAS ft {#LOO \$numitems( @Friends) {tell
\$item( @Friends, \$i) Friend Tell: \$0}} \#ALIAS remfriend {#var
Friends \$delitem( \$0, @Friends)} \#ALIAS friendcheck {#say @{Friends}}
\#CLASS 0 commands:

`addfriend -name- -> will add -name- to your list of friends`
`ft -text- -> will tll everyone in the list(if they are online) "Friend Tell: -text-"`
`remfriend -name- ->removes the person from the list`
`friendcheck -> lists them all`

## Group tell(modified from the friend thing)

\#CLASS {Group} \#ALIAS addgroup {#if !\$ismember( \$0, @Party) {#var
Party \$additem( \$0, @Party)}} \#ALIAS gt {#LOO \$numitems( @Party)
{tell \$item( @Party, \$i) GT: \$0}} \#ALIAS remgroup {#var Party
\$delitem( \$0, @Party)} \#ALIAS groupcheck {#say @{Party}} \#CLASS 0
pretty much the same as the above

# Colourful scripts

:D

## Search words by Ari

I use this when i want to highlight any word that i dont want to miss
like 'narrates' \#CLASS {searching} \#ALIAS ilf {#var serxz \$0}
\#TRIGGER {@serxz} {#cw bold} \#CLASS 0 all you need to do is type ilf
and then the word you want highlighted

## Easy Path by Ari

\#CLASS {path} {enable} \#TRIGGER {=%w=} {#CW bold,green} \#CLASS 0

## Bold Tells by Ari and Display Last by Cas

\#CLASS {boldtells} {enable} \#TRIGGER {^(\*\*\*) tells you ~'(\*)~'} {
\#CO bold \#VAR lwho {\$1} \#var ltell {\$2} } \#CLASS 0 if you set lwho
and ltell on the status window you will be able to recall the last
message even if you missed it

# Useful scripts

## XP Counter by (i dunno i forgot)

actually i adapted it from a script for another game \#CLASS
{xpcounterTT} \#ALIAS xp { \#CR \#say \$ansi( GREEN)--\> \$ansi( BOLD,
WHITE) Gained: \$ansi( RED)@xpcount \$ansi( BOLD, WHITE)xp. \#say
\$ansi( GREEN)--\> \$ansi( BOLD, WHITE) Trip: @xptrip xp. \#say \$ansi(
GREEN)--\> \$ansi( BOLD, WHITE) Needed: @XP xp. @tp tp. } \#ALIAS reset
{ \#VAR xpcount 0 \#VAR xptrip 0 } \#ALIAS xpshow {emote Needs: @XP xp.
@tp tp.} \#VAR XP {368462} \#VAR XPNEW {465} \#VAR XPGAIN {0} \#VAR
XPOLD {88509} \#VAR xpcount {0} \#VAR xptrip {57804} \#TRIGGER {^You
receive your share of experience.} { stat \#WAIT 1200 \#IF (@XP \<
@XPOLD) {XPNEW = @XP} \#MATH xpcount @XPOLD-@XPNEW \#IF (xpcount \< 0)
{xpcount = 0} \#ADD xptrip @xpcount XPOLD = @xp xp } "" {case} \#TRIGGER
{Needed: (%n) xp, (%n) tp.} { \#VAR xp \$1 \#VAR tp \$2 } \#TRIGGER
{Welcome to the land of Middle Earth. May your visit here be...
interesting.} { stat \#WAIT 1000 xpcount = 0 xptrip = 0 xp } \#CLASS 0

[Category: Software](Category:_Software "wikilink")