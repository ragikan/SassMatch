export const questionSet = [
  {
    id: 1,
    questionSelf: "You’re overwhelmed and no one is around. What’s your go-to coping method?",
    //this question reveals the emotional coping style of the person 
    questionPartner: "Your partner had a bad day but waited a few hours before telling you. You feel…",
    //This question subconcsiously reveals their action to a partner lying on secure-avoidant spectrum

    optionsSelf: [
  { label: "a", 
    text: "I usually pause, feel a bit off, maybe journal. I know it'll pass eventually.", 
    value: 3 },  
    // Secure  

  { label: "b", 
    text: "I try to fix things, overthink a lot, and want to talk to someone.", 
    value: 1 },  
    // Anxious Codependent  

  { label: "c", 
    text: "I shut down emotionally and keep to myself until it doesn’t bother me.", 
    value: 5 },                 
    // Dismissive Avoidant  

  { label: "d", 
    text: "I get overwhelmed quickly, usually cry, and feel unsure about what to do.", 
    value: 2 },            
    // Anxious Panicky  

  { label: "e", 
    text: "I distract myself with something light — maybe a show or some chores.", 
    value: 4 },      
    // Passive Avoidant  
]
,
    optionsPartner: [
  { label: "a", 
    text: "That’s okay… I just hope they know they don’t have to go through it alone.", 
    value: 2 },         
    // Anxious Panicky  
    //Decoded: Sounds sweet, but actually craves emotional reliance. Needs to be needed.

  { label: "b", 
    text: "I think it’s important to handle things on your own sometimes. I admire that in them.", 
    value: 5 },   
    // Dismissive Avoidant
    //Decoded: Applauding emotional withdrawal as a virtue. Doesn’t really want emotional labor in relationships.

  { label: "c", 
    text: "I understand, but I do wish they felt safe enough to come to me sooner.", 
    value: 1 },  
    //anxious codependent  
    //Decoded: Translation = “Why didn’t they need me immediately?? I equate closeness with urgency.”  

  { label: "d", 
    text: "Everyone processes differently. I prefer some space too, so I completely respect that.", 
    value: 4 },      
    // Passive Avoidant
    // Decoded: Low-key relieved they didn’t come crying immediately. Feels safe with emotional distance.

  { label: "e", 
    text: "That’s totally fair. I trust they’ll share when they’re ready. I’m here when they are.", 
    value: 3 },              
    // Secure 
    // Regulates self, respects partner’s process, no panic, no projection. Emotionally stable fr fr 
]
  },
  // ... Repeat this format for questions 2 through 10 with distinct option sets per questionSelf and questionPartner
  {
  id: 2,
  questionSelf: "Your partner says you hurt them, but you didn’t mean to. You feel…",
  //this reveals Can this person handle conflict without spiraling, deflecting, or stonewalling?
  questionPartner: "Your partner apologizes, but you still feel weird. What do you expect next?",

  optionsSelf: [
    {
      label: "a",
      text: "I start rethinking the whole interaction. I didn’t mean it, but maybe I missed something.",
      value: 2
    },
    //Actually: Guilt-spiraling/anxious overprocessor (Guilt-Spiral Analyst)



    {
      label: "b",
      text: "I didn’t mean to hurt them, so I try not to overfocus on something that wasn’t intentional",
      value: 5
    },
    //Sounds “reasonable” at first glance (“don’t overfocus” = avoid drama, right?)
    // But it minimizes the partner’s feelings by centering intent over impact

    {
      label: "c",
      text: "I feel bad, and I want to make it right — even if I don’t fully get it yet.",
      value: 1
    },
    // Over-fixer with low self-boundaries (Over-Fixer)

    {
      label: "d",
      text: "I pause, acknowledge how they feel, then check in on what needs repair from both ends.",
      value: 3
    },
    //This is the Secure one — emotionally balanced, but written with a clinical calm to make it look a little emotionally detached

    {
      label: "e",
      text: "I try not to escalate things. I get quiet and wait till we both cool down.",
      value: 4
    }
    //Conflict-avoidant masked as self-regulated (Soft Evader)
  ],

  optionsPartner: [
    {
      label: "a",
      text: "A follow-up convo to fully process it.",
      value: 3
    },
    //Secure peeps

    {
      label: "b",
      text: "Them to keep checking in until I feel okay again.",
      value: 1
    },
    //over fixer/ anxious codependent

    {
      label: "c",
      text: "If we’ve already talked about it, I don’t need more. I trust we’re okay.",
      value: 5
    },
    //Dismissive Avoidant 

    {
      label: "d",
      text: "I just want things to feel light again. No need to dig deeper unless it comes up.",
      value: 4
    },
    //Soft evador/ passive avoidant

    {
      label: "e",
      text: "I’d still feel off. I think I’d need them to remind me it’s okay between us.",
      value: 2
    }
    // Anxious-panicky

  ]
},




  {
  id: 3,
  questionSelf: "At the end of a long day, your ideal evening includes…",
  questionPartner: "Your partner suggests a spontaneous weekend trip. You feel…",
  optionsSelf: [
    {
      label: "a",
      text: "Cooking something simple, maybe a comfort show while texting people here and there.",
      value: 2
      //Low-Key HomeBody
    },
    {
      label: "b",
      text: "Lighting a candle, ordering in, and pretending the world doesn’t exist",
      value: 1
      //Extreme Homebody
    },
    {
      label: "c",
      text: "Changing outfits, grabbing the squad, and going wherever the night takes us.",
      value: 5
      //Full Blown Gremlin
    },
    {
      label: "d",
      text: "Catching up with friends, maybe a spontaneous dinner or a casual hangout if I’m up.",
      value: 4
      //Mild Extrovert
    },
    {
      label: "e",
      text: "I like being around someone, maybe go for a walk or vibe at home together",
      value: 3
      //Middle Ground
    }
  ],
  optionsPartner: [
    {
      label: "a",
      text: "That sounds fun, but I’d honestly prefer a calm weekend at home together instead.",
      value: 1
      //Extreme Homebody
    },
    {
      label: "b",
      text: "HELL YES. Say less. Bags packed. Let’s disappear this weekend and make core memories.",
      value: 5
      //Full Blown Gremlin
    },
    {
      label: "c",
      text: "Honestly, I’d love the energy shift! Surprises like that keep things exciting.",
      value: 4
      //Mildly Extroverted
    },
    {
      label: "d",
      text: "I’d be open to it! Depends on the vibe — could be a fun change.",
      value: 3
      //Middle Ground
    },
    {
      label: "e",
      text: "Sounds sweet, but I’d need a little heads-up. I like having time to prepare.",
      value: 2
      //Lowkey Homebody 
    }
  ]
}
,



  {
    id: 4,
    questionSelf: "When someone compliments you, what’s your instinctive reaction?",
    //Can they receive praise? Do they shrink or feel unworthy?
    questionPartner: "You see someone flirt with your partner in front of you. You feel…",
    //reveals if they can deal if their partner is confident or not
    optionsSelf: [
  {
    label: "a",
    text: "It’s nice. I appreciate the moment, but I don’t dwell on it too much.",
    value: 4
  },  
  // Quietly Secure

  {
    label: "b",
    text: "Depends who it’s from, I guess. I’ll usually laugh it off or change the topic.",
    value: 1
  },  
  // Over-Insecure

  {
    label: "c",
    text: "I like sitting with it for a moment. It feels good to actually let it register.",
    value: 5
  },  
  // Deeply Secure and Grounded 

  {
    label: "d",
    text: "I try to stay cool in the moment… but it definitely lingers in my head later.",
    value: 2
  },  
  // Subtly Unstable

  {
    label: "e",
    text: "Oh, I just say thanks and move on. Not much to think about really",
    value: 3
  }  
  // Neutral NPC Core
]
,
    optionsPartner: [
  {
    label: "a",
    text: "Honestly? Doesn’t really bother me unless it crosses a line. I forget it pretty fast.",
    value: 3
  },  
  // Neutral/NPC Core

  {
    label: "b",
    text: "I notice it, sure. I don’t react, but it sticks in my head a little.",
    value: 2
  },  
  // Subtly Unstable

  {
    label: "c",
    text: "I feel solid in us. If anything, I enjoy watching them handle it with grace.",
    value: 5
  },  
  // Deeply Secure

  {
    label: "d",
    text: "I clock it. If they’re respectful, I won’t say anything — I trust how my partner handles it.",
    value: 4
  },  
  // Quietly Secure

  {
    label: "e",
    text: "I trust them, but I’d still want a little reassurance in moments like that.",
    value: 1
  }  
  // Over Insecure
]

  },




   {
    id: 5,
    questionSelf: "What do you need most when everything feels out of control?",
    //reveals their emotional emergency kit
    questionPartner: "After an argument, what’s something your ideal partner would never do?",
    //reveals what they want in their partner
    optionsSelf: [
  {
    label: "a",
    text: "Honestly? Space. I just need the world to quiet down so I can breathe.",
    value: 1
  },  
  // Avoidant Shutdowner

  {
    label: "b",
    text: "A little reassurance, some honesty, and a sense of direction. I just need something steady.",
    value: 5
  },  
  // Fighter 

  {
    label: "c",
    text: "Nothing major. I water my plants, scroll, or clean. I wait for it to pass.",
    value: 3
  },  
  // Low Energy Coaster

  {
    label: "d",
    text: "I’ll zone out for a bit. Then I usually try to observe what’s really happening.",
    value: 2
  },  
  // Storm Watcher

  {
    label: "e",
    text: "I light a candle, slow down, and try to soften whatever edge I’m carrying inside.",
    value: 4
  }  
  // Gentle Soother
],
    optionsPartner: [
  {
    label: "a",
    text: "Act like nothing happened. The silence after a fight makes me feel invisible and dismissed.",
    value: 4
  },  
  // They want a Gentle Soother

  {
    label: "b",
    text: "Refuse to talk it through. I need to address it, not pretend it didn’t happen.",
    value: 5
  },  
  // their ideal is fighter

  {
    label: "c",
    text: "Make it a whole thing. I can’t deal with emotional fireworks when I’m already drained.",
    value: 3
  },  
  // Ideal is Low Energy Coaster
  // They fear intensity. Calm over catharsis.

  {
    label: "d",
    text: "Push me to talk right away. If I’m not ready, it’ll just make things worse.",
    value: 1
  },  
  // They fear emotional urgency. Space = safety.
  // They want a Avoidant Shutdowner

  {
    label: "e",
    text: "Blow up over small things. If you can’t hold steady in storms, I’ll stop trusting you.",
    value: 2
  }  
  // They prefer the storm watcher 
]
  },




   {
    id: 6,
    questionSelf: "You get a full day to yourself — no responsibilities, no pressure. What do you do?",
    //this questions reveals if they are ambitious or aimless
    questionPartner: "What kind of presence do you secretly admire most in others?",
    optionsSelf: [
  {
    label: "a",
    text: "Probably scroll, maybe nap. I’d just enjoy doing absolutely nothing productive for once.",
    value: 1 
    //Floating Aimless Dreamer
    //No urgency. No direction. They’re not panicking, but they’re also...not moving.
  },
  {
    label: "b",
    text: "Sleep in, go for a walk, eat something nice. I’d keep it chill and normal.",
    value: 2 
    //Functioning NPC
    //Neutral. Not lost, not driven. They live in the in-between, and aren’t pressed about it.
  },
  {
    label: "c",
    text: "I’d wander, maybe journal, maybe paint. I like just seeing where the day takes me.",
    value: 3
    //Romantic Drifter 
    //They're soulful and creative, but don’t need a clear goal to feel fulfilled.
  },
  {
    label: "d",
    text: "Finally work on my side project. Maybe map out my next few months. Feels good to reset.",
    value: 5 
    //Intentional Buider
    // This one has clarity. They aren’t shouting “ambition,” but they’re moving with purpose.
  },
  {
    label: "e",
    text: "I'd reconnect with myself, check in on what matters, maybe start something that fuels me again.",
    value: 4 
    // Emotional Builder 
  }
],
    optionsPartner: [
  {
    label: "a",
    text: "There’s something calming about people who aren’t in a rush. Like... they just exist without apology",
    value: 1 
    // Wants a Floating aimless dreamer
  },
  {
    label: "b",
    text: "People who are in tune with themselves. Who grow slow, but always with intention and care.",
    value: 4 //Wants emotion Builder
  },
  {
    label: "c",
    text: "People who just show up consistently. Nothing flashy, just... emotionally dependable. That’s rare and underrated.",
    value: 2 //NPC
  },
  {
    label: "d",
    text: "I really admire people who make things happen. That quiet fire, that vision — it’s grounding.",
    value: 5 //Attracted to Intentional Builders 
  },
  {
    label: "e",
    text: "The ones who see life like a painting. Soft eyes, wandering thoughts, and weird magical metaphors",
    value: 3 //Romantic Drifters
  }
]

  },





   {
    id: 7,
    questionSelf: "You’re vibing with someone new. What makes you pull away, even if they’re great?",
    //Reveals their own pattern.
    questionPartner: "You meet someone new. What’s something they could do that’d hook your attention fast?",
    optionsSelf: [
      { label: "a", text: " If it starts feeling like too much effort to stay connected. I like easy, mutual flow.", value: 2 },
      //Functional Normie Partner (stable but emotionally mild)
      { label: "b", text: "When things get too emotionally intense too fast. I like keeping it light for a while.", value: 1 },
      //Superficial Craver (floating, flirty, surface-level)
      { label: "c", text: "If they send mixed signals. I won’t chase clarity — I just match the energy shown.", value: 3 },
      // Emotionally Available Communicator (clear, grounded, present)
      { label: "d", text: "If they stay on the surface. I need something thoughtful, where real feelings actually land.", value: 4 },
      //Romantic Depth-Seeker (dreamy, intuitive, soulful)
      { label: "e", text: "If I can’t feel emotional honesty in them. I want to really know the person I’m with.", value: 5 }
      //Intense, All-In Connector (passionate, high-stakes, emotionally full-on)
    ],
    optionsPartner: [
      { label: "a", text: "If they open up about something real fast. That level of raw honesty just pulls me in.", value: 5 },
      // Intensity-Addicted Devourer 
      { label: "b", text: "If they’re just easy to be around. No games, no awkwardness, just... relaxed connection.", value: 2 },
      //Functional Normie Lover (prefers stability, not intense drama)
      { label: "c", text: "If they say something weirdly insightful that makes me feel like they get some part of me.", value: 4 },
      //Romantic Depth-Seeker (soulful, intuitive, slow-burner)
      { label: "d", text: "If they’re effortlessly charming and the convo flows like we’ve known each other forever.", value: 1 },
      // Superficial Craver (floats in fun, avoids depth)
      { label: "e", text: "If they listen well and make me feel like I’m genuinely being seen — not sized up.", value: 3 }
      // Secure, Present Connector (emotionally healthy, grounded)
    ]
  },






   {
    id: 8,
    questionSelf: "When do you start pulling away from people (even if you like them)?",
    questionPartner: "What’s a trait that looks like a red flag, but you secretly always rationalize away?",
    optionsSelf: [
      { label: "a", text: "When they try to get too close, too fast. I disappear to protect my peace.", value: 1 },
      //Dismissive Avoidant (Emotionally Detached Ghost Ninja)
      { label: "b", text: "When I feel like I care way more than they do. So I shut down to cope.", value: 5 },
      //disorganized
      { label: "c", text: "When things feel off, but I don’t know how to say it. So I just... drift.", value: 2 },
      //Passive Avoidant (Soft Fade Artist)
      { label: "d", text: "When I feel like I’m not enough for them.", value: 4 },
      //Anxious (Overthinker With a Rescue Fantasy)
      { label: "e", text: "When there’s no real effort from either side. I leave when it’s already over emotionally", value: 3 }
      //Secure (Grounded Connector)
    ],
    optionsPartner: [
      { label: "a", text: "They don’t really open up much, but I kind of like that they’re lowkey. I feel like they don’t overshare or force deep convos too soon.", value: 1 },
      //Craving Dismissive Avoidant
      { label: "b", text: "They’re easy to be around because they don’t get into arguments. Like, even if there’s tension, they usually brush it off or distract themselves.", value: 2 },
      //Craving Passive Avoidant
      { label: "c", text: "I want to lead—they just follow.", value: 3 },
      { label: "d", text: "They sometimes worry if I’m pulling away, even over small things. But I get it, and I don’t mind reassuring them.", value: 4 },
      //Craving Anxious
      { label: "e", text: "Sometimes they seem really present, and other times they kind of check out for a bit. I just think they’re dealing with their own stuff quietly", value: 5 }
      //Craving Disorganized
    ]
  },






   {
    id: 9,
    questionSelf: "What’s your social energy like?",
    questionPartner: "What kind of social energy do you want them to have?",
    optionsSelf: [
      { label: "a", text: "I love deep 1-on-1s.", value: 1 },
      { label: "b", text: "I thrive in big chaotic groups.", value: 2 },
      { label: "c", text: "I fade out fast and need recovery time.", value: 3 },
      { label: "d", text: " I’m the ghost—I’ll show up if I feel like it.", value: 4 },
      { label: "e", text: "I'm selectively extroverted with people I trust.", value: 5 }
    ],
    optionsPartner: [
      { label: "a", text: "Introspective and deep.", value: 1 },
      { label: "b", text: "Wild, loud, extroverted.", value: 2 },
      { label: "c", text: "Chill and homebody-ish.", value: 3 },
      { label: "d", text: "Mysterious and flaky but fascinating.", value: 4 },
      { label: "e", text: "Selectively social—only close with chosen people.", value: 5 }
    ]
  },




   {
    id: 10,
    questionSelf: "What kind of relationship rhythm do you crave?",
    questionPartner: "What kind of relationship rhythm do you crave from them?",
    optionsSelf: [
      { label: "a", text: "Cozy, stable, emotionally safe.", value: 1 },
      { label: "b", text: "Passionate, high-energy, unpredictable.", value: 2 },
      { label: "c", text: "Spacey, minimal, low-maintenance.", value: 3 },
      { label: "d", text: "Mutually obsessive but functional.", value: 4 },
      { label: "e", text: "One that doesn’t feel like I’m trapped.", value: 5 }
    ],
    optionsPartner: [
      { label: "a", text: "Predictable, emotionally consistent.", value: 1 },
      { label: "b", text: "Fiery, dramatic, passionate.", value: 2 },
      { label: "c", text: "Low-maintenance, space-respecting.", value: 3 },
      { label: "d", text: "Obsessive but stable (is that a thing?).", value: 4 },
      { label: "e", text: "Light and flexible—I don’t want to feel smothered.", value: 5 }
    ]
  }
];