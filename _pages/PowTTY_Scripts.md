---
title: "PowTTY Scripts"
---

# PowTTY

### Timebar, by Jahara

This requires PowTTY 1.03. Update your client if it doesn't work.
<nowiki>g

1.  ("Jahara's Timebar")
2.  action \>+timeam ^\$1am on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print\|#var \$time_raw=\$1am\|#var
    \$time_month=\$4\|#if (\$1 == 12) \#var
    @time_current=(%(\$1+12))\|#else \#var
    @time_current=\$1\|checkdate\|calctime\|printtime}
3.  action \>+timepm ^\$1pm on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print\|#var \$time_raw=\$1pm\|#var
    \$time_month=\$4\|#if (\$1 == 12) \#var @time_current=\$1\|#else
    \#var @time_current=(%(\$1+12))\|checkdate\|calctime\|printtime}

<!-- -->

1.  alias checkdate={#if (\$time_month == "Astron") {#var
    @time_dawn=7\|#var @time_dusk=7\|#var \$time_season=Early
    Spring}\|#if (\$time_month == "Thrimidge") {#var @time_dawn=7\|#var
    @time_dusk=8\|#var \$time_season=Spring}\|#if (\$time_month ==
    "Forelithe") {#var @time_dawn=6\|#var @time_dusk=8\|#var
    \$time_season=Late Spring}\|#if (\$time_month == "Afterlithe") {#var
    @time_dawn=5\|#var @time_dusk=9\|#var \$time_season=Early
    Summer}\|#if (\$time_month == "Wedmath") {#var @time_dawn=4\|#var
    @time_dusk=10\|#var \$time_season=Summer}\|#if (\$time_month ==
    "Halimath") {#var @time_dawn=5\|#var @time_dusk=9\|#var
    \$time_season=Late Summer}\|#if (\$time_month == "Winterfilth")
    {#var @time_dawn=6\|#var @time_dusk=8\|#var \$time_season=Early
    Autumn}\|#if (\$time_month == "Blotmath") {#var @time_dawn=7\|#var
    @time_dusk=8\|#var \$time_season=Autumn}\|#if (\$time_month ==
    "Foreyule") {#var @time_dawn=7\|#var @time_dusk=7\|#var
    \$time_season=Late Autumn}\|#if (\$time_month == "Afteryule") {#var
    @time_dawn=8\|#var @time_dusk=6\|#var \$time_season=Early
    Winter}\|#if (\$time_month == "Solmath") {#var @time_dawn=9\|#var
    @time_dusk=5\|#var \$time_season=Winter}\|#if (\$time_month ==
    "Rethe") {#var @time_dawn=8\|#var @time_dusk=6\|#var
    \$time_season=Late Winter}}

<!-- -->

1.  alias calctime={#if (@time_current \< @time_dawn) {#var
    @time_ticks_left=(@time_dawn-@time_current+1)\|#var
    \$time_state_current=\033\[34mNIGHT\033\[0m\|#var
    \$time_state_next=DAY}\|#if (@time_current \>= (@time_dusk + 12))
    {#var @time_ticks_left=(1 + 24 + @time_dawn - @time_current)\|#var
    \$time_state_current=\033\[34mNIGHT\033\[0m\|#var
    \$time_state_next=DAY}\|#if (@time_current == @time_dawn) {#var
    @time_ticks_left=1\|#var
    \$time_state_current=\033\[31mDAWN\033\[0m\|#var
    \$time_state_next=DAY}\|#if (@time_current \> @time_dawn &&
    @time_current \< (@time_dusk + 12) && @time_current \>= 12 ) {#var
    @time_ticks_left=(@time_dusk+12-@time_current)\|#var
    \$time_state_current=\033\[33mDAY\033\[0m\|#var
    \$time_state_next=NIGHT}\|#if (@time_current \> @time_dawn &&
    @time_current \< (@time_dusk + 12) && @time_current \< 12 ) {#var
    @time_ticks_left=(@time_dusk+12-@time_current)\|#var
    \$time_state_current=\033\[33mDAY\033\[0m\|#var
    \$time_state_next=NIGHT}}

<!-- -->

1.  alias printtime={#print ("")\|#print ("It is currently " +
    \$time_state_current + ", "+\$time_raw+".\011\011\011Dawn:
    "+%(@time_dawn)+"am, Dusk: "+%(@time_dusk)+"pm")\|#if
    (@time_ticks_left == 1) \#(\$time_tick_print="! ")\| \#else
    \#(\$time_tick_print="s.")\| \#print ("Time left until
    "+\$time_state_next+" is "+%(@time_ticks_left)+"
    tick"+\$time_tick_print+" \011\011"+\$time_season+":
    "+\$time_month)\|#print ("")\|timebar\|#print
    ("")\|makedwatch\|timeclear}

<!-- -->

1.  alias makedwatch={#if (@time_ticks_left == 1)
    \#(\$time_tick_print="")\| \#else \#(\$time_tick_print="s")\| \#exe
    ("#alias dwatch={emote 's digital watch displays "+\$time_raw+",
    leaving "+%(@time_ticks_left)+" tick"+\$time_tick_print+" left until
    "+\$time_state_next+"!}")}

<!-- -->

1.  alias timebar={#(\$time_bar="")\|#for (@time_bar=1\|
    @time_bar\<=24\| @time_bar++) {#if (@time_bar \< (@time_dawn + 1))
    \#(\$time_bar += attr "blue")\| \#else \#if (@time_bar \>=
    @time_dusk + 12) \#(\$time_bar += attr "blue")\| \#else
    \#(\$time_bar += attr "yellow")\|#if (@time_bar == @time_current)
    \#(\$time_bar += "\033\[47m##" + noattr + " ")\| \#else
    \#(\$time_bar += attr "inverse" + " " + noattr + " ")}\|#print
    (noattr + "" + \$time_bar + noattr)}

<!-- -->

1.  alias timeclear={#var \$time_bar=\|#var @time_bar=\|#var
    \$time_raw=\|#var \$time_month=\|#var @time_dawn=\|#var
    @time_dusk=\|#var @time_current=\|#var \$time_state_current=\|#var
    \$time_state_next=\|#var @time_ticks_left=\|#var
    \$time_season=\|#var \$time_tick_print=}

</pre>

### Spelltimers

<nowiki>g

1.  (" BLESS ")

<!-- -->

1.  action \>+setblesstimer1 ^You begin to feel the light of Aman shine
    upon you.={#print \|#(\$blesstimer=%(timer))\|blesson}
2.  action \>+setblesstimer2 ^You feel a renewed light shine upon
    you.={#print \|#(\$blesstimer=%(timer))\|blesson}
3.  action \>-showblesstimer ^- bless={#print ("- bless
    ("+%((timer-\${blesstimer})/60)+":"+%(((timer-\${blesstimer}))-(((timer-\${blesstimer})/60)\*60))+")")}
4.  action \>-blessdown ^The light of Aman fades away from
    you.={blessoff\|#print ("\033\[0m\033\[1m\033\[34mThe light of Aman
    fades away from you.\033\[0m (Last
    "+%((timer-\${blesstimer})/60)+":"+%(((timer-\${blesstimer}))-(((timer-\${blesstimer})/60)\*60))+")")}}
5.  alias blessoff={#ac -setblesstimer2\|#ac -showblesstimer\|#ac
    -blessdown}
6.  alias blesson={#ac +setblesstimer2\|#ac +showblesstimer\|#ac
    +blessdown}

<!-- -->

1.  (" ARMOUR ")

<!-- -->

1.  action \>+setarmourtimer1 ^A blue transparent wall slowly appears
    around you.={#print \|#(\$armourtimer=%(timer))\|armouron}
2.  action \>+setarmourtimer2 ^Your magic armour is revitalized.={#print
    \|#(\$armourtimer=%(timer))\|armouron}
3.  action \>-showarmourtimer ^- armour={#print ("- armour
    ("+%((timer-\${armourtimer})/60)+":"+%(((timer-\${armourtimer}))-(((timer-\${armourtimer})/60)\*60))+")")}
4.  action \>-armourdown ^You feel less protected.={armouroff\|#print
    ("\033\[0m\033\[1m\033\[34mYou feel less protected.\033\[0m (Last
    "+%((timer-\${armourtimer})/60)+":"+%(((timer-\${armourtimer}))-(((timer-\${armourtimer})/60)\*60))+")")}}
5.  alias armouron={#ac +setarmourtimer2\|#ac +showarmourtimer\|#ac
    +armourdown}
6.  alias armouroff={#ac -setarmourtimer2\|#ac -showarmourtimer\|#ac
    -armourdown}

<!-- -->

1.  (" SHIELD ")

<!-- -->

1.  action \>+setshieldtimer1 ^You feel protected.={#print
    \|#(\$shieldtimer=%(timer))\|shieldon}
2.  action \>+setshieldtimer2 ^Your protection is revitalized.={#print
    \|#(\$shieldtimer=%(timer))\|shieldon}
3.  action \>-showshieldtimer ^- shield={#print ("- shield
    ("+%((timer-\${shieldtimer})/60)+":"+%(((timer-\${shieldtimer}))-(((timer-\${shieldtimer})/60)\*60))+")")}
4.  action \>-shielddown ^Your magical shield wears
    off.={shieldoff\|#print ("\033\[0m\033\[1m\033\[34mYour magical
    shield wears off.\033\[0m (Last
    "+%((timer-\${shieldtimer})/60)+":"+%(((timer-\${shieldtimer}))-(((timer-\${shieldtimer})/60)\*60))+")")}}
5.  alias shieldon={#ac +setshieldtimer2\|#ac +showshieldtimer\|#ac
    +shielddown}
6.  alias shieldoff={#ac -setshieldtimer2\|#ac -showshieldtimer\|#ac
    -shielddown}

<!-- -->

1.  (" STRENGTH ")

<!-- -->

1.  action \>+setstrtimer1 ^You feel stronger.={#print
    \|#(\$strtimer=%(timer))\|stron}
2.  action \>+setstrtimer2 ^The duration of the strength spell has been
    improved.={#print \|#(\$strtimer=%(timer))\|stron}
3.  action \>-showstrtimer ^- strength={#print ("- strength
    ("+%((timer-\${strtimer})/60)+":"+%(((timer-\${strtimer}))-(((timer-\${strtimer})/60)\*60))+")")}
4.  action \>-strdown ^You feel weaker.={stroff\|#print
    ("\033\[0m\033\[1m\033\[34mYou feel weaker.\033\[0m (Last
    "+%((timer-\${strtimer})/60)+":"+%(((timer-\${strtimer}))-(((timer-\${strtimer})/60)\*60))+")")}}
5.  alias stron={#ac +setstrtimer2\|#ac +showstrtimer\|#ac +strdown}
6.  alias stroff={#ac -setstrtimer2\|#ac -showstrtimer\|#ac -strdown}

<!-- -->

1.  (" SHROUD ")

<!-- -->

1.  action \>+setshroudtimer1 ^You are surrounded by a misty
    shroud.={#print \|#(\$shroudtimer=%(timer))\|shron}
2.  action \>+setshroudtimer2 ^Your misty shroud is renewed.={#print
    \|#(\$shroudtimer=%(timer))\|shron}
3.  action \>-showshroudtimer ^- shroud={#print ("- shroud
    ("+%((timer-\${shroudtimer})/60)+":"+%(((timer-\${shroudtimer}))-(((timer-\${shroudtimer})/60)\*60))+")")}
4.  action \>-shrouddown ^You feel yourself exposed.={shroff\|#print
    ("You feel yourself exposed. (Last
    "+%((timer-\${shroudtimer})/60)+":"+%(((timer-\${shroudtimer}))-(((timer-\${shroudtimer})/60)\*60))+")")}}
5.  alias shron={#ac +setshroudtimer2\|#ac +showshroudtimer\|#ac
    +shrouddown}
6.  alias shroff={#ac -setshroudtimer2\|#ac -showshroudtimer\|#ac
    -shrouddown}

<!-- -->

1.  (" SENSE LIFE ")

<!-- -->

1.  action \>+setsensetimer1 ^You feel your awareness improve.={#print
    \|#(\$sensetimer=%(timer))\|senseon}
2.  action \>+setsensetimer2 ^Your awareness is refreshed.={#print
    \|#(\$sensetimer=%(timer))\|senseon}
3.  action \>-showsensetimer ^- sense life={#print ("- sense life
    ("+%((timer-\${sensetimer})/60)+":"+%(((timer-\${sensetimer}))-(((timer-\${sensetimer})/60)\*60))+")")}
4.  action \>-sensedown ^You feel less aware of your
    surroundings.={senseoff\|#print ("You feel less aware of your
    surroundings. (Last
    "+%((timer-\${sensetimer})/60)+":"+%(((timer-\${sensetimer}))-(((timer-\${sensetimer})/60)\*60))+")")}}
5.  alias senseon={#ac +setsensetimer2\|#ac +showsensetimer\|#ac
    +sensedown}
6.  alias senseoff={#ac -setsensetimer2\|#ac -showsensetimer\|#ac
    -sensedown}

<!-- -->

1.  (" BOB ")

<!-- -->

1.  action \>+setbobtimer1 ^An energy begins to flow within your legs as
    your body becomes lighter.={#print \|#(\$bobtimer=%(timer))\|bobon}
2.  action \>+setbobtimer2 ^The energy in your legs is
    refreshed.={#print \|#(\$bobtimer=%(timer))\|bobon}
3.  action \>-showbobtimer ^- breath of briskness={#print ("- breath of
    briskness
    ("+%((timer-\${bobtimer})/60)+":"+%(((timer-\${bobtimer}))-(((timer-\${bobtimer})/60)\*60))+")")}
4.  action \>-bobdown ^Your legs feel heavier.={boboff\|#print
    ("\033\[0m\033\[1m\033\[34mYour legs feel heavier.\033\[0m (Last
    "+%((timer-\${bobtimer})/60)+":"+%(((timer-\${bobtimer}))-(((timer-\${bobtimer})/60)\*60))+")")}}
5.  alias bobon={#ac +setbobtimer2\|#ac +showbobtimer\|#ac +bobdown}
6.  alias boboff={#ac -setbobtimer2\|#ac -showbobtimer\|#ac -bobdown}

<!-- -->

1.  (" SANC ")

<!-- -->

1.  action \>+setsanctimer1 ^You start glowing.={#print
    \|#(\$sanctimer=%(timer))\|sancon}
2.  action \>+setsanctimer2 ^Your aura glows more intensely.={#print
    \|#(\$sanctimer=%(timer))\|sancon}
3.  action \>-showsanctimer ^- sanctuary={#print ("- sanctuary
    ("+%((timer-\${sanctimer})/60)+":"+%(((timer-\${sanctimer}))-(((timer-\${sanctimer})/60)\*60))+")")}
4.  action \>-sancdown ^The white aura around your body
    fades.={sancoff\|#print ("\033\[0m\033\[1m\033\[34mThe white aura
    around your body fades.\033\[0m (Last
    "+%((timer-\${sanctimer})/60)+":"+%(((timer-\${sanctimer}))-(((timer-\${sanctimer})/60)\*60))+")")}}
5.  alias sancon={#ac +setsanctimer2\|#ac +showsanctimer\|#ac +sancdown}
6.  alias sancoff={#ac -setsanctimer2\|#ac -showsanctimer\|#ac
    -sancdown}

<!-- -->

1.  (" PROTECTION FROM EVIL ")

<!-- -->

1.  action \>+setpfetimer1 ^You have a righteous feeling!={#print
    \|#(\$pfetimer=%(timer))\|pfeon}
2.  action \>+setpfetimer2 ^You feel a renewed righteousness.={#print
    \|#(\$pfetimer=%(timer))\|pfeon}
3.  action \>-showpfetimer ^- protection from evil={#print ("-
    protection from evil
    ("+%((timer-\${pfetimer})/60)+":"+%(((timer-\${pfetimer}))-(((timer-\${pfetimer})/60)\*60))+")")}
4.  action \>-pfedown ^You feel less righteous.={pfeoff\|#print ("You
    feel less righteous. (Last
    "+%((timer-\${pfetimer})/60)+":"+%(((timer-\${pfetimer}))-(((timer-\${pfetimer})/60)\*60))+")")}}
5.  alias pfeon={#ac +setpfetimer2\|#ac +showpfetimer\|#ac +pfedown}
6.  alias pfeoff={#ac -setpfetimer2\|#ac -showpfetimer\|#ac -pfedown}

<!-- -->

1.  (" DETECT EVIL ")

<!-- -->

1.  action \>+setdevtimer1 ^You feel aware of all that is foul and
    evil.={#print \|#(\$devtimer=%(timer))\|devon}
2.  action \>+setdevtimer2 ^Your awareness of evil is refreshed.={#print
    \|#(\$devtimer=%(timer))\|devon}
3.  action \>-showdevtimer ^- detect evil={#print ("- detect evil
    ("+%((timer-\${devtimer})/60)+":"+%(((timer-\${devtimer}))-(((timer-\${devtimer})/60)\*60))+")")}
4.  action \>-devdown ^You sense the red in your vision
    disappear.={devoff\|#print ("You sense the red in your vision
    disappear. (Last
    "+%((timer-\${devtimer})/60)+":"+%(((timer-\${devtimer}))-(((timer-\${devtimer})/60)\*60))+")")}}
5.  alias devon={#ac +setdevtimer2\|#ac +showdevtimer\|#ac +devdown}
6.  alias devoff={#ac -setdevtimer2\|#ac -showdevtimer\|#ac -devdown}

<!-- -->

1.  (" DETECT MAGIC ")

<!-- -->

1.  action \>+setdtmtimer1 ^You become sensitive of magical
    auras.={#print \|#(\$dtmtimer=%(timer))\|dtmon}
2.  action \>+setdtmtimer2 ^Your awareness of magical auras is
    renewed.={#print \|#(\$dtmtimer=%(timer))\|dtmon}
3.  action \>-showdtmtimer ^- detect magic={#print ("- detect magic
    ("+%((timer-\${dtmtimer})/60)+":"+%(((timer-\${dtmtimer}))-(((timer-\${dtmtimer})/60)\*60))+")")}
4.  action \>-dtmdown ^Your perception of magical auras wears
    off.={dtmoff\|#print ("Your perception of magical auras wears off.
    (Last
    "+%((timer-\${dtmtimer})/60)+":"+%(((timer-\${dtmtimer}))-(((timer-\${dtmtimer})/60)\*60))+")")}}
5.  alias dtmon={#ac +setdtmtimer2\|#ac +showdtmtimer\|#ac +dtmdown}
6.  alias dtmoff={#ac -setdtmtimer2\|#ac -showdtmtimer\|#ac -dtmdown}

</pre>

[Category:Software](Category:Software "wikilink")