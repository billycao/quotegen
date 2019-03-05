var express = require('express');
var hbs = require('express-hbs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var quotes = [
    {
      text: "How lucky I am to have something that makes saying goodbye so hard.",
      src: "Winnie the Pooh"
    },
    {
      text: "There is no risk in changing. The real risk in staying the same.",
      src: '<a href="http://inoveryourhead.net/how-to-waste-your-life/">http://inoveryourhead.net/how-to-waste-your-life/</a>'
    },
    {
      text: "Sometimes, contentment is a matter of will. You have to look at what you have right in front of you, at what it could be, and stop measuring it against what you’ve lost. I know this to be wise and true, just as I know that pretty much no one can do it.",
      src: "This Is Where I Leave You by Jonathan Tropper",
      font_size: "1.8rem",
    },
    {
      text: "When you get older, life seems to just sort of happen to you. Your youth is a time of total empowerment.",
      src: '<a href="http://goinswriter.com/travel-young/">http://goinswriter.com/travel-young/</a>'
    },
    {
      text: "People are far more like you than unlike you",
      src: ""
    },
    {
      text: "Who you choose as your friends counts more than where you work or how much you earn.",
      src: ""
    },
    {
      text: "Relationships worth having are worth working at.",
      src: ""
    },
    {
      text: "It is better to be hated for what you are than loved for what you are not.",
      src: ""
    },
    {
      text: "Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.",
      src: "John Wooden"
    },
    {
      text: "To abstain from the enjoyment which is in our power, or to seek distant rather than immediate results, are among the most painful exertions of the human will.",
      src: ""
    },
    {
      text: "Open and honest communication between partners is death to 90% of all relationship problems. It really can't be said enough.",
      src: ""
    },
    {
      text: "Don’t feel guilty if you don’t know what you want to do with your life.The most interesting people I know didn’t know at 22 what they wanted to do with their lives. Some of the most interesting 40-year-olds I know still don’t.",
      src: ""
    },
    {
      text: "No matter how much someone is into you in private, if they conceal it from others there is something wrong.",
      src: "Reddit"
    },
    {
      text: "The best thing you could have gotten for yourself isn't often for yourself.",
      src: ''
    },
    {
      text: "Omnia mutantur, nihil interit. (Everything changes, nothing is lost.)",
      src: ''
    },
    {
      text: "If nothing else, be kind.",
      src: 'my friend Amy Christianto (one of my favorite quotes ;) - billy)'
    },
    {
      text: "The best revenge is bettering yourself.",
      src: ''
    },
    {
      text: "We'll regret all those things we thought of, but didn't ever do.",
      src: 'Box Car Racer - Watch The World'
    },
    {
      text: "The best way to destroy an enemy is to make him a friend.",
      src: ''
    },
    {
      text: "Everybody has a secret world inside of them. All of the people of the world, I mean everybody. No matter how dull and boring they are on the outside, inside them they've all got unimaginable, magnificent, wonderful, stupid, amazing worlds. Not just one world. Hundreds of them. Thousands maybe.",
      src: '',
      font_size: '1.5rem'
    },
    {
      text: "You probably won't remember the test you failed, but you will never forget the person you were with the night before, when you decided not to study.",
      src: 'an old article on tips for college I read. :P'
    },
    {
      text: "While ideas ultimately can be so powerful, they begin as fragile, barely formed thoughts, so easily missed, so easily compromised, so easily just squished.",
      src: '<a href="http://37signals.com/svn/posts/3124-give-it-five-minutes">http://37signals.com/svn/posts/3124-give-it-five-minutes</a>'
    },
    {
      text: "Isn't it funny how day by day nothing changes but when you look back everything is different.",
      src: ''
    },
    {
      text: "If a problem has no solution, it may not be a problem, but a fact, not to be solved, but to be coped with over time.",
      src: 'Simon Peres'
    },
    {
      text: "Love is brightest in the dark.",
      src: 'Avatar, the Last Airbender (Omashu)'
    },
    {
      text: "We all love each other the way we want to be loved and we all accept the love we think we deserve.",
      src: 'another of my favorite quotes. :3'
    },
    {
      text: "There's too much variety in perfection.",
      src: ''
    },
    {
      text: "There's never enough time do all the nothing you want.",
      src: 'Calvin and Hobbes :)'
    },
    {
      text: "Do Epic Shit.",
      src: ''
    },
    {
      text: "Never attribute to malice that which can be adequately explained by stupidity.",
      src: 'Hanlon\'s Razor'
    },
    {
      text: "People change for two reasons: Either they learn enough that they want to, or they've been hurt enough that they have to",
      src: ''
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of other's opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
      src: 'Steve Jobs',
      font_size: '1.4rem'
    },
    {
      text: "We must all face the choice between what is right, and what is easy.",
      src: 'Albus Dumbledore'
    },
    {
      text: "You should take a second to think before envying others. Because when you see someone that has something you want you have no idea what it took for them to get it or what it takes for them to keep it.",
      src: '<a href="https://www.reddit.com/r/GetMotivated/comments/sl6as/youre_most_likely_wrong_about_everyone_you_envy/">Reddit</a>',
      font_size: '1.8rem'
    },
    {
      text: "You may not be her first, her last, or her only. She loved before she may love again. But if she loves you now, what else matters? She's not perfect - you aren't either, and the two of you may never be perfect together but if she can make you laugh, cause you to think twice, and admit to being human and making mistakes, hold onto her and give her the most you can. She may not be thinking about you every second of the day, but she will give you a part of her that she knows you can break - her heart. So don't hurt her, don't change her, don't analyze and don't expect more than she can give. Smile when she makes you happy, let her know when she makes you mad, and miss her when she's not there.",
      src: 'Bob Marley',
      font_size: '1.1rem'
    },
    {
      text: "Everyone judges, if even subconsciously. It's a matter of who prosecutes.",
      src: '<a href="http://www.reddit.com/r/sex/comments/svb6z/ladies_of_sexxit_how_do_you_feel_about_a_man_who/c4haek7">Reddit</a>'
    },
    {
      text: "You must have no mercy or any belief at all in how others will judge you, for your greatness will silence them all.",
      src: ''
    },
    {
      text: "Sometimes you will never know the true value of a moment until it becomes a memory.",
      src: ''
    },
    {
      text: "You are not soulmates. You are not destined to be together. You are not unique and special and wonderful, and your love will not conquer all. You are two normal people in a normal relationship. That is a fragile thing, and if you take it for granted, and don't work to maintain it, it will die.",
      src: '',
      font_size: '1.5rem'
    },
    {
      text: "Do you want to be happy, or do you want to be right? ",
      src: ''
    },
    {
      text: "I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time.",
      src: 'Banksy, among others.'
    },
    {
      text: "The best time to plant a tree is 20 years ago. The second best time is today.",
      src: ''
    },
    {
      text: "Every saint has a past and every sinner has a future.",
      src: 'Oscar Wilde'
    },
    {
      text: "A rain drop never feels responsible for the flood.",
      src: ''
    },
    {
      text: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.",
      src: 'Epicurus'
    },
    {
      text: "Climb mountains, tell no one.",
      src: 'Unknown, but one of my favorites.'
    },
    {
      text: "Don't give up what you want most, for what you want now.",
      src: ''
    },
    {
      text: "I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are.",
      src: 'Mewtwo'
    },
    {
      text: "The only person you should be trying to be better than is the person you were yesterday.",
      src: ''
    },
    {
      text: "Everyone has a right to be heard, no matter how ignorant or misinformed they are.",
      src: ''
    },
    {
      text: "You don't become a failure until you're satisfied with being one.",
      src: ''
    },
    {
      text: "Cherish the ability to grow old; it is a privilege denied to many.",
      src: ''
    },
    {
      text: "All things are difficult before they are easy.",
      src: ''
    },
    {
      text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
      src: ''
    },
    {
      text: "The master has failed more time than the beginner has even tried.",
      src: '<a href="http://goodnightsugar.tumblr.com/post/33305948797/stephenmccranie-this-essay-is-kind-of-the">Tumblr</a>'
    },
    {
      text: "Sometimes success is due less to ability than to zeal.",
      src: 'Charles Buxton'
    },
    {
      text: "A ship in harbor is safe - but that is not what ships are for.",
      src: ''
    },
    {
      text: "The most importants things are the hardest to say because words diminish their meaning.",
      src: 'The Body by Stephen King'
    },
    {
      text: "All that is gold does not glitter; not all who wander are lost.",
      src: 'J. R. R. Tolkien'
    },
    {
      text: "If your dreams don't scare you, they aren't big enough.",
      src: ''
    },
    {
      text: "Expecting the world to treat you fairly because you're a good person is like expecting the bull not to attack you because you're a vegetarian.",
      src: ''
    },
    {
      text: "Some people are so poor all they have is money.",
      src: 'Unknown, but my favorite quote of all time.'
    },
    {
      text: "A true friend stabs you in the front",
      src: 'Oscar Wilde'
    },
    {
      text: "When I was ten, I read fairy tales in secret and would have been ashamed if I had been found doing so. Now that I am fifty, I read them openly. When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.",
      src: 'C.S. Lewis',
      font_size: '1.6rem'
    },
    {
      text: "Not to know is bad, but to refuse to know is worse.",
      src: 'A Gambian proverb'
    },
    {
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      src: 'Dr. Seuss'
    },
    {
      text: "For small creatures such as we the vastness is bearable only through love.",
      src: 'Carl Sagan'
    },
    {
      text: "Maybe our favorite quotations say more about us than about the stories and people we're quoting.",
      src: 'John Green (so meta!)'
    },
    {
      text: "All men dream: but not equally. Those who dream by night in the dusty recesses of their minds wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act their dreams with open eyes, to make it possible.",
      src: 'T. E. Lawrence',
      font_size: '1.4rem'
    },
    {
      text: "A master in the art of living draws no sharp distinction between work and play.",
      src: '<a href="https://zenpencils.com/comic/75-l-p-jacks-work-and-play/">L.P. Jacks</a>'
    },
    {
      text: "Only a fool trips on what is behind him.",
      src: ''
    },
    {
      text: "Climb the mountain so you can see the world, not so the world can see you.",
      src: '<a href="https://www.youtube.com/watch?v=_lfxYhtf8o4">David Mccullough Jr.</a>'
    },
    {
      text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
      src: 'Theodore Roosevelt',
      font_size: '0.9rem',
    },
    {
      text: "People that wait for chances dont have half as many stories as people that take them.",
      src: ''
    },
    {
      text: "If life just got a little bit harder, it probably means you just leveled up.",
      src: 'my friend, Stefany Chen'
    },
    {
      text: "And, what I have learned most of all - don't judge how people have handled their life crises. They have spent FAR more time thinking about it than you, and they know everything that happened. Being on the wrong side of that made me realise how hurtful it is to be judged like that, and also how bad it made those people look.",
      src: '',
      font_size: '1.4rem'
    },
    {
      text: "Dream, but don't forget to live.",
      src: '<a href="http://peternixey.com/post/42836784573/dont-forget-to-live">Peter Nixey</a>'
    },
    {
      text: "Blood makes you related, loyalty makes you family.",
      src: ''
    },
    {
      text: "Friends are the family you choose.",
      src: 'my friend, Stefany Chen'
    },
    {
      text: "The happiest people don't have the best of everything, they just make the best of everything.",
      src: '<a href="http://www.reddit.com/r/GetMotivated/comments/1albwj/truth/">Reddit</a>'
    },
    {
      text: "The proper function of man is to live, not to exist.",
      src: '<a href="https://zenpencils.com/comic/111-jack-london-i-would-rather-be-ashes-than-dust/">Jack London</a>'
    },
    {
      text: "If you want others to be your friend, act like a friend to them.",
      src: '<a href="https://www.reddit.com/r/offmychest/comments/1cbepj/i_have_practically_zero_friends/c9ew3ef/">Reddit</a>'
    },
    {
      text: "I always feel like you fall in love twice. Once with the person you meet, and again with the person they really are.",
      src: '<a href="http://www.reddit.com/r/AskReddit/comments/1ewiyp/youve_been_given_a_24hour_truth_serum_what_is_the/ca4jqbu">Reddit</a>'
    },
    {
      text: "Efficiency is intelligent laziness.",
      src: ''
    },
    {
      text: "Humans, both men and women, are slaves to their emotions and subconscious itches. Logic only comes into play when we want to justify what we already feel to ourselves and to others.",
      src: '',
      font_size: '1.8rem'
    },
    {
      text: "Nobody ever dies wishing they had worked more.",
      src: ''
    },
    {
      text: "Ignore these people who tell you to do the things they didn't do and wish they had.",
      src: ''
    },
    {
      text: "How people treat you is there karma; how you react is yours.",
      src: ''
    },
    {
      text: "You are who you are in the darkness.",
      src: ''
    },
    {
      text: "Do you tell jokes to make people laugh or to make them think you're funny?",
      src: ''
    },
    {
      text: "Be the person you needed when you were younger.",
      src: ''
    },
    {
      text: "But remember, there are two ways to dehumanize someone: by dismissing them, and by idolizing them.",
      src: ''
    },
    {
      text: "A journey is best measured in friends, not in miles.",
      src: ''
    },
    {
      text: "I have held plenty of stupid notions throughout my life that were planted there in any number of ways, or even grown out of my own ignorance and flawed personality. Yet through getting to know people from all walks of life, listening to the stories of their experiences, and employing some empathy to try to imagine what it might be like to walk in their shoes, I have been able to shed many hurtful mindsets. I still have a long way to go, and I still have a lot to learn. It is a humbling process and hard work, but nothing on the scale of what anyone who has been marginalized has experienced. It is a worthwhile, lifelong endeavor to try to understand where people are coming from.",
      src: 'Brian Konietzko (co-creator of Avatar)',
      font_size: '0.8rem'
    },
    {
      text: "Chasing happiness isn't a sustainable policy.",
      src: 'Myself, hah'
    },
    {
      text: "I always wonder why birds choose to stay in the same place when they can fly anywhere on the earth, then I ask myself the same question.",
      src: ''
    },
    {
      text: "Some people are born with tornadoes in their lives, but constellations in their eyes.<br />Other people are born with stars at their feet, but their souls are lost at sea.",
      src: '',
      font_size: '1.4rem'
    },
    {
      text: "Life is what happens while you are busy making other plans.",
      src: 'John Lennon'
    },
    {
      text: "When I die, I want to be remembered for the life I lived, not the money I made.",
      src: 'Avicii (rip)'
    },
    {
      text: "The standards you walk past are the standards you accept.",
      src: '<a href="https://www.youtube.com/watch?v=QaqpoeVgr8U&feature=youtu.be">David Morrison</a>'
    },
    {
      text: "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and feel - that is the purpose of life.",
      src: 'The Secret Life of Walter Mitty'
    },
    {
      text: "Discovery consists not of seeking new lands, but in seeing with new eyes.",
      src: ''
    },
    {
      text: "The days are long but the decades are short.",
      src: '<a href="http://blog.samaltman.com/the-days-are-long-but-the-decades-are-short">Sam Altman</a>'
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      src: 'Ralph Waldo Emerson'
    },
    {
      text: "Do the work, be the prize.",
      src: ''
    },
    {
      text: "We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.",
      src: 'Joseph Campbell'
    },
    {
      text: "Discipline is the bridge between goals and accomplishment.",
      src: ''
    },
    {
      text: "Life is either daring adventure or nothing at all.",
      src: ''
    },
    {
      text: "One who makes no mistakes makes nothing at all.",
      src: ''
    },
    {
      text: "In the end it's not the years in your life that count. It's the life in your years.",
      src: ''
    },
    {
      text: "If I followed all the rules I've never have gotten anywhere.",
      src: ''
    },
    {
      text: "Action expresses priorities.",
      src: ''
    },
    {
      text: "First get your facts straight, then distort them at your leisure.",
      src: 'Mark Twain'
    },
    {
      text: "The greatest thing we can do is to help people know they are loved, and capable of loving.",
      src: ''
    },
    {
      text: "It is good to be loved, it is profound to be understood.",
      src: 'Portia Lee James DeGeneres'
    },
    {
      text: "The game of love goes better if you give each other cheat codes.",
      src: ''
    },
    {
      text: "It's good to want to save the world, but... it's OK if you only save one person, and... it's OK if that person is you",
      src: ''
    },
    {
      text: "The arc of the moral universe is long, but it bends toward justice.",
      src: ''
    },
    {
      text: "Sunlight is said to be the best of disinfectants.",
      src: 'my friend, Jay Chen, while we were both blasted.'
    },
    {
      text: "On the other side of your maximum fear are all of the best things in life.",
      src: 'Will Smith'
    },
    {
      text: "Life begins at the end of your comfort zone.",
      src: 'Yes Theory'
    },
    {
      text: "Don't mistake for maturity what comes with age",
      src: ''
    },
    {
      text: "When I was young, I used to admire intelligent people; as I grow older, I admire kind people.",
      src: 'Abraham Joshua Heschel, sent by Jay Chen'
    },
    {
      text: "Emotional labor is a real thing and it should be shared for a relationship to thrive.",
      src: 'Julianne Vinh'
    },
    {
      text: "Humility is not thinking less of yourself, it's thinking of yourself less.",
      src: ''
    },
    {
      text: "To be everywhere is to be nowhere. People who spend their whole life traveling abroad end up having plenty of places where they can find hospitality but no real friendships.",
      src: 'Seneca, but don\'t really agree :3',
      font_size: '1.6rem'
    },
    {
      text: "It's not half so important to know as to feel.",
      src: '<a href="https://zenpencils.com/comic/carson/">Rachel Carson</a>'
    },
    {
      text: "How much more grievous are the consequences of anger than the causes of it.",
      src: 'Marcus Aurelius'
    },
    {
      text: "The unpredictable is the ground on which creativity occurs.",
      src: 'Creativity Inc. by Amy Wallace and Edwin Catmull'
    },
    {
      text: "You never suspect you to be your worst when you're the happiest.",
      src: 'my friend, Michael Dang'
    },
    {
      text: "What a wonderful thought is that some of the best days of our lives haven't happened yet.",
      src: ''
    },
    {
      text: "You are already enough.",
      src: '<a href="https://www.facebook.com/dailygoalcast/videos/1590267764407350/">Adam Roa</a>'
    },
    {
      text: "It is possible to believe in something and still fail to live up to it.",
      src: ''
    },
    {
      text: "Maybe hypocrites are just people trying to change.",
      src: ''
    },
    {
      text: "Love is not desire. Love is honoring the true self within ourselves and others.",
      src: ''
    },
    {
      text: "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
      src: ''
    },
    {
      text: "Your experience is authentic.",
      src: ''
    },
    {
      text: "人生没有等出来的辉煌，只有走出来的美丽 (In life, there is no splendor that will be gained by waiting, only beauty that will come from walking.)",
      src: 'A sign in a restaurant visited by Albert Chen',
      font_size: '1.8rem'
    },
    {
      text: "It's ok to not be ok, but it's not ok to not be ok and say you're ok, ok?",
      src: ''
    },
    {
      text: "三人行必有我师 (In any three people, one is my teacher)",
      src: 'Chinese proverb said by my parents'
    },
  ];
  var index = Math.floor(Math.random() * quotes.length);
  var quote = quotes[index];

  let font_size = quote.font_size;
  if (!font_size) {
    font_size = '2.5rem';
  }

  if (!quote.src) {
    quote.src = 'Unknown';
  }

  res.render('index', {
    title: 'Random Quotes',
    index: index + 1,
    quote: quote,
    font_size: font_size
  });
});

module.exports = router;
