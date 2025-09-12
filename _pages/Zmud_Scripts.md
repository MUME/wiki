---
title: "Zmud Scripts"
---

# Zmud Scripts

<nowiki>g;D

</pre>

## Friend list by Ari

I got tired of writing them all down in a peper <nowiki>g

1.  CLASS {Friends}
2.  ALIAS addfriend {#if !\$ismember( \$0, @Friends) {#var Friends
    \$additem( \$0, @Friends)}}
3.  ALIAS ft {#LOO \$numitems( @Friends) {tell \$item( @Friends, \$i)
    Friend Tell: \$0}}
4.  ALIAS remfriend {#var Friends \$delitem( \$0, @Friends)}
5.  ALIAS friendcheck {#say @{Friends}}
6.  CLASS 0

</pre>

commands:

`addfriend -name- -> will add -name- to your list of friends`
`ft -text- -> will tll everyone in the list(if they are online) "Friend Tell: -text-"`
`remfriend -name- ->removes the person from the list`
`friendcheck -> lists them all`

## Group tell(modified from the friend thing)

<nowiki>g

1.  CLASS {Group}
2.  ALIAS addgroup {#if !\$ismember( \$0, @Party) {#var Party \$additem(
    \$0, @Party)}}
3.  ALIAS gt {#LOO \$numitems( @Party) {tell \$item( @Party, \$i) GT:
    \$0}}
4.  ALIAS remgroup {#var Party \$delitem( \$0, @Party)}
5.  ALIAS groupcheck {#say @{Party}}
6.  CLASS 0

</pre>

pretty much the same as the above