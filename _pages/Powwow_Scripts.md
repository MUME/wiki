---
title: "Powwow Scripts"
permalink: "/Powwow_Scripts/"
---

# Powwow

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

### Timebar v2.0, by Jahara

- added seconds support
- to show the time in the prompt then type: time+

<nowiki>g

1.  ("Jahara's Timebar")

<!-- -->

1.  ("Catches Time to Initiate Timebar Script")
2.  alias jtime={#print ("You call upon an large clock from another
    dimension...");#print (attr "yellow" + "WARNING!" + " This clock may
    be inaccurate!" + noattr);#exe ! perl time.pl}

<!-- -->

1.  action \>+timeam ^\$1am on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print;#(\$time_month=\\4);#if (\$1 == 12)
    \#(@time_current=\$1+12);#else
    \#(@time_current=\$1);checkdate;calctime;printtime}
2.  action \>+timepm ^\$1pm on \$2, the \$3 of \$4, Year \$5 of the
    Third Age.={#print;#(\$time_month=\\4);#if (\$1 == 12)
    \#(@time_current=\$1);#else
    \#(@time_current=\$1+12);checkdate;calctime;printtime}
3.  action \>+puketime ^\$1, the \$2 of \$3, Year \$4 of the Third
    Age.={#(\$time_month=\\3);checkdate;#if (@time_current == 0)
    \#print;#else {#if (@time_current \< 12) \#print (%(@time_current) +
    "am on " + \$last_line); \#else \#if (@time_current \> 12 &&
    @time_current \< 24) \#print (%(@time_current-12) + "pm on " +
    \$last_line);#else \#if (@time_current == 12) \#print
    (%(@time_current) + "pm on " + \$last_line);#else \#print
    (%(@time_current-12) + "am on " + \$last_line);calctime;printtime}}

<!-- -->

1.  ("Synchronizes Clock")
2.  action \>+clockam ^The current time is \$1:\$2
    am.={#print;#(@time_tick=timer-\$2\*1000);#in tick (60000-\$2\*1000)
    timebar_tick;#if (\$1 == 12) \#(@time_current=\$1+12);#else
    \#(@time_current=\$1)}
3.  action \>+clockpm ^The current time is \$1:\$2
    pm.={#print;#(@time_tick=timer-\$2\*1000);#in tick (60000-\$2\*1000)
    timebar_tick;#if (\$1 == 12) \#(@time_current=\$1);#else
    \#(@time_current=\$1+12)}

<!-- -->

1.  action \>+daytick1 The day has begun.={#print (\$last_line + "
    (Drift " +
    %((timer-@time_tick)/1000%60)+")");#(@time_tick=timer);#in
    tick (60000) timebar_tick;#(@time_current=@time_dawn+1)}
2.  action \>+nighttick1 The night has begun.={#print (\$last_line + "
    (Drift " +
    %((timer-@time_tick)/1000%60)+")");#(@time_tick=timer);#in
    tick (60000) timebar_tick;#(@time_current=12+@time_dusk+1)}
3.  action \>daytick2 Light gradually filters in, proclaiming a new
    sunrise outside.={#print (\$last_line + " (Drift " +
    %((timer-@time_tick)/1000%60)+")");#(@time_tick=timer);#in
    tick (60000) timebar_tick;#(@time_current=@time_dawn)}
4.  action \>+nighttick2 The last ray of light fades, and all is
    swallowed up in darkness.={#print (\$last_line + " (Drift " +
    %((timer-@time_tick)/1000%60)+")");#(@time_tick=timer);#in
    tick (60000) timebar_tick;#(@time_current=12+@time_dusk+1)}

<!-- -->

1.  ("Tick Mechanism")
2.  alias timebar_tick={#in tick (60000) timebar_tick;#if (@time_current
    \< 24) \#(@time_current+=1); \#else \#(@time_current=1)}

<!-- -->

1.  ("Figure out the Month")
2.  alias checkdate={#(\$time_dusk="7 8 8 9 10 9 8 8 7 6 5
    6");#(\$time_dawn="7 7 6 5 4 5 6 7 7 8 9
    8");#(\$human_months="Astron Thrimidge Forelithe Afterlithe Wedmath
    Halimath Winterfilth Blotmath Foreyule Afteryule Solmath
    Rethe");#(\$elven_months="Gwirith Lothron Norui Cerveth Urui
    Ivanneth Narbeleth Hithui Birithron Narwain Ninui
    Gwaeron");#(\$elven_months_latin="Gwirith Lothron N\363rui Cervth
    \332rui Ivanneth Narbeleth Hithui Birithron Narwain N\355nui
    Gwaeron");#(\$months=\$human_months+" "+\$elven_months+"
    "+\$elven_months_latin);#(\$time_season="Early"+\*20+"Spring Spring
    Late"+\*20+"Spring Early"+\*20+"Summer Summer Later"+\*20+"Summer
    Early"+\*20+"Fall Fall Late"+\*20+"Fall Early"+\*20+"Winter Winter
    Late"+\*20+"Winter");#(@+1=(:?(\$months.\<(\$months?\$time_month))-1)%12+1);#(@time_dusk=%(\$time_dusk:@+1));#(@time_dawn=%(\$time_dawn:@+1));#(\$time_season=\$time_season:@+1);#var
    \$human_months=;#var \$months=;#var \$elven_months_latin=;#var
    \$elven_months=;#var \$time_dusk=;#var \$time_dawn=}

<!-- -->

1.  ("Calculate the Time Left and Next State")
2.  alias calctime={#if (@time_current \< @time_dawn)
    \#(@time_ticks_left=@time_dawn-@time_current+1,\$time_state_current="\033\[34mNIGHT\033\[0m",\$time_state_next="DAY");#else
    \#if (@time_current \>= (@time_dusk + 12))
    \#(@time_ticks_left=1+24+@time_dawn-@time_current,\$time_state_current="\033\[34mNIGHT\033\[0m",\$time_state_next="DAY");#else
    \#if (@time_current \> @time_dawn && @time_current \< (@time_dusk +
    12))
    \#(@time_ticks_left=@time_dusk+12-@time_current,\$time_state_current="\033\[33mDAY\033\[0m",\$time_state_next="NIGHT");#else
    \#if (@time_current == @time_dawn)
    \#(@time_ticks_left=1,\$time_state_current="\033\[31mDAWN\033\[0m",\$time_state_next="DAY")}

<!-- -->

1.  ("Prints the Time")
2.  alias printtime={#if (@time_tick == 0) \#(@+1=0);#else
    \#(@+1=(timer-@time_tick)/1000%60);#if (@+1 \< 10)
    \#(\$time_pretty="0");#else \#(\$time_pretty="");#if (@time_current
    \< 12) \#(\$time_pretty=%(@time_current)
    +":"+\$time_pretty+%(@+1)+"am");#else \#if (@time_current \> 12 &&
    @time_current \< 24)
    \#(\$time_pretty=%(@time_current-12)+":"+\$time_pretty+%(@+1)+"pm");#else
    \#if (@time_current == 12)
    \#(\$time_pretty=%(@time_current)+":"+\$time_pretty+%(@+1)+"pm");
    \#else \#(\$time_pretty=%(@time_current-12) + ":" + \$time_pretty +
    %(@+1) + "am");#print ("");#print ("It is currently " +
    \$time_state_current + ", "+ \$time_pretty +"\011\011\011Dawn:
    "+%(@time_dawn)+"am, Dusk: "+%(@time_dusk)+"pm");#if
    (@time_ticks_left == 1) \#(\$time_pretty="! "); \#else
    \#(\$time_pretty="s."); \#print ("Time left until
    "+\$time_state_next+" is "+ attr "green" + %(@time_ticks_left)+
    noattr +" tick"+\$time_pretty+" \011\011"+\$time_season+":
    "+\$time_month);#print ("");timebar;#print ("");#var
    \$time_month=;#var \$time_state_current=;#var
    \$time_state_next=;#var @time_ticks_left=;#var \$time_season=;#var
    \$time_pretty=}

<!-- -->

1.  alias timebar={#(\$time_bar="");#for (@+1=1; @+1\<=24; @+1++) {#if
    (@+1 \< (@time_dawn+1) \|\| @+1 \>= (@time_dusk+12)) \#(\$time_bar
    += attr "blue"); \#else \#(\$time_bar += attr "yellow");#if (@+1
    == @time_current) \#(\$time_bar += attr "on white" + "##" + noattr +
    " "); \#else \#(\$time_bar += attr "inverse" + " " + noattr + "
    ")};#print (noattr + "" + \$time_bar + noattr);#var \$time_bar=}

<!-- -->

1.  ("Makes the Digital Watch Alias")
2.  alias dwatch={calctime;#if (@time_tick == 0) \#(@+1=0);#else
    \#(@+1=60-(timer-@time_tick)/1000%60);#if (@+1 == 0)
    \#(\$time_pretty=%(@time_ticks_left)+":00");#else \#if (@+1 \< 10)
    \#(\$time_pretty=%(@time_ticks_left-1)+":0"+%(@+1));#else
    \#(\$time_pretty=%(@time_ticks_left-1)+":"+%(@+1));#send ("emote 's
    digital watch shows "+\$time_pretty+" ticks left until
    "+\$time_state_next+"!");#var \$time_state_current=;#var
    \$time_state_next=;#var @time_ticks_left=;#var \$time_pretty=}

<!-- -->

1.  ("Generates variable \$time_pretty for use in a prompt!")
2.  alias time_prompt={#if (@time_current != 0 && @time_tick != 0)
    {calctime;#(@+1=60-(timer-@time_tick)/1000%60);#if (@+1 \> 59)
    \#(\$time_pretty=%(@time_ticks_left)+":00");#else \#if (@+1 \< 10)
    \#(\$time_pretty=%(@time_ticks_left-1)+":0"+%(@+1));#else
    \#(\$time_pretty=%(@time_ticks_left-1)+":"+%(@+1));#if
    (\$time_state_next=="DAY") \#(\$time_pretty=" "+attr
    "BLUE"+\$time_pretty+noattr);#else \#(\$time_pretty=" "+attr
    "yellow"+\$time_pretty+noattr);#var \$time_state_current=;#var
    \$time_state_next=;#var @time_ticks_left=}}

<!-- -->

1.  prompt %default
    ("^(\[o\\\*\\!\\)\]\[\\\\#\\\\\\f\\\\\\\<\\%\\~\\W\\U\\+\\:\\=\\O\]\[^
    \]\*)(( CsW \| sW \| Cs \| s )\*)(\[^\>\]\*\>)")={#isprompt -1;#if
    (@time_prompt==1) time_prompt;#if (\*\$(3)) \#(\$prompt = \\2 +
    \$time_pretty + attr "red" + \\3 + noattr + \\5);#else \#(\$prompt =
    \\2 + \$time_pretty + \\5);#var \$time_pretty=}

<!-- -->

1.  alias time+={#(@time_prompt=1)}
2.  alias time-={#var @time_prompt=}

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
4.  alias tnl={#send ("emote needs " + %(@xpcnt_need_xp) + " xp and " +
    %(@xpcnt_need_tp) + " tp to reach the next level.")}

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
    "\011\011tp: " + %(@xpcnt_hour_tp))}

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

### NoSneak Red Prompt, by Jahara

Turns the prompt red if you have nosneak <nowiki>g

1.  prompt %default
    ("^(\[o\\\*\\!\\)\]\[\\\\#\\\\\\f\\\\\\\<\\%\\~\\W\\U\\+\\:\\=\\O\])((
    CsW \| sW \| Cs \| s )\*)(\[^\>\]\*\>)")={#isprompt -1;#if (\*\$(3))
    \#(\$prompt = \\2 + attr "red" + \\3 + noattr + \\5);#else
    \#(\$prompt = \\2 + \\5)}

</pre>