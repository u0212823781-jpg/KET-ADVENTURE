const PRETEST1 = {
  pageTitle: 'READY, SET, KET! — Trainer Pre-Test 1',
  title: 'Trainer Pre-Test 1',
  subtitle: 'Vocabulary & Writing warm-up before Test 1',
  intro: 'Complete each activity and press "Check my answers" to see what you got right. Do the Vocabulary Challenges before Test 1, Parts 1–5, and the Writing Part 6 Trainer before you try Part 6 of Test 1 or Test 2!',

  sections: [
    /* ============ VOCAB CHALLENGE 1 (Parts 1 & 2) ============ */
    {
      id: 'vocab1',
      label: 'Vocabulary Challenge — Parts 1 & 2',
      description: 'Key words you will meet in Parts 1 and 2 of the test.',
      poster: '../IMAGENES/pretest1-vocab1-poster.jpg',
      playHref: 'play-vocab1.html',
      crossLinks: [
        { label: 'Practise Test 1 — Part 1', href: 'test1.html#r1' },
        { label: 'Practise Test 1 — Part 2', href: 'test1.html#r2' },
        { label: 'Practise Test 2 — Part 1', href: 'test2.html#r1' },
        { label: 'Practise Test 2 — Part 2', href: 'test2.html#r2' },
      ],
      exercises: [
        {
          id: 'v1-1', number: '1', title: 'Exercise 1 — Match', navLabel: 'Ex.1 Match',
          type: 'match',
          instructions: 'Match 1–10 with A–J.',
          options: [
            { letter: 'A', text: 'a person who comes to see a place' },
            { letter: 'B', text: 'become better' },
            { letter: 'C', text: 'copy something from the internet onto your device' },
            { letter: 'D', text: 'something you enjoy doing in your free time' },
            { letter: 'E', text: 'a person who studies in the same class as you' },
            { letter: 'F', text: 'ready to use or get' },
            { letter: 'G', text: 'take something for a short time and return it' },
            { letter: 'H', text: 'a job or profession you develop over time' },
            { letter: 'I', text: 'an event where people try to win' },
            { letter: 'J', text: 'arriving or happening later than planned' },
          ],
          pairs: [
            { left: '1. borrow', correct: 'G' },
            { left: '2. delayed', correct: 'J' },
            { left: '3. hobby', correct: 'D' },
            { left: '4. improve', correct: 'B' },
            { left: '5. visitor', correct: 'A' },
            { left: '6. competition', correct: 'I' },
            { left: '7. classmate', correct: 'E' },
            { left: '8. available', correct: 'F' },
            { left: '9. career', correct: 'H' },
            { left: '10. download', correct: 'C' },
          ],
        },
        {
          id: 'v1-2', number: '2', title: 'Exercise 2 — Choose the correct word', navLabel: 'Ex.2 Choose word',
          type: 'mc3',
          instructions: 'Choose the correct answer.',
          items: [
            { stem: '1. My train is ___, so I will arrive twenty minutes late.', correct: 'A', options: [{ letter: 'A', text: 'delayed' }, { letter: 'B', text: 'local' }, { letter: 'C', text: 'available' }] },
            { stem: '2. Sara wants to ___ her English before her holiday.', correct: 'B', options: [{ letter: 'A', text: 'lend' }, { letter: 'B', text: 'improve' }, { letter: 'C', text: 'forget' }] },
            { stem: '3. Photography is my favourite ___.', correct: 'C', options: [{ letter: 'A', text: 'career' }, { letter: 'B', text: 'visitor' }, { letter: 'C', text: 'hobby' }] },
            { stem: '4. Is this seat ___, or is someone sitting here?', correct: 'A', options: [{ letter: 'A', text: 'available' }, { letter: 'B', text: 'foreign' }, { letter: 'C', text: 'bored' }] },
            { stem: '5. Our school is having a singing ___ next Friday.', correct: 'A', options: [{ letter: 'A', text: 'competition' }, { letter: 'B', text: 'classmate' }, { letter: 'C', text: 'career' }] },
            { stem: '6. I want to ___ this new language-learning app.', correct: 'B', options: [{ letter: 'A', text: 'borrow' }, { letter: 'B', text: 'download' }, { letter: 'C', text: 'continue' }] },
            { stem: '7. Tom is my ___. We sit next to each other in science.', correct: 'B', options: [{ letter: 'A', text: 'visitor' }, { letter: 'B', text: 'classmate' }, { letter: 'C', text: 'beginner' }] },
            { stem: "8. I'd like to ___ your dictionary for tonight. I'll return it tomorrow.", correct: 'A', options: [{ letter: 'A', text: 'borrow' }, { letter: 'B', text: 'lend' }, { letter: 'C', text: 'improve' }] },
          ],
        },
        {
          id: 'v1-3', number: '3', title: 'Exercise 3 — BORROW or LEND?', navLabel: 'Ex.3 Borrow/Lend',
          type: 'gap',
          instructions: 'Complete each sentence with borrow or lend. Change the form of the verb if necessary.',
          items: [
            { stem: '1. Can I ___ your blue pen, please?', accepted: ['borrow'] },
            { stem: '2. I forgot my ruler. Could you ___ me yours?', accepted: ['lend'] },
            { stem: '3. Mia ___ a book from the library yesterday.', accepted: ['borrowed'] },
            { stem: '4. My brother never ___ me his headphones!', accepted: ['lends'] },
            { stem: "5. You can ___ my jacket if you're cold.", accepted: ['borrow'] },
            { stem: '6. I need to ___ €2 from Dad for the bus.', accepted: ['borrow'] },
          ],
        },
        {
          id: 'v1-4', number: '4', title: 'Exercise 4 — Complete the expression', navLabel: 'Ex.4 Expressions',
          type: 'gap',
          instructions: 'Use the words in the box.',
          wordBank: ['part', 'lift', 'beginner', 'language', 'with', 'local'],
          items: [
            { stem: '1. take ___', accepted: ['part'] },
            { stem: '2. get a ___', accepted: ['lift'] },
            { stem: '3. complete ___', accepted: ['beginner'] },
            { stem: '4. foreign ___', accepted: ['language'] },
            { stem: '5. bored ___', accepted: ['with'] },
            { stem: '6. ___ college', accepted: ['local'] },
          ],
        },
        {
          id: 'v1-5', number: '5', title: 'Exercise 5 — Vocabulary in context', navLabel: 'Ex.5 In context',
          type: 'gap',
          instructions: 'Read each situation. Write the word or expression that matches it.',
          items: [
            { stem: '1. Leo has never studied Japanese before. He is starting from zero. →', accepted: ['complete beginner'] },
            { stem: "2. Emma's dad drives her to school because it is raining. →", accepted: ['get a lift', 'gives her a lift', 'a lift'] },
            { stem: '3. The basketball match starts at 6:30 instead of 6:00. →', accepted: ['delayed'] },
            { stem: '4. Nina wants to participate in the school chess tournament. →', accepted: ['take part'] },
            { stem: '5. Pablo has lived in four different countries, not just one or two. →', accepted: ['several'] },
            { stem: '6. I want to keep studying French next year. →', accepted: ['continue'] },
            { stem: '7. The museum has many people who come to see it every weekend. →', accepted: ['visitor', 'visitors'] },
            { stem: '8. Daniel wants to be a journalist in the future. →', accepted: ['career'] },
          ],
        },
        {
          id: 'v1-6', number: '6', title: 'Exercise 6 — Email writing', navLabel: 'Ex.6 Email',
          type: 'cloze',
          instructions: 'You want to start a new activity after school. Complete the email with words or expressions from the box.',
          wordBank: ['hobby', 'bored with', 'take part', 'improve', 'complete beginner', 'classmate', 'local', 'available'],
          extraWord: true,
          text: [
            "Hi Sam,\n\nI'm ", { accepted: ['bored with'] }, " playing computer games every afternoon, so I'd like to find a new ", { accepted: ['hobby'] },
            ".\n\nThere's a basketball club at my ", { accepted: ['local'] }, " sports centre. I'm a ", { accepted: ['complete beginner'] },
            ", but I'd really like to ", { accepted: ['improve'] }, " my basketball skills.\n\nWould you like to ", { accepted: ['take part'] },
            " in the classes with me? They are ", { accepted: ['available'] }, " on Tuesdays and Thursdays, so we can choose a day together.\n\nSee you soon,\nAlex",
          ],
        },
        {
          id: 'v1-7', number: '7', title: 'Exercise 7 — A story from pictures', navLabel: 'Ex.7 Story',
          type: 'cloze',
          instructions: 'Look at the three pictures. Complete the story with the words in the box. One word is extra.',
          tip: 'Read the whole story first and think about the meaning and grammar before you write.',
          image: '../IMAGENES/pretest1-vocab1-story.jpg',
          wordBank: ['take part', 'hobby', 'local', 'complete beginner', 'bored with', 'continue', 'available'],
          extraWord: true,
          text: [
            "The Football in the Tree\n\nLast Saturday, Jake and his friend Tom decided to ", { accepted: ['take part'] }, " in a football game at the ",
            { accepted: ['local'] }, " park. Football is Tom's favourite ", { accepted: ['hobby'] },
            ".\n\nThey played for a while and had a great time. Then the wind blew the ball into a tree.\n\nJake was a ",
            { accepted: ['complete beginner'] }, " at climbing, but he wanted to try. Tom waited below while Jake climbed the tree and got the ball.\n\nAfter that, they decided to ",
            { accepted: ['continue'] }, " playing for a little longer. Later, they went home because they were ", { accepted: ['bored with'] }, " playing outside.",
          ],
        },
      ],
    },

    /* ============ VOCAB CHALLENGE 2 (Parts 3, 4 & 5) ============ */
    {
      id: 'vocab2',
      label: 'Vocabulary Challenge — Parts 3, 4 & 5',
      description: 'Key words you will meet in Parts 3, 4 and 5 of the test.',
      poster: '../IMAGENES/pretest1-vocab2-poster.jpg',
      playHref: 'play-vocab2.html',
      crossLinks: [
        { label: 'Practise Test 1 — Part 3', href: 'test1.html#r3' },
        { label: 'Practise Test 1 — Part 4', href: 'test1.html#r4' },
        { label: 'Practise Test 1 — Part 5', href: 'test1.html#r5' },
        { label: 'Practise Test 2 — Part 3', href: 'test2.html#r3' },
        { label: 'Practise Test 2 — Part 4', href: 'test2.html#r4' },
        { label: 'Practise Test 2 — Part 5', href: 'test2.html#r5' },
      ],
      exercises: [
        {
          id: 'v2-1', number: '1', title: 'Exercise 1 — Match the words', navLabel: 'Ex.1 Match',
          type: 'match',
          instructions: 'Match the words with their meanings.',
          options: [
            { letter: 'A', text: 'scores you get for your school work' },
            { letter: 'B', text: 'without other people' },
            { letter: 'C', text: 'a short test or game with questions' },
            { letter: 'D', text: 'a particular part of a place' },
            { letter: 'E', text: 'the place beside a road where people walk' },
            { letter: 'F', text: 'an attraction you go on for fun' },
            { letter: 'G', text: 'an official document giving permission' },
            { letter: 'H', text: 'a door in a fence or wall' },
          ],
          pairs: [
            { left: '1. pavement', correct: 'E' },
            { left: '2. gate', correct: 'H' },
            { left: '3. ride', correct: 'F' },
            { left: '4. licence', correct: 'G' },
            { left: '5. marks', correct: 'A' },
            { left: '6. alone', correct: 'B' },
            { left: '7. quiz', correct: 'C' },
            { left: '8. area', correct: 'D' },
          ],
        },
        {
          id: 'v2-2', number: '2', title: 'Exercise 2 — Choose the correct word', navLabel: 'Ex.2 Choose word',
          type: 'mc3',
          instructions: 'Choose the correct word.',
          items: [
            { stem: '1. The castle is ___ our hotel.', correct: 'A', options: [{ letter: 'A', text: 'a long way from' }, { letter: 'B', text: 'over' }, { letter: 'C', text: 'latest' }] },
            { stem: '2. This town is ___ its beautiful beaches.', correct: 'A', options: [{ letter: 'A', text: 'famous for' }, { letter: 'B', text: 'alone' }, { letter: 'C', text: 'advanced' }] },
            { stem: "3. What is the ___ computer game you've played?", correct: 'A', options: [{ letter: 'A', text: 'latest' }, { letter: 'B', text: 'local' }, { letter: 'C', text: 'several' }] },
            { stem: '4. The ticket ___ lunch and a drink.', correct: 'A', options: [{ letter: 'A', text: 'includes' }, { letter: 'B', text: 'becomes' }, { letter: 'C', text: 'earns' }] },
            { stem: '5. I got good ___ in my English test.', correct: 'A', options: [{ letter: 'A', text: 'marks' }, { letter: 'B', text: 'levels' }, { letter: 'C', text: 'gates' }] },
            { stem: "6. This book is too difficult for me. It's for ___ students.", correct: 'A', options: [{ letter: 'A', text: 'advanced' }, { letter: 'B', text: 'local' }, { letter: 'C', text: 'alone' }] },
          ],
        },
        {
          id: 'v2-3', number: '3', title: 'Exercise 3 — Complete the expressions', navLabel: 'Ex.3 Expressions',
          type: 'gap',
          instructions: 'Use the words in the box.',
          wordBank: ['money', 'hard', 'story', 'time', 'yourself', 'to', 'for'],
          items: [
            { stem: '1. spend ___', accepted: ['time'] },
            { stem: '2. study ___', accepted: ['hard'] },
            { stem: '3. tell a ___', accepted: ['story'] },
            { stem: '4. earn ___', accepted: ['money'] },
            { stem: '5. enjoy ___', accepted: ['yourself'] },
            { stem: '6. move ___ another city', accepted: ['to'] },
            { stem: '7. be famous ___ something', accepted: ['for'] },
          ],
        },
        {
          id: 'v2-4', number: '4', title: 'Exercise 4 — Which verb goes with it?', navLabel: 'Ex.4 Verbs',
          type: 'mc3',
          instructions: 'Choose the correct option.',
          items: [
            { stem: '1. ___ money', correct: 'A', options: [{ letter: 'A', text: 'earn' }, { letter: 'B', text: 'win' }, { letter: 'C', text: 'take' }] },
            { stem: '2. ___ a story', correct: 'B', options: [{ letter: 'A', text: 'speak' }, { letter: 'B', text: 'tell' }, { letter: 'C', text: 'talk' }] },
            { stem: '3. ___ time doing something', correct: 'A', options: [{ letter: 'A', text: 'spend' }, { letter: 'B', text: 'use' }, { letter: 'C', text: 'make' }] },
            { stem: '4. ___ hard for an exam', correct: 'C', options: [{ letter: 'A', text: 'learn' }, { letter: 'B', text: 'read' }, { letter: 'C', text: 'study' }] },
            { stem: '5. ___ a doctor', correct: 'B', options: [{ letter: 'A', text: 'begin' }, { letter: 'B', text: 'become' }, { letter: 'C', text: 'start' }] },
            { stem: '6. ___ yourself at the party', correct: 'A', options: [{ letter: 'A', text: 'enjoy' }, { letter: 'B', text: 'like' }, { letter: 'C', text: 'fun' }] },
          ],
        },
        {
          id: 'v2-5', number: '5', title: 'Exercise 5 — Vocabulary in context', navLabel: 'Ex.5 In context',
          type: 'gap',
          instructions: 'Which word or expression matches each situation?',
          items: [
            { stem: '1. Emma got 9/10 in English. →', accepted: ['marks'] },
            { stem: '2. The new water park opened yesterday. A new ___ attraction. →', accepted: ['latest'] },
            { stem: '3. Leo went to the cinema without any friends. →', accepted: ['alone'] },
            { stem: '4. My family is going to live in Madrid next year. → ___ Madrid.', accepted: ['move to', 'moving to'] },
            { stem: '5. The museum ticket gives you entry to the exhibition and the guided tour. It ___ a guided tour. →', accepted: ['includes'] },
            { stem: '6. Three hours passed very quickly. Time ___ quickly. →', accepted: ['went by', 'goes by'] },
            { stem: "7. Unfortunately, we couldn't see the concert. What ___! →", accepted: ['a pity'] },
          ],
        },
        {
          id: 'v2-6', number: '6', title: 'Exercise 6 — Mini reading challenge', navLabel: 'Ex.6 Reading',
          type: 'cloze',
          instructions: 'Complete the text with words from the box. One extra word is not needed.',
          wordBank: ['area', 'famous for', 'pavement', 'ride', 'gate', 'a pity', 'a long way from'],
          extraWord: true,
          text: [
            "A Day at the Theme Park\n\nLast Saturday, we visited a theme park in our local ", { accepted: ['area'] }, ". It is ",
            { accepted: ['famous for'] }, " its enormous roller coaster.\n\nMy favourite ", { accepted: ['ride'] }, " was the water attraction. Unfortunately, the park was ",
            { accepted: ['a long way from'] }, " our hotel, so the journey took nearly an hour.\n\nWhen we arrived, there were lots of people waiting at the ",
            { accepted: ['gate'] }, ". It started raining in the afternoon, which was ", { accepted: ['a pity'] }, ", but we still had a fantastic day.",
          ],
        },
        {
          id: 'v2-7', number: '7', title: 'Exercise 7 — Grammar & vocabulary challenge', navLabel: 'Ex.7 Grammar',
          type: 'cloze',
          instructions: 'Complete the text with words from the box. One extra word is not needed.',
          wordBank: ['latest', 'includes', 'quizzes', 'levels', 'advanced', 'alone', 'marks', 'pavement'],
          extraWord: true,
          text: [
            "My English App\n\nI've downloaded the ", { accepted: ['latest'] }, " version of an English app. It ", { accepted: ['includes'] },
            " games, exercises and short ", { accepted: ['quizzes'] }, ".\n\nThere are several ", { accepted: ['levels'] }, ", from beginner to ",
            { accepted: ['advanced'] }, ", so everyone can use it.\n\nI usually study ", { accepted: ['alone'] }, ", but sometimes I practise with my classmates. My English ",
            { accepted: ['marks'] }, " have already improved!",
          ],
        },
        {
          id: 'v2-8', number: '8', title: 'Exercise 8 — Email writing', navLabel: 'Ex.8 Email',
          type: 'cloze',
          instructions: 'You have started a new activity at your local sports centre. Complete the email with words or expressions from the box. One extra word is not needed.',
          wordBank: ['local', 'complete beginner', 'enjoy myself', 'improve', 'level', 'available', 'spend time', 'marks'],
          extraWord: true,
          text: [
            "Hi Jamie,\n\nI've started tennis classes at my ", { accepted: ['local'] }, " sports centre. I'm a ", { accepted: ['complete beginner'] },
            ", but I really ", { accepted: ['enjoy myself'] }, " there and I want to ", { accepted: ['improve'] },
            ".\n\nThe classes are great because you can choose the right ", { accepted: ['level'] }, ". I usually ", { accepted: ['spend time'] },
            " practising with some other students after the class.\n\nAre you ", { accepted: ['available'] }, " next Saturday? You could come with me!\n\nSee you,\nAlex",
          ],
        },
        {
          id: 'v2-9', number: '9', title: 'Exercise 9 — A story from pictures', navLabel: 'Ex.9 Story',
          type: 'cloze',
          instructions: 'Look at the three pictures. Complete the story with the words or expressions in the box. One word is extra.',
          image: '../IMAGENES/pretest1-vocab2-story.jpg',
          wordBank: ['study hard', 'quiz', 'marks', 'alone', 'improve', 'spend time', 'a pity'],
          extraWord: true,
          text: [
            "The Big English Quiz\n\nLast week, Emma had an important English ", { accepted: ['quiz'] }, " at school. She wanted to ",
            { accepted: ['improve'] }, " her English, so she decided to ", { accepted: ['study hard'] },
            ".\n\nOn Wednesday evening, she ", { accepted: ['spent time', 'spend time'] }, " studying in her room. She worked ", { accepted: ['alone'] },
            " because she wanted to concentrate.\n\nThe next day, Emma did the test. When her teacher gave it back, Emma couldn't believe her ",
            { accepted: ['marks'] }, ". She got 10/10!\n\nShe was very happy and couldn't wait to tell her family.",
          ],
        },
      ],
    },

    /* ============ WRITING PART 6 TRAINER ============ */
    {
      id: 'writing6',
      label: 'Writing Part 6 Trainer — Email / Message',
      description: 'Language and grammar for writing an informal email or message.',
      crossLinks: [
        { label: 'Practise Test 1 — Part 6', href: 'test1.html#r6' },
        { label: 'Practise Test 2 — Part 6', href: 'test2.html#r6' },
      ],
      exercises: [
        {
          id: 'w6-ref', number: '📚', title: 'Language Bank & Grammar Bank', navLabel: 'Reference',
          type: 'reference',
          tables: [
            {
              title: '1. Useful Language Bank',
              headers: ['What do you want to do?', 'Useful language'],
              rows: [
                ['Start your email', 'Hi Sam! / Hello Alex!'],
                ['Invite someone', 'Would you like to...? / Do you want to...?'],
                ['Make a suggestion', "Let's... / We can... / How about going...?"],
                ['Say when', 'on Saturday / after school / at 5 o\'clock'],
                ['Give an opinion', "It's great! / It's really fun. / I love it."],
                ['Give a reason', "because it's fun / because you love..."],
                ['Finish your email', 'See you soon! / Write back soon! / Bye for now!'],
              ],
            },
            {
              title: '2. Grammar Bank',
              headers: ['Structure', 'Example'],
              rows: [
                ['would like + to + verb', 'Would you like to come?'],
                ['want + to + verb', 'Do you want to join us?'],
                ["Let's + verb", "Let's meet at 5."],
                ['How about + -ing', 'How about going by bus?'],
                ['can + verb', 'We can play together.'],
                ['because + sentence', "You'll like it because it's exciting."],
              ],
            },
          ],
        },
        {
          id: 'w6-1', number: '1', title: 'Activity 1 — Build the expression', navLabel: 'Act.1 Match',
          type: 'match',
          instructions: 'Match 1–5 with a–e.',
          options: [
            { letter: 'a', text: 'going to the park?' },
            { letter: 'b', text: 'to come with me?' },
            { letter: 'c', text: "it's really funny." },
            { letter: 'd', text: "meet at 4 o'clock." },
            { letter: 'e', text: 'back soon!' },
          ],
          pairs: [
            { left: '1. Would you like', correct: 'b' },
            { left: '2. How about', correct: 'a' },
            { left: "3. Let's", correct: 'd' },
            { left: "4. You'll like it because", correct: 'c' },
            { left: '5. Write', correct: 'e' },
          ],
        },
        {
          id: 'w6-2', number: '2', title: 'Activity 2 — Choose the correct form', navLabel: 'Act.2 Form',
          type: 'mc3',
          instructions: 'Choose the correct form.',
          items: [
            { stem: '1. Would you like ___ to my house?', correct: 'A', options: [{ letter: 'A', text: 'to come' }, { letter: 'B', text: 'come' }, { letter: 'C', text: 'coming' }] },
            { stem: "2. Let's ___ after school.", correct: 'B', options: [{ letter: 'A', text: 'to meet' }, { letter: 'B', text: 'meet' }, { letter: 'C', text: 'meeting' }] },
            { stem: '3. How about ___ by bike?', correct: 'C', options: [{ letter: 'A', text: 'go' }, { letter: 'B', text: 'to go' }, { letter: 'C', text: 'going' }] },
            { stem: '4. We can ___ a film.', correct: 'A', options: [{ letter: 'A', text: 'watch' }, { letter: 'B', text: 'to watch' }, { letter: 'C', text: 'watching' }] },
            { stem: "5. You'll enjoy it ___ it's really funny.", correct: 'B', options: [{ letter: 'A', text: 'but' }, { letter: 'B', text: 'because' }, { letter: 'C', text: 'so' }] },
          ],
        },
        {
          id: 'w6-3', number: '3', title: 'Activity 3 — What are you doing?', navLabel: 'Act.3 Function',
          type: 'mc3',
          instructions: 'Choose the function of the sentence.',
          items: [
            { stem: '1. "Would you like to come to the sports centre?"', correct: 'B', showLetters: false, options: [{ letter: 'A', text: 'giving a reason' }, { letter: 'B', text: 'inviting someone' }, { letter: 'C', text: 'saying goodbye' }] },
            { stem: '2. "Let\'s meet outside school at 5."', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'making an arrangement' }, { letter: 'B', text: 'giving an opinion' }, { letter: 'C', text: 'saying goodbye' }] },
            { stem: '3. "You\'ll love it because it\'s exciting."', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'giving a reason' }, { letter: 'B', text: 'inviting someone' }, { letter: 'C', text: 'saying when' }] },
            { stem: '4. "How about going on Saturday?"', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'making a suggestion' }, { letter: 'B', text: 'saying goodbye' }, { letter: 'C', text: 'giving a reason' }] },
            { stem: '5. "Write back soon!"', correct: 'B', showLetters: false, options: [{ letter: 'A', text: 'saying when' }, { letter: 'B', text: 'finishing the email' }, { letter: 'C', text: 'inviting someone' }] },
          ],
        },
        {
          id: 'w6-4', number: '4', title: 'Activity 4 — Make it better!', navLabel: 'Act.4 Rewrite',
          type: 'writing-multi',
          instructions: 'Rewrite the simple sentences using the Language Bank. Try it yourself, then check a model answer.',
          items: [
            { stem: '1. Come to the park on Saturday. →', model: 'Would you like to come to the park on Saturday?' },
            { stem: '2. It is good. →', model: "It's great because we can have fun together." },
            { stem: '3. Meet me at 4. →', model: "Let's meet at 4 o'clock." },
            { stem: '4. Come by bus. →', model: 'How about coming by bus?' },
          ],
        },
        {
          id: 'w6-5', number: '5', title: 'Activity 5 — Mini email challenge', navLabel: 'Act.5 Mini email',
          type: 'writing-multi',
          instructions: 'You want to go bowling with your friend Mia. Complete the email using the useful words: Saturday • bowling • fun • meet • 5 o\'clock • friends. Try it yourself, then check a model answer.',
          items: [
            { stem: 'Hi Mia!\nWould you like ___?', model: 'Would you like to go bowling on Saturday?' },
            { stem: "Let's ___.", model: "Let's meet at 5 o'clock." },
            { stem: "I think you'll enjoy it because ___.", model: "I think you'll enjoy it because it's really fun." },
          ],
        },
        {
          id: 'w6-final', number: '🏁', title: 'Final Practice — New Part 6 task', navLabel: 'Final task',
          type: 'writing',
          instructions: 'You are going to a school sports day on Saturday. Write an email to your English friend, Ben.',
          tip: 'In your email: invite Ben to come with you • say what sport you want to try • say where you can meet. Write 25 words or more.',
          minWords: 25,
          model: "Hi Ben!\n\nWould you like to come to the school sports day with me on Saturday?\n\nI want to try basketball.\n\nWe can meet outside school.\n\nSee you soon!\nYour name",
        },
      ],
    },

    /* ============ WRITING PART 7 TRAINER ============ */
    {
      id: 'writing7',
      label: 'Writing Part 7 Trainer — Story from Pictures',
      description: 'Language and grammar for telling a story from three pictures.',
      crossLinks: [
        { label: 'Practise Test 1 — Part 7', href: 'test1.html#r7' },
        { label: 'Practise Test 2 — Part 7', href: 'test2.html#r7' },
      ],
      exercises: [
        {
          id: 'w7-ref', number: '📚', title: 'Story Language Bank', navLabel: 'Reference',
          type: 'reference',
          tables: [
            {
              title: '1. Useful Language Bank',
              headers: ['What do you need?', 'Useful language'],
              rows: [
                ['Start the story', 'One day... / Last Saturday... / Yesterday...'],
                ['Continue', 'Then... / After that... / Next...'],
                ['Something unexpected', 'Suddenly...'],
                ['Finish', 'Finally... / In the end...'],
                ['Feelings', 'happy / excited / worried / surprised / tired'],
                ['Useful phrases', 'had a great time / went home / saw... / found... / decided to...'],
              ],
            },
            {
              title: '2. Irregular Verbs (Present → Past)',
              headers: ['Present', 'Past', 'Example'],
              rows: [
                ['go', 'went', 'They went to the park.'],
                ['see', 'saw', 'She saw a dog.'],
                ['find', 'found', 'He found the bag.'],
                ['get', 'got', 'They got the ball.'],
                ['have', 'had', 'We had a great time.'],
                ['take', 'took', 'She took an umbrella.'],
                ['come', 'came', 'Her friend came home.'],
                ['run', 'ran', 'He ran quickly.'],
                ['give', 'gave', 'She gave him the book.'],
                ['eat', 'ate', 'They ate lunch.'],
                ['buy', 'bought', 'He bought a drink.'],
                ['make', 'made', 'They made a cake.'],
              ],
            },
          ],
          tip: 'Regular verbs: play → played • walk → walked • decide → decided • visit → visited • start → started',
        },
        {
          id: 'w7-1', number: '1', title: 'Activity 1 — Present → Past', navLabel: 'Act.1 Past tense',
          type: 'writing-multi',
          instructions: 'Rewrite each sentence in the past. (Example: Emma goes to the park. → Emma went to the park.)',
          items: [
            { stem: '2. She sees a dog. →', model: 'She saw a dog.' },
            { stem: '3. The dog runs away. →', model: 'The dog ran away.' },
            { stem: '4. Emma finds its owner. →', model: 'Emma found its owner.' },
            { stem: '5. They are very happy. →', model: 'They were very happy.' },
          ],
        },
        {
          id: 'w7-2', number: '2', title: 'Activity 2 — Choose the story connector', navLabel: 'Act.2 Connectors',
          type: 'mc3',
          instructions: 'Choose the connector that makes the story logical.',
          items: [
            { stem: '1. ___, Ben was walking home.', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'One day' }, { letter: 'B', text: 'Finally' }, { letter: 'C', text: 'Suddenly' }] },
            { stem: '2. He heard a strange noise. ___, he stopped.', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'Suddenly' }, { letter: 'B', text: 'Yesterday' }, { letter: 'C', text: 'Finally' }] },
            { stem: '3. ___, he looked behind a tree.', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'Then' }, { letter: 'B', text: 'Last Saturday' }, { letter: 'C', text: 'One day' }] },
            { stem: '4. ___, he found a little kitten.', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'Finally' }, { letter: 'B', text: 'Suddenly' }, { letter: 'C', text: 'Next week' }] },
          ],
        },
        {
          id: 'w7-3', number: '3', title: 'Activity 3 — Put the story in order', navLabel: 'Act.3 Order',
          type: 'match',
          instructions: 'Choose which sentence comes 1st, 2nd, 3rd and 4th.',
          options: [
            { letter: 'A', text: 'Finally, they ate the sandwiches together.' },
            { letter: 'B', text: 'Suddenly, a bird took one of the sandwiches.' },
            { letter: 'C', text: 'Last Sunday, Amy and Jack had a picnic in the park.' },
            { letter: 'D', text: 'Jack ran after the bird and got the sandwich back.' },
          ],
          pairs: [
            { left: '1st sentence', correct: 'C' },
            { left: '2nd sentence', correct: 'B' },
            { left: '3rd sentence', correct: 'D' },
            { left: '4th sentence', correct: 'A' },
          ],
        },
        {
          id: 'w7-4', number: '4', title: 'Activity 4 — Make the sentence better', navLabel: 'Act.4 Improve',
          type: 'writing-multi',
          instructions: 'Add a useful detail or connector from the mini bank: suddenly • with her friend • near the... • because... • very excited • after that • finally',
          image: '../IMAGENES/trainer-extra/part7-picnic-story.jpg',
          items: [
            { stem: '1. The girl went to the park. →', model: 'Last Saturday, the girl went to the park with her friend.' },
            { stem: '2. She saw a dog. →', model: 'Suddenly, she saw a dog near a tree.' },
            { stem: '3. The dog ran away. →', model: 'After that, the dog ran away because it was scared.' },
          ],
        },
        {
          id: 'w7-5', number: '5', title: 'Activity 5 — Three-step story', navLabel: 'Act.5 Three-step',
          type: 'writing-multi',
          instructions: 'Complete the beginning, problem and ending of Lucy\'s story.',
          image: '../IMAGENES/trainer-extra/part7-beach-story.jpg',
          items: [
            { stem: 'Beginning: Last Sunday, Lucy ___', model: 'Last Sunday, Lucy went to the beach with her family.' },
            { stem: 'Problem: Suddenly, ___', model: 'Suddenly, the wind blew her hat away.' },
            { stem: 'Ending: Finally, ___', model: 'Finally, her brother found it near a café.' },
          ],
        },
        {
          id: 'w7-final', number: '🏁', title: 'Final Practice — New Part 7 task', navLabel: 'Final task',
          type: 'writing',
          instructions: 'Look at the three pictures. Write the story shown in the pictures.',
          tip: 'Remember: use the past tense, follow the pictures in order and connect your ideas with words such as suddenly, then and finally. Useful phrases: in the park • on the path • look around • give something back • thank someone. Write 35 words or more.',
          image: '../IMAGENES/trainer-extra/part7-bike-story.jpg',
          minWords: 35,
          model: "Last Saturday, a boy was riding his bike in the park. Suddenly, he saw a small bag on the path, so he stopped and picked it up. Then he looked around and saw an elderly woman. He gave the bag back to her. She was very happy and thanked him.",
        },
      ],
    },

    /* ============ LISTENING TRAINER — TEST 1 · PARTS 1, 2 & 3 ============ */
    {
      id: 'listening123',
      label: 'Listening Trainer — Test 1 · Parts 1, 2 & 3',
      description: 'No audios yet! First, practise the vocabulary, strategies and tips you need for KET Listening.',
      poster: '../IMAGENES/trainer-extra/listening123-vocab-poster.jpg',
      crossLinks: [
        { label: 'Practise Test 1 — Listening Part 1', href: 'test1.html#l1' },
        { label: 'Practise Test 1 — Listening Part 2', href: 'test1.html#l2' },
        { label: 'Practise Test 1 — Listening Part 3', href: 'test1.html#l3' },
      ],
      exercises: [
        {
          id: 'l123-1', number: '1', title: 'Activity 1 — Quick Vocabulary Challenge', navLabel: 'Ex.1 Odd one out',
          type: 'gap',
          instructions: 'Choose the odd one out from each group and write it in the box.',
          items: [
            { stem: '1. volleyball – hockey – bracelet – basketball →', accepted: ['bracelet'] },
            { stem: '2. necklace – earrings – glasses – geography →', accepted: ['geography'] },
            { stem: '3. library – café – shopping centre – excited →', accepted: ['excited'] },
            { stem: '4. worried – scared – excited – ticket →', accepted: ['ticket'] },
            { stem: '5. kite – guitar – picnic – homework →', accepted: ['homework'] },
          ],
        },
        {
          id: 'l123-2', number: '2', title: 'Activity 2 — Find the Wrong Clue!', navLabel: 'Ex.2 Wrong clue',
          type: 'mc3',
          instructions: 'Read each mini-dialogue and choose the final answer.',
          tip: 'In Listening Part 1, you may hear all three options. Listen for changes and the final decision.',
          items: [
            { stem: '1. What will Mia take to the park?', passage: "Mia says: I packed my basketball, but Leo says the court is closed. I thought about taking my guitar, but it is too heavy. I'll take the kite — it's windy today.", correct: 'C', options: [{ letter: 'A', text: 'basketball' }, { letter: 'B', text: 'guitar' }, { letter: 'C', text: 'kite' }] },
            { stem: "2. Where will Ben meet his cousin?", passage: "Ben says: We usually meet at the café. Today it's full, though. The library closes early, so let's meet outside the shopping centre instead.", correct: 'C', options: [{ letter: 'A', text: 'café' }, { letter: 'B', text: 'library' }, { letter: 'C', text: 'shopping centre' }] },
            { stem: '3. What present will they buy?', passage: "Girl says: The bracelet is pretty. Boy: Yes, but it's too expensive. Girl: What about the necklace? Boy: She already has one. Let's get the earrings.", correct: 'C', options: [{ letter: 'A', text: 'bracelet' }, { letter: 'B', text: 'necklace' }, { letter: 'C', text: 'earrings' }] },
          ],
        },
        {
          id: 'l123-3', number: '3', title: 'Activity 3 — KET-style Part 1 Practice', navLabel: 'Ex.3 Part 1 practice',
          type: 'mc3',
          instructions: 'Read each mini-dialogue carefully and choose A, B or C. The dialogue includes distractors, just like a real listening task.',
          items: [
            { stem: '1. What sport is Sam going to play after school?', passage: "Girl says: Are you coming to hockey practice, Sam? Sam: I can't today. I promised Max I'd try volleyball, but his team is full. So I'm going to basketball practice with my brother instead.", correct: 'C', options: [{ letter: 'A', text: 'hockey' }, { letter: 'B', text: 'volleyball' }, { letter: 'C', text: 'basketball' }] },
            { stem: '2. Where will the family have lunch?', passage: "Boy says: Are we having a picnic in the park? Mum: It might rain. We could eat at the café, but eight people will cost a lot. Let's make sandwiches and eat at home before we go out.", correct: 'C', options: [{ letter: 'A', text: 'at a café' }, { letter: 'B', text: 'in the park' }, { letter: 'C', text: 'at home' }] },
            { stem: '3. What does Lucy need to collect first?', passage: "Lucy says: I need to return my library book today. Dad: We can do that later. Your new glasses are ready at the shop, and it closes at four. Lucy: Right, let's go there first.", correct: 'A', options: [{ letter: 'A', text: 'her glasses' }, { letter: 'B', text: 'a library book' }, { letter: 'C', text: 'a guitar' }] },
            { stem: '4. What will Jack take on the trip?', passage: "Jack says: I wanted to take my guitar on the boat trip, but Dad says there's no room. My football is at school. I'll take my new kite for the beach afterwards.", correct: 'A', options: [{ letter: 'A', text: 'a kite' }, { letter: 'B', text: 'a guitar' }, { letter: 'C', text: 'a football' }] },
            { stem: '5. Which jewellery does Eva choose?', passage: "Eva says: These earrings are lovely, but I wear earrings every day. The necklace is nice too, but I really want something different. I'll buy the bracelet.", correct: 'C', options: [{ letter: 'A', text: 'earrings' }, { letter: 'B', text: 'a necklace' }, { letter: 'C', text: 'a bracelet' }] },
          ],
        },
        {
          id: 'l123-4', number: '4', title: 'Activity 4 — What Kind of Answer?', navLabel: 'Ex.4 Kind of answer',
          type: 'mc3',
          instructions: 'Read each sentence. What kind of information is missing?',
          tip: 'Use the words around the gap to predict the answer. Watch out for extra numbers and changed plans!',
          items: [
            { stem: '1. Please bring your ___.', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'object' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'price' }, { letter: 'D', text: 'time' }] },
            { stem: '2. We will meet in the ___.', correct: 'B', showLetters: false, options: [{ letter: 'A', text: 'object' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'price' }, { letter: 'D', text: 'time' }] },
            { stem: '3. The activity costs £___.', correct: 'C', showLetters: false, options: [{ letter: 'A', text: 'object' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'price' }, { letter: 'D', text: 'time' }] },
            { stem: '4. We will arrive at ___.', correct: 'D', showLetters: false, options: [{ letter: 'A', text: 'object' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'price' }, { letter: 'D', text: 'time' }] },
            { stem: '5. We are going to play ___.', correct: 'C', showLetters: false, options: [{ letter: 'A', text: 'object' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'sport' }, { letter: 'D', text: 'time' }] },
          ],
        },
        {
          id: 'l123-5', number: '5', title: 'Activity 5 — Number & Time Training', navLabel: 'Ex.5 Numbers & time',
          type: 'gap',
          instructions: 'Write the numbers in digits. (Example: two pounds fifty = £2.50)',
          image: '../IMAGENES/trainer-extra/listening123-time-money.jpg',
          items: [
            { stem: 'four pounds fifty = £', accepted: ['4.50', '£4.50'] },
            { stem: 'three pounds seventy-five = £', accepted: ['3.75', '£3.75'] },
            { stem: 'quarter past five =', accepted: ['5:15', 'quarter past five'] },
            { stem: 'half past six =', accepted: ['6:30', 'half past six'] },
            { stem: 'quarter to seven =', accepted: ['6:45', 'quarter to seven'] },
          ],
        },
        {
          id: 'l123-6', number: '6', title: 'Activity 6 — KET-style Part 2 Practice', navLabel: 'Ex.6 Part 2 practice',
          type: 'gap',
          instructions: 'Read the message about a Saturday activity. Complete 6–10 with one word, a number, a date or a time.',
          tip: 'Message from Ruby: "Hi! It\'s Ruby. About Saturday: I was going to bring my guitar, but we won\'t have time for music, so I\'m taking my basketball instead. Meet me outside the library, not the café — the café doesn\'t open until ten. At the sports centre, we can choose hockey or volleyball. I\'ve booked volleyball first because the hockey lesson is later. The ticket usually costs four pounds fifty, but students pay three seventy-five on Saturday. We\'ll leave the centre at six, and the bus takes thirty minutes, so I\'ll be back home at half past six. See you!"',
          items: [
            { stem: '6. Bring:', accepted: ['basketball'] },
            { stem: '7. Meet outside the:', accepted: ['library'] },
            { stem: '8. First activity:', accepted: ['volleyball'] },
            { stem: '9. Special ticket price: £', accepted: ['3.75'] },
            { stem: '10. Back home at:', accepted: ['6:30', 'half past six'] },
          ],
        },
        {
          id: 'l123-7', number: '7', title: 'Activity 7 — Paraphrase Match', navLabel: 'Ex.7 Paraphrase',
          type: 'match',
          instructions: 'Match each phrase with a phrase that means the same.',
          tip: 'Listen for paraphrases and contrast words like but, actually, now, only and used to.',
          options: [
            { letter: 'A', text: 'my favourite subject' },
            { letter: 'B', text: 'great / awesome' },
            { letter: 'C', text: 'feel worried' },
            { letter: 'D', text: 'not difficult' },
            { letter: 'E', text: 'very little' },
          ],
          pairs: [
            { left: '1. feel nervous', correct: 'C' },
            { left: '2. really good', correct: 'B' },
            { left: '3. the subject I like best', correct: 'A' },
            { left: '4. not hard', correct: 'D' },
            { left: '5. not a lot', correct: 'E' },
          ],
        },
        {
          id: 'l123-8', number: '8', title: 'Activity 8 — KET-style Part 3 Practice', navLabel: 'Ex.8 Part 3 practice',
          type: 'mc3',
          instructions: 'Read the conversation between Leo and Sara about an after-school club. Choose A, B or C.',
          passage: `Sara: I wasn't sure about joining the club, Leo. I thought I'd feel worried, but on the first day I was actually really excited.
Leo: Me too. The room is old and quite small, but everyone in the group is friendly.
Sara: Yes, and Mr Green is helpful too.
Leo: He is, but meeting the other students is the best thing for me.
Sara: What activity do you like most?
Leo: Basketball. You?
Sara: I used to love playing the guitar, but volleyball is my favourite now.
Leo: Do you practise at home?
Sara: About half an hour.
Leo: I do an hour. Two hours would be too much!
Sara: At my old club we hardly ever did sport.
Leo: Same for me. We did lots of music and homework activities, but very little sport.`,
          items: [
            { stem: '11. How did Sara feel on the first day of the club?', correct: 'B', options: [{ letter: 'A', text: 'worried' }, { letter: 'B', text: 'excited' }, { letter: 'C', text: 'bored' }] },
            { stem: '12. What does Leo like most about the club?', correct: 'B', options: [{ letter: 'A', text: 'the teacher' }, { letter: 'B', text: 'the other students' }, { letter: 'C', text: 'the building' }] },
            { stem: "13. Which activity is Sara's favourite now?", correct: 'C', options: [{ letter: 'A', text: 'basketball' }, { letter: 'B', text: 'guitar' }, { letter: 'C', text: 'volleyball' }] },
            { stem: '14. How long does Leo practise at home?', correct: 'B', options: [{ letter: 'A', text: '30 minutes' }, { letter: 'B', text: 'one hour' }, { letter: 'C', text: 'two hours' }] },
            { stem: '15. What did both students do less often before?', correct: 'A', options: [{ letter: 'A', text: 'sport' }, { letter: 'B', text: 'homework' }, { letter: 'C', text: 'music' }] },
          ],
        },
      ],
    },

    /* ============ LISTENING TRAINER — TEST 1 · PARTS 4 & 5 ============ */
    {
      id: 'listening45',
      label: 'Listening Trainer — Test 1 · Parts 4 & 5',
      description: 'No audios yet! First, practise the vocabulary, strategies and tips you need for KET Listening.',
      poster: '../IMAGENES/trainer-extra/listening45-vocab-poster.jpg',
      crossLinks: [
        { label: 'Practise Test 1 — Listening Part 4', href: 'test1.html#l4' },
        { label: 'Practise Test 1 — Listening Part 5', href: 'test1.html#l5' },
      ],
      exercises: [
        {
          id: 'l45-1', number: '1', title: 'Activity 1 — Question Target', navLabel: 'Ex.1 Question target',
          type: 'mc3',
          instructions: 'Look at each question. Choose the kind of answer you need to listen for.',
          tip: 'A conversation can mention several answers. Focus on the exact question and the final answer.',
          items: [
            { stem: '1. How did she get it?', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'method' }, { letter: 'B', text: 'place' }, { letter: 'C', text: 'future plan' }] },
            { stem: '2. What type of lesson was it?', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'subject or activity' }, { letter: 'B', text: 'price' }, { letter: 'C', text: 'person' }] },
            { stem: '3. Where will he stay?', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'place' }, { letter: 'B', text: 'time' }, { letter: 'C', text: 'opinion' }] },
            { stem: '4. What should they do now?', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'next action' }, { letter: 'B', text: 'previous action' }, { letter: 'C', text: 'later action' }] },
            { stem: '5. What will they do together?', correct: 'A', showLetters: false, options: [{ letter: 'A', text: 'shared activity' }, { letter: 'B', text: 'separate activity' }, { letter: 'C', text: 'transport' }] },
          ],
        },
        {
          id: 'l45-2', number: '2', title: 'Activity 2 — Distractor Detective', navLabel: 'Ex.2 Distractors',
          type: 'mc3',
          instructions: 'Read each short text and choose the final, correct answer.',
          items: [
            { stem: '1. How did Nina get the book?', passage: 'She saw it in a bookshop last week and nearly bought it. Her cousin had already ordered one for her birthday, though, so she received it as a present.', correct: 'B', options: [{ letter: 'A', text: 'she bought it' }, { letter: 'B', text: 'it was a present' }, { letter: 'C', text: 'she borrowed it' }] },
            { stem: '2. What type of lesson did Max have?', passage: "The teacher showed us how to move our fingers to make different sounds. I thought we'd sing, but we spent the whole lesson learning the guitar.", correct: 'B', options: [{ letter: 'A', text: 'singing' }, { letter: 'B', text: 'guitar' }, { letter: 'C', text: 'dance' }] },
            { stem: '3. Where will Oliver sleep on holiday?', passage: "My aunt has a house near the beach, but all the bedrooms are full. I don't want a hotel, so I'm going to camp in her garden.", correct: 'C', options: [{ letter: 'A', text: 'in a house' }, { letter: 'B', text: 'in a hotel' }, { letter: 'C', text: 'in a tent' }] },
          ],
        },
        {
          id: 'l45-3', number: '3', title: 'Activity 3 — KET-style Part 4 Practice', navLabel: 'Ex.3 Part 4 practice',
          type: 'mc3',
          instructions: 'Read each new mini-dialogue and choose A, B or C.',
          items: [
            { stem: '1. What will the girl do with the book next?', passage: "Boy: Is that the book you won as a prize?\nGirl: Yes. I finished it yesterday. I thought about taking it to the bookshop to exchange it, but my friend Mia wants to read it. I'll give it to her tomorrow.\nBoy: Nice.", correct: 'B', options: [{ letter: 'A', text: 'return it to the library' }, { letter: 'B', text: 'lend it to a friend' }, { letter: 'C', text: 'take it to a bookshop' }] },
            { stem: '2. What lesson did the boy have?', passage: "Boy: We didn't use our maths books today. Our teacher put on some music and showed us how to move our feet and arms. My legs hurt now!\nGirl: Sounds fun.", correct: 'C', options: [{ letter: 'A', text: 'music' }, { letter: 'B', text: 'maths' }, { letter: 'C', text: 'dance' }] },
            { stem: '3. Where will the girl stay?', passage: "Girl: My uncle invited us to his house, but he's having work done there. The campsite is too far from town, so Mum booked a small hotel near the beach.", correct: 'A', options: [{ letter: 'A', text: 'in a hotel' }, { letter: 'B', text: 'in a tent' }, { letter: 'C', text: "in her uncle's house" }] },
            { stem: '4. What should the students do now?', passage: "Teacher: You've finished the questions by yourselves. Before we start the next section, work with your partner and check whether your answers are the same.", correct: 'A', options: [{ letter: 'A', text: 'compare answers' }, { letter: 'B', text: 'start the next section' }, { letter: 'C', text: 'work alone' }] },
            { stem: '5. What will they do together?', passage: "Girl: I'll cycle to your house.\nBoy: Great. Mum and I are going into the forest to collect mushrooms. Come with us.\nGirl: I'd love to. I can't stay for dinner, though.", correct: 'B', options: [{ letter: 'A', text: 'cycle' }, { letter: 'B', text: 'collect mushrooms' }, { letter: 'C', text: 'have dinner' }] },
          ],
        },
        {
          id: 'l45-4', number: '4', title: 'Activity 4 — Job Vocabulary', navLabel: 'Ex.4 Job vocab',
          type: 'reference',
          tables: [
            {
              title: 'Learn these job words — you will need them in Activity 6',
              headers: ['Job', 'Meaning'],
              rows: [
                ['actor', 'be in plays'],
                ['tour guide', 'show visitors around and explain a place'],
                ['farmer', 'look after animals / work on a farm'],
                ['dance teacher', 'teach people how to dance'],
                ['cook / chef', 'prepare meals'],
                ['dentist', "look after people's teeth"],
                ['teacher', 'help students learn'],
              ],
            },
          ],
          tip: 'A hobby or a family job can be a distractor. Listen for wants to, hopes to, is going to and would like to.',
        },
        {
          id: 'l45-5', number: '5', title: 'Activity 5 — Hobby, Family Job or Future Job?', navLabel: 'Ex.5 H / F / J',
          type: 'gap',
          instructions: 'Write H (hobby/ability), F (family/background) or J (future job). (Example: She wants to be a dentist. → J)',
          items: [
            { stem: '1. Her father is a teacher.', accepted: ['f'] },
            { stem: '2. He plays the piano very well.', accepted: ['h'] },
            { stem: '3. She hopes to show visitors around her town.', accepted: ['j'] },
            { stem: '4. He loves cooking at weekends.', accepted: ['h'] },
            { stem: "5. She would like to work with people's teeth.", accepted: ['j'] },
            { stem: '6. His family keeps animals.', accepted: ['f'] },
          ],
        },
        {
          id: 'l45-6', number: '6', title: 'Activity 6 — KET-style Part 5 Practice', navLabel: 'Ex.6 Part 5 practice',
          type: 'match',
          instructions: 'Read the conversation about the jobs five friends want to do. Match 21–25 with A–H. There are three extra jobs.',
          passage: `Dad: What jobs do your friends want to do?
Girl: Maya's mum teaches at our school, and Maya is good at explaining things, but she doesn't want to be a teacher. She loves the theatre and hopes to be in plays.
Dad: What about Ben?
Girl: He helps his grandparents with their animals and wants to work on a farm when he's older.
Dad: Lucy loves music, doesn't she?
Girl: Yes, she plays the guitar, but she wants to show visitors around our town and tell them about its history.
Dad: And Harry?
Girl: He cooks all the time at home, but that's just a hobby. He'd like to help people with their teeth.
Dad: And Ella?
Girl: She's a brilliant dancer and wants to teach children to dance.`,
          options: [
            { letter: 'A', text: 'actor' },
            { letter: 'B', text: 'cook' },
            { letter: 'C', text: 'dentist' },
            { letter: 'D', text: 'farmer' },
            { letter: 'E', text: 'teacher' },
            { letter: 'F', text: 'tour guide' },
            { letter: 'G', text: 'dance teacher' },
            { letter: 'H', text: 'musician' },
          ],
          pairs: [
            { left: '21. Maya', correct: 'A' },
            { left: '22. Ben', correct: 'D' },
            { left: '23. Lucy', correct: 'F' },
            { left: '24. Harry', correct: 'C' },
            { left: '25. Ella', correct: 'G' },
          ],
        },
        {
          id: 'l45-7', number: '7', title: 'Activity 7 — Intention Language', navLabel: 'Ex.7 Intentions',
          type: 'gap',
          instructions: 'Complete each sentence with wants to, hopes to, would like to or is going to. (Example: He wants to be a teacher.) More than one answer may be accepted.',
          items: [
            { stem: '1. She ___ be in plays one day.', accepted: ['hopes to', 'wants to', 'is going to', 'would like to'] },
            { stem: '2. He ___ work with animals when he is older.', accepted: ['wants to', 'hopes to', 'is going to', 'would like to'] },
            { stem: '3. She ___ show visitors around the town.', accepted: ['is going to', 'wants to', 'hopes to', 'would like to'] },
            { stem: "4. He ___ work with people's teeth.", accepted: ['would like to', 'wants to', 'hopes to', 'is going to'] },
            { stem: '5. She ___ teach children to dance.', accepted: ['wants to', 'hopes to', 'is going to', 'would like to'] },
          ],
        },
      ],
    },
  ],
};
