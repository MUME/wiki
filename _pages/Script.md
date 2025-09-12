---
title: "Script"
permalink: "/Script/"
---

# Powwow

### Autoloot, by Jahara

<nowiki>g

1.  alias loot+={#print ("- Enabled Autoloot");#print;#action
    +loot1;#action +loot2;#(@loot_timer = timer)}
2.  alias loot-={#print ("- Disabled Autoloot");#print;#action
    -loot1;#action -loot2;#var @loot_timer=}

<!-- -->

1.  action \>-loot1 &1 is dead! R.I.P.={#print;#if
    (((timer-@loot_timer)/1000) \> 5) {#(@loot_timer=timer);get
    all.coins all.corpse}}
2.  action \>-loot2 &1 disappears into nothing.={#print;#if
    (((timer-@loot_timer)/1000) \> 5) \#(@loot_timer=timer);get
    all.coins}}

</pre>

### Timebar, by Jahara

<nowiki>g

1.  ("Jahara's Timebar")
2.  action \>+timeam ^\$1am on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print;#var \$time_raw=\$1am;#var \$time_month=\$4;#if
    (\$1 == 12) \#var @time_current=(%(\$1+12));#else \#var
    @time_current=\$1;checkdate;calctime;printtime}
3.  action \>+timepm ^\$1pm on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print;#var \$time_raw=\$1pm;#var \$time_month=\$4;#if
    (\$1 == 12) \#var @time_current=\$1;#else \#var
    @time_current=(%(\$1+12));checkdate;calctime;printtime}

<!-- -->

1.  alias checkdate={#if (\$time_month == "Astron") {#var
    @time_dawn=7;#var @time_dusk=7;#var \$time_season=Early Spring};#if
    (\$time_month == "Thrimidge") {#var @time_dawn=7;#var
    @time_dusk=8;#var \$time_season=Spring};#if (\$time_month ==
    "Forelithe") {#var @time_dawn=6;#var @time_dusk=8;#var
    \$time_season=Late Spring};#if (\$time_month == "Afterlithe") {#var
    @time_dawn=5;#var @time_dusk=9;#var \$time_season=Early Summer};#if
    (\$time_month == "Wedmath") {#var @time_dawn=4;#var
    @time_dusk=10;#var \$time_season=Summer};#if (\$time_month ==
    "Halimath") {#var @time_dawn=5;#var @time_dusk=9;#var
    \$time_season=Late Summer};#if (\$time_month == "Winterfilth") {#var
    @time_dawn=6;#var @time_dusk=8;#var \$time_season=Early Autumn};#if
    (\$time_month == "Blotmath") {#var @time_dawn=7;#var
    @time_dusk=8;#var \$time_season=Autumn};#if (\$time_month ==
    "Foreyule") {#var @time_dawn=7;#var @time_dusk=7;#var
    \$time_season=Late Autumn};#if (\$time_month == "Afteryule") {#var
    @time_dawn=8;#var @time_dusk=6;#var \$time_season=Early Winter};#if
    (\$time_month == "Solmath") {#var @time_dawn=9;#var
    @time_dusk=5;#var \$time_season=Winter};#if (\$time_month ==
    "Rethe") {#var @time_dawn=8;#var @time_dusk=6;#var
    \$time_season=Late Winter}}

<!-- -->

1.  alias calctime={#if (@time_current \< @time_dawn) {#var
    @time_ticks_left=(@time_dawn-@time_current+1);#var
    \$time_state_current=\033\[34mNIGHT\033\[0m;#var
    \$time_state_next=DAY};#if (@time_current \>= (@time_dusk + 12))
    {#var @time_ticks_left=(1 + 24 + @time_dawn - @time_current);#var
    \$time_state_current=\033\[34mNIGHT\033\[0m;#var
    \$time_state_next=DAY};#if (@time_current \> @time_dawn &&
    @time_current \< (@time_dusk + 12) && @time_current \>= 12 ) {#var
    @time_ticks_left=(@time_dusk+12-@time_current);#var
    \$time_state_current=\033\[33mDAY\033\[0m;#var
    \$time_state_next=NIGHT};#if (@time_current \> @time_dawn &&
    @time_current \< (@time_dusk + 12) && @time_current \< 12 ) {#var
    @time_ticks_left=(@time_dusk+12-@time_current);#var
    \$time_state_current=\033\[33mDAY\033\[0m;#var
    \$time_state_next=NIGHT};#if (@time_current == @time_dawn) {#var
    @time_ticks_left=1;#var
    \$time_state_current=\033\[31mDAWN\033\[0m;#var
    \$time_state_next=DAY}}

<!-- -->

1.  alias printtime={#print ("");#print ("It is currently " +
    \$time_state_current + ", "+\$time_raw+".\011\011\011Dawn:
    "+%(@time_dawn)+"am, Dusk: "+%(@time_dusk)+"pm");#if
    (@time_ticks_left == 1) \#(\$time_tick_print="! "); \#else
    \#(\$time_tick_print="s."); \#print ("Time left until
    "+\$time_state_next+" is "+%(@time_ticks_left)+"
    tick"+\$time_tick_print+" \011\011"+\$time_season+":
    "+\$time_month);#print ("");timebar;#print
    ("");makedwatch;timeclear}

<!-- -->

1.  alias makedwatch={#if (@time_ticks_left == 1)
    \#(\$time_tick_print=""); \#else \#(\$time_tick_print="s"); \#exe
    ("#alias dwatch={emote 's digital watch displays "+\$time_raw+",
    leaving "+%(@time_ticks_left)+" tick"+\$time_tick_print+" left until
    "+\$time_state_next+"!}")}

<!-- -->

1.  alias timebar={#(\$time_bar="");#for (@time_bar=1; @time_bar\<=24;
    @time_bar++) {#if (@time_bar \< (@time_dawn + 1) \|\| @time_bar \>=
    (@time_dusk + 12)) \#(\$time_bar += attr "blue"); \#else
    \#(\$time_bar += attr "yellow");#if (@time_bar == @time_current)
    \#(\$time_bar += "\033\[47m##" + noattr + " "); \#else \#(\$time_bar
    += attr "inverse" + " " + noattr + " ")};#print (noattr + "" +
    \$time_bar + noattr)}

<!-- -->

1.  alias timeclear={#var \$time_bar=;#var @time_bar=;#var
    \$time_raw=;#var \$time_month=;#var @time_dawn=;#var
    @time_dusk=;#var @time_current=;#var \$time_state_current=;#var
    \$time_state_next=;#var @time_ticks_left=;#var \$time_season=;#var
    \$time_tick_print=}

</pre>

### Spelltimers, by Jahara

<nowiki>g

1.  ("Spell Timers")

<!-- -->

1.  alias spelltimer_on={#print (attr "bold blue" + \$last_line +
    noattr)}
2.  alias
    spelltimer={#(@spelltimer=\$1);#(@spelltimer_sec=(timer-@spelltimer)/1000%60);#if
    (@spelltimer_sec \< 10) \#print (\$last_line+"
    ("+%((timer-@spelltimer)/1000/60)+":0"+%(@spelltimer_sec)+")");
    \#else \#print (\$last_line+"
    ("+%((timer-@spelltimer)/1000/60)+":"+%(@spelltimer_sec)+")");#var
    @spelltimer=;#var @spelltimer_sec=}
3.  alias
    spelltimer_off={#(@spelltimer=\$1);#(@spelltimer_sec=(timer-@spelltimer)/1000%60);#if
    (@spelltimer_sec \< 10) \#print (attr "bold
    blue"+\$last_line+noattr+" (Last
    "+%((timer-@spelltimer)/1000/60)+":0"+%(@spelltimer_sec)+")");
    \#else \#print (attr "bold blue"+\$last_line+noattr+" (Last
    "+%((timer-@spelltimer)/1000/60)+":"+%(@spelltimer_sec)+")");#var
    @spelltimer=;#var @spelltimer_sec=}

<!-- -->

1.  (" ORKISH DRAUGHT ")
2.  action \>+setdraughttimer The draught burns down your throat, and a
    fiery feeling fills your limbs.={spelltimer_on;draughton}
3.  action \>-showdraughttimer ^- Orkish draught={spelltimer
    @spelltimer_draught}
4.  action \>-draughtdown As the warmth of the draught recedes from your
    limbs, you feel less energetic.={spelltimer_off
    @spelltimer_draught;draughtoff}
5.  alias draughton={#(@spelltimer_draught=timer)#ac
    +showdraughttimer;#ac +draughtdown}
6.  alias draughtoff={#var @spelltimer_draught=;#ac
    -showdraughttimer;#ac -draughtdown}

<!-- -->

1.  (" BLESS ")
2.  action \>+setblesstimer1 You begin to feel the light of Aman shine
    upon you.={spelltimer_on;blesson}
3.  action \>+setblesstimer2 You feel a renewed light shine upon
    you.={spelltimer_on;blesson}
4.  action \>-showblesstimer ^- bless={spelltimer @spelltimer_bless}
5.  action \>-blessdown The light of Aman fades away from
    you.={spelltimer_off @spelltimer_bless;blessoff}
6.  alias blesson={#(@spelltimer_bless=timer);#ac +setblesstimer2;#ac
    +showblesstimer;#ac +blessdown}
7.  alias blessoff={#var @spelltimer_bless=;#ac -setblesstimer2;#ac
    -showblesstimer;#ac -blessdown}

<!-- -->

1.  (" ARMOUR ")
2.  action \>+setarmourtimer1 A blue transparent wall slowly appears
    around you.={spelltimer_on;armouron}
3.  action \>+setarmourtimer2 Your magic armour is
    revitalised.={spelltimer_on;armouron}
4.  action \>-showarmourtimer ^- armour={spelltimer @spelltimer_armour}
5.  action \>-armourdown You feel less protected.={spelltimer_off
    @spelltimer_armour;armouroff}
6.  alias armouron={#(@spelltimer_armour=timer);#ac +setarmourtimer2;#ac
    +showarmourtimer;#ac +armourdown}
7.  alias armouroff={#var @spelltimer_armour=;#ac -setarmourtimer2;#ac
    -showarmourtimer;#ac -armourdown}

<!-- -->

1.  (" SHIELD ")
2.  action \>+setshieldtimer1 You feel
    protected.={spelltimer_on;shieldon}
3.  action \>+setshieldtimer2 Your protection is
    revitalised.={spelltimer_on;shieldon}
4.  action \>-showshieldtimer ^- shield={spelltimer @spelltimer_shield}
5.  action \>-shielddown Your magical shield wears off.={spelltimer_off
    @spelltimer_shield;shieldoff}
6.  alias shieldon={#(@spelltimer_shield=timer);#ac +setshieldtimer2;#ac
    +showshieldtimer;#ac +shielddown}
7.  alias shieldoff={#var @spelltimer_shield=;#ac -setshieldtimer2;#ac
    -showshieldtimer;#ac -shielddown}

<!-- -->

1.  (" STRENGTH ")
2.  action \>+setstrtimer1 You feel stronger.={spelltimer_on;stron}
3.  action \>+setstrtimer2 The duration of the strength spell has been
    improved.={spelltimer_on;stron}
4.  action \>-showstrtimer ^- strength={spelltimer @spelltimer_str}
5.  action \>-strdown You feel weaker.={spelltimer_off
    @spelltimer_str;stroff}
6.  alias stron={#(@spelltimer_str=timer);#ac +setstrtimer2;#ac
    +showstrtimer;#ac +strdown}
7.  alias stroff={#var @spelltimer_str=;#ac -setstrtimer2;#ac
    -showstrtimer;#ac -strdown}

<!-- -->

1.  (" SHROUD ")
2.  action \>+setshroudtimer1 You are surrounded by a misty
    shroud.={spelltimer_on;shron}
3.  action \>+setshroudtimer2 Your misty shroud is
    renewed.={spelltimer_on;shron}
4.  action \>-showshroudtimer ^- shroud={spelltimer @spelltimer_shroud}
5.  action \>-shrouddown You feel yourself exposed.={spelltimer_off
    @spelltimer_shroud;shroff}
6.  alias shron={#(@spelltimer_shroud=timer);#ac +setshroudtimer2;#ac
    +showshroudtimer;#ac +shrouddown}
7.  alias shroff={#var @spelltimer_shroud=;#ac -setshroudtimer2;#ac
    -showshroudtimer;#ac -shrouddown}

<!-- -->

1.  (" SENSE LIFE ")
2.  action \>+setsensetimer1 You feel your awareness
    improve.={spelltimer_on;senseon}
3.  action \>+setsensetimer2 Your awareness is
    refreshed.={spelltimer_on;senseon}
4.  action \>-showsensetimer ^- sense life={spelltimer
    @spelltimer_sense}
5.  action \>-sensedown You feel less aware of your
    surroundings.={spelltimer_off @spelltimer_sense;senseoff}
6.  alias senseon={#(@spelltimer_sense=timer);#ac +setsensetimer2;#ac
    +showsensetimer;#ac +sensedown}
7.  alias senseoff={#var @spelltimer_sense=;#ac -setsensetimer2;#ac
    -showsensetimer;#ac -sensedown}

<!-- -->

1.  (" BOB ")
2.  action \>+setbobtimer1 An energy begins to flow within your legs as
    your body becomes lighter.={spelltimer_on;bobon}
3.  action \>+setbobtimer2 The energy in your legs is
    refreshed.={spelltimer_on;bobon}
4.  action \>-showbobtimer ^- breath of briskness={spelltimer
    @spelltimer_bob}
5.  action \>-bobdown Your legs feel heavier.={spelltimer_off
    @spelltimer_bob;boboff}
6.  alias bobon={#(@spelltimer_bob=timer)#ac +setbobtimer2;#ac
    +showbobtimer;#ac +bobdown}
7.  alias boboff={#var @spelltimer_bob=;#ac -setbobtimer2;#ac
    -showbobtimer;#ac -bobdown}

<!-- -->

1.  (" SANC ")
2.  action \>+setsanctimer1 You start glowing.={spelltimer_on;sancon}
3.  action \>+setsanctimer2 Your aura glows more
    intensely.={spelltimer_on;sancon}
4.  action \>-showsanctimer ^- sanctuary={spelltimer @spelltimer_sanc}
5.  action \>-sancdown The white aura around your body
    fades.={spelltimer_off @spelltimer_sanc;sancoff}
6.  alias sancon={#(@spelltimer_sanc=timer)#ac +setsanctimer2;#ac
    +showsanctimer;#ac +sancdown}
7.  alias sancoff={#var @spelltimer_sanc=;#ac -setsanctimer2;#ac
    -showsanctimer;#ac -sancdown}

<!-- -->

1.  (" PROTECTION FROM EVIL ")
2.  action \>+setpfetimer1 You have a righteous
    feeling!={spelltimer_on;pfeon}
3.  action \>+setpfetimer2 You feel a renewed
    righteousness.={spelltimer_on;pfeon}
4.  action \>-showpfetimer ^- protection from evil={spelltimer
    @spelltimer_pfe}
5.  action \>-pfedown You feel less righteous.={spelltimer_off
    @spelltimer_pfe;pfeoff}
6.  alias pfeon={#(@spelltimer_pfe=timer);#ac +setpfetimer2;#ac
    +showpfetimer;#ac +pfedown}
7.  alias pfeoff={#var @spelltimer_pfe=;#ac -setpfetimer2;#ac
    -showpfetimer;#ac -pfedown}

<!-- -->

1.  (" DETECT EVIL ")
2.  action \>+setdevtimer1 You feel aware of all that is foul and
    evil.={spelltimer_on;devon}
3.  action \>+setdevtimer2 Your awareness of evil is
    refreshed.={spelltimer_on;devon}
4.  action \>-showdevtimer ^- detect evil={spelltimer @spelltimer_dev}
5.  action \>-devdown You sense the red in your vision
    disappear.={spelltimer_off @spelltimer_dev;devoff}
6.  alias devon={#(@spelltimer_dev=timer);#ac +setdevtimer2;#ac
    +showdevtimer;#ac +devdown}
7.  alias devoff={#var @spelltimer_dev=;#ac -setdevtimer2;#ac
    -showdevtimer;#ac -devdown}

<!-- -->

1.  (" DETECT MAGIC ")
2.  action \>+setdtmtimer1 You become sensitive of magical
    auras.={spelltimer_on;dtmon}
3.  action \>+setdtmtimer2 Your awareness of magical auras is
    renewed.={spelltimer_on;dtmon}
4.  action \>-showdtmtimer ^- detect magic={spelltimer @spelltimer_dtm}
5.  action \>-dtmdown Your perception of magical auras wears
    off.={spelltimer_off @spelltimer_dtm;dtmoff}
6.  alias dtmon={#(@spelltimer_dtm=timer);#ac +setdtmtimer2;#ac
    +showdtmtimer;#ac +dtmdown}
7.  alias dtmoff={#var @spelltimer_dtm=;#ac -setdtmtimer2;#ac
    -showdtmtimer;#ac -dtmdown}

</pre>

### Autologging, by Jahara

<nowiki>g

1.  ("AutoLogging")

<!-- -->

1.  action \>+datelog1 Never forget! Try to role-play...={#print;#action
    -datelog1;#action +datelog3;#action +datelog4;#action
    +datelog5;getcharacter}
2.  action \>+datelog2 Reconnecting.={#print;#action -datelog2;#action
    +datelog3;#action +datelog4;#action +datelog5;getcharacter}
3.  action \>-datelog3 Real time is \$1 \$2 \$3 \$4:\$5:\$6 \$7
    GMT.={#print;autolog \$1 \$2 \$3 \$4 \$5 \$6 \$7}
4.  action \>-datelog4 Real time is \$1 \$2 \$3 \$4:\$5:\$6 \$7
    GMT.={#print;autolog \$1 \$2 \$3 \$4 \$5 \$6 \$7}
5.  action \>+datelog5 This ranks you as \$1. XP: \$2 TP:
    \$3={#print;#var
    \$character=\$1;#(@xpcnt_old_xp=\$2);#(@xpcnt_old_tp=\$3);time;#action
    -datelog5}

<!-- -->

1.  alias getcharacter={#action +datelog5;#send ("info This ranks you as
    %M. XP: %x TP: %t");#identify;#isprompt}
2.  alias autolog={#(\$logfile="logs/" + \\7 + " " + \\2 + " " + \\3 +
    " - " + \\character + " - " + \\4 + "." + \\5 + "." + \\6 +
    ".log");#exe ("#movie " + \\logfile);#print (attr "yellow" + " -
    Auto-logging to: " + \\logfile + noattr);#action -datelog3;#action
    -datelog4}

</pre>

### XP Counter, by Jahara

Note: requires Autologger! <nowiki>g

1.  alias trip={#send ("emote has received " + %(@xpcnt_session_xp) + "
    xp and " + %(@xpcnt_session_tp) + " tp on this trip.")}
2.  alias gain={#send ("emote received " + %(@xpcnt_gain_xp) + " xp and
    " + %(@xpcnt_gain_tp) + " tp from the last kill.")}
3.  alias hour={#send ("emote is averaging " + %(@xpcnt_hour_xp/1000) +
    "k xp and " + %(@xpcnt_hour_tp) + " tp per hour.")}

<!-- -->

1.  (@xpcnt_hour_xp = 0)
2.  (@xpcnt_hour_tp = 0)
3.  (@xpcnt_gain_tp = 0)
4.  (@xpcnt_gain_xp = 0)
5.  (@xpcnt_session_tp = 0)
6.  (@xpcnt_session_xp = 0)
7.  (@xpcnt_session_time = 1)
8.  (@xpcnt_calculate = 1)
9.  (@xpcnt_old_tp = 0)
10. (@xpcnt_old_xp = 0)
11. (@xpcnt_timer = timer)

<!-- -->

1.  alias xp+={#action +xp2}
2.  alias xp-={#action -xp2}

<!-- -->

1.  al xp={#send ("info XPCOUNTER: %x %t %X %T %L.")}
2.  al xpreset={#if ("\$0"=="") \#var @xpcnt_session_xp=0; \#else \#var
    @xpcnt_session_xp=\$0;#var @xpcnt_session_time=1}
3.  al tpreset={#if ("\$0"=="") \#var @xpcnt_session_tp=0; \#else \#var
    @xpcnt_session_tp=\$0;#var @xpcnt_session_time=1}

<!-- -->

1.  al
    xpcalc={#(@xpcnt_gain_xp=\$1-@xpcnt_old_xp);#(@xpcnt_gain_tp=\$2-@xpcnt_old_tp);#(@xpcnt_session_xp+=@xpcnt_gain_xp);#(@xpcnt_session_tp+=@xpcnt_gain_tp);#(@xpcnt_old_xp=\$1);#(@xpcnt_old_tp=\$2);#(@xpcnt_need_xp=\$3);#(@xpcnt_need_tp=\$4)}

<!-- -->

1.  alias
    ratecalc={#(@xpcnt_session_time=\$1);#(@xpcnt_hour_xp=60\*@xpcnt_session_xp/@xpcnt_session_time);#(@xpcnt_hour_tp=60\*@xpcnt_session_tp/@xpcnt_session_time)}

<!-- -->

1.  al xpprint={#print ("- Gained: xp: " + %(@xpcnt_gain_xp) +
    "\011\011tp: "+ %(@xpcnt_gain_tp) );#print ("- Trip: xp: " +
    %(@xpcnt_session_xp) + "\011\011tp: " + %(@xpcnt_session_tp) + "
    \011\011Session: " + %(@xpcnt_session_time) + " min.");#print ("-
    Needed: xp: " + %(@xpcnt_need_xp) + "\011\011tp: " +
    %(@xpcnt_need_tp));#print ("- Rate: xp: " + %(@xpcnt_hour_xp) +
    "\011\011tp: " + %(@xpcnt_hour_tp) + " \011\011Gold: " +
    %(@money/2000) + " g, " + %(60\*@money/2000/@xpcnt_session_time) + "
    g/hr.")}

<!-- -->

1.  ac \>+xp2 ^You receive your share of experience.={#print;#if
    (((timer-@xpcnt_timer)/1000) \> 5) {#(@xpcnt_timer=timer);#var
    @xpcnt_calculate=1;xp}}

<!-- -->

1.  ac \>+xp1 XPCOUNTER: \$1 \$2 \$3 \$4 \$5.={#if (@xpcnt_calculate==1)
    {#(@xpcnt_calculate=0);xpcalc \$1 \$2 \$3 \$4};ratecalc \$5;xpprint}

<!-- -->

1.  ac \>-xp0 ^Welcome to the land of Middle
    Earth.={#print;xpreset;tpreset;xp;#var @xpcnt_calculate=1}
2.  ac \>-xp3 ^Reconnecting.={#print;xpreset;tpreset;xp;#var
    @xpcnt_calculate=1}

</pre>

# PowTTY

### Timebar, by Jahara

<nowiki>g

1.  ("Jahara's Time Checker")
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