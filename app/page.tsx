"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Copy, Shuffle, Zap, Share2, Eye, EyeOff } from "lucide-react"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { KeyFeatures } from "@/components/key-features"
import { HowToUse } from "@/components/how-to-use"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatIsBeeMovieScript } from "@/components/what-is-bee-movie-script"

const BEE_MOVIE_SCRIPT = `Narrator:	According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.
 	Cut to Barry's room, where he's picking out what to wear.
Barry	Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Yeah, let's shake it up a little.
 	Barry uses honey from a dispenser to style his hair, rinse his mouth, and then applies it to his armpits.
Mom (Janet Benson)	(calling from downstairs:) Barry! Breakfast is ready!
Barry:	Coming! (phone rings) Oh, hang on a second. (adjusts his antennas into a headset) Hello?
Adam Flayman	(on the phone) Barry?
Barry:	Adam?
Adam:	Can you believe this is happening?
Barry:	I can't believe it. I'll pick you up. (hangs up, sharpens his stinger) Lookin' sharp. (flies downstairs)
Mom:	Barry, why don't you use the stairs? Your father paid good money for those.
Barry:	Sorry. I'm excited.
Dad (Martin Benson):	Here's the graduate. We're very proud of you, son. And a perfect report card, all B's.
Mom:	Very proud. (touches Barry's hair)
Barry:	Ma! I got a thing going here.
Mom:	Ah, you got some lint on your fuzz.
Barry:	Ow! That's me!
Dad:	Wave to us! We'll be in row 118,000.
Barry:	Bye! (flies off)
Mom:	Barry, I told you, stop flying in the house!
 	(Barry drives his car to pick up his classmate. Adam's outside his house, reading the Hive Today newspaper. The front page headline reads "FRISBEE HITS HIVE ! Internet Down. Bee: 'I heard sound, then Wham-o!'")
Barry:	Hey, Adam.
Adam:	Hey, Barry. Is that fuzz gel?
Barry:	A little. It's a special day, finally graduating.
Adam:	Never thought I'd make it.
Barry:	Yeah, three days of grade school, three days of high school.
Adam:	Those were so awkward.
Barry:	Three days of college. I'm glad I took off one day in the middle and just hitchhiked around the hive.
Adam:	You did come back different.
 	(a bee calls out as they drive past)
Bee:	Hi, Barry.
Barry:	Hey Artie, growing a mustache? Looks good.
Adam:	Hey, did you hear about Frankie?
Barry:	Yeah.
Adam:	You goin' to his funeral?
Barry:	No, I'm not goin' to his funeral. Everybody knows you sting someone, you die. You don't waste it on a squirrel. He was such a hothead.
Adam:	Yeah, I guess he could have just gotten out of the way.
 	(They make various noises as the car goes up and down some hills and does a loop on the road.)
A & B	Woah! Oooooooh!
Adam:	I love this incorporating an amusement park right into our regular day.
Barry:	I guess that's why they say we don't need vacations.
 	(They arrive, fly in and take their seats.)
Barry:	Boy, quite a bit of pomp... under the circumstances.
Barry:	Well, Adam, today we are men.
Adam:	We are!
Barry:	Bee-men.
Adam:	Amen!
A & B:	Hallelujah! (bumping each other) Aaaaaaaaaaaah!
Announcer:	Students, faculty, distinguished bees, please welcome Dean Buzzwell.
 	Dean Buzzwell walks onto the stage and taps the microphone.
Buzzwell:	Welcome, New Hive City graduating class of... (presses a button to change the timer on the podium from 9:00 to 9:15) ...9:15. And that concludes our graduation ceremonies.
 	(Students cheer, throw their caps into the air as helmets are placed on their heads.)
Buzzwell:	And begins your career at Honex Industries!
Barry:	Are we gonna pick our jobs today?
Adam:	I heard it's just orientation.
Barry:	Huh. Woah. Heads up! Here we go.
 	(The stands for Winger University the students are sitting in begin converting into tram seating.)
Female announcer:	Keep your hands and antennas inside the tram at all times. (flies down to go in the tram as it starts moving and repeats it in Spanish:) Mantenga sus manos y antenas dentro del tranvía en todo momento.
Barry:	Wonder what it's going to be like?
Adam:	A little scary. (he and Barry mimic shivering and making scared noises)
Trudy, the Honex tour guide:	Welcome to Honex, a division of Honesco and a part of the Hexagon Group.
Barry:	This is it!
everyone:	Wow. (tram moves into the factory floor)
Barry:	Wow.
Trudy:	We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life. Honey begins when our valiant Pollen Jocks bring the nectar to the hive. Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as...
everyone:	Honey!
 	(Tour guide grabs a beaker of honey as they drive by and tosses it to the group, which bounce it around towards the back.}
Adam:	That girl was hot.
Barry:	She's my cousin!
Adam:	She is?
Barry:	Yes, we're all cousins.
Adam:	Right. You're right.
Trudy:	At Honex, we also constantly strive to improve every aspect of bee existence. These bees are stress-testing a new helmet technology.
 	(Behind a display window, a bee puts on a helmet, then runs back and forth as levers holding a rolled-up magazine, flyswatter and a shoe move down to try to hit him. He is hit by the magazine, dodges the flyswatter, but then hit by the boot and again by all three, followed by being sprayed with aerosol from two cans. He signals he's okay, but is flattened by the flyswatter, magazine and shoe converging to strike him together. He signals he's still okay by poking his arm up through a hole in the flyswatter and giving another thumbs up. The tram riders applaud.)
Adam:	Ooh. What do you think he makes?
Barry:	Not enough.
Trudy:	And here we have our latest advancement, the Krelman.
Barry:	Wow, what does that do?
Trudy:	Catches that little strand of honey that hangs after you pour it. Saves us millions.
 	(A Krelman worker waves and Adam waves back.)
Adam:	Uh, uh, can anyone work on the Krelman?
Trudy:	Of course. Most bee jobs are small ones. But bees know that every small job, if it's done well, means a lot. But choose carefully because you'll stay in the job that you pick for the rest of your life.
Barry:	The same job the rest of your life? I didn't know that.
Adam:	What's the difference?
Barry:	Huh?
Trudy:	And you'll be happy to know that bees, as a species, haven't had one day off in 27 million years. Wooh!
Barry:	So you'll just work us to death?
Trudy:	We'll sure try.
 	(Everyone laughs while Barry looks uncomfortable. The tram converts into a boat that flows down a log-flume style ramp with honey in it, then converts back to a wheeled tram at the end.)
 	(With the tour over, Adam and Barry head home. Adam jumps with excitement.)
Adam:	Wow! That blew my mind!
Barry:	"What's the difference?" Adam, how could you say that? One job forever? That's an insane choice to have to make.
Adam:	Well, I'm relieved. Now we only have to make one decision in life.
Barry:	But, Adam, how could they never have told us that?
Adam:	Barry, why would you question anything? We're bees. We're the most perfectly functioning society on Earth.
 	(a filling station attendant yells at a bee for putting the honey nozzle into his own mouth.)
Barry:	Yeah, but Adam, did you ever think that maybe things work a little too well around here?
Adam:	Like what? Give me one example.
 	(both stop in the middle of an intersection. the traffic adjusts to drive around them.)
Barry:	I don't know. But you know what I'm talking about.
Announcer over speaker:	Please clear the gate. Royal Nectar Force on approach. Royal Nectar Force on approach.
Barry:	Wait a second. Check it out. Hey, those are Pollen Jocks!
Adam:	Wow.
 	(Pollen Jocks fly into the hive and land.)
Adam:	I've never seen them this close.
Barry:	They know what it's like to go outside the hive.
Adam:	Yeah, but some of them don't come back.
 	(two lady bees wave at the jocks and call out:)
Girl Bees	Hey, Jocks!
Hi, Jocks!
 	(The pollen is removed from the jocks and collected into storage capsules marked "Nectar", then trucked away. A General flies over to welcome them.)
General:	You guys did great! You're monsters! You're sky freaks! I love it! I love it!
Barry:	I wonder where those guys have just been.
Adam:	I don't know.
Barry:	Their day's not planned. Outside the hive, flying who knows where, doing who knows what.
Adam:	You can't just decide one day to be a Pollen Jock. You have to be bred for that.
Barry:	Right. (pollen begins drifting down around them) Look at that. That's more pollen than you and I will ever see in a lifetime.
Adam:	It's just a status symbol. I think bees make too big a deal out of it.
Barry:	Perhaps. Unless you're wearing it and the ladies see you wearing it.
 	(the same two lady bees giggle at being talked about by Barry)
Adam:	Those ladies? Aren't they our cousins too?
Barry:	Distant. Distant.
 	Three pollen jocks observe them.
Jackson:	Look at these two.
Splitz:	Couple of Hive Harrys.
Jackson:	Let's have some fun with them.
Lady 1:	It must be so dangerous being a Pollen Jock.
Barry:	Oh, yeah. One time a bear had me pinned up against a mushroom! He had one paw on my throat, and with the other, he was slapping me back and forth across the face!
Lady 2:	Oh, my!
Barry:	I never thought I'd knock him out.
Lady 1:	(to Adam) And what were you doing during all of this?
Adam:	Obviously, I was trying to alert the authorities.
Barry:	I can autograph that if you want.
Jackson:	A little gusty out there today, wasn't it, comrades?
Barry:	Yeah. Gusty.
Buzz:	Yeah, we're gonna hit a sunflower patch about six miles from here tomorrow.
Barry:	Six miles, huh?
Adam:	Barry!
Buzz:	It's a puddle jump for us, but, uh, maybe you're not up for it.
Barry:	Maybe I am.
Adam:	(quietly:) You are not.
Buzz:	We're going 0900 at J-Gate.
Adam:	Woah!
Buzz:	What do you think, buzzy-boy? Are you bee enough?
Barry:	I might be. It all depends on what 0900 means.
 	(later, back at home that night, Barry is on the balcony, looking out at the hive)
Dad:	Hey, Honex!
Barry:	Oh! Dad, you surprised me.
Dad	(laughing) Have you decided what you're interested in, son?
Barry:	Well, there's a lot of choices.
Dad:	But you only get one. (laughs again)
Barry:	Dad, do you ever get bored doing the same job every day?
Dad:	Son, let me tell you something about stirring. You grab that stick, and you just move it around, and you stir it around. You get yourself into a rhythm. It's a beautiful thing.
Barry:	You know, Dad, the more I think about it, maybe the honey field just isn't right for me.
Dad:	And you were thinking of what, making balloon animals? That's a bad job for a guy with a stinger.
Barry:	Well, no...
Dad:	Janet, your son's not sure he wants to go into honey!
Mom:	Oh, Barry, you are so funny sometimes.
Barry:	I'm not trying to be funny.
Dad:	You're not funny! You're going into honey. Our son, the stirrer!
Mom:	You're gonna be a stirrer?
Barry:	No one's listening to me!
Dad:	Wait till you see the sticks I have for you.
Barry:	I could say anything I want right now. (in singsong) I'm gonna get an ant tattoo!
Mom:	Oh, let's open some fresh honey and celebrate!
Barry:	Maybe I'll pierce my thorax.
 	(Mom and dad start walking away. Dad raises his glass and says, "To honey!")
Barry:	Shave my antennae.
Mom:	So funny.
Barry:	Shack up with a grasshopper. Get a gold tooth and start calling everybody "dawg"!
Dad:	I'm so proud.
 	(Barry and Adam arrive the next morning at the job selection booth.)
Adam:	I can't believe we're starting work today!
Barry:	Today's the day.
Adam:	Come on! All the good jobs will be gone.
Barry:	(unenthused) Yeah, right.
 	(Dean Buzzwell at his second job, located at the desk in front of the Honex Job Placement Board)
Buzzwell:	Pollen counting, stunt bee, pouring, stirrer, front desk, hair removal...
Sandy Shrimpkin:	Is it still available?
Buzzwell:	Hang on. Two left! And ... one of them's yours! Congratulations! son, Step to the side, please.
Sandy:	Yeah!
Adam:	What'd you get?
Sandy:	Picking the crud out.
Adam:	Woah.
Sandy:	That is stellar!
Adam:	Wow!
Buzzwell:	Couple of newbies?
Adam:	Yes, sir! Our first day! And we are ready!
Buzzwell:	Well, step up and make your choice.
Adam:	(to Barry) Do you want to go first?
Barry:	Uh, no, you go.
Adam:	Oh, my. What's available?
Buzzwell:	Restroom attendant's always open, and not for the reason you think.
Adam:	Any chance of getting on to the Krelman, sir?
Buzzwell:	Sure, you're on. (status for Krelman worker changes suddenly) Oh, I'm sorry, the Krelman just closed out.
Adam:	Oh!
Buzzwell:	Wax monkey's always open. And the Krelman just opened up again.
Adam:	What happened?
Buzzwell:	Well, whenever a bee dies, that's an opening. See that? He's dead, dead, another dead one, deady, deadified, two more dead. Dead from the neck up, dead from the neck down. But, that's life!
Adam:	Oh, this is so hard! Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, antenna ball polisher, mite wrangler.... Barry, what do you think I should... Barry? Barry!
General:	All right, we've got the sunflower patch in quadrant nine. Geranium window box on Sutton Place...
 	(Adam calls Barry.) What happened to you? Where are you?
Barry:	I'm going out.
Adam:	Out? Out where?
Barry:	Out there.
Adam:	Oh, no!
Barry:	I have to, before I go to work for the rest of my life.
Adam:	You're gonna die! You're crazy! Hello?
Barry:	Oh, another call coming in.
 	(Barry hangs up as Adam says again, "You're crazy!")
General:	If anyone's feeling brave, there's a Korean deli on 83rd that gets their roses today.
Barry:	Hey, guys.
Buzz:	Well, look at that.
Splitz:	Isn't that the kid we saw yesterday?
General:	Hold it, son, flight deck's restricted.
Jackson:	It's okay, Lou. We're gonna take him up.
Splitz:	Yeah.
General:	Really? Feeling lucky, are you?
Flight crew bee:	(holds clipboard for Barry) Sign here, here. Just initial that. Thank you.
General:	Okay, you got a rain advisory today, and as you all know, bees cannot fly in rain. So be careful. As always, watch your brooms, hockey sticks, dogs, birds, bears and bats. Also, I got a couple of reports of root beer being poured on us. Murphy's in a home because of it, just babbling like a cicada!
Barry:	That's awful.
General:	And a reminder for all you rookies, bee law number one, absolutely no talking to humans! All right, launch positions!
 	(the Pollen Jocks begin chanting "Buzz, buzz, buzz, buzz!" over and over as they change positions)
General:	Black and yellow!
all Jocks respond:	Hello!
Jock Leader:	You ready for this, hot shot?
Barry:	Yeah. Yeah, bring it on.
 	(the Pollen Jocks begin calling out their flight preparations:)
Wind, check.
Antennae, check.
Nectar pack, check.
Wings, check.
Stinger, check.
Barry:	Scared out of my shorts, check.
General:	Okay, ladies, let's move it out!
 	(flight crews help the Jocks get their wings started)
General:	Pound those petunias, you striped stem-suckers! All of you, drain those flowers!
 	(all depart)
Barry:	Wow! I'm out! I can't believe I'm out! So blue. Woah-ho-ho! I feel so fast and free! (They fly amidst a bunch of colorful kites, and Barry flies through one.) Box kite! Wow! Woah-ho-ho-ho! (They fly through a field of flowers.) Fl-ow-ahs!
Splitz:	This is Blue Leader. We have roses visual. Bring it around 30 degrees and hold.
Barry:	Roses!
Jackson:	30 degrees, roger. Bringing it around.
 	The squadron lands. The jocks fire their nectar packs and long tubes inject into flowers and suck up nectar.
Splitz:	Stand to the side, kid. It's got a bit of a kick.
Barry:	Oh, that is one nectar collector!
Splitz:	You ever see pollination up close?
Barry:	No, sir.
Splitz:	I pick up some pollen here, sprinkle it over here. Maybe a dash over there, a pinch on that one. See that? It's a little bit of magic, ain't it?
Barry:	Wow, that's amazing. Why do we do that?
Splitz:	That's pollen power, kid. More pollen, more flowers, more nectar, more honey for us.
Barry:	Cool.
 	The squadron flies over a pond. Barry sees his reflection in the water, reenacting the Hippogriff scene from Harry Potter, which itself was a shot-for-shot reenactment of the eagle scene from Rescuers Down Under.
Buzz:	I'm picking up a lot of bright yellow. Could be daisies. Don't we need those?
Splitz:	Copy that visual.
Buzz:	Hold on! One of these flowers seems to be on the move.
Splitz:	Say again? Are you reporting a moving flower?
Buzz:	Affirmative.
 	The three bees land to check out the objects, which turn out to be tennis balls.
Ken:	(in the distance:) That was on the line!
Splitz:	This is the coolest. What is it?
Jackson:	I don't know, but I'm loving this color.
Splitz:	Ah, it smells good. Not like a flower, but I like it.
Jackson:	Yeah, fuzzy.
Buzz:	Chemical-y.
Jackson:	Careful, guys, it's a little grabby.
Barry:	(lands on one of the objects and hugs it) My sweet lord of bees!
Jackson:	Hey, candy-brain, get off there!
Barry:	Problem!
 	(a woman picks up the tennis ball Barry is stuck to and walks back to the serving line)
Barry:	Guys!
Buzz:	This could be bad.
Jackson:	Affirmative.
 	(as the woman bounces the ball a few times, Barry's still stuck to it and says on each bounce:)
Barry:	Very close.
Gonna hurt.
Mama's little boy.
Splitz:	You are way out of position, rookie!
 	(Barry screams as the woman hits the ball)
Ken:	Coming in at you like a missile!
Barry:	"(in slow-motion)" Heeeeelp meeeee!
Jackson:	You know, I don't think these are flowers.
Splitz:	Should we tell him?
Jackson:	I think he knows.
Barry:	(screaming:) What is this?!
Ken:	Match point! You can just start packing up, honey, because I believe you're about to eat it!
 	(Jackson clears his throat, distracting Ken, causing Ken to hit the ball, sending it high into the air and into the street)
Ken:	What! Oh, no, Oh,you cannot be serious!
Barry:	Yowser!
(Barry gets sucked into the engine compartment of a passing car, into the engine, before escaping through a hole and into the car's air conditioning system, where he sees a dead bug stuck to the filter.)
Eww, gross.
 	(a woman in the car turns on the air conditioner, blowing Barry into the car's cabin, where she sees him)
Mother:	There's a bee in the car! (She screams at Barry. Barry screams at her. Everyone except the young girl screams back.)
(to her husband:) Do something!
Father:	I'm driving!
Young girl:	Hi, bee.
Young boy:	He's back here! He's going to sting me!
Mother:	Nobody move. If you don't move, he won't sting you. Freeze!
 	(Everyone stays still, including Barry, who hovers in the same spot.)
Grandma:	He blinked! (she gets out a can of hair spray and sprays it on Barry)
Young boy:	Spray him, Granny!
Father:	What are you doing?!
 	(Barry escapes out the roof vent.)
Barry:	Wow... the tension level out here is unbelievable. I gotta get home. (something moves down past him, very close and fast) Woah. (Barry sees rain starting to fall heavily.)
Barry:	Can't fly in rain. Can't fly in rain. Can't fly in rain. (a raindrop hits him, but before he can recover, another hits him) Mayday! Mayday! Bee going down!
 	(Barry sees a window ledge and barely makes it there, then crawls through the open window.)
Vanessa:	Ken, could you close the window please?
Ken:	Huh? Oh.. Hey, Check out my new resume. I made it into a fold-out brochure. You see? Folds out.
Barry:	Oh, no. More humans. I don't need this. (tries to fly out the window but bounces off of it) Oof! Ow! What was that? (tries again) Maybe this time. This time. This time. This time! This time! This, this, this, this... Drapes. (taps the glass) That is diabolical.
Ken:	(showing off his resume:) It's fantastic. It's got all my special skills, even my top-ten favorite movies.
Andy:	What's your number one? Star Wars?
Ken:	Nah, I don't go for that... (mimics lasers firing) ...kind of stuff.
Barry:	No wonder we're not supposed to talk to them. They're out of their minds.
Ken:	When I walk out of a job interview, they're flabbergasted. They can't believe the things I say.
Barry:	There's the sun. Maybe that's a way out. (flies towards the light near the ceiling) I don't remember the sun having a big 75 on it. (bounces off it and starts falling, landing in a bowl of chip dip)
Ken:	I gotta tell ya, I predicted global warming. I could feel it getting hotter. At first I thought it was just me.
 	(Andy scoops up some of the dip with a tortilla chip, including Barry, and brings it towards his mouth)
Ken:	Wait! Stop! Bee!
Anna:	Kill it! Kill it!
Ken:	(grabs something to kill it) Stand back. These are winter boots.
Vanessa:	Wait! Don't kill him!
Ken:	You know I'm allergic to them! This thing could kill me!
Vanessa:	Well, why does his life have any less value than yours? (Vanessa places a lass over Barry)
Ken:	Why does his life have any less value than mine? Is that your statement?
Vanessa:	I'm just saying all life has value. You don't know what he's capable of feeling. (Vanessa rips Ken's resume in half and slides it under the glass)
Ken:	My brochure!
Vanessa:	(carries the glass with Barry inside over to the window and releases him, all while maintaining oddly intimate eye contact) There you go, little guy.
Ken:	I'm not scared of him. But yeah, it's an allergic thing.
Andy:	Hey, why don't you put that on your resume-brochure?
Ken:	It's not funny. My whole face could puff up.
Andy:	Hmm, make it one of your "special skills".
Ken:	You know, knocking someone out is also a special skill.
 	(later, as the rain stops and the sun comes back out)
Anna:	Right. Bye, Vanessa. Thanks.
Ken:	Vanessa, next week? Yogurt night?
Vanessa:	Ah, yeah, sure, Ken. You know, whatever.
Ken:	You could put carob chips on there.
Vanessa:	Bye.
Ken:	Supposed to be less calories or somethin'.
Vanessa:	Bye. (the last of her guests have left. She shuts the door and begins cleanup.)
Barry:	(sighs) I gotta say something. She saved my life. I've got to say something. All right, here it goes.
 	(Barry flies back into her house through the almost-closed window and stops in front of a can of Bumble Bee Chunk Light Tuna as Vanessa walks by, stopping right in line with the mascot. He starts to walk away and looks back. Says, "Huh" and turns back around to look at the mascot, then says "Nah" as he dismisses the picture and continues walking.)
 	(Barry resumes flying and lands on a postcard from Coney Island taped to the refrigerator, again in a position where Vanessa doesn't notice him.)
Barry:	What would I say? I could really get in trouble. It's a bee law. You're not supposed to talk to a human. I can't believe I'm doing this. (begins debating with himself) I've got to. Oh, I can't do it. Come on! No. Yes. No. Do it. I can't. How should I start it? "Ya like jazz?" No, that's no good. Here she comes! Speak, you fool!
Barry:	(to Vanessa:) Um, hi!
 	(Vanessa gasps and drops the dishes)
Barry:	I'm sorry.
Vanessa:	Hah, you're talking.
Barry:	Yes, I know, I know. I'm so–
Vanessa:	You're talking.
Barry:	I know. I'm– I'm sorry. I'm so sorry.
Vanessa:	No, it's okay. It's fine. It's just... I know I'm dreaming. But I don't recall going to bed.
Barry:	Well, you know, I'm sure this is very disconcerting....
Vanessa:	Yeah! I mean, this is a bit of a surprise to me. I mean, you're a bee!
Barry:	Yeah.
Vanessa:	Yeah.
Barry:	Yeah, I am a bee. And, uh, you know I'm not supposed to be doing this, but...
 	(Vanessa makes a small "Oh" and "uh-huh" noises while Barry's talking)
Barry:	...they were all trying to kill me. And if it wasn't for you... I mean, I had to thank you. It's, it's just the way I was raised.
 	(Vanessa grabs a fork and stabs herself in the hand, then cries out)
Barry:	Oh! That was a little weird.
Vanessa:	I'm talking to a bee.
Barry:	Yeah.
Vanessa:	I'm talking to a bee.
Barry:	Anyway...
Vanessa:	And the bee is talking to me!
Barry:	Um, I just want to say I'm grateful, and I'm going to leave now.
Vanessa:	Wait, wait, wait, wait! How did you learn to do that?
Barry:	What?
Vanessa:	That- that- that- that... The talking thing.
Barry:	Oh, same way you did, I guess. "Mama, Dada, honey." You pick it up.
Vanessa:	(laughs unconvincingly) That's very funny.
Barry:	Yeah. Bees are funny. If we didn't laugh, we'd cry with what we have to deal with. Anyway...
Vanessa:	Can I uh... get you something?
Barry:	Like what?
Vanessa:	I don't know. I mean.. I don't know. Coffee?
Barry:	Well, uh, I don't want to put you out, unless you're making it anyway.
Vanessa:	Oh, it's no trouble. Oh, it takes two minutes.
Barry:	Really?
Vanessa:	It's just coffee.
Barry:	I hate to impose.
Vanessa:	Don't be ridiculous!
Barry:	Actually, I would love a cup.
Vanessa:	Hey, you want a little rum cake?
Barry:	I really shouldn't.
Vanessa:	Have a little rum cake.
Barry:	No, no, no, I can't.
Vanessa:	Oh, come on!
Barry:	You know, I'm trying to lose a couple micrograms here.
Vanessa:	Where?
Barry:	Well... these stripes don't help.
Vanessa:	You look great!
Barry:	I don't know if you know anything about fashion.
 	(Vanessa walks away and begins pouring coffee onto the floor, a coffee cup in her other hand)
Barry:	Are you all right?
Vanessa:	No.
 	(fade to Vanessa and Barry on her roof terrace, talking and having coffee)
Barry:	He's making the tie in the cab as they're flying up Madison. So he finally gets there.
Vanessa:	Uh huh.
Barry:	He runs up the steps into the church. The wedding is on...
Vanessa:	Yeah?
Barry:	...and he says, "Watermelon? I thought you said Guatemalan."
Vanessa:	Uh huh?
Barry:	Why would I marry a watermelon? (Barry laughs)
 	(Vanessa's more confused than amused. Barry gestures, indicating his joke is done.)
Vanessa:	Oh, Is that a... a bee joke?
Barry:	Yeah, that's the kind of stuff that we do.
Vanessa:	Yeah, different. So, anyway, what are you gonna do, Barry?
Barry:	About work? I don't know. I want to do my part for the hive, but I, I can't do it the way they want.
Vanessa:	I know how you feel.
Barry:	You do?
Vanessa:	Sure. My parents wanted me to be a lawyer or a doctor, but I wanted to be a florist.
Barry:	Really?
Vanessa:	My only interest is flowers.
Barry:	Our new queen was just elected with that same campaign slogan.
Vanessa:	Oh, huh.
Barry:	Anyway, you see if you look... There. There's my hive right there. You can see it.
Vanessa:	Oh, you're in Sheep Meadow!
Barry:	Yes! You know the turtle pond?
Vanessa:	Yes?
Barry:	I'm right off of that.
Vanessa:	Oh, no way! I know that area. Do you know I lost a toe ring there once.
 	(behind them, a janitor comes onto the roof and begins working on replacing a light bulb)
Barry:	Really?
Vanessa:	Yes.
Barry:	Why do girls put rings on their toes?
Vanessa:	Well, why not?
Barry:	I don't know. It's like putting a hat on your knee.
Vanessa:	Maybe I'll try that.
Janitor:	You all right, ma'am?
Vanessa:	(realizing how it must look, talking to herself:) Oh, yeah, fine. Just having two cups of coffee. (she laughs)
 	Vanessa and Barry share a little quiet time. She glances aside and catches him staring smittenly. (actual line from the official audio description on Netflix)
Barry:	Uh, ahem. Anyway, this has been great. Thanks for the coffee.
Vanessa:	Oh, yeah, it's no trouble.
Barry:	Sorry I couldn't finish it. If I did, I'd be up for the rest of my life. Are you... Umm. Can I take a piece of this with me?
Vanessa:	Here, have a crumb. (She passes one to Barry on her fingertip)
Barry:	Oh, thanks.
Vanessa:	Yeah.
Barry:	All right, well, then... I guess I'll see you around, or not, or...
Vanessa:	Okay, Barry.
Barry:	And thank you so much again... for before.
Vanessa:	Oh, that? That was nothing.
Barry:	Well, not nothing, but... anyway...
 	(Barry extends his hand. Vanessa touches it with her finger and they gingerly shake. The janitor looks over and continues tightening the bulb in the socket. It shorts, causing him to lose his balance and fall backwards.)
 	(The next day at the Honex building, hurricane survival testing is in progress. A bee wearing a parachute is in a wind tunnel.)
Testing bee 1:	This can't possibly work.
Testing bee 2:	Well, he's all set to go. We may as well try it. (via intercom:) Okay, Dave. pull the chute.
 	(Dave pulls the cord and is immediately blown backwards. He slides down the wall and shakily gives a thumbs up signal. Barry and Adam walk by the outside of the testing chamber.)
Adam:	Sounds amazing.
Barry:	Oh, it was amazing. It- it was the scariest, happiest moment of my life.
Adam:	Humans! Humans! I can't believe you were with humans! Giant scary humans! What were they like?
Barry:	Huge and crazy. They talk crazy, they eat crazy giant things. They drive around real crazy.
Adam:	And do they try and kill you like on TV?
Barry:	Some of them. But some of them don't.
Adam:	How'd you get back?
Barry:	Poodle.
Adam:	Look, you did it. And I'm glad. You saw whatever you wanted to see out there, You had your "experience", and now you're back, you can pick out your job and everything can be normal.
Barry:	Well...
Adam:	Well? Well?
Barry:	Well, I met someone.
Adam:	You met someone? Was she Bee-ish?
Barry:	Mmm.
Adam:	Not a wasp? Your parents will kill you.
Barry:	No, no, no, not a wasp.
Adam:	Spider?
Barry:	You know, I'm not attracted to the spiders. I know to everyone else it's like the hottest thing with the eight legs and all. I can't get by that face. (Barry grimaces and makes a noise.)
Adam:	So, uh, who is she?
Barry:	She's... uh... a human.
Adam:	Oh no, no, no, no. That didn't happen. You didn't do that. That is a bee law. You wouldn't break a bee law.
Barry:	Her name's Vanessa.
Adam:	Oh, oh boy!
Barry:	She's so-o nice. And she's a florist!
Adam:	Oh, no. No, no, no! You're dating a human florist?
Barry:	W-w-well, we're not dating.
Adam:	You're flying outside the hive. You're talking to human beings that attack our homes with power washers and M-80s. That's one-eighth of a stick of dynamite.
Barry:	She saved my life. And she understands me.
Adam:	This is over.
Barry:	(pulls out the rum cake crumb) Eat this. (pushes it into Adam's face.)
Adam:	This is not over. What was that?
Barry:	They call it a crumb.
Adam:	That was so stingin' stripey!
Barry:	And that's not even what they eat. That just falls off what they eat. Do you know what a Cinnabon is?
Adam:	No.
Barry:	It's bread...
Adam:	Come in here! (opens the door to the office where he works and guides Barry inside)
Barry:	...and cinnamon,
Adam:	Be quiet!
Barry:	...and frosting. They heat it up–
Adam:	Sit down!
Barry:	Really hot!
Adam:	Listen to me! We are not them. We're us. There's us and there's them.
Barry:	Yes, but who can deny the heart that is yearning...
Adam:	There's no yearning. Stop yearning. Listen to me. You have got to start thinking bee, my friend.
 	(another bee joins in:) Thinking bee.
(and another joins in:) Thinking bee.
(all bees in the office begin chanting:) Thinking bee. Thinking bee. Thinking bee.
 	(Outside his house, Barry sits on a raft in his family's hexagon-shaped honey pool, legs dangling into the honey. Mom and dad approach, wearing cabana-type outfits, sun shining behind them.)
Mom:	There he is. He's in the pool.
Dad:	You know what your problem is, Barry?
Barry:	I've got to start thinking bee?
Dad:	Barry, how much longer is this going to go on? It's been three days. I don't understand why you're not working.
Barry:	Well, I've got a lot of big life decisions I'm thinking about
Dad:	What life? You have no life! You have no job! You're barely a bee!
Barry:	Ugh.
Mom:	Would it kill you to just make a little honey?
 	(Barry rolls off the raft and sinks into the pool.)
Mom:	Barry, come out from under there. Your father's talking to you. Martin, would you talk to him?
Dad:	Barry, I'm talking to you.
 	(Barry keeps swimming downward through the honey, which clears and leads him to an imaginary park where Vanessa is waiting for him, reclining on a picnic blanket. "Sugar Sugar" by The Archies is playing in the background. She swats a mosquito that lands on her leg, then looks at Barry for his reaction. Both are surprised, but then laugh about it.)
Vanessa:	You coming? (said in a sultry way)
Barry:	Got everything?
Vanessa:	All set. (She gets into a one-man ultralight plane with a black-and-yellow paint job and puts on her helmet. She and the plane are now Barry's size.)
Barry:	You go ahead. I'll catch up.
Vanessa:	Don't be too long. (The plane takes off. Barry soon catches up and they fly together.)
Vanessa:	Watch this!
 	(The plane does a loop, trailing red smoke that forms a heart, then crashes into the side of a rock pile, bursting into flames.)
Barry:	(yelling in anguish:) Vanessa! (his cry changes to bubbles escaping his mouth)
 	(Barry breaks the surface of the pool, gasping for air.)
Dad:	We're still here, Barry.
Mom:	I told you not to yell at him. He doesn't respond when you yell at him.
Dad:	Then why are you yelling at me?
Mom:	Because you don't listen.
Dad:	Ah, I'm not listing to this.
Barry:	(dries himself and puts on his sweater) Sorry Mom, I've got to go.
Mom:	Where are you going?
Barry:	Nowhere. I'm meeting a friend.
Mom:	(calling after him:) A girl? Is this why you can't decide?
Barry:	Bye!
Mom:	I just hope she's Bee-ish.
 	(Vanessa exits her florist shop, flipping the sign over and locking the door.)
Barry:	(he see the Tournament of Roses Parade poster) So they have a huge parade of just flowers every year in Pasadena?
Vanessa:	Oh, to be in the Tournament of Roses, that's every florist's dream. Up on a float, surrounded by flowers, crowds cheering.
Barry:	Wow, a tournament. Do the roses actually complete in athletic events?
Vanessa:	No. All right, I've got one. How come you don't fly everywhere?
Barry:	It's exhausting.
Vanessa:	Hmmm.
Barry:	Why don't you run everywhere? Isn't that faster?
Vanessa:	Yeah, okay. I see, I see. All right, your turn.
Barry:	Ah! Tivo. You can just freeze live TV? That's insane.
Vanessa:	What, you don't have anything like that?
Barry:	We have Hivo, but it's a disease. It's a horrible, horrible disease.
Vanessa:	Oh my.
 	(They turn a corner onto a busier street. People start swatting at Barry.)
Man:	Dumb bees!
Vanessa:	You must just want to sting all those jerks.
Barry:	We really try not to sting. It's usually fatal for us.
Vanessa:	So you really have to watch your temper?
 	(they enter a supermarket)
Barry:	Oh yeah, very carefully. You kick a wall, take a walk, write an angry letter and throw it out. You work though it like any emotion– anger, jealousy, (under his breath) lust.
 	(Barry lands on cardboard boxes in the aisle. A stock boy hits him with a rolled-up advertisement.)
Vanessa:	(to Barry:) Oh my goodness. Are you okay?
Barry:	Yeah. Whew!
Vanessa:	(to Hector, the stockboy:) What is wrong with you?!
Hector:	It's a bug.
Vanessa:	Well, he's not bothering anybody. Get out of here, you creep. (She slaps him with the advertisement and he leaves, muttering.)
Barry:	(shakes off the hit) What was that, a Pick and Save circular?
Vanessa:	Yeah, it was. How did you know?
Barry:	It felt like about ten pages. Seventy-five's pretty much our limit.
Vanessa:	Boy, you've really got that down to a science.
Barry:	Oh, we have to. I lost a cousin to Italian Vogue.
Vanessa:	I'll bet.
Barry:	(he stops when he sees the rows of honey jars) What in the name of Mighty Hercules is this? How did this get here? Cute Bee? Golden Blossom? Ray Liotta Private Select.
Vanessa:	Is he that actor?
Barry:	I never heard of him. Why is this here?
Vanessa:	For people. We eat it.
Barry:	Why? (he gestures around the market) You don't have enough food of your own?
Vanessa:	Well yes, we–
Barry:	How do you even get it?
Vanessa:	Well, bees make it...
Barry:	I know who makes it! And it's hard to make it! There's heating and cooling, and stirring... you need a whole Krelman thing.
Vanessa:	It's organic.
Barry:	It's our-ganic!
Vanessa:	It's just honey, Barry.
Barry:	Just... what?! Bees don't know about this. This is stealing. A lot of stealing! You've taken our homes, our schools, our hospitals. This is all we have. And it's on sale? I'm going to get to the bottom of this. I'm going to get to the bottom of all of this!`

const POPULAR_QUOTES = [
  "According to all known laws of aviation, there is no way a bee should be able to fly.",
  "Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow!",
  "Barry! Breakfast is ready!",
  "Ya like jazz?",
  "It's got giant wings, huge engines.",
  "You like jazz?",
  "The bee, of course, flies anyway because bees don't care what humans think is impossible.",
  "We're bees. We're the most perfectly functioning society on Earth.",
  "I can't believe I'm doing this. I've got to. Oh, I can't do it. Come on! No. Yes. No. Do it. I can't.",
  "Why would I marry a watermelon?",
  "That's a bad job for a guy with a stinger.",
  "Thinking bee. Thinking bee. Thinking bee.",
  "Black and yellow! Hello!",
  "You're flying outside the hive. You're talking to human beings that attack our homes with power washers and M-80s.",
  "This is stealing. A lot of stealing!",
]

export default function BeeMovieScriptPage() {
  const [selectedFormat, setSelectedFormat] = useState<"normal" | "nospaces" | "segments">("normal")
  const [platformLimit, setPlatformLimit] = useState(2000)
  const [hideCharacters, setHideCharacters] = useState(false)
  const { toast } = useToast()

  const platforms = [
    { name: "Discord", limit: 2000, color: "bg-indigo-500 hover:bg-indigo-600" },
    { name: "Twitter", limit: 280, color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Reddit", limit: 10000, color: "bg-orange-500 hover:bg-orange-600" },
    { name: "YouTube", limit: 5000, color: "bg-red-500 hover:bg-red-600" },
    { name: "Messenger", limit: 20000, color: "bg-blue-600 hover:bg-blue-700" },
    { name: "WhatsApp", limit: 4096, color: "bg-green-500 hover:bg-green-600" },
  ]

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied! 🐝",
        description: "Bee Movie script copied to clipboard successfully!",
      })
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      })
    }
  }

  const removeCharacterNames = (text: string) => {
    return text
      .split("\n")
      .map((line) => {
        // Remove character names (text before colon and tab)
        if (line.includes(":") || line.includes("\t")) {
          const colonIndex = line.indexOf(":")
          const tabIndex = line.indexOf("\t")

          if (colonIndex > 0 && (tabIndex === -1 || colonIndex < tabIndex)) {
            return line.substring(colonIndex + 1).trim()
          } else if (tabIndex > 0) {
            return line.substring(tabIndex + 1).trim()
          }
        }
        return line
      })
      .filter((line) => line.length > 0)
      .join(" ")
  }

  const processText = (text: string) => {
    return hideCharacters ? removeCharacterNames(text) : text
  }

  const removeSpaces = (text: string) => text.replace(/\s+/g, "")

  const segmentText = (text: string, limit: number) => {
    const segments = []
    let currentSegment = ""
    const words = text.split(" ")

    for (const word of words) {
      if ((currentSegment + " " + word).length > limit && currentSegment) {
        segments.push(currentSegment.trim())
        currentSegment = word
      } else {
        currentSegment += (currentSegment ? " " : "") + word
      }
    }

    if (currentSegment) {
      segments.push(currentSegment.trim())
    }

    return segments
  }

  const getRandomSegment = () => {
    const randomIndex = Math.floor(Math.random() * POPULAR_QUOTES.length)
    return processText(POPULAR_QUOTES[randomIndex])
  }

  const getOpeningSection = () => {
    const opening = BEE_MOVIE_SCRIPT.substring(0, 2000) + "..."
    return processText(opening)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        onCopyScript={() => copyToClipboard(getOpeningSection())}
        onRandomQuote={() => copyToClipboard(getRandomSegment())}
      />

      <WhatIsBeeMovieScript />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              {hideCharacters ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              Display Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch id="hide-characters" checked={hideCharacters} onCheckedChange={setHideCharacters} />
              <label htmlFor="hide-characters" className="text-sm font-medium">
                Hide character names (dialogue only)
              </label>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              When enabled, only dialogue and narration will be shown, character names will be removed from the Bee
              Movie script
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5" />
                Quick Copy Bee Script
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => copyToClipboard(getOpeningSection())} className="w-full">
                <Copy className="mr-2 h-4 w-4" />
                Copy Opening
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shuffle className="h-5 w-5" />
                Random Bee Movie Meme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => copyToClipboard(getRandomSegment())} variant="secondary" className="w-full">
                <Shuffle className="mr-2 h-4 w-4" />
                Random Quote
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Share2 className="h-5 w-5" />
                No Spaces Script
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => copyToClipboard(removeSpaces(getOpeningSection()))}
                variant="outline"
                className="w-full"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Compressed
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={selectedFormat} onValueChange={(value) => setSelectedFormat(value as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-muted p-2 rounded-xl h-14 border border-border/50">
            <TabsTrigger
              value="normal"
              className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground data-[state=active]:text-foreground"
            >
              Full Bee Movie Script
            </TabsTrigger>
            <TabsTrigger
              value="nospaces"
              className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground data-[state=active]:text-foreground"
            >
              No Spaces Version
            </TabsTrigger>
            <TabsTrigger
              value="segments"
              className="data-[state=active]:bg-white data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border/20 hover:bg-background/60 transition-all duration-200 font-medium rounded-lg mx-1 text-sm py-2 text-muted-foreground data-[state=active]:text-foreground"
            >
              Auto Segments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="normal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Complete Bee Movie Script Copy and Paste</CardTitle>
                <CardDescription>
                  The entire Bee Movie script ready for copying and sharing. This is the full script of the Bee Movie
                  {hideCharacters && " (dialogue only)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4 font-mono text-sm max-h-96 overflow-y-auto">
                    {processText(BEE_MOVIE_SCRIPT)}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => copyToClipboard(processText(BEE_MOVIE_SCRIPT))}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Full Bee Movie Script
                    </Button>
                    <Badge variant="secondary">
                      {processText(BEE_MOVIE_SCRIPT).length.toLocaleString()} characters
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nospaces" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Bee Movie Script No Spaces Version</CardTitle>
                <CardDescription>
                  Compressed Bee Movie script version for platforms with character limits or spam detection
                  {hideCharacters && " (dialogue only)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4 font-mono text-sm break-all max-h-96 overflow-y-auto">
                    {removeSpaces(processText(BEE_MOVIE_SCRIPT))}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => copyToClipboard(removeSpaces(processText(BEE_MOVIE_SCRIPT)))}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy No Spaces Bee Script
                    </Button>
                    <Badge variant="secondary">
                      {removeSpaces(processText(BEE_MOVIE_SCRIPT)).length.toLocaleString()} chars
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="segments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Auto-Segmented Bee Movie Script for Platforms</CardTitle>
                <CardDescription>
                  Automatically split the entire Bee Movie script for Discord (2000 chars), Twitter, etc.
                  {hideCharacters && " (dialogue only)"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Platform limit:</label>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((platform) => (
                        <Button
                          key={platform.name}
                          variant={platformLimit === platform.limit ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPlatformLimit(platform.limit)}
                          className={`${
                            platformLimit === platform.limit
                              ? `${platform.color} text-white border-0`
                              : "hover:bg-muted"
                          } transition-colors`}
                        >
                          {platform.name} ({platform.limit})
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-6">
                    {segmentText(processText(BEE_MOVIE_SCRIPT), platformLimit).map((segment, index) => (
                      <div key={index}>
                        {index > 0 && (
                          <div className="flex items-center my-6">
                            <div className="flex-1 h-px bg-border"></div>
                            <div className="px-3 text-xs text-muted-foreground bg-background">Segment {index + 1}</div>
                            <div className="flex-1 h-px bg-border"></div>
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge>Segment {index + 1}</Badge>
                            <Badge variant="secondary">{segment.length} chars</Badge>
                          </div>
                          <div className="rounded-lg bg-muted p-4 font-mono text-sm">{segment}</div>
                          <Button size="sm" onClick={() => copyToClipboard(segment)}>
                            <Copy className="mr-2 h-3 w-3" />
                            Copy Segment {index + 1}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Popular Quotes */}
        <Card className="mt-8" id="quotes">
          <CardHeader>
            <CardTitle>Popular Bee Movie Meme Quotes</CardTitle>
            <CardDescription>
              Quick access to the most popular Bee Movie script quotes for memes and copy paste
              {hideCharacters && " (dialogue only)"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-2">
              {POPULAR_QUOTES.map((quote, index) => {
                const processedQuote = processText(quote)
                return (
                  <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                    <span className="text-sm font-mono flex-1 mr-3">{processedQuote}</span>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(processedQuote)}>
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Usage Stats */}
        <Card className="mt-16" id="stats">
          <CardHeader>
            <CardTitle>Bee Movie Script Statistics</CardTitle>
            <CardDescription>Complete analysis of the entire Bee Movie script content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {processText(BEE_MOVIE_SCRIPT).length.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Characters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {processText(BEE_MOVIE_SCRIPT).split(" ").length.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Words</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {removeSpaces(processText(BEE_MOVIE_SCRIPT)).length.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">No Spaces Length</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <KeyFeatures />
      <HowToUse />
      <FAQSection />
      <Footer />

      <Toaster />
    </div>
  )
}
