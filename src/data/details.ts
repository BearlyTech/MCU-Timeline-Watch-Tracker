import type { TitleDetail } from '../types'

function episodes(
  items: Array<[string, number, string]>,
): TitleDetail['episodes'] {
  return items.map(([name, runtimeMinutes, synopsis]) => ({
    name,
    runtimeMinutes,
    synopsis,
  }))
}

export const details: Record<string, TitleDetail> = {
  'eyes-of-wakanda': {
    synopsis:
      'Wakandan agents hunt stolen vibranium relics across centuries, and a warning from a ruined future asks them to break their own isolation.',
    episodes: episodes([
      [
        "Into the Lion's Den",
        31,
        'A former Dora Milaje infiltrates a rogue agent who is building a private empire with stolen Wakandan weapons.',
      ],
      [
        'Legends and Lies',
        31,
        'During the Trojan War, a Wakandan soldier hides among the Greeks to take back an artifact before the city falls.',
      ],
      [
        'Lost and Found',
        30,
        'A mission to recover a vibranium statue brings an Iron Fist to the Golden City, and the two have to decide who the relic belongs to.',
      ],
      [
        'The Last Panther',
        29,
        'Two agents meet a Black Panther from a devastated future, who tells them that keeping the world at a distance will doom Wakanda.',
      ],
    ]),
  },
  'captain-america-the-first-avenger': {
    runtimeMinutes: 124,
    synopsis:
      'Steve Rogers, too frail for the army, becomes a super-soldier and leads the fight against Hydra in World War II. He stops a weapon aimed at the world, then vanishes into the ice.',
  },
  'agent-carter': {
    runtimeMinutes: 15,
    synopsis:
      'Peggy Carter recovers the Zodiac while her colleagues dismiss her, and she walks out with the first quiet step toward S.H.I.E.L.D.',
  },
  'the-fantastic-four-first-steps': {
    runtimeMinutes: 114,
    synopsis:
      'On a retro-futurist Earth, the famous Fantastic Four learn that Galactus is coming for their planet. With a child on the way, they have to bargain with a hunger that eats worlds.',
  },
  'captain-marvel': {
    runtimeMinutes: 124,
    synopsis:
      'Amnesiac pilot Carol Danvers crashes back to Earth in 1995 and uncovers the Kree war that stole her past. She chooses her own side and becomes one of the most powerful people in the sky.',
  },
  'iron-man': {
    runtimeMinutes: 126,
    synopsis:
      'Weapons maker Tony Stark builds a powered suit to escape his captors, then turns it on the company that has been selling his bombs. He tells the world he is Iron Man.',
  },
  'iron-man-2': {
    runtimeMinutes: 124,
    synopsis:
      'Tony’s arc reactor is killing him while a vengeful physicist in a copycat suit comes for the Stark legacy. He has to share the suit, survive the palladium, and keep the armor out of the government’s hands.',
  },
  'the-incredible-hulk': {
    runtimeMinutes: 112,
    synopsis:
      'Bruce Banner hides from the army that wants the Hulk as a weapon. A soldier dosed with the same serum becomes the Abomination, and Banner has to let the other guy out to stop him.',
  },
  'a-funny-thing': {
    runtimeMinutes: 4,
    synopsis:
      'Agent Coulson stops for gas and quietly takes down a robbery on his way to investigate Mjolnir.',
  },
  thor: {
    runtimeMinutes: 115,
    synopsis:
      'The arrogant heir of Asgard is stripped of his power and banished to Earth. He learns humility in time to stop his brother Loki from seizing the throne.',
  },
  'the-consultant': {
    runtimeMinutes: 4,
    synopsis:
      'S.H.I.E.L.D. sends Tony Stark to sabotage a plan to recruit the Abomination onto the Avengers, and his usual manners do the job.',
  },
  'the-avengers': {
    runtimeMinutes: 143,
    synopsis:
      'Loki steals the Tesseract and Nick Fury pulls six incompatible heroes into one team. They barely survive each other, then stand together when an alien army hits New York.',
  },
  'item-47': {
    runtimeMinutes: 12,
    synopsis:
      'A couple uses a salvaged Chitauri weapon for bank robberies until S.H.I.E.L.D. catches them and puts that talent to work.',
  },
  'thor-the-dark-world': {
    runtimeMinutes: 112,
    synopsis:
      'An ancient Dark Elf hunts the Aether inside Jane Foster. Thor has to trust Loki long enough to pull the weapon out of her and away from Earth.',
  },
  'iron-man-3': {
    runtimeMinutes: 130,
    synopsis:
      'After New York, Tony cannot sleep and a terrorist campaign blows his world apart. Stripped of the house and most of the suits, he learns the Mandarin on television is a performance.',
  },
  'all-hail-the-king': {
    runtimeMinutes: 14,
    synopsis:
      'Trevor Slattery enjoys prison fame for playing the Mandarin, until a visitor explains that the real Ten Rings does not appreciate the joke.',
  },
  'captain-america-the-winter-soldier': {
    runtimeMinutes: 136,
    synopsis:
      'Steve Rogers discovers that Hydra has been growing inside S.H.I.E.L.D. for decades. To stop their helicarriers he has to fight the Winter Soldier, who is Bucky Barnes.',
  },
  'guardians-of-the-galaxy': {
    runtimeMinutes: 121,
    synopsis:
      'A thief, an assassin, a vengeful warrior, a raccoon, and a tree cross paths over a stone that can erase a planet. They become a crew in time to stop Ronan from using it.',
  },
  'guardians-of-the-galaxy-vol-2': {
    runtimeMinutes: 136,
    synopsis:
      'Peter Quill meets the celestial who claims to be his father, and the reunion is a trap. The Guardians choose the family they built over the one that wants to remake the universe.',
  },
  'i-am-groot': {
    synopsis:
      'Baby Groot wanders the Guardians’ ship and the worlds around it, causing tiny disasters and making friends he does not quite mean to.',
    episodes: episodes([
      [
        "Groot's First Steps",
        4,
        'Groot practices walking, and every successful step knocks something else over.',
      ],
      [
        'The Little Guy',
        4,
        'A tiny creature adopts Groot, who has to protect it from the rest of the garden.',
      ],
      [
        "Groot's Pursuit",
        4,
        'Groot chases a thief through the ducts and comes back with more trouble than he left with.',
      ],
      [
        'Groot Takes a Bath',
        4,
        'A quiet puddle turns into a fight with something that does not want to share the water.',
      ],
      [
        'Magnum Opus',
        4,
        'Groot builds a sculpture out of scrap, then has to watch the ship treat it like junk.',
      ],
      [
        'Are You My Groot?',
        4,
        'A newly hatched alien decides Groot is its parent and will not be talked out of it.',
      ],
      [
        'Groot Noses Around',
        4,
        'Groot grows an enormous nose and sneezes his way through a very small adventure.',
      ],
      [
        "Groot's Snow Day",
        5,
        'Left out in the snow, Groot builds a companion and then has to keep it in one piece.',
      ],
      [
        "Groot's Sweet Treat",
        4,
        'Groot wants an ice cream and is willing to start a small war to get it.',
      ],
      [
        'Groot and the Great Prophecy',
        6,
        'A civilization mistakes Groot for a foretold champion, and he plays along until the prophecy gets serious.',
      ],
    ]),
  },
  'avengers-age-of-ultron': {
    runtimeMinutes: 141,
    synopsis:
      'Tony and Bruce try to build a peacekeeping intelligence and instead wake Ultron, who decides the Avengers are the problem. The team fights him in Sokovia and leaves with two new members and a broken city.',
  },
  'ant-man': {
    runtimeMinutes: 117,
    synopsis:
      'Ex-con Scott Lang steals a suit that shrinks him to insect size. Hank Pym needs that burglar to stop his former protégé from militarizing the same technology.',
  },
  'captain-america-civil-war': {
    runtimeMinutes: 147,
    synopsis:
      'After another mission leaves civilians dead, the Avengers split over a law that would put them under government control. Bucky’s return turns the argument into a fight, and a man named Zemo is counting on that.',
  },
  'your-friendly-neighborhood-spider-man-s1': {
    synopsis:
      'On a different path than the films, a teenage Peter Parker gets his powers under Norman Osborn’s eye and has to learn who he is willing to work for.',
    episodes: episodes([
      [
        'Amazing Fantasy',
        30,
        'Peter is bitten during a chaotic attack and wakes up stronger, stickier, and late for the life he thought he had.',
      ],
      [
        'The Parker Luck',
        29,
        'The new powers make school and a job at Oscorp equally dangerous, and Peter cannot tell anyone why.',
      ],
      [
        'Secret Identity Crisis',
        32,
        'Peter tries to keep the suit separate from his friends while Osborn starts asking the wrong questions.',
      ],
      [
        'Hitting the Big Time',
        33,
        'A bigger fight pulls Peter out of street-level scuffles and shows him how outmatched he still is.',
      ],
      [
        'The Unicorn Unleashed',
        31,
        'A flashy new criminal uses Oscorp tech, and Peter has to stop him without exposing where the gear came from.',
      ],
      [
        'Duel with the Devil',
        29,
        'Peter crosses someone who fights dirtier than he is ready for, and the suit takes real damage.',
      ],
      [
        'Scorpion Rising',
        29,
        'Mac Gargan becomes the Scorpion, and Peter’s attempt to help turns into a grudge.',
      ],
      [
        'Tangled Web',
        30,
        'Peter’s allies and enemies start to overlap, and keeping secrets hurts the people he meant to protect.',
      ],
      [
        'Hero or Menace',
        31,
        'Public opinion turns on Spider-Man as Osborn tightens his grip on Peter’s future.',
      ],
      [
        'If This Be My Destiny...',
        33,
        'Peter has to choose between the patron who made him and the neighborhood that needs him.',
      ],
    ]),
  },
  'black-widow': {
    runtimeMinutes: 134,
    synopsis:
      'Between the civil war and Infinity War, Natasha Romanoff is pulled back to the Red Room and the pretend family it built. She tears the program down with Yelena, and the cost is her freedom to run.',
  },
  'black-panther': {
    runtimeMinutes: 134,
    synopsis:
      'T’Challa returns home to be crowned king of Wakanda. His cousin Killmonger, left behind by that hidden nation, comes to take the throne and open the vaults to the world.',
  },
  'spider-man-homecoming': {
    runtimeMinutes: 133,
    synopsis:
      'Peter Parker wants a bigger Avengers life and instead finds a salvage crew selling Chitauri weapons. He has to stop the Vulture without Tony Stark finishing the fight for him.',
  },
  'doctor-strange': {
    runtimeMinutes: 115,
    synopsis:
      'A brilliant surgeon loses the use of his hands and finds a mystical order that can teach him other ways to heal. He arrives just as a former student tries to break the walls between dimensions.',
  },
  'thor-ragnarok': {
    runtimeMinutes: 130,
    synopsis:
      'Odin’s death frees Hela, who smashes Thor’s hammer and seizes Asgard. Stranded on a junkyard planet, Thor has to team up with the Hulk and Loki and decide the kingdom is its people, not its palace.',
  },
  'ant-man-and-the-wasp': {
    runtimeMinutes: 118,
    synopsis:
      'Scott is under house arrest when Hope and Hank pull him into a rescue in the Quantum Realm. A ghost who is phasing out of existence wants their tech, and the FBI is already watching the door.',
  },
  'avengers-infinity-war': {
    runtimeMinutes: 149,
    synopsis:
      'Thanos collects the Infinity Stones while the Avengers and the Guardians fight him on separate fronts. They lose. With a snap, half of all life fades.',
  },
  'avengers-endgame': {
    runtimeMinutes: 181,
    synopsis:
      'Five years after the Snap, the survivors risk time travel to steal the Stones back. Tony Stark’s last snap brings everyone home and ends Thanos, at the cost of his life.',
  },
  'loki-s1': {
    synopsis:
      'A Loki who escaped with the Tesseract is arrested by the Time Variance Authority and set on the trail of another version of himself. What they find is a man who has been writing the timeline alone.',
    episodes: episodes([
      [
        'Glorious Purpose',
        50,
        'The TVA picks up the Loki who fled New York and offers him a job instead of deletion: hunt a variant who is killing their soldiers.',
      ],
      [
        'The Variant',
        53,
        'Loki and Agent Mobius track the variant through a hurricane, and she turns out to be a Loki who is done being a footnote.',
      ],
      [
        'Lamentis',
        41,
        'Loki and Sylvie are stranded on a moon that is about to be destroyed, with no TVA door in sight.',
      ],
      [
        'The Nexus Event',
        48,
        'Their partnership creates a branch the TVA cannot ignore, and the lie under the agency starts to show.',
      ],
      [
        'Journey Into Mystery',
        48,
        'Pruned Lokis, including an alligator, survive at the end of time and argue about how to kill the one who rules it.',
      ],
      [
        'For All Time. Always.',
        45,
        'Loki and Sylvie reach He Who Remains and have to choose between his fragile peace and a multiverse at war.',
      ],
    ]),
  },
  'what-if-s1': {
    synopsis:
      'The Watcher narrates single changes that splinter familiar Marvel stories, until one of those worlds becomes everyone else’s problem.',
    episodes: episodes([
      [
        'What If… Captain Carter Were the First Avenger?',
        33,
        'Peggy Carter takes the super-soldier serum, and Steve Rogers goes to war in a prototype armor instead.',
      ],
      [
        'What If… T\'Challa Became a Star-Lord?',
        32,
        'The Ravagers abduct a young T’Challa, who grows up charming criminals into something like heroes.',
      ],
      [
        'What If... The World Lost its Mightiest Heroes?',
        32,
        'The Avengers candidates are murdered one by one, and Nick Fury’s week becomes a funeral.',
      ],
      [
        'What If… Doctor Strange Lost His Heart Instead of His Hands?',
        36,
        'Strange tries to rewrite Christine Palmer’s death until the spell unravels his reality.',
      ],
      [
        'What If... Zombies!?',
        30,
        'A quantum virus turns the Avengers into the outbreak, and a handful of survivors look for a cure.',
      ],
      [
        'What If… Killmonger Rescued Tony Stark?',
        33,
        'Erik Killmonger saves Tony in Afghanistan and steers Stark technology toward a war of his own.',
      ],
      [
        'What If… Thor Were an Only Child?',
        33,
        'Without Loki, Thor treats Earth as a party planet and someone still has to shut it down.',
      ],
      [
        'What If... Ultron Won?',
        30,
        'Ultron gets the Stones, finishes his mission, and notices the Watcher.',
      ],
      [
        'What If... The Watcher Broke His Oath?',
        35,
        'The Watcher recruits champions from the broken worlds to stop an Ultron that can see him.',
      ],
    ]),
  },
  'marvel-zombies': {
    synopsis:
      'Years after the zombie plague, a small group of survivors tries to call for help off-world while Wanda’s dead kingdom closes in.',
    episodes: episodes([
      [
        'Episode 1',
        37,
        'Kamala Khan and a few friends find a way to signal the Nova Corps, then lose most of that group to a horde serving Wanda.',
      ],
      [
        'Episode 2',
        33,
        'Shang-Chi’s survivors meet Kamala’s on the Raft, and the trip toward a ship in New Asgard costs them Yelena.',
      ],
      [
        'Episode 3',
        32,
        'In New Asgard, Wanda offers a cure that is just another way to feed. The survivors steal a ship and learn Earth has been quarantined.',
      ],
      [
        'Episode 4',
        31,
        'Wanda takes the power Banner has been holding, and the restored world Kamala wakes up in is not the real one.',
      ],
    ]),
  },
  wandavision: {
    synopsis:
      'Wanda Maximoff and Vision are living inside television, decade by decade. The sitcom is a hex she built around a town so she would not have to bury him.',
    episodes: episodes([
      [
        'Filmed Before a Live Studio Audience',
        27,
        'Wanda and Vision play house in a black-and-white comedy, and the neighbors laugh on cue.',
      ],
      [
        "Don't Touch That Dial",
        34,
        'The show jumps to color for a talent-show episode, and something outside the signal wants in.',
      ],
      [
        'Now in Color',
        30,
        'Wanda’s pregnancy races from morning to delivery while the town’s edges start to fray.',
      ],
      [
        'We Interrupt This Program',
        33,
        'S.W.O.R.D. watches Westview from the outside and sends an agent through the barrier.',
      ],
      [
        'On a Very Special Episode…',
        38,
        'The twins grow up overnight, Vision wakes up to the lies, and Wanda argues with the person directing her grief.',
      ],
      [
        'All-New Halloween Spooktacular!',
        35,
        'Halloween lets Vision walk to the edge of town, where the people Wanda is not looking at are frozen.',
      ],
      [
        'Breaking the Fourth Wall',
        34,
        'Wanda falls apart on a mockumentary set while Agatha Harkness stops pretending to be the nosy neighbor.',
      ],
      [
        'Previously On',
        43,
        'Agatha drags Wanda through the memories that made the Scarlet Witch, from sitcoms to the Snap.',
      ],
      [
        'The Series Finale',
        47,
        'Wanda fights Agatha and her own conjured Vision, then takes the hex down and leaves Westview.',
      ],
    ]),
  },
  'shang-chi': {
    runtimeMinutes: 132,
    synopsis:
      'Shaun is a valet in San Francisco until his father’s Ten Rings organization drags him back. The rings, and the soul they were meant to save, are older than the crime family he ran from.',
  },
  'the-falcon-and-the-winter-soldier': {
    synopsis:
      'Sam Wilson was handed Captain America’s shield and is not sure it is his. Bucky is trying to make amends while a rebel group and a new, government-issued Captain America both claim Steve’s legacy.',
    episodes: episodes([
      [
        'New World Order',
        47,
        'Sam gives the shield to a museum, Bucky works a government pardon, and the Flag Smashers announce themselves.',
      ],
      [
        'The Star-Spangled Man',
        47,
        'The government debuts a new Captain America, and Sam and Bucky have to survive him and each other.',
      ],
      [
        'Power Broker',
        51,
        'A lead on the super-soldier serum takes them to a criminal who bankrolls people like the Flag Smashers.',
      ],
      [
        'The Whole World Is Watching',
        51,
        'Walker takes the serum, and a public killing shows what a shield can look like in the wrong hands.',
      ],
      [
        'Truth',
        57,
        'Sam visits Isaiah Bradley and decides what the shield is for before he picks it up.',
      ],
      [
        'One World, One People',
        49,
        'Sam, as Captain America, stops the Flag Smashers’ last attack and says plainly who the shield belongs to.',
      ],
    ]),
  },
  'spider-man-far-from-home': {
    runtimeMinutes: 129,
    synopsis:
      'On a school trip, Peter wants a vacation from being Spider-Man. Mysterio offers him a mentor and a story about multiversal beasts, both of them fabricated.',
  },
  eternals: {
    runtimeMinutes: 156,
    synopsis:
      'Immortal aliens who have secretly guarded Earth for thousands of years learn their true mission is to let a celestial be born from the planet. They turn on that order to keep the world.',
  },
  'spider-man-no-way-home': {
    runtimeMinutes: 148,
    synopsis:
      'After Peter’s identity goes public, a spell meant to make everyone forget misfires and pulls in villains from other Spider-Men’s lives. Peter gives up being known at all so the people he loves can be safe.',
  },
  'doctor-strange-multiverse-of-madness': {
    runtimeMinutes: 126,
    synopsis:
      'America Chavez is hunted for the power to cross universes, and the hunter is Wanda, still trying to reach the sons she made in Westview. Strange breaks his own rules to stop her.',
  },
  hawkeye: {
    synopsis:
      'Clint Barton just wants Christmas in the city with his kids when a young archer inherits his Ronin suit and the enemies that come with it.',
    episodes: episodes([
      [
        'Never Meet Your Heroes',
        47,
        'Kate Bishop finds the Ronin suit, and Clint has to get it back before the Tracksuit Mafia finds her.',
      ],
      [
        'Hide and Seek',
        49,
        'Clint and Kate hide in her apartment and start to admit they are stuck with each other.',
      ],
      [
        'Echoes',
        44,
        'Maya Lopez, deaf and running the tracksuits, closes in on the man she blames for her father’s death.',
      ],
      [
        'Partners, Am I Right?',
        41,
        'A night of bad decisions puts Kate’s mother and Clint’s past in the same room.',
      ],
      [
        'Ronin',
        45,
        'Yelena Belova arrives to kill Clint, and Kate learns what he did while wearing the Ronin suit.',
      ],
      [
        'So This Is Christmas?',
        62,
        'The holiday party becomes the fight, and Kate takes the shot that makes her a partner instead of a fan.',
      ],
    ]),
  },
  'moon-knight': {
    synopsis:
      'Steven Grant, a meek museum worker, shares a body with mercenary Marc Spector, the fist of the moon god Khonshu. Both of them are hiding a third person.',
    episodes: episodes([
      [
        'The Goldfish Problem',
        47,
        'Steven loses time, wakes up in other countries, and meets the voice that has been driving his body at night.',
      ],
      [
        'Summon the Suit',
        52,
        'Marc explains the bargain with Khonshu, and Steven is handed a suit he does not want.',
      ],
      [
        'The Friendly Type',
        53,
        'In Egypt, Marc hunts Ammit’s disciples while Steven’s gentler methods keep interrupting the mission.',
      ],
      [
        'The Tomb',
        53,
        'They find Ammit’s tomb, and a death there drops Steven into a hospital that is not a hospital.',
      ],
      [
        'Asylum',
        50,
        'The two personalities walk through the memories they split apart to survive, including a brother they lost.',
      ],
      [
        'Gods and Monsters',
        43,
        'Harrow frees Ammit, and Marc, Steven, and the self they locked away have to share the fight.',
      ],
    ]),
  },
  'black-panther-wakanda-forever': {
    runtimeMinutes: 161,
    synopsis:
      'Wakanda grieves T’Challa while nations try to take its vibranium. Namor and Talokan rise from the sea with a grudge, and Shuri has to decide what kind of Black Panther comes next.',
  },
  echo: {
    synopsis:
      'Maya Lopez leaves New York after shooting Kingpin and goes home to Oklahoma, where her family’s history is louder than the crime empire she ran from.',
    episodes: episodes([
      [
        'Chafa',
        49,
        'Maya returns to Tamaha and finds that Wilson Fisk survived, and that her hometown has not forgotten her.',
      ],
      [
        'Lowak',
        39,
        'A story from her ancestors shows Maya a fighter who protected the people rather than a boss.',
      ],
      [
        'Tuklo',
        42,
        'Another ancestor, a sharpshooter dismissed by the men around her, echoes the skill Maya already has.',
      ],
      [
        'Taloa',
        38,
        'Fisk comes to Oklahoma, and Maya’s family has to choose whether to hide her or stand with her.',
      ],
      [
        'Maya',
        35,
        'Maya accepts a power older than the Tracksuit Mafia and uses it to face Fisk on her own terms.',
      ],
    ]),
  },
  'she-hulk': {
    synopsis:
      'Lawyer Jennifer Walters gets her cousin Bruce’s blood in an accident and becomes a Hulk who can talk. Her cases, and the public, will not let her stay Jennifer.',
    episodes: episodes([
      [
        'A Normal Amount of Rage',
        38,
        'A car crash mixes Jen’s blood with Bruce’s, and she becomes a Hulk who refuses to hide in his lab.',
      ],
      [
        'Superhuman Law',
        28,
        'Jen is fired, then hired to be the She-Hulk the firm can put in front of cameras.',
      ],
      [
        'The People vs. Emil Blonsky',
        35,
        'Jen defends the Abomination’s parole while trying to keep her own transformation off the evening news.',
      ],
      [
        'Is This Not Real Magic?',
        34,
        'A reckless sorcerer and Wong both end up on Jen’s desk, and Wong needs a lawyer more than a wizard.',
      ],
      [
        'Mean, Green, and Straight Poured into These Jeans',
        31,
        'Jen’s dating life and Titania’s lawsuit both treat She-Hulk as a brand.',
      ],
      [
        'Just Jen',
        29,
        'At a friend’s wedding, Jen tries to be the regular guest and Titania crashes as the bride’s new hero.',
      ],
      [
        'The Retreat',
        32,
        'A court-ordered retreat full of other superpowered men forces Emil, and Jen, to talk about anger.',
      ],
      [
        'Ribbit and Rip it',
        34,
        'Jen takes Matt Murdock’s case, spends the night with Daredevil, and wakes up to a leaked revenge video.',
      ],
      [
        'Whose Show Is This?',
        35,
        'Jen breaks the fourth wall hard enough to walk into Marvel and demand a finale that is actually hers.',
      ],
    ]),
  },
  'ms-marvel': {
    synopsis:
      'Jersey City fangirl Kamala Khan discovers a bangle that lets her shape hard light, and that her family history reaches back to the Partition and something older than a hero costume.',
    episodes: episodes([
      [
        'Generation Why',
        47,
        'Kamala sneaks to AvengerCon with her grandmother’s bangle and accidentally reveals a power in front of the crowd.',
      ],
      [
        'Crushed',
        49,
        'Kamala tests the bangle with her friends while Damage Control, and a boy who knows what she is, start looking for her.',
      ],
      [
        'Destined',
        45,
        'The Clandestines say Kamala is one of them and that the bangle can take them home, if she is willing to risk her family.',
      ],
      [
        'Seeing Red',
        45,
        'A trip to Karachi puts Kamala in the care of Red Daggers who have been fighting the same exiles for generations.',
      ],
      [
        'Time and Again',
        40,
        'Kamala is thrown back to 1947 and meets her great-grandmother during Partition, where the bangle’s story starts.',
      ],
      [
        'No Normal',
        49,
        'Damage Control raids the community wedding, and Kamala’s friends and family help her become Ms. Marvel in public.',
      ],
    ]),
  },
  'thor-love-and-thunder': {
    runtimeMinutes: 119,
    synopsis:
      'Gorr the God Butcher is killing divinities with a necrosword, and he takes the children of New Asgard. Jane Foster, dying of cancer, picks up Mjolnir and becomes the Mighty Thor beside the original.',
  },
  ironheart: {
    synopsis:
      'Riri Williams brings a homemade iron suit home to Chicago and joins a crew whose boss draws power from a hood that is not technology. The AI she built starts answering in her dead best friend’s voice.',
    episodes: episodes([
      [
        'Take Me Home',
        41,
        'Riri leaves MIT with the suit and no safety net, and Chicago offers her a job that pays in trouble.',
      ],
      [
        'Will the Real Natalie Please Stand Up?',
        50,
        'The AI in the suit develops a personality that belongs to Natalie, the friend Riri could not save.',
      ],
      [
        'We in Danger, Girl',
        56,
        'Parker Robbins pulls Riri into a heist, and the suit is the only reason she is invited.',
      ],
      [
        'Bad Magic',
        53,
        'The Hood’s power stops looking like gear and starts looking like a bargain Riri does not understand.',
      ],
      [
        "Karma's a Glitch",
        60,
        'Magic and the armor clash, and Natalie-as-code begins to want a life Riri cannot debug.',
      ],
      [
        'The Past Is the Past',
        42,
        'Riri has to decide what she owes the dead, the crew, and the version of herself the Hood is offering.',
      ],
    ]),
  },
  'werewolf-by-night': {
    runtimeMinutes: 53,
    synopsis:
      'Monster hunters gather for a ritual hunt to claim a powerful relic. Jack Russell is one of the hunters, and he is also the creature they would mount on a wall.',
  },
  'guardians-holiday-special': {
    runtimeMinutes: 44,
    synopsis:
      'Mantis and Drax kidnap Kevin Bacon to give Peter Quill a Christmas he lost as a kid. The gesture is a mess, and it still lands.',
  },
  quantumania: {
    runtimeMinutes: 124,
    synopsis:
      'Scott, Cassie, Hope, Janet, and Hank are pulled into the Quantum Realm, where Janet’s old secret has become a conqueror named Kang. Getting home means deciding whether to leave him there.',
  },
  'guardians-of-the-galaxy-vol-3': {
    runtimeMinutes: 150,
    synopsis:
      'Rocket is dying, and the key to saving him is the High Evolutionary who built him. The Guardians raid that past, and the family that comes out the other side is not the same crew.',
  },
  'secret-invasion': {
    synopsis:
      'Nick Fury comes back to Earth to find Skrulls he once promised to help have started a quiet invasion. Trust is the first casualty, including inside his own marriage.',
    episodes: episodes([
      [
        'Resurrection',
        55,
        'Fury returns from space and learns Maria Hill’s contact has proof that Skrulls are already inside world governments.',
      ],
      [
        'Promises',
        58,
        'A rebel Skrull leader explains how Fury’s unkept promise curdled into a plan to take the planet.',
      ],
      [
        'Betrayed',
        42,
        'Gravik’s faction turns on allies who still want peace, and Talos has to pick a side in public.',
      ],
      [
        'Beloved',
        36,
        'Fury’s wife reveals how long she has been living beside him as someone else.',
      ],
      [
        'Harvest',
        37,
        'The rebels go after a cache of superhero DNA that could make a Skrull into any Avenger.',
      ],
      [
        'Home',
        36,
        'Fury ends the invasion in person, and the human shape of the victory is smaller than the fear it leaves behind.',
      ],
    ]),
  },
  'the-marvels': {
    runtimeMinutes: 105,
    synopsis:
      'Carol Danvers, Kamala Khan, and Monica Rambeau start swapping places whenever they use their powers. They have to fly as a trio to stop a Kree revolutionary from tearing a hole between their worlds.',
  },
  'loki-s2': {
    synopsis:
      'The TVA is dying now that the timeline can branch. Loki learns how the agency really works so he can save it, and then chooses a lonely job that keeps every branch alive.',
    episodes: episodes([
      [
        'Ouroboros',
        48,
        'Loki is timeslipping through the TVA’s past and future, and a repair tech named O.B. is the only one who treats that as a fixable problem.',
      ],
      [
        'Breaking Brad',
        52,
        'The team hunts a missing TVA hunter and pulls Sylvie back into a fight she wanted to leave.',
      ],
      [
        '1893',
        54,
        'A World’s Fair hides a variant who knows where the TVA’s founder went, and a Kang is already selling the future.',
      ],
      [
        'Heart of the TVA',
        51,
        'The loom that holds the branches is failing, and a traitor inside the TVA would rather prune the problem.',
      ],
      [
        'Science/Fiction',
        45,
        'With the TVA gone, Loki slips into the ordinary lives his friends would have had and tries to pull them back.',
      ],
      [
        'Glorious Purpose',
        59,
        'Loki stops trying to preserve one timeline and takes the throne of a tree that holds all of them.',
      ],
    ]),
  },
  'what-if-s2': {
    synopsis:
      'More stray timelines get an episode each, and Captain Carter keeps falling through them until Strange Supreme’s collection of broken worlds demands a warden.',
    episodes: episodes([
      [
        'What If... Nebula Joined the Nova Corps?',
        29,
        'Nebula is a cop on Xandar and uncovers a conspiracy inside the corps she joined.',
      ],
      [
        'What If... Peter Quill Attacked Earth\'s Mightiest Heroes?',
        30,
        'Ego’s son comes to Earth as a child weapon, and a younger Avengers lineup has to reach him.',
      ],
      [
        'What If... Happy Hogan Saved Christmas?',
        27,
        'Happy is the only one left at Avengers Tower when a heist, and a Hulk transformation, ruin the party.',
      ],
      [
        'What If... Iron Man Crashed into the Grandmaster?',
        32,
        'Tony lands in Sakaar and tries to rig the Grandmaster’s race instead of winning it honestly.',
      ],
      [
        'What If... Captain Carter Fought the Hydra Stomper?',
        31,
        'The armor Steve wore is still fighting, and Peggy follows it across a war that will not stay in one year.',
      ],
      [
        'What If... Kahhori Reshaped the World?',
        32,
        'A Mohawk woman gains power from a forbidden lake and refuses the conquest that comes looking for it.',
      ],
      [
        'What If... Hela Found the Ten Rings?',
        29,
        'Banished Hela lands in the Ten Rings’ world and learns a different way to hold power.',
      ],
      [
        'What If... The Avengers Assembled in 1602?',
        30,
        'A time-torn 1602 gathers familiar heroes under ruffs and armor, and Captain Carter is the anachronism.',
      ],
      [
        'What If... Strange Supreme Intervened?',
        31,
        'Strange Supreme has been imprisoning universe-killers, and Carter has to decide if his mercy is another cage.',
      ],
    ]),
  },
  'deadpool-and-wolverine': {
    runtimeMinutes: 128,
    synopsis:
      'Wade Wilson is pulled into the TVA’s mess and told his world is dying. He goes looking for a Wolverine who can matter, and finds one who already failed his own.',
  },
  'agatha-all-along': {
    synopsis:
      'Agatha Harkness, still trapped in Wanda’s spell, is dragged onto the Witches’ Road by a teenage familiar and a coven of strangers. The Road asks for a life at every trial.',
    episodes: episodes([
      [
        'Seekest Thou the Road',
        40,
        'Agatha is living inside a detective show until a boy and a neighbor haul her back into her real, ruined life.',
      ],
      [
        'Circle Sewn with Fate Unlock Thy Hidden Gate',
        42,
        'Agatha recruits a coven that does not trust her, because the Road will not open for a witch alone.',
      ],
      [
        'Through Many Miles of Tricks and Trials',
        36,
        'The first trial poisons them with their worst memories and makes them drink anyway.',
      ],
      [
        "If I Can't Reach You Let My Song Teach You",
        41,
        'A 1970s trial asks the coven to sing, and Alice’s family curse answers.',
      ],
      [
        "Darkest Hour, Wake Thy Power",
        30,
        'A growing-up trial turns the coven on Agatha, and someone does not leave the firelight.',
      ],
      [
        'Familiar by Thy Side',
        47,
        'The boy’s real name and the reason he found Agatha rewrite every episode that came before.',
      ],
      [
        "Death's Hand in Mine",
        35,
        'A tarot trial tells Billy who has been walking with them, and what she wants at the end of the Road.',
      ],
      [
        'Follow Me My Friend To Glory at the End',
        46,
        'The last trial is Agatha’s, and the Road’s promise starts to look like a story she told.',
      ],
      [
        'Maiden Mother Crone',
        42,
        'Agatha’s past with her son explains the lie of the Road, and she still chooses to stay a ghost at Billy’s side.',
      ],
    ]),
  },
  visionquest: {
    synopsis:
      'A rebuilt Vision hides from people who would turn him into a weapon, asking the AIs in his head — including Ultron — what he is. A bounty, and a boy who might be his son reborn, end the quiet.',
    episodes: episodes([
      [
        'No Strings',
        53,
        'Vision’s attempt to live unseen collapses when someone starts hunting him for what his body is worth.',
      ],
      [
        'Theseus',
        45,
        'He meets the hunter and starts testing whether Tommy Shepherd is the son he lost in Westview.',
      ],
      [
        'Reboot',
        52,
        'Vision and Tommy have to trust each other long enough to survive, while another killing follows them.',
      ],
      [
        'Malware',
        48,
        'A new enemy corners Vision, and Ultron gets a conversation with Tommy that Vision cannot hear.',
      ],
      [
        'Firewall',
        46,
        'Ultron allies with Jocasta. An old friend helps Vision stay ahead of the people holding his leash.',
      ],
      [
        'Deadlock',
        54,
        'Vision and the mercenary Paladin make a brittle deal, and Tommy finally hears what he actually is.',
      ],
      [
        'Immolation',
        62,
        'Vision and Ultron stop circling and try to end the argument about who gets to live in that body.',
      ],
      [
        'Forever',
        69,
        'Vision finishes the search for a self that is not a weapon, a husband, or a ghost of the mind stone.',
      ],
    ]),
  },
  'what-if-s3': {
    synopsis:
      'The last set of stories pushes the Watcher’s neutrality past breaking, until the question is what happens when the narrator leaves the chair.',
    episodes: episodes([
      [
        'What If... The Hulk Fought the Mech Avengers?',
        29,
        'A gamma apocalypse leaves giant mechs as Earth’s answer to the Hulk.',
      ],
      [
        'What If... Agatha Went to Hollywood?',
        28,
        'Agatha Harkness treats the movie business as another coven to rob.',
      ],
      [
        'What If... The Red Guardian Stopped the Winter Soldier?',
        30,
        'Alexei Shostakov intercepts the Winter Soldier and changes an assassination that shaped the century.',
      ],
      [
        'What If... Howard the Duck Got Hitched?',
        30,
        'Howard’s wedding drags the weirdest guests in the cosmos into a family argument.',
      ],
      [
        'What If... The Emergence Destroyed the Earth?',
        31,
        'A celestial birth cracks the planet, and the survivors live on the pieces.',
      ],
      [
        'What If... 1872?',
        30,
        'The Old West version of this universe settles a Marvel grudge with horses and guns.',
      ],
      [
        'What If... The Watcher Disappeared?',
        25,
        'The voice that narrates these worlds goes silent, and the stories notice.',
      ],
      [
        'What If... What If?',
        32,
        'The branches fold in on the idea of the series itself, and the Watcher has to answer for watching.',
      ],
    ]),
  },
  'daredevil-born-again-s1': {
    synopsis:
      'After a loss that drives Matt Murdock to quit, Wilson Fisk becomes mayor of New York. The city gets worse until Daredevil comes back.',
    episodes: episodes([
      [
        'Heaven’s Half Hour',
        58,
        'Bullseye walks into Matt’s life again, Foggy Nelson is killed, and Matt puts the horned mask away.',
      ],
      [
        'Optics',
        47,
        'Mayor Fisk sells a safer city while Matt tries to practice law as if the rooftops are finished.',
      ],
      [
        'The Hollow of His Hand',
        44,
        'Matt defends Hector Ayala, the White Tiger, and Fisk’s old partners come looking for the throne he left.',
      ],
      [
        'Sic Semper Systema',
        52,
        'Both men feel the pull back to violence, and neither’s public face holds for the whole hour.',
      ],
      [
        'With Interest',
        40,
        'An ordinary day traps Matt in a crisis that he cannot solve without a mask or an old ally.',
      ],
      [
        'Excessive Force',
        42,
        'A serial killer who treats murder as art gives the city a reason to want a devil again.',
      ],
      [
        'Art for Art’s Sake',
        40,
        'Daredevil returns and races Fisk to stop Muse before the next body is a statement.',
      ],
      [
        'Isle of Joy',
        49,
        'Fisk’s inaugural ball tightens his hold on the police, the press, and the people in the room.',
      ],
      [
        'Straight to Hell',
        57,
        'Mayor Fisk stops pretending he is not the Kingpin, and Daredevil answers in the open.',
      ],
    ]),
  },
  'captain-america-brave-new-world': {
    runtimeMinutes: 118,
    synopsis:
      'Sam Wilson, now Captain America, is pulled into a conspiracy around President Thaddeus Ross. A plot to restart the Hulk, and an island of adamantium, tests the version of the shield Sam chose.',
  },
  thunderbolts: {
    runtimeMinutes: 127,
    synopsis:
      'Yelena, Bucky, Ghost, Red Guardian, and John Walker are sent to kill each other and find a void where a broken subject named Bob is becoming something worse. They crawl out as a team nobody ordered.',
  },
  'wonder-man': {
    synopsis:
      'Struggling actor Simon Williams hides ionic powers because Hollywood banned superhumans from sets. He and Trevor Slattery chase roles in a Wonder Man remake while Damage Control listens in.',
    episodes: episodes([
      [
        'Matinee',
        35,
        'Simon is fired and dumped on the same day, then blows his chance at an official audition and takes it anyway, where he meets Slattery.',
      ],
      [
        'Self-Tape',
        34,
        'A self-tape session triggers Simon’s powers. Slattery helps him finish the tape and secretly starts spying for Damage Control.',
      ],
      [
        'Pacoima',
        34,
        'At Simon’s mother’s birthday, a fight with his brother exposes the powers. Slattery destroys the recording he was supposed to bring back.',
      ],
      [
        'Doorman',
        32,
        'A flashback shows how a powered doorman’s accident got superhumans banned from the industry.',
      ],
      [
        'Found Footage',
        25,
        'Simon uses his powers in front of a kid’s camera, and he and Slattery spend the day trying to erase the proof.',
      ],
      [
        'Callback',
        36,
        'At the director’s house, Simon stops imitating other movies long enough to win the role, and Slattery admits to his handlers that the powers are real.',
      ],
      [
        'Kathy Friedman',
        35,
        'A profiler starts asking questions. Slattery confesses the spy job, and Simon’s panic destroys the set.',
      ],
      [
        'Yucca Valley',
        34,
        'Slattery takes the public blame and goes to prison. Simon finishes the movie, then breaks him out.',
      ],
    ]),
  },
  'daredevil-born-again-s2': {
    synopsis:
      'Mayor Fisk hunts Daredevil as public enemy number one. Matt fights from the dark to pull the Kingpin’s city back, with Karen Page and new allies beside him.',
    episodes: episodes([
      [
        'The Northern Star',
        51,
        'Daredevil is hiding and still working. A player from Washington arrives with an agenda of their own.',
      ],
      [
        'Shoot the Moon',
        46,
        'Fisk changes tactics and tries to draw Matt into the open instead of chasing him across rooftops.',
      ],
      [
        'The Scales & the Sword',
        47,
        'Matt and Karen find people willing to stand against the mayor’s version of law and order.',
      ],
      [
        'Gloves Off',
        51,
        'Bullseye builds a new routine, and Fisk steps into a fight with his own hands.',
      ],
      [
        'The Grand Design',
        50,
        'The anti-vigilante task force tightens the search for both Daredevil and Bullseye.',
      ],
      [
        'Requiem',
        49,
        'Fisk’s machine takes a blow it cannot spin, and the resistance moves into the streets.',
      ],
      [
        'The Hateful Darkness',
        44,
        'A trial that matters personally to Matt becomes the city’s main stage.',
      ],
      [
        'The Southern Cross',
        51,
        'New York and the people protecting it cross into a different kind of fight than the one the season started with.',
      ],
    ]),
  },
  'the-punisher-one-last-kill': {
    runtimeMinutes: 51,
    synopsis:
      'Frank Castle tries to put the Punisher away after he thinks the last people tied to his family’s murders are dead. Ma Gnucci puts a bounty on him, and protecting the neighbors in the crossfire sends him back out.',
  },
  'spider-man-brand-new-day': {
    runtimeMinutes: 145,
    synopsis:
      'Years after the world forgot Peter Parker, he runs himself into the ground as Spider-Man until his powers start to change. A young telepath searching for her sister drags him, the Punisher, and the Hulk into the same fight.',
  },
  'avengers-doomsday': {
    synopsis:
      'Doctor Doom pulls heroes from across the Marvel universe into a threat the Avengers cannot answer alone.',
  },
  'avengers-secret-wars': {
    synopsis:
      'What begins in Doomsday breaks open into a war between realities.',
  },
}
