/* 
  =========================================
  Catholic Kids' Faith Adventure JS Logic
  =========================================
  Dynamic tab controllers, storybooks, audio TTS,
  quizzes, custom confetti, local storage badge books,
  and comprehensive child-friendly Catholic content.
*/

// --- 1. DATA STRUCTURES ---

const ageProfiles = {
  "little-lambs": {
    chip: "Ages 4–7",
    label: "Little Lambs",
    heroEyebrow: "Welcome, Little Friend of Jesus! 👋",
    heroTitle: "Explore Jesus' Stories One Gentle Step at a Time",
    heroDescription: "Welcome to a joyful Catholic adventure. We will hear Jesus' stories, discover the Beatitudes, pray little prayers, and try one kind mission at a time.",
    quoteLead: "Inspired by St. John Bosco:",
    quoteText: "\"Teach with joy, kindness, and short steps that help every child feel loved.\"",
    summary: "Shorter, gentler reading with warm encouragement and simple missions.",
    catechistLead: "Inspired by St. John Bosco:",
    catechistNote: "Lead with joy, kindness, and clear next steps.",
    parablesIntro: "Jesus taught with simple stories about shepherds, seeds, and families. Open any storybook to read it in words that fit this age.",
    beatitudesIntro: "Jesus gives us eight beautiful blessings. Explore the meadow for gentle explanations and kind actions children can try right away.",
    singaporeIntro: "Take one small step of love at home, in school, at church, or in the neighbourhood today.",
    quizIntro: "Choose a short quiz to remember what Jesus teaches and earn badges and Ally Tokens.",
    badgesIntro: "Badges and Ally Tokens celebrate each kind and faithful step along the way.",
    parableButtonLabel: "📖 Start a Story",
    beatitudeButtonLabel: "🌸 Visit the Meadow",
    quizSelectionTitle: "Choose a gentle challenge:",
    badgeBookHeading: "Your Joyful Progress",
    narratorLabel: "Read This Story Gently",
    storyTabLabel: "📖 Story Time",
    catholicTabLabel: "⛪ Jesus' Message",
    parableCardCta: "✨ Open Storybook",
    meadowLabelPrefix: "Guideline",
    quizCardText: "Answer 3 quick questions about this topic to earn your badge and Ally Tokens!",
    encouragementIcon: "🧸",
    successFeedback: "🎉 Beautiful work! You got it right!",
    encouragementFeedback: "🧸 Nice try. Let's learn and keep going together!",
    victoryMessage: "You finished the quiz with faith and courage!",
    readingMode: "playful",
    narrationRate: 0.82,
    narrationPitch: 1.08
  },
  pathfinders: {
    chip: "Ages 8–11",
    label: "Pathfinders",
    heroEyebrow: "Welcome, Faith Explorer! 👋",
    heroTitle: "Discover How Jesus' Stories Shape Everyday Life",
    heroDescription: "Step into a Catholic adventure shaped for growing readers. Explore Jesus' parables, the Beatitudes, and real-life missions that connect faith with daily choices.",
    quoteLead: "Inspired by St. Elizabeth Ann Seton:",
    quoteText: "\"Form the heart with clarity, patience, and trust in God's grace.\"",
    summary: "Clearer reading, stronger connections, and practical missions for growing disciples.",
    catechistLead: "Inspired by St. Elizabeth Ann Seton:",
    catechistNote: "Build understanding with steady encouragement and meaningful habits.",
    parablesIntro: "Jesus used everyday scenes to reveal the Kingdom of God. Open a story to see what it meant then and how it still shapes life now.",
    beatitudesIntro: "The Beatitudes are Jesus' map for true joy. Explore each one with clearer meaning, action, and saintly example.",
    singaporeIntro: "Notice where Jesus meets you in school, family life, parish life, and shared community spaces.",
    quizIntro: "Choose a topic, check your understanding, and earn badges and Ally Tokens for each new win.",
    badgesIntro: "Your badges and Ally Tokens show how much of the journey you have explored.",
    parableButtonLabel: "📖 Open the Storybooks",
    beatitudeButtonLabel: "🌸 Explore the Beatitudes",
    quizSelectionTitle: "Choose your next faith challenge:",
    badgeBookHeading: "Your Faith Progress",
    narratorLabel: "Read This Story Aloud",
    storyTabLabel: "📖 The Story",
    catholicTabLabel: "⛪ Catholic Connection",
    parableCardCta: "✨ Read & Reflect",
    meadowLabelPrefix: "Beatitude",
    quizCardText: "Answer 3 quick questions about this topic to earn your badge and Ally Tokens.",
    encouragementIcon: "🧭",
    successFeedback: "🎉 Strong answer. You got it right!",
    encouragementFeedback: "🧭 Good effort. Take the lesson with you and try the next one.",
    victoryMessage: "You completed the quiz and deepened your faith adventure!",
    readingMode: "balanced",
    narrationRate: 0.9,
    narrationPitch: 1
  },
  "young-saints": {
    chip: "Ages 12+",
    label: "Young Saints",
    heroEyebrow: "Welcome, Young Disciple! 👋",
    heroTitle: "Read, Reflect, and Live the Gospel with Purpose",
    heroDescription: "This path offers more natural reading for older kids and teens, while keeping the experience warm, prayerful, and faithful to Catholic teaching.",
    quoteLead: "Inspired by Venerable Fulton Sheen:",
    quoteText: "\"Great catechesis speaks to the mind, moves the heart, and leads to action.\"",
    summary: "More natural reading, thoughtful reflection, and a clearer link between Scripture and discipleship.",
    catechistLead: "Inspired by Venerable Fulton Sheen:",
    catechistNote: "Connect truth, imagination, and action in a way that respects older readers.",
    parablesIntro: "Jesus' parables invite reflection, conversion, and action. Open a story to read it in a more natural voice for older readers.",
    beatitudesIntro: "The Beatitudes are a demanding and beautiful path to holiness. Explore each one with thoughtful explanation and concrete application.",
    singaporeIntro: "Look for places where faith can become witness: at home, online, at school, in parish life, and in public spaces.",
    quizIntro: "Choose a topic, test your understanding, and collect badges and Ally Tokens as signs of steady growth.",
    badgesIntro: "Badges and Ally Tokens highlight faithful effort, reflection, and follow-through.",
    parableButtonLabel: "📖 Read a Gospel Story",
    beatitudeButtonLabel: "🌸 Reflect in the Meadow",
    quizSelectionTitle: "Choose a topic to review:",
    badgeBookHeading: "Your Disciple Progress",
    narratorLabel: "Listen to the Reading",
    storyTabLabel: "📖 Gospel Story",
    catholicTabLabel: "⛪ Faith Connection",
    parableCardCta: "✨ Read the Story",
    meadowLabelPrefix: "Beatitude",
    quizCardText: "Answer 3 review questions to earn your badge and Ally Tokens.",
    encouragementIcon: "🕯",
    successFeedback: "🎉 Well done. That's correct.",
    encouragementFeedback: "🕯 Not quite. Stay with it and keep learning.",
    victoryMessage: "You completed the quiz and strengthened your understanding.",
    readingMode: "reflective",
    narrationRate: 0.96,
    narrationPitch: 0.98
  }
};

const ALLY_TOKEN_AWARDS = {
  dailyQuest: 5,
  singaporeMission: 8,
  quizBadge: 12
};

const balancedReadingReplacements = [
  [/giant hug/gi, "big hug"],
  [/giant crash/gi, "big crash"],
  [/giant tree/gi, "great tree"],
  [/giant party/gi, "great celebration"],
  [/whole wide world/gi, "world"],
  [/yummy/gi, "good"],
  [/cozy/gi, "safe"],
  [/sweet kindness/gi, "real kindness"],
  [/sweet little/gi, "small"],
  [/super fast/gi, "quickly"],
  [/glittering treasures/gi, "precious gifts"],
  [/cute/gi, "kind"],
  [/messy pigs/gi, "pigs"],
  [/big happy feast/gi, "great feast"],
  [/giant castle of grace/gi, "strong home of grace"],
  [/huge love/gi, "great love"],
  [/giant smile/gi, "bright smile"],
  [/little child of God/gi, "beloved child of God"]
];

const reflectiveReadingReplacements = [
  ...balancedReadingReplacements,
  [/tiny seed/gi, "small seed"],
  [/fluffy white sheep/gi, "sheep"],
  [/little sheep/gi, "lost sheep"],
  [/special stories/gi, "stories"],
  [/special mini-mission/gi, "daily mission"],
  [/warm hugs/gi, "comfort"],
  [/soft love/gi, "gentle love"],
  [/silly things/gi, "foolish things"],
  [/giant mountain of money/gi, "an enormous debt"],
  [/beautiful, glittering treasure/gi, "great treasure"],
  [/happy and open heart/gi, "open heart"],
  [/sweet smiles/gi, "peace"],
  [/holy courage/gi, "courage"],
  [/the whole world/gi, "the world"]
];

// A. The 10 Catholic Parables for Kids
const parablesData = [
  {
    id: "lost-sheep",
    title: "The Lost Sheep",
    ref: "Luke 15:3-7",
    teaser: "Jesus is the Good Shepherd who searches for us and brings us back to safety on His shoulders!",
    story: "Once upon a time, there was a Shepherd who had 100 fluffy white sheep. He loved every single one of them by name! One afternoon, as he counted them, he realized one tiny sheep was missing. Oh no! It was lost in the dark, cold mountains. The Shepherd didn't say, 'Oh well, I still have 99.' Instead, he left the 99 safe in the field and walked up and down the steep paths, calling out. After searching under rocks and bushes, he found the little sheep tangled in some briars! He didn't get angry. He gently untangled it, picked it up, laid it on his warm shoulders, and carried it home, shouting to his friends, 'Celebrate with me! I have found my lost sheep!'",
    catholicLesson: "In this story, Jesus is the Good Shepherd and WE are His beloved sheep. Whenever we make a mistake or do something wrong, we can feel lost and lonely. But Jesus never stops loving us! He looks for us to help us. He is so happy when we return to Him.",
    sacramentText: "The Sacrament of Reconciliation (Confession) is just like the Good Shepherd finding us! When we tell the priest our sins, Jesus hugs our hearts and carries us back to His family.",
    sacramentIcon: "⛪",
    prayer: "Dear Jesus, thank you for being my Good Shepherd. When I make mistakes, search for my heart and carry me safely in your arms. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <radialGradient id="sky-sheep" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E1F5FE" />
          <stop offset="100%" stop-color="#B3E5FC" />
        </radialGradient>
        <circle cx="75" cy="75" r="70" fill="url(#sky-sheep)" />
        <path d="M 5 110 Q 75 80 145 110 L 145 150 L 5 150 Z" fill="#81C784" />
        <g transform="translate(10, -5)">
          <rect x="55" y="110" width="6" height="15" fill="#3E2723" rx="2"/>
          <rect x="68" y="110" width="6" height="15" fill="#3E2723" rx="2"/>
          <ellipse cx="65" cy="100" r="18" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1.5" />
          <circle cx="53" cy="100" r="11" fill="#FFFFFF" />
          <ellipse cx="48" cy="98" r="7" fill="#F5F5F5" />
          <circle cx="45" cy="95" r="1.5" fill="#3E2723" />
          <path d="M 43 100 Q 46 103 49 100" fill="none" stroke="#3E2723" stroke-width="1.5" />
        </g>
        <circle cx="110" cy="45" r="12" fill="#FFF176" />
      </svg>
    `
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan",
    ref: "Luke 10:25-37",
    teaser: "A kind traveler shows us how to love everyone, even strangers, with a sweet and helper heart.",
    story: "One day, a traveler was walking down a bumpy road when some bad robbers took his bag, hurt him, and left him lying on the side of the road. Soon, an important temple helper walked by. He saw the hurt man but crossed to the other side and ignored him. Then, another temple leader walked by, but he did the same thing! Finally, a man from Samaria came down the road. Some people didn't like Samaritans, but when he saw the hurt man, his heart filled with sweet kindness. He stopped, cleaned the man's hurts, wrapped them in soft cloth, put him on his donkey, and brought him to a cozy inn. He even paid the innkeeper to take care of him until he was fully healed!",
    catholicLesson: "Jesus told this story to teach us that everyone is our neighbor, even people we don't know or who are different from us! The Catholic Church teaches us that we must practice the 'Corporal Works of Mercy'—like feeding the hungry, dressing the cold, and helping the sick.",
    sacramentText: "St. Augustine said the hurt man is like us, and the cozy Inn is like the Holy Catholic Church where Jesus' Sacraments heal our souls and bodies!",
    sacramentIcon: "🥖",
    prayer: "Jesus, give me a helper's heart like the Good Samaritan. Help me to be kind to anyone who is sad, sick, or lonely today. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#FFF3E0" />
        <path d="M 12 110 Q 75 90 138 110 L 138 150 L 12 150 Z" fill="#81C784" />
        <!-- Big beautiful heart representing love -->
        <path d="M 75 35 C 60 15, 30 15, 30 45 C 30 75, 75 105, 75 105 C 75 105, 120 75, 120 45 C 120 15, 90 15, 75 35 Z" fill="#FF5252" />
        <!-- Cross in center of heart -->
        <rect x="71" y="32" width="8" height="36" fill="#FFF9C4" rx="2" />
        <rect x="57" y="46" width="36" height="8" fill="#FFF9C4" rx="2" />
      </svg>
    `
  },
  {
    id: "prodigal-son",
    title: "The Prodigal Son",
    ref: "Luke 15:11-32",
    teaser: "A son makes a mistake and goes far away, but his father runs with open arms to give him a giant hug!",
    story: "There was a Father who had two sons. The younger son wanted his inheritance money early, so he took it and went far away to a exciting city. He spent all his money on silly things and soon had nothing left. He was so hungry he had to take a job feeding messy pigs! He realized, 'Even my father's servants have yummy bread to eat. I will go back, say sorry, and ask to be a helper.' As he walked home, feeling sad and dirty, his Father saw him from far away. The Father didn't wait! He ran down the road, threw his arms around his son's neck, and hugged him! He put a royal ring on his finger, clean shoes on his feet, and threw a big happy feast to celebrate!",
    catholicLesson: "The loving Father is God, our Heavenly Father, who is full of mercy. Even when we turn away from Him by sinning, He never stops waiting for us to come back. He is always ready to forgive us and throw a party in Heaven for us!",
    sacramentText: "This story is the perfect picture of Confession (Reconciliation). We say sorry, and our Heavenly Father washes away our dirty mistakes and fills us with His joy again!",
    sacramentIcon: "💧",
    prayer: "My loving Father, thank you for always forgiving me. Help me to quickly say sorry to you and to others when I make mistakes. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#F3E5F5" />
        <!-- Soft hill -->
        <path d="M 10 120 Q 75 95 140 120 L 140 150 L 10 150 Z" fill="#A5D6A7" />
        <!-- Two hearts hugging -->
        <g transform="translate(10, 0)">
          <path d="M 65 50 C 55 35, 40 35, 40 55 C 40 75, 65 95, 65 95 C 65 95, 90 75, 90 55 C 90 35, 75 35, 65 50 Z" fill="#BA68C8" />
          <path d="M 55 65 C 48 55, 35 55, 35 70 C 35 85, 55 100, 55 100 C 55 100, 75 85, 75 70 C 75 55, 62 55, 55 65 Z" fill="#FF8A65" />
        </g>
      </svg>
    `
  },
  {
    id: "house-rock",
    title: "The House on the Rock",
    ref: "Matthew 7:24-27",
    teaser: "Building our lives on Jesus' words keeps us strong and safe through any windy storm!",
    story: "Jesus told a story about two builders. The first builder was wise. He chose a big, solid, steady rock to build his house on. He hammered the wood and made it tight. The second builder was silly. He wanted to build fast, so he put his house on soft, squishy yellow sand. Suddenly, a big storm came! Dark clouds rolled in, rain poured down in buckets, and the wild wind blew hard against the houses. The house on the soft sand went SPLASH and fell down with a giant crash! But the house on the solid rock stood tall and safe, because its foundation was strong.",
    catholicLesson: "The solid rock is Jesus' words and the teachings of the Holy Catholic Church. When we pray, obey our parents, go to Mass, and do good things, we are building our lives on the rock. When scary or sad storms come, we can stay strong in faith!",
    sacramentText: "Holy Baptism makes Jesus the foundation rock of our lives, keeping our souls safe inside His giant castle of grace.",
    sacramentIcon: "⛪",
    prayer: "Jesus, you are my strong rock. Help me to listen to your words and build my life on your loving truth every single day. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#E0F7FA" />
        <!-- Giant Rock -->
        <path d="M 25 120 C 30 80, 120 80, 125 120 Z" fill="#90A4AE" stroke="#37474F" stroke-width="3" />
        <!-- Cute House -->
        <rect x="52" y="70" width="46" height="30" fill="#FFE082" stroke="#37474F" stroke-width="2" />
        <polygon points="45,70 75,45 105,70" fill="#E57373" stroke="#37474F" stroke-width="2" />
        <rect x="68" y="82" width="14" height="18" fill="#8D6E63" />
        <!-- Waves -->
        <path d="M 5 125 Q 35 115 65 125 T 125 125 T 145 125" fill="none" stroke="#0288D1" stroke-width="4" stroke-linecap="round" />
      </svg>
    `
  },
  {
    id: "mustard-seed",
    title: "The Mustard Seed",
    ref: "Matthew 13:31-32",
    teaser: "How a tiny, teeny seed of faith can grow into a magnificent tree of love that shelters everyone.",
    story: "Jesus said, 'What is the Kingdom of Heaven like?' It is like a tiny mustard seed that a farmer planted in his garden. It is one of the smallest seeds in the whole wide world—so small you could easily lose it on your finger! But when it is watered and warm, it starts to grow. It grows bigger, taller, and stronger than all the other garden plants! It becomes a magnificent, leafy green tree with thick branches. Soon, sweet little singing birds fly from all over to build cozy nests in its branches and sing songs of joy.",
    catholicLesson: "Our faith might start out small, like a tiny seed. But when we say simple prayers, read scripture, and show love, our faith grows into a giant tree! The Catholic Church is like that big tree, spreading its arms across the whole world to feed, help, and protect everyone.",
    sacramentText: "Our faith seed is planted at Baptism, and it gets watered and grows huge every time we receive Jesus in Holy Communion!",
    sacramentIcon: "🌱",
    prayer: "Dear God, make my little seed of faith grow bigger and stronger every day, so I can help make the world a warmer place. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#E8F5E9" />
        <path d="M 10 130 Q 75 115 140 130 L 140 150 L 10 150 Z" fill="#8D6E63" />
        <!-- Mustard Tree -->
        <path d="M 70 120 L 70 80 Q 55 60 50 45 Q 75 40 75 75 Q 75 40 100 45 Q 95 60 80 80 L 80 120 Z" fill="#5D4037" />
        <!-- Leaves -->
        <circle cx="50" cy="40" r="22" fill="#4CAF50" opacity="0.9" />
        <circle cx="100" cy="40" r="22" fill="#4CAF50" opacity="0.9" />
        <circle cx="75" cy="30" r="26" fill="#2E7D32" opacity="0.95" />
        <!-- Tiny Bird -->
        <circle cx="105" cy="35" r="6" fill="#FFD54F" />
        <polygon points="111,33 115,35 111,37" fill="#FF8F00" />
      </svg>
    `
  },
  {
    id: "sower-seed",
    title: "The Sower and the Seed",
    ref: "Matthew 13:1-23",
    teaser: "How to open our hearts wide to God's words so we can produce beautiful flowers of charity.",
    story: "A farmer went out to sow some seeds. As he threw the seeds across his field, they landed on different soils. Some seeds fell on a hard footpath. The hungry birds flew down and ate them up right away! Other seeds fell on rocky ground with very little soil. They grew super fast, but when the hot sun came up, they dried up because they had no deep roots. Other seeds fell among sharp, prickly thorns that choked them so they couldn't grow. But some seeds fell on rich, soft, dark soil. They grew tall, strong, and healthy, producing an amazing harvest of yummy wheat!",
    catholicLesson: "The seed is God's word, and the soils are our hearts. Jesus wants our hearts to be like the rich, soft soil. When we listen to His word with a happy and open heart, we grow beautiful fruits of love, helpfulness, and joy!",
    sacramentText: "We make our heart-soil soft and rich by praying every day, listening carefully to the Gospel at Mass, and being kind.",
    sacramentIcon: "⛪",
    prayer: "Jesus, make my heart like the rich, soft soil. Help me to listen to your words and grow beautiful fruits of love for others. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#FFFDE7" />
        <!-- Soil -->
        <path d="M 10 110 Q 75 95 140 110 L 140 150 L 10 150 Z" fill="#5D4037" />
        <!-- Little Shoots -->
        <path d="M 40 110 Q 42 90 35 85 Q 45 92 48 110" fill="#81C784" />
        <path d="M 75 105 Q 77 75 68 70 Q 82 82 85 105" fill="#4CAF50" />
        <path d="M 110 110 Q 112 95 105 90 Q 115 97 118 110" fill="#81C784" />
        <!-- Falling seeds -->
        <circle cx="50" cy="50" r="3" fill="#FFE082" />
        <circle cx="75" cy="45" r="3" fill="#FFE082" />
        <circle cx="100" cy="55" r="3" fill="#FFE082" />
      </svg>
    `
  },
  {
    id: "talents",
    title: "The Talents",
    ref: "Matthew 25:14-30",
    teaser: "Using our special, God-given gifts to bring joy and build up God's big family.",
    story: "A master was going on a long journey, so he gave his servants some money called 'talents' to take care of. He gave five talents to the first servant, two talents to the second, and one talent to the last servant. The first servant worked hard and used his talents to make five more! The second servant did the same and made two more! But the third servant was scared. He went into his garden, dug a deep hole in the dirt, and buried his one talent in the ground. When the master returned, he was so proud of the first two servants and threw them a big party! But he was sad that the third servant hid his gift instead of sharing it.",
    catholicLesson: "In this story, 'talents' are the special gifts, skills, and love that God has given to each of us—like being good at drawing, singing, helping our friends, or sharing a smile. God doesn't want us to hide our gifts! He wants us to use them to make the world a happier and holier place.",
    sacramentText: "In Confirmation, the Holy Spirit fills us with seven special spiritual gifts to help us share Jesus' love bravely with everyone!",
    sacramentIcon: "🔥",
    prayer: "Dear Holy Spirit, show me the special talents you have given me. Help me to use them bravely to help others and make you smile. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#E1F5FE" />
        <!-- Chest of gold -->
        <rect x="35" y="85" width="80" height="45" fill="#8D6E63" stroke="#3E2723" stroke-width="3" rx="4" />
        <path d="M 35 85 Q 75 60 115 85 Z" fill="#A1887F" stroke="#3E2723" stroke-width="3" />
        <!-- Shiny coins inside -->
        <circle cx="55" cy="80" r="10" fill="#FFD54F" stroke="#FFB300" stroke-width="1.5" />
        <circle cx="75" cy="75" r="10" fill="#FFD54F" stroke="#FFB300" stroke-width="1.5" />
        <circle cx="95" cy="80" r="10" fill="#FFD54F" stroke="#FFB300" stroke-width="1.5" />
        <rect x="71" y="85" width="8" height="20" fill="#CFD8DC" />
        <!-- Sparkles -->
        <polygon points="30,50 34,54 30,58 26,54" fill="#FFD54F" />
        <polygon points="120,45 124,49 120,53 116,49" fill="#FFD54F" />
      </svg>
    `
  },
  {
    id: "pearl-price",
    title: "The Pearl of Great Price",
    ref: "Matthew 13:45-46",
    teaser: "Finding that knowing Jesus is the most beautiful, glittering treasure in the whole universe!",
    story: "Jesus said, 'The Kingdom of Heaven is like a merchant searching for beautiful, shiny pearls.' He traveled to many cities, looking at hundreds of pearls. One day, in a special market, he saw a pearl so magnificent, so perfectly round, and glowing with such beautiful light that his eyes went wide! He had never seen anything so beautiful in his whole life. He knew he had to have it! He ran home, sold all his other bags, his clothes, and everything he owned, just so he could buy that one perfect pearl and hold it close to his heart forever.",
    catholicLesson: "That magnificent pearl is Jesus Himself and His beautiful love in our hearts! Knowing Jesus and being part of God's family is worth more than all the toys, video games, and money in the entire universe. It is our greatest treasure!",
    sacramentText: "The Holy Eucharist is like the Pearl of Great Price. When we receive Holy Communion at Mass, we are holding Jesus, the greatest treasure, inside our souls!",
    sacramentIcon: "🥖",
    prayer: "Jesus, you are my magnificent pearl and my greatest treasure. Help me to love you more than any toy or game in the world. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#EDE7F6" />
        <!-- Clamshell -->
        <path d="M 25 110 C 25 70, 125 70, 125 110 Z" fill="#90CAF9" stroke="#1565C0" stroke-width="2" />
        <path d="M 25 110 C 25 140, 125 140, 125 110 Z" fill="#64B5F6" stroke="#1565C0" stroke-width="2" />
        <!-- Glowing Pearl -->
        <circle cx="75" cy="105" r="22" fill="#FFFFFF" filter="drop-shadow(0 0 12px white)" />
        <circle cx="68" cy="98" r="6" fill="#E0F7FA" opacity="0.6" />
      </svg>
    `
  },
  {
    id: "pharisee-tax",
    title: "The Pharisee & Tax Collector",
    ref: "Luke 18:9-14",
    teaser: "Learning to pray with a humble, gentle heart that says 'Jesus, I love you and need you!'",
    story: "Two men went up to the beautiful Temple to pray. The first man was a Pharisee. He stood tall, wore fancy clothes, and prayed in a loud voice: 'God, thank you that I am so wonderful! I am much better than everyone else, especially that tax collector over there!' But the second man, a tax collector, stood far back in a quiet corner. He was too humble to even look up to Heaven. He tapped his hand on his heart and prayed quietly: 'Lord, please have mercy on me. I make mistakes, and I need your love.' Jesus told His disciples: 'God heard the humble tax collector's prayer because he had a gentle, clean heart!'",
    catholicLesson: "Jesus wants us to pray with humility. Humility means knowing that we are small, but God's love is big, and we need Him every day. We shouldn't brag or think we are better than others. God loves a humble heart!",
    sacramentText: "Every time we go to Mass, we start by humbly saying, 'Lord have mercy' (the Kyrie). This prepares our hearts to receive Jesus with pure love.",
    sacramentIcon: "⛪",
    prayer: "My Lord and my God, please have mercy on me. Keep my heart humble, gentle, and always ready to love others. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#E0F2F1" />
        <!-- Praying Hands Silhouette or outline -->
        <g transform="translate(10, 0)">
          <path d="M 50 115 Q 60 70 70 45 Q 73 40 76 45 Q 81 70 81 115 Z" fill="#FFCC80" stroke="#E65100" stroke-width="2" />
          <path d="M 60 115 Q 67 75 74 52 Q 77 48 79 52 Q 85 75 88 115 Z" fill="#FFE0B2" stroke="#E65100" stroke-width="2" />
        </g>
        <path d="M 20 120 L 130 120" stroke="#004D40" stroke-width="4" stroke-linecap="round" />
      </svg>
    `
  },
  {
    id: "unforgiving-servant",
    title: "The Unforgiving Servant",
    ref: "Matthew 18:21-35",
    teaser: "Sharing the beautiful gift of forgiveness with others, just like Jesus forgives us!",
    story: "There was a King who was looking over his money books. He found a servant who owed him a giant mountain of money—more than he could ever pay in a thousand years! The servant fell on his knees and cried, 'Please be patient, I will pay you back!' The King felt sweet mercy. He smiled, cancelled the whole debt, and said, 'You don't owe me anything anymore!' But as that servant walked outside, he saw a friend who owed him just a tiny bit of pocket money. He grabbed him and yelled, 'Pay me back right now!' His friend begged for patience, but the servant threw him in jail. When the King heard this, he was very sad. 'I forgave you so much,' he said. 'Shouldn't you have forgiven your friend too?'",
    catholicLesson: "God is like the merciful King. He forgives our biggest mistakes because He loves us so much! But He wants us to share that forgiveness. When a sibling or friend makes a mistake or hurts our feelings, we should show them mercy and forgive them too.",
    sacramentText: "In the Lord's Prayer (the Our Father) which we say at every Mass, we pray: 'Forgive us our trespasses, as we forgive those who trespass against us.'",
    sacramentIcon: "🥖",
    prayer: "Dear Jesus, thank you for forgiving me when I make mistakes. Help me to forgive others quickly and fill my heart with your peace. Amen.",
    illustrationSvg: `
      <svg viewBox="0 0 150 150" width="100%" height="100%">
        <circle cx="75" cy="75" r="70" fill="#FFEBEE" />
        <!-- Crown and broken chains -->
        <circle cx="75" cy="45" r="10" fill="none" stroke="#FFB300" stroke-width="3" />
        <polygon points="55,60 65,40 75,60 85,40 95,60" fill="#FFD54F" stroke="#FF8F00" stroke-width="2" />
        <rect x="52" y="58" width="46" height="8" fill="#FFB300" />
        <!-- Broken chain links -->
        <g stroke="#90A4AE" stroke-width="3" fill="none" stroke-linecap="round">
          <path d="M 45 105 C 45 95, 60 95, 60 105" />
          <path d="M 60 105 C 60 115, 45 115, 45 105" />
          <path d="M 90 105 C 90 95, 105 95, 105 105" />
          <path d="M 105 105 C 105 115, 90 115, 90 105" />
        </g>
      </svg>
    `
  }
];

// B. The 8 Catholic Beatitudes for Kids
const beatitudesData = [
  {
    id: 1,
    emoji: "🌸",
    title: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    verse: "Matthew 5:3",
    explanation: "This means knowing that we need God's love more than anything else in the world! When we are humble and don't brag, we open our hearts to let Jesus fill them with His glittering treasures.",
    quest: "Share your favorite toy or book with a sibling or friend today without complaining!",
    saintEmoji: "🌹",
    saintName: "St. Therese of Lisieux",
    saintDesc: "Therese lived the 'Little Way' of doing tiny things with giant love for Jesus. She kept her heart simple and sweet, like a little child of God.",
    prayer: "Dear Jesus, keep my heart humble and small, so your huge love can fill me up today. Amen."
  },
  {
    id: 2,
    emoji: "🦋",
    title: "Blessed are those who mourn, for they shall be comforted.",
    verse: "Matthew 5:4",
    explanation: "This means having a tender heart that feels sad when others are hurt or when we make mistakes. God holds us close when we cry, and He sends His angels to comfort our hearts.",
    quest: "If you see someone today who looks sad, give them a warm, happy smile or draw them a cute picture!",
    saintEmoji: "❤️",
    saintName: "St. Monica",
    saintDesc: "St. Monica prayed and wept for many years for her son Augustine. God comforted her by making Augustine a great Saint!",
    prayer: "Jesus, comfort my heart when I am sad, and help me to bring your warm hugs to anyone who is crying today. Amen."
  },
  {
    id: 3,
    emoji: "🌻",
    title: "Blessed are the meek, for they shall inherit the earth.",
    verse: "Matthew 5:5",
    explanation: "Being meek means being gentle, patient, and quiet instead of bossy, angry, or loud. When we are gentle, we are strong like Jesus, who rules the world with soft love.",
    quest: "When playing a game today, let someone else choose the game or go first with a happy heart!",
    saintEmoji: "🐑",
    saintName: "St. Francis de Sales",
    saintDesc: "He was famous for his extreme gentleness. He said, 'A spoonful of honey attracts more flies than a whole barrel of vinegar!'",
    prayer: "Jesus, gentle and humble of heart, make my heart gentle like yours today. Amen."
  },
  {
    id: 4,
    emoji: "🌷",
    title: "Blessed are those who hunger and thirst for righteousness...",
    verse: "Matthew 5:6",
    explanation: "This means wanting fairness, honesty, and goodness as much as we want a big slice of pizza or a cold cup of water! We long to do what is right and help make God's world clean and fair.",
    quest: "Always tell the absolute truth today, even if it feels a little bit hard or scary!",
    saintEmoji: "⚖️",
    saintName: "St. Thomas More",
    saintDesc: "A brave leader who stood up for the laws of God and what was right, even when the King got angry. He chose God first!",
    prayer: "Holy Spirit, fill me with a huge desire to always choose what is right and fair, and to stand up for the truth. Amen."
  },
  {
    id: 5,
    emoji: "🐝",
    title: "Blessed are the merciful, for they shall obtain mercy.",
    verse: "Matthew 5:7",
    explanation: "Mercy is forgiving people who make mistakes and showing sweet kindness to anyone in need. When we forgive others, God washes away our mistakes too!",
    quest: "If someone makes a mistake or is mean to you today, say 'I forgive you' and pray a quick Hail Mary for them.",
    saintEmoji: "🕊️",
    saintName: "St. Faustina",
    saintDesc: "Jesus appeared to Sister Faustina to tell the whole world about His Divine Mercy. She taught us to pray: 'Jesus, I trust in You!'",
    prayer: "Jesus, you are so merciful to me. Help me to forgive others quickly and be full of sweet kindness. Amen."
  },
  {
    id: 6,
    emoji: "🌹",
    title: "Blessed are the pure in heart, for they shall see God.",
    verse: "Matthew 5:8",
    explanation: "A pure heart is clean and shiny, filled with love for God and others. We keep our hearts pure by thinking good thoughts, saying sweet words, and staying close to the Sacraments.",
    quest: "Say a special 'Thank You Jesus!' prayer the very moment you wake up and before you close your eyes tonight.",
    saintEmoji: "👼",
    saintName: "St. Dominic Savio",
    saintDesc: "A happy young boy who loved Jesus. His motto was: 'Death rather than sin!' He kept his heart sparkling clean for God.",
    prayer: "Dear Jesus, wash my heart clean. Fill me with your bright light so I can see your beauty in everyone I meet. Amen."
  },
  {
    id: 7,
    emoji: "🕊️",
    title: "Blessed are the peacemakers, for they shall be called children of God.",
    verse: "Matthew 5:9",
    explanation: "Peacemakers are God's helpers who help people stop fighting, stop arguing, and get along with each other. They bring sweet smiles and calm hearts wherever they go.",
    quest: "Help stop an argument, or use gentle words to bring peace if someone around you gets angry today.",
    saintEmoji: "🤝",
    saintName: "St. Francis of Assisi",
    saintDesc: "St. Francis loved creation and peace. He wrote the famous prayer: 'Lord, make me an instrument of your peace.'",
    prayer: "Make me an instrument of your peace, Jesus. Help me to bring joy, smiles, and calm wherever I go today. Amen."
  },
  {
    id: 8,
    emoji: "🛡️",
    title: "Blessed are those who are persecuted for righteousness' sake...",
    verse: "Matthew 5:10",
    explanation: "This means being brave and standing up for Jesus and the Catholic faith, even if other people tease us or think we are silly. Jesus has a glorious crown waiting in Heaven for His brave heroes!",
    quest: "Make the Sign of the Cross and say grace before eating your lunch, even if you are in public or at school!",
    saintEmoji: "🔥",
    saintName: "St. Joan of Arc",
    saintDesc: "A young peasant girl who was incredibly brave. She listened to God's voice, led armies to protect her country, and never stopped loving Jesus.",
    prayer: "Jesus, give me the holy courage of the Saints. Help me to stand up for you bravely, even when it feels a little scary. Amen."
  }
];

// C. The 10 Quiz Topics, Questions & Badges
const quizzesData = {
  "lost-sheep": {
    badgeTitle: "Good Shepherd Badge",
    badgeDesc: "For learning how Jesus searches for us and carries us home with infinite love!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#E1F5FE" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="48" font-size="28" text-anchor="middle" dominant-baseline="central">🐑</text>
        <path d="M 30 75 Q 50 60 70 75" fill="none" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
        <text x="50" y="85" font-family="Fredoka" font-size="8" font-weight="700" fill="#0288D1" text-anchor="middle">SHEPHERD</text>
      </svg>
    `,
    questions: [
      {
        question: "How many sheep did the Good Shepherd have in total?",
        options: ["10 sheep", "50 sheep", "100 sheep", "1,000 sheep"],
        answer: 2 // "100 sheep"
      },
      {
        question: "What did the Shepherd do when one little sheep got lost?",
        options: ["He ignored it", "He left the 99 and went to search for it", "He bought a new sheep", "He got angry"],
        answer: 1 // "He left the 99 and went to search for it"
      },
      {
        question: "Which Catholic Sacrament is like the Shepherd carrying us home?",
        options: ["Baptism", "Holy Matrimony", "Reconciliation (Confession)", "Holy Orders"],
        answer: 2 // "Reconciliation (Confession)"
      }
    ]
  },
  "good-samaritan": {
    badgeTitle: "Kind Neighbor Badge",
    badgeDesc: "For understanding that everyone is our neighbor and we should help with a loving heart!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#FFEBEE" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="45" font-size="30" text-anchor="middle" dominant-baseline="central">❤️</text>
        <rect x="42" y="70" width="16" height="6" fill="#81C784" rx="2" />
        <rect x="47" y="65" width="6" height="16" fill="#81C784" rx="2" />
        <text x="50" y="85" font-family="Fredoka" font-size="8" font-weight="700" fill="#C2185B" text-anchor="middle">NEIGHBOR</text>
      </svg>
    `,
    questions: [
      {
        question: "Who stopped to help the hurt traveler on the bumpy road?",
        options: ["The Temple Helper", "The Temple Leader", "The Good Samaritan", "A Roman Soldier"],
        answer: 2 // "The Good Samaritan"
      },
      {
        question: "Where did the Samaritan bring the traveler to heal?",
        options: ["To a hospital", "To a cozy Inn", "To a castle", "To a cave"],
        answer: 1 // "To a cozy Inn"
      },
      {
        question: "What does the Catholic Church call actions like feeding the hungry or helping the sick?",
        options: ["Mass Tasks", "Corporal Works of Mercy", "Liturgy Songs", "Parable Stories"],
        answer: 1 // "Corporal Works of Mercy"
      }
    ]
  },
  "prodigal-son": {
    badgeTitle: "Merciful Heart Badge",
    badgeDesc: "For discovering that God always waits for us with open arms and a big hug!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#F3E5F5" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="45" font-size="30" text-anchor="middle" dominant-baseline="central">🤗</text>
        <circle cx="50" cy="72" r="10" fill="#BA68C8" />
        <text x="50" y="72" font-size="10" fill="white" text-anchor="middle" dominant-baseline="central">✝</text>
        <text x="50" y="85" font-family="Fredoka" font-size="8" font-weight="700" fill="#4A148C" text-anchor="middle">MERCY</text>
      </svg>
    `,
    questions: [
      {
        question: "How did the Father react when he saw his younger son coming home?",
        options: ["He got angry and locked the door", "He ran, hugged him, and kissed him", "He told him to pay back the money", "He did not recognize him"],
        answer: 1 // "He ran, hugged him, and kissed him"
      },
      {
        question: "What job did the son have when he ran out of money?",
        options: ["Feeding messy pigs", "Baking yummy bread", "Building stone houses", "Fishing on a boat"],
        answer: 0 // "Feeding messy pigs"
      },
      {
        question: "Who does the loving Father in the story represent?",
        options: ["A regular King", "Our Heavenly Father (God)", "An uncle", "A disciple"],
        answer: 1 // "Our Heavenly Father (God)"
      }
    ]
  },
  "house-rock": {
    badgeTitle: "Wise Builder Badge",
    badgeDesc: "For building your life on Jesus' solid word and Catholic teachings!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#FFF9C4" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="45" font-size="28" text-anchor="middle" dominant-baseline="central">🏠</text>
        <path d="M 25 72 L 75 72 L 75 80 L 25 80 Z" fill="#90A4AE" />
        <text x="50" y="86" font-family="Fredoka" font-size="8" font-weight="700" fill="#E65100" text-anchor="middle">SOLID ROCK</text>
      </svg>
    `,
    questions: [
      {
        question: "What did the wise builder put his house on?",
        options: ["Soft yellow sand", "A big solid rock", "Wet mud", "Green grass"],
        answer: 1 // "A big solid rock"
      },
      {
        question: "What happened to the house built on the sand during the storm?",
        options: ["It flew away like a balloon", "It stayed perfectly safe", "It fell down with a giant crash!", "It turned purple"],
        answer: 2 // "It fell down with a giant crash!"
      },
      {
        question: "What is the solid Rock that we should build our lives on?",
        options: ["Massive real mountains", "Jesus' words and Church teachings", "Super strong bricks", "Wooden blocks"],
        answer: 1 // "Jesus' words and Church teachings"
      }
    ]
  },
  "mustard-seed": {
    badgeTitle: "Faith Seed Badge",
    badgeDesc: "For learning how a tiny seed of faith grows into a great tree of charity!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#E8F5E9" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="45" font-size="28" text-anchor="middle" dominant-baseline="central">🌱</text>
        <circle cx="35" cy="72" r="4" fill="#FFD54F" />
        <circle cx="65" cy="72" r="4" fill="#FFD54F" />
        <text x="50" y="85" font-family="Fredoka" font-size="8" font-weight="700" fill="#2E7D32" text-anchor="middle">FAITH SEED</text>
      </svg>
    `,
    questions: [
      {
        question: "How big is a mustard seed?",
        options: ["As big as an apple", "One of the smallest seeds in the world", "As big as a football", "Medium sized"],
        answer: 1 // "One of the smallest seeds in the world"
      },
      {
        question: "What comes to build cozy nests in the mustard tree branches?",
        options: ["Silly squirrels", "Sweet singing birds", "Little kittens", "Fluffy clouds"],
        answer: 1 // "Sweet singing birds"
      },
      {
        question: "When is our tiny seed of faith first planted in our souls?",
        options: ["At Baptism", "At Confirmation", "At a birthday party", "When we watch TV"],
        answer: 0 // "At Baptism"
      }
    ]
  },
  "beatitudes-meadow": {
    badgeTitle: "Beatitudes Hero Badge",
    badgeDesc: "For discovering the 8 secrets of true happiness given by Jesus on the mountain!",
    badgeSvg: `
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="45" fill="#FFF3E0" stroke="#FFD700" stroke-width="3"/>
        <text x="50" y="45" font-size="30" text-anchor="middle" dominant-baseline="central">🌸</text>
        <circle cx="50" cy="70" r="10" fill="#FFF176" />
        <text x="50" y="70" font-size="10" fill="#E65100" text-anchor="middle" dominant-baseline="central">🌈</text>
        <text x="50" y="85" font-family="Fredoka" font-size="8" font-weight="700" fill="#E65100" text-anchor="middle">MEADOW HERO</text>
      </svg>
    `,
    questions: [
      {
        question: "Where did Jesus sit down to teach the Beatitudes?",
        options: ["In a wooden boat", "On a high, breezy mountain", "Inside a classroom", "At a big palace"],
        answer: 1 // "On a high, breezy mountain"
      },
      {
        question: "What does 'Blessed' mean in the Beatitudes?",
        options: ["Super rich", "Very sleepy", "Happy and full of God's joy", "Strong and loud"],
        answer: 2 // "Happy and full of God's joy"
      },
      {
        question: "Who did St. Francis say is a peacemaker?",
        options: ["Someone who wins fights", "An instrument of God's peace", "A King who builds high walls", "A giant shield"],
        answer: 1 // "An instrument of God's peace"
      }
    ]
  }
};

// Daily mini-missions list
const dailyQuests = [
  "Help clean up or set the dinner table today like a Good Samaritan helper! 🥖",
  "Say a friendly 'Thank you' and give your parents or guardians a giant hug! 🤗",
  "Share a favorite toy, book, or snack with a sibling or friend with a happy smile! 🧸",
  "Say a quick prayer for another child somewhere in the world who might be lonely today. 🗺️",
  "Use a quiet, gentle voice even if you are feeling a little bit frustrated or upset. 🌸",
  "Tell a family member 'Jesus loves you!' and give them a high five! 🖐️",
  "Read or listen to one of Jesus' parables and tell someone else about the story! 📖",
  "Care for our shared home: put your litter in the bin after a family outing, school day, or parish visit. 🌏",
  "With a parent or catechist, thank someone who helps your family, school, or parish today. 🌼",
  "Pray for the people of every language and culture who make Singapore home. 🦁"
];

const catechistPrompts = [
  "Where might Jesus be inviting us to show patience in our school, parish, or neighbourhood this week?",
  "Who is someone we may not notice often, and how could we show that person God's love?",
  "What would it look like to be a peacemaker when friends disagree?",
  "How can our group care for the places and people we share each day?",
  "Which part of today's story or Beatitude can we carry with us into the week?"
];


// --- 2. STATE MANAGER ---
let activeTabId = "tab-home";
let earnedBadges = JSON.parse(localStorage.getItem("catholic-kids-badges")) || [];
let activeQuizTopic = null;
let currentQuestionIndex = 0;
let userSelectedOption = null;
let speechUtterance = null;
let isSpeaking = false;
let completedSingaporeMissions = JSON.parse(localStorage.getItem("catholic-singapore-missions")) || [];
let discussionPromptIndex = 0;
let soundGardenEnabled = localStorage.getItem("catholic-sound-garden-enabled") === "true";
let soundGardenContext = null;
let soundGardenTimer = null;
let selectedAgeProfileId = localStorage.getItem("catholic-age-profile") || "little-lambs";
let allyTokens = Number(localStorage.getItem("catholic-ally-tokens")) || 0;
let awardedTokenEvents = JSON.parse(localStorage.getItem("catholic-ally-token-events")) || {};


// --- 3. DOM ELEMENT REFERENCES ---
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanels = document.querySelectorAll(".tab-content-panel");
const parablesCardContainer = document.getElementById("parables-card-container");
const meadowFlowersContainer = document.getElementById("meadow-flowers-container");
const stickersContainer = document.getElementById("stickers-container");
const quizTopicsContainer = document.getElementById("quiz-topics-container");
const badgeCountNum = document.getElementById("badge-count-num");
const badgeBookCount = document.getElementById("badge-book-count");
const badgeBookProgressFill = document.getElementById("badge-book-progress-fill");
const allyTokenTotal = document.getElementById("ally-token-total");
const allyTokenHomeTotal = document.getElementById("ally-token-home-total");
const allyTokenBadgeTotal = document.getElementById("ally-token-badge-total");
const heroWelcomePill = document.getElementById("hero-welcome-pill");
const heroTitle = document.getElementById("hero-title");
const heroDescription = document.getElementById("hero-description");
const heroQuoteLead = document.getElementById("hero-quote-lead");
const heroQuoteText = document.getElementById("hero-quote-text");
const ageChoiceButtons = document.querySelectorAll(".age-choice-btn");
const selectedAgeChip = document.getElementById("selected-age-chip");
const selectedAgeTitle = document.getElementById("selected-age-title");
const selectedAgeDescription = document.getElementById("selected-age-description");
const selectedAgeCatechist = document.getElementById("selected-age-catechist");
const selectedAgeNote = document.getElementById("selected-age-note");
const parablesIntroText = document.getElementById("parables-intro-text");
const beatitudesIntroText = document.getElementById("beatitudes-intro-text");
const singaporeIntroText = document.getElementById("singapore-intro-text");
const quizIntroText = document.getElementById("quiz-intro-text");
const badgesIntroText = document.getElementById("badges-intro-text");
const quizSelectionTitle = document.getElementById("quiz-selection-title");
const badgeBookHeading = document.getElementById("badge-book-heading");

// Quest elements
const dailyQuestText = document.getElementById("daily-quest-text");
const btnCompleteQuest = document.getElementById("btn-complete-quest");

// Parable Modal elements
const parableModal = document.getElementById("parable-modal");
const btnCloseParableModal = document.getElementById("btn-close-parable-modal");
const modalParableSvg = document.getElementById("modal-parable-svg");
const modalParableReference = document.getElementById("modal-parable-reference");
const parableModalTitle = document.getElementById("parable-modal-title");
const modalParableStory = document.getElementById("modal-parable-story");
const modalParableCatholicLesson = document.getElementById("modal-parable-catholic-lesson");
const modalParableSacramentText = document.getElementById("modal-parable-sacrament-text");
const modalParablePrayer = document.getElementById("modal-parable-prayer");
const btnNarrate = document.getElementById("btn-narrate");
const btnStopNarrate = document.getElementById("btn-stop-narrate");
const storySubtabs = document.querySelectorAll(".story-tab");
const subtabPanels = document.querySelectorAll(".subtab-panel");

// Beatitude Modal elements
const beatitudeModal = document.getElementById("beatitude-modal");
const btnCloseBeatitudeModal = document.getElementById("btn-close-beatitude-modal");
const beatitudeModalEmoji = document.getElementById("beatitude-modal-emoji");
const beatitudeModalTitle = document.getElementById("beatitude-modal-title");
const beatitudeModalVerse = document.getElementById("beatitude-modal-verse");
const beatitudeModalExplanation = document.getElementById("beatitude-modal-explanation");
const beatitudeModalQuest = document.getElementById("beatitude-modal-quest");
const beatitudeModalSaintEmoji = document.getElementById("beatitude-modal-saint-emoji");
const beatitudeModalSaintName = document.getElementById("beatitude-modal-saint-name");
const beatitudeModalSaintDesc = document.getElementById("beatitude-modal-saint-desc");
const beatitudeModalPrayer = document.getElementById("beatitude-modal-prayer");

// Quiz screen elements
const quizSelectionScreen = document.getElementById("quiz-selection-screen");
const quizActiveScreen = document.getElementById("quiz-active-screen");
const quizVictoryScreen = document.getElementById("quiz-victory-screen");
const btnExitQuiz = document.getElementById("btn-exit-quiz");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizQNumber = document.getElementById("quiz-q-number");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizOptionsList = document.getElementById("quiz-options-list");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackText = document.getElementById("feedback-text");
const btnNextQuestion = document.getElementById("btn-next-question");
const btnFinishQuiz = document.getElementById("btn-finish-quiz");
const wonBadgeContainer = document.getElementById("won-badge-container");
const wonBadgeTitle = document.getElementById("won-badge-title");
const wonBadgeDescription = document.getElementById("won-badge-description");
const victoryMessage = document.getElementById("victory-message");
const confettiContainer = document.getElementById("confetti-container");

// Singapore Faith Trail elements
const singaporeMissionButtons = document.querySelectorAll(".mission-complete-btn");
const singaporeMissionCount = document.getElementById("singapore-mission-status");
const singaporeMissionProgress = document.getElementById("singapore-mission-progress");
const singaporeMissionProgressFill = document.getElementById("singapore-mission-progress-fill");
const discussionPromptText = document.getElementById("discussion-prompt-text");
const btnNextDiscussionPrompt = document.getElementById("btn-next-discussion-prompt");
const btnPrintCatechistGuide = document.getElementById("btn-print-catechist-guide");
const btnOpenSingaporeTrail = document.getElementById("btn-open-singapore-trail");

// Audio players
const audioClick = document.getElementById("audio-click");
const audioSuccess = document.getElementById("audio-success");
const audioBadge = document.getElementById("audio-badge");
const btnSoundGarden = document.getElementById("btn-sound-garden");
const soundGardenLabel = document.getElementById("sound-garden-label");
const storySubtabTale = document.getElementById("story-subtab-tale");
const storySubtabCatholic = document.getElementById("story-subtab-catholic");


// --- 4. INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  syncLegacyAllyTokens();
  setupAgeAdventure();
  setupNavigation();
  applyAgeProfile(selectedAgeProfileId);
  renderBadgeBook();
  updateBadgeCounters();
  updateAllyTokenDisplays();
  setupSpeechSynthesis();
  setupSingaporeFaithTrail();
  setupSoundGarden();
  
  // Connect home buttons to tabs
  document.getElementById("btn-start-parables").addEventListener("click", () => switchTab("tab-parables"));
  document.getElementById("btn-start-beatitudes").addEventListener("click", () => switchTab("tab-beatitudes"));
  btnOpenSingaporeTrail.addEventListener("click", () => {
    playSound("click");
    switchTab("tab-singapore");
    window.scrollTo({ top: 0, behavior: "auto" });
  });
});

function getActiveAgeProfile() {
  return ageProfiles[selectedAgeProfileId] || ageProfiles["little-lambs"];
}

function setupAgeAdventure() {
  ageChoiceButtons.forEach(button => {
    button.addEventListener("click", () => {
      playSound("click");
      setAgeProfile(button.dataset.ageProfile);
    });
  });
}

function setAgeProfile(profileId) {
  if (!ageProfiles[profileId]) return;
  selectedAgeProfileId = profileId;
  localStorage.setItem("catholic-age-profile", profileId);
  applyAgeProfile(profileId);
}

function applyAgeProfile(profileId) {
  const profile = ageProfiles[profileId] || ageProfiles["little-lambs"];
  document.body.dataset.ageProfile = profileId;

  ageChoiceButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.ageProfile === profileId);
  });

  heroWelcomePill.textContent = profile.heroEyebrow;
  heroTitle.textContent = profile.heroTitle;
  heroDescription.textContent = profile.heroDescription;
  heroQuoteLead.textContent = profile.quoteLead;
  heroQuoteText.textContent = profile.quoteText;
  selectedAgeChip.textContent = profile.chip;
  selectedAgeTitle.textContent = profile.label;
  selectedAgeDescription.textContent = profile.summary;
  selectedAgeCatechist.textContent = profile.catechistLead;
  selectedAgeNote.textContent = profile.catechistNote;
  parablesIntroText.textContent = profile.parablesIntro;
  beatitudesIntroText.textContent = profile.beatitudesIntro;
  singaporeIntroText.textContent = profile.singaporeIntro;
  quizIntroText.textContent = profile.quizIntro;
  badgesIntroText.textContent = profile.badgesIntro;
  quizSelectionTitle.textContent = profile.quizSelectionTitle;
  badgeBookHeading.textContent = profile.badgeBookHeading;
  btnNarrate.innerHTML = `<span class="speaker-icon">🔊</span> ${profile.narratorLabel}`;
  storySubtabTale.textContent = profile.storyTabLabel;
  storySubtabCatholic.textContent = profile.catholicTabLabel;
  document.getElementById("btn-start-parables").textContent = profile.parableButtonLabel;
  document.getElementById("btn-start-beatitudes").textContent = profile.beatitudeButtonLabel;

  loadDailyQuest();
  renderParables();
  renderMeadow();
  renderQuizTopics();
}

function applyReadingReplacements(text, replacements) {
  return replacements.reduce((currentText, [pattern, replacement]) => currentText.replace(pattern, replacement), text);
}

function adaptReadingText(text) {
  const profile = getActiveAgeProfile();
  if (!text) return "";
  if (profile.readingMode === "balanced") {
    return applyReadingReplacements(text, balancedReadingReplacements);
  }
  if (profile.readingMode === "reflective") {
    return applyReadingReplacements(text, reflectiveReadingReplacements);
  }
  return text;
}

function formatStoryHtml(text) {
  const sentences = (text.match(/[^.!?]+[.!?]+(?:["']+)?|[^.!?]+$/g) || [text]).map(sentence => sentence.trim()).filter(Boolean);
  const groupSize = selectedAgeProfileId === "little-lambs" ? 2 : 3;
  const paragraphs = [];

  for (let i = 0; i < sentences.length; i += groupSize) {
    paragraphs.push(`<p>${sentences.slice(i, i + groupSize).join(" ")}</p>`);
  }

  return paragraphs.join("");
}

function syncLegacyAllyTokens() {
  const lastCompletedDate = localStorage.getItem("catholic-quest-completed-date");

  if (lastCompletedDate) {
    awardAllyTokens(`daily-quest:${lastCompletedDate}`, ALLY_TOKEN_AWARDS.dailyQuest);
  }

  completedSingaporeMissions.forEach(missionId => {
    awardAllyTokens(`singapore-mission:${missionId}`, ALLY_TOKEN_AWARDS.singaporeMission);
  });

  earnedBadges.forEach(topicId => {
    awardAllyTokens(`quiz-badge:${topicId}`, ALLY_TOKEN_AWARDS.quizBadge);
  });
}

function awardAllyTokens(eventKey, amount) {
  if (!eventKey || awardedTokenEvents[eventKey]) return false;

  awardedTokenEvents[eventKey] = amount;
  allyTokens += amount;
  localStorage.setItem("catholic-ally-token-events", JSON.stringify(awardedTokenEvents));
  localStorage.setItem("catholic-ally-tokens", String(allyTokens));
  updateAllyTokenDisplays();
  return true;
}

function updateAllyTokenDisplays() {
  allyTokenTotal.textContent = allyTokens;
  allyTokenHomeTotal.textContent = allyTokens;
  allyTokenBadgeTotal.textContent = allyTokens;
}

// Sound play helper with click/success sounds
function playSound(type) {
  try {
    if (type === "click" && audioClick) {
      audioClick.currentTime = 0;
      audioClick.play();
    } else if (type === "success" && audioSuccess) {
      audioSuccess.currentTime = 0;
      audioSuccess.play();
    } else if (type === "badge" && audioBadge) {
      audioBadge.currentTime = 0;
      audioBadge.play();
    }
  } catch (e) {
    console.log("Audio playback failed or blocked: ", e);
  }

  if (soundGardenEnabled) {
    playSoundGardenTone(type);
  }
}

// --- 5. OPTIONAL SOUND GARDEN ---

function setupSoundGarden() {
  if (!(window.AudioContext || window.webkitAudioContext)) {
    soundGardenEnabled = false;
    localStorage.setItem("catholic-sound-garden-enabled", "false");
    btnSoundGarden.disabled = true;
    soundGardenLabel.textContent = "Sound Garden unavailable";
    return;
  }

  updateSoundGardenButton();
  btnSoundGarden.addEventListener("click", () => {
    setSoundGardenEnabled(!soundGardenEnabled);
  });
}

function setSoundGardenEnabled(enabled) {
  soundGardenEnabled = enabled;
  localStorage.setItem("catholic-sound-garden-enabled", String(enabled));
  updateSoundGardenButton();

  if (!enabled) {
    stopSoundGarden();
    return;
  }

  const context = getSoundGardenContext();
  resumeSoundGarden(context, () => {
    playSoundGardenPhrase();
    startSoundGarden();
  });
}

function updateSoundGardenButton() {
  btnSoundGarden.classList.toggle("is-active", soundGardenEnabled);
  btnSoundGarden.setAttribute("aria-pressed", String(soundGardenEnabled));
  btnSoundGarden.title = soundGardenEnabled
    ? "Turn off gentle Sound Garden chimes"
    : "Turn on gentle Sound Garden chimes";
  soundGardenLabel.textContent = soundGardenEnabled
    ? "Sound Garden: On"
    : "Sound Garden: Off";
}

function getSoundGardenContext() {
  if (!soundGardenContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    soundGardenContext = new AudioContextClass();
  }

  return soundGardenContext;
}

function resumeSoundGarden(context, onReady) {
  if (context.state === "suspended") {
    context.resume().then(onReady).catch(error => {
      soundGardenEnabled = false;
      localStorage.setItem("catholic-sound-garden-enabled", "false");
      updateSoundGardenButton();
      console.warn("Sound Garden could not start:", error);
    });
    return;
  }

  onReady();
}

function playSoundGardenTone(type) {
  const context = getSoundGardenContext();
  const tonePatterns = {
    click: [659.25],
    success: [523.25, 659.25, 783.99],
    badge: [523.25, 659.25, 783.99, 1046.5]
  };
  const notes = tonePatterns[type] || tonePatterns.click;

  resumeSoundGarden(context, () => {
    const startAt = context.currentTime + 0.02;
    notes.forEach((note, index) => {
      playBellTone(context, note, startAt + (index * 0.11), 0.34, type === "badge" ? 0.075 : 0.055);
    });
    startSoundGarden();
  });
}

function playSoundGardenPhrase() {
  if (!soundGardenEnabled || document.hidden) return;

  const context = getSoundGardenContext();
  const notes = [523.25, 659.25, 783.99, 659.25];
  const startAt = context.currentTime + 0.03;

  notes.forEach((note, index) => {
    playBellTone(context, note, startAt + (index * 0.22), 0.55, 0.032);
  });
}

function playBellTone(context, frequency, startAt, duration, volume) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.04);
}

function startSoundGarden() {
  if (soundGardenTimer || !soundGardenEnabled) return;

  soundGardenTimer = window.setInterval(() => {
    playSoundGardenPhrase();
  }, 18000);
}

function stopSoundGarden() {
  if (!soundGardenTimer) return;

  window.clearInterval(soundGardenTimer);
  soundGardenTimer = null;
}

// --- 6. NAVIGATION CONTROLLER ---

function setupNavigation() {
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      playSound("click");
      const tabId = tab.id;
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Update state
  activeTabId = tabId;
  
  // Stop any active narration
  stopNarration();

  // Highlight tab button
  navTabs.forEach(tab => {
    if (tab.id === tabId) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  // Switch panels
  const targetSectionId = document.getElementById(tabId).getAttribute("data-target");
  tabPanels.forEach(panel => {
    if (panel.id === targetSectionId) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Special hooks
  if (tabId === "tab-badges") {
    renderBadgeBook();
  } else if (tabId === "tab-quiz") {
    renderQuizTopics();
  }
}


// --- 7. DAILY QUEST CONTROLLER ---

function loadDailyQuest() {
  const profile = getActiveAgeProfile();
  const dayIndex = new Date().getDate() % dailyQuests.length;
  dailyQuestText.textContent = adaptReadingText(dailyQuests[dayIndex]);
  
  const lastCompletedDate = localStorage.getItem("catholic-quest-completed-date");
  const today = new Date().toDateString();
  
  if (lastCompletedDate === today) {
    awardAllyTokens(`daily-quest:${today}`, ALLY_TOKEN_AWARDS.dailyQuest);
    markQuestCompleted(true, 0);
  } else {
    btnCompleteQuest.disabled = false;
    btnCompleteQuest.textContent = profile.readingMode === "reflective"
      ? "✅ Mark today's quest complete"
      : "✅ I Completed My Quest!";
    btnCompleteQuest.style.background = "";
  }

  btnCompleteQuest.onclick = () => {
    playSound("success");
    localStorage.setItem("catholic-quest-completed-date", today);
    const didAwardTokens = awardAllyTokens(`daily-quest:${today}`, ALLY_TOKEN_AWARDS.dailyQuest);
    markQuestCompleted(false, didAwardTokens ? ALLY_TOKEN_AWARDS.dailyQuest : 0);
  };
}

function markQuestCompleted(isQuiet, awardedTokens) {
  btnCompleteQuest.disabled = true;
  btnCompleteQuest.textContent = awardedTokens > 0
    ? `🎉 Quest complete! +${awardedTokens} Ally Tokens`
    : "🎉 Quest complete for today!";
  btnCompleteQuest.style.background = "#81C784";
  
  if (!isQuiet) {
    createConfettiShower();
  }
}


// --- 8. SINGAPORE FAITH TRAIL CONTROLLER ---

function setupSingaporeFaithTrail() {
  singaporeMissionButtons.forEach(button => {
    button.addEventListener("click", () => {
      completeSingaporeMission(button.dataset.missionId);
    });
  });

  btnNextDiscussionPrompt.addEventListener("click", () => {
    playSound("click");
    discussionPromptIndex = (discussionPromptIndex + 1) % catechistPrompts.length;
    discussionPromptText.textContent = catechistPrompts[discussionPromptIndex];
  });

  btnPrintCatechistGuide.addEventListener("click", () => {
    playSound("click");
    window.print();
  });

  updateSingaporeMissionBoard();
}

function completeSingaporeMission(missionId) {
  if (!missionId || completedSingaporeMissions.includes(missionId)) return;

  completedSingaporeMissions.push(missionId);
  localStorage.setItem("catholic-singapore-missions", JSON.stringify(completedSingaporeMissions));
  awardAllyTokens(`singapore-mission:${missionId}`, ALLY_TOKEN_AWARDS.singaporeMission);
  playSound("success");
  updateSingaporeMissionBoard();

  if (completedSingaporeMissions.length === singaporeMissionButtons.length) {
    createConfettiShower();
  }
}

function updateSingaporeMissionBoard() {
  const availableMissionIds = [...singaporeMissionButtons].map(button => button.dataset.missionId);
  completedSingaporeMissions = completedSingaporeMissions.filter(missionId => availableMissionIds.includes(missionId));
  localStorage.setItem("catholic-singapore-missions", JSON.stringify(completedSingaporeMissions));

  const completedCount = completedSingaporeMissions.length;
  const progressPercent = (completedCount / singaporeMissionButtons.length) * 100;
  singaporeMissionProgressFill.style.width = `${progressPercent}%`;
  singaporeMissionProgress.setAttribute("aria-valuenow", String(completedCount));
  singaporeMissionCount.textContent = completedCount === singaporeMissionButtons.length
    ? "All 3 missions tried - thank you for sharing Jesus' love!"
    : `${completedCount} of ${singaporeMissionButtons.length} missions tried`;

  singaporeMissionButtons.forEach(button => {
    const isComplete = completedSingaporeMissions.includes(button.dataset.missionId);
    button.disabled = isComplete;
    button.textContent = isComplete ? "✅ Mission tried!" : "🌱 Try this mission";
    button.closest(".mission-card").classList.toggle("is-complete", isComplete);
  });
}


// --- 9. PARABLES STORYBOOK CONTROLLER ---

function renderParables() {
  const profile = getActiveAgeProfile();
  parablesCardContainer.innerHTML = "";
  parablesData.forEach(p => {
    const card = document.createElement("article");
    card.className = "parable-card";
    card.id = `card-${p.id}`;
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="parable-card-banner">
        ${p.illustrationSvg}
      </div>
      <span class="parable-ref">${p.ref}</span>
      <h3>${p.title}</h3>
      <p>${adaptReadingText(p.teaser)}</p>
      <span class="parable-teaser-tag">${profile.parableCardCta}</span>
    `;
    
    // Open modal on click
    card.addEventListener("click", () => openParableModal(p));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openParableModal(p);
    });

    parablesCardContainer.appendChild(card);
  });
}

function openParableModal(p) {
  const adaptedStory = adaptReadingText(p.story);
  playSound("click");
  
  parableModalTitle.innerText = p.title;
  modalParableReference.innerText = p.ref;
  modalParableSvg.innerHTML = p.illustrationSvg;
  modalParableStory.innerHTML = formatStoryHtml(adaptedStory);
  modalParableCatholicLesson.textContent = adaptReadingText(p.catholicLesson);
  modalParableSacramentText.textContent = adaptReadingText(p.sacramentText);
  modalParablePrayer.textContent = adaptReadingText(p.prayer);

  // Reset Subtabs
  storySubtabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById("story-subtab-tale").classList.add("active");
  subtabPanels.forEach(panel => panel.classList.remove("active"));
  document.getElementById("modal-tab-tale").classList.add("active");

  // Show modal
  parableModal.classList.remove("hide");
  document.body.style.overflow = "hidden"; // Prevent background scrolling

  // Setup click triggers on subtabs
  storySubtabs.forEach(tab => {
    tab.onclick = () => {
      playSound("click");
      storySubtabs.forEach(t => tab.id === t.id ? t.classList.add("active") : t.classList.remove("active"));
      const targetPanel = tab.getAttribute("data-target");
      subtabPanels.forEach(panel => panel.id === targetPanel ? panel.classList.add("active") : panel.classList.remove("active"));
    };
  });

  // Setup Read-To-Me logic
  btnNarrate.onclick = () => startNarration(adaptedStory);
  btnStopNarrate.onclick = () => stopNarration();
}

btnCloseParableModal.onclick = () => {
  playSound("click");
  parableModal.classList.add("hide");
  document.body.style.overflow = "";
  stopNarration();
};


// --- 10. BEATITUDES MEADOW CONTROLLER ---

function renderMeadow() {
  const profile = getActiveAgeProfile();
  meadowFlowersContainer.innerHTML = "";
  beatitudesData.forEach((b, index) => {
    const flower = document.createElement("div");
    flower.className = "meadow-item-card";
    flower.setAttribute("tabindex", "0");
    flower.innerHTML = `
      <div class="flower-head">
        <span class="flower-icon">${b.emoji}</span>
      </div>
      <div class="flower-stem">
        <div class="flower-leaf-left"></div>
        <div class="flower-leaf-right"></div>
      </div>
      <div class="flower-pot"></div>
      <div class="meadow-card-label">${profile.meadowLabelPrefix} #${index + 1}</div>
    `;

    flower.addEventListener("click", () => openBeatitudeModal(b));
    flower.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openBeatitudeModal(b);
    });

    meadowFlowersContainer.appendChild(flower);
  });
}

function openBeatitudeModal(b) {
  playSound("click");

  beatitudeModalEmoji.innerText = b.emoji;
  beatitudeModalTitle.innerText = b.title;
  beatitudeModalVerse.innerText = b.verse;
  beatitudeModalExplanation.innerText = adaptReadingText(b.explanation);
  beatitudeModalQuest.innerText = adaptReadingText(b.quest);
  beatitudeModalSaintEmoji.innerText = b.saintEmoji;
  beatitudeModalSaintName.innerText = b.saintName;
  beatitudeModalSaintDesc.innerText = adaptReadingText(b.saintDesc);
  beatitudeModalPrayer.innerText = adaptReadingText(b.prayer);

  // Show
  beatitudeModal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

btnCloseBeatitudeModal.onclick = () => {
  playSound("click");
  beatitudeModal.classList.add("hide");
  document.body.style.overflow = "";
};


// --- 11. "READ TO ME" VOICE SYNTHESIS COMPANION ---

function setupSpeechSynthesis() {
  // Check if browser supports Web Speech API
  if (!('speechSynthesis' in window)) {
    btnNarrate.classList.add("hide");
    console.log("Speech synthesis not supported in this browser.");
  }
}

function startNarration(text) {
  const profile = getActiveAgeProfile();
  // Cancel current
  stopNarration();

  playSound("click");
  isSpeaking = true;
  btnNarrate.classList.add("hide");
  btnStopNarrate.classList.remove("hide");

  // Prepare text reading
  speechUtterance = new SpeechSynthesisUtterance(text);
  
  const voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
  let bestVoice = null;
  let highestScore = -1;
  
  voices.forEach(voice => {
    const name = voice.name.toLowerCase();
    let score = 0;
    
    if (voice.lang.includes("en-SG")) {
      score += 30;
    } else if (voice.lang.includes("en-AU") || voice.lang.includes("en-GB")) {
      score += 22;
    } else if (voice.lang.includes("en-US")) {
      score += 18;
    }
    
    if (name.includes("online") || name.includes("natural") || name.includes("neural")) {
      score += 40;
    }
    
    if (name.includes("aria") || name.includes("jenny") || name.includes("sonia") || name.includes("libby") || name.includes("natasha") || name.includes("samantha")) {
      score += 20;
    }
    
    if (name.includes("child") || name.includes("warm") || name.includes("friendly") || name.includes("soft")) {
      score += 12;
    }

    if (name.includes("robot") || name.includes("desktop")) {
      score -= 25;
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestVoice = voice;
    }
  });

  const selectedVoice = bestVoice || window.speechSynthesis.getVoices()[0];
                      
  if (selectedVoice) {
    speechUtterance.voice = selectedVoice;
    console.log("Selected narration voice: " + selectedVoice.name + " (" + selectedVoice.lang + ")");
  }
  
  speechUtterance.rate = profile.narrationRate;
  speechUtterance.pitch = profile.narrationPitch;


  speechUtterance.onend = () => {
    stopNarration();
  };

  speechUtterance.onerror = () => {
    stopNarration();
  };

  window.speechSynthesis.speak(speechUtterance);
}

function stopNarration() {
  isSpeaking = false;
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  btnNarrate.classList.remove("hide");
  btnStopNarrate.classList.add("hide");
}


// --- 12. QUIZ ARENA CONTROLLER ---

function renderQuizTopics() {
  const profile = getActiveAgeProfile();
  quizTopicsContainer.innerHTML = "";
  Object.keys(quizzesData).forEach(topicId => {
    const qData = quizzesData[topicId];
    const isEarned = earnedBadges.includes(topicId);
    
    const card = document.createElement("div");
    card.className = "quiz-topic-card";
    card.innerHTML = `
      <span class="topic-badge-icon">${isEarned ? "🏆" : "🎮"}</span>
      <h4>${qData.badgeTitle} Quiz</h4>
      <p>${profile.quizCardText}</p>
      <span class="topic-status-tag ${isEarned ? "earned" : ""}">${isEarned ? "✅ Badge Earned!" : "▶ Play Quiz!"}</span>
    `;

    card.onclick = () => {
      playSound("click");
      startQuiz(topicId);
    };
    quizTopicsContainer.appendChild(card);
  });
}

function startQuiz(topicId) {
  activeQuizTopic = topicId;
  currentQuestionIndex = 0;
  userSelectedOption = null;

  quizSelectionScreen.classList.add("hide");
  quizActiveScreen.classList.remove("hide");
  quizVictoryScreen.classList.add("hide");
  
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const quizInfo = quizzesData[activeQuizTopic];
  const totalQ = quizInfo.questions.length;
  const qObj = quizInfo.questions[currentQuestionIndex];

  // Hide feedback banner
  quizFeedback.classList.add("hide");

  // Progress Bar
  const progressPercent = ((currentQuestionIndex) / totalQ) * 100;
  quizProgressFill.style.width = `${progressPercent}%`;

  // Question Info
  quizQNumber.innerText = `Question ${currentQuestionIndex + 1} of ${totalQ}`;
  quizQuestionText.innerText = adaptReadingText(qObj.question);

  // Options
  quizOptionsList.innerHTML = "";
  qObj.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `
      <span class="option-prefix">${String.fromCharCode(65 + index)}</span>
      <span class="option-label-text">${adaptReadingText(opt)}</span>
    `;
    btn.onclick = () => selectQuizOption(index, btn);
    quizOptionsList.appendChild(btn);
  });
}

function selectQuizOption(selectedIndex, buttonElement) {
  // If already selected, do nothing
  if (userSelectedOption !== null) return;

  playSound("click");
  userSelectedOption = selectedIndex;
  const qObj = quizzesData[activeQuizTopic].questions[currentQuestionIndex];
  const correctIdx = qObj.answer;

  // Highlight choices
  const optionButtons = quizOptionsList.querySelectorAll(".option-btn");
  
  if (selectedIndex === correctIdx) {
    // Correct!
    playSound("success");
    buttonElement.classList.add("correct");
    showQuestionFeedback(true);
  } else {
    // Wrong!
    buttonElement.classList.add("wrong");
    // Show correct one quietly
    optionButtons[correctIdx].classList.add("correct");
    showQuestionFeedback(false);
  }
}

function showQuestionFeedback(isCorrect) {
  const profile = getActiveAgeProfile();
  quizFeedback.classList.remove("hide");
  
  if (isCorrect) {
    feedbackIcon.innerText = "🎉";
    feedbackText.innerText = profile.successFeedback;
  } else {
    feedbackIcon.innerText = profile.encouragementIcon;
    feedbackText.innerText = profile.encouragementFeedback;
  }
  
  btnNextQuestion.onclick = () => {
    playSound("click");
    advanceQuiz();
  };
}

function advanceQuiz() {
  const totalQ = quizzesData[activeQuizTopic].questions.length;
  userSelectedOption = null;

  if (currentQuestionIndex < totalQ - 1) {
    currentQuestionIndex++;
    loadQuizQuestion();
  } else {
    // Finished Quiz!
    showQuizVictory();
  }
}

function showQuizVictory() {
  const profile = getActiveAgeProfile();
  quizActiveScreen.classList.add("hide");
  quizVictoryScreen.classList.remove("hide");
  
  playSound("badge");
  createConfettiShower();

  const quizInfo = quizzesData[activeQuizTopic];
  
  wonBadgeContainer.innerHTML = quizInfo.badgeSvg;
  wonBadgeTitle.innerText = quizInfo.badgeTitle;
  wonBadgeDescription.innerText = quizInfo.badgeDesc;
  victoryMessage.innerText = profile.victoryMessage;

  if (!earnedBadges.includes(activeQuizTopic)) {
    earnedBadges.push(activeQuizTopic);
    localStorage.setItem("catholic-kids-badges", JSON.stringify(earnedBadges));
    const didAwardTokens = awardAllyTokens(`quiz-badge:${activeQuizTopic}`, ALLY_TOKEN_AWARDS.quizBadge);
    if (didAwardTokens) {
      victoryMessage.innerText = `${profile.victoryMessage} +${ALLY_TOKEN_AWARDS.quizBadge} Ally Tokens earned!`;
    }
    updateBadgeCounters();
  }

  btnFinishQuiz.onclick = () => {
    playSound("click");
    quizSelectionScreen.classList.remove("hide");
    quizVictoryScreen.classList.add("hide");
    switchTab("tab-badges"); // Jump to sticker book
  };
}

btnExitQuiz.onclick = () => {
  playSound("click");
  quizSelectionScreen.classList.remove("hide");
  quizActiveScreen.classList.add("hide");
};


// --- 13. BADGE BOOK DISPLAY ---

function renderBadgeBook() {
  stickersContainer.innerHTML = "";
  
  Object.keys(quizzesData).forEach(topicId => {
    const qInfo = quizzesData[topicId];
    const isUnlocked = earnedBadges.includes(topicId);
    
    const slot = document.createElement("div");
    slot.className = `badge-sticker-slot ${isUnlocked ? "unlocked animate-bounce" : ""}`;
    slot.innerHTML = `
      <div class="badge-bubble-slot">
        ${isUnlocked ? qInfo.badgeSvg : "❓"}
      </div>
      <div class="badge-slot-title">${isUnlocked ? qInfo.badgeTitle : "Locked"}</div>
      <div class="badge-slot-hint">${isUnlocked ? "Earned!" : "Play Quiz to Unlock!"}</div>
    `;
    
    stickersContainer.appendChild(slot);
  });
}

function updateBadgeCounters() {
  const totalBadges = Object.keys(quizzesData).length;
  const count = earnedBadges.length;

  badgeCountNum.innerText = count;
  badgeBookCount.innerText = count;

  // Calculate percentages
  const progressPercent = (count / totalBadges) * 100;
  badgeBookProgressFill.style.width = `${progressPercent}%`;
}


// --- 14. CONFETTI ANIMATION ENGINE ---

function createConfettiShower() {
  if (!confettiContainer) return;
  confettiContainer.innerHTML = "";
  
  const colors = ["#FF5252", "#FFD54F", "#81C784", "#4FC3F7", "#BA68C8", "#FF8A65"];
  
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    
    // Style particle
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * -10}px`;
    piece.style.width = `${Math.random() * 8 + 8}px`;
    piece.style.height = `${Math.random() * 6 + 12}px`;
    
    // Random rot & physics animation timing
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animation = `confettiFall ${Math.random() * 2 + 1.5}s ease-out forwards`;
    
    confettiContainer.appendChild(piece);
  }
}
