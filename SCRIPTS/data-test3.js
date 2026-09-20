const TEST3 = {
  pageTitle: 'KET Trainer — Test 3',
  title: 'Test 3',
  subtitle: 'Key English Test — Reading, Writing & Listening',
  switchHref: 'test1.html',
  switchLabel: '← Back to Test 1',
  intro: `Solve each part and click "Check my answers" to see how you did, with evidence from the text for every answer. At the end of each part there's a link to the same exercise in Test 1.`,
  parts: [
    // ---------------- READING & WRITING ----------------
    {
      id: 'r1', section: 'reading', number: 'PART 1', navLabel: 'R · Part 1',
      title: 'Notices and messages', subtitle: 'Questions 1–6',
      instructions: 'For each question, choose the correct answer.',
      tip: 'The three options often repeat words from the notice, but only one matches its real purpose. Ask yourself “why was this written?” rather than matching words.',
      type: 'mc-notice',
      items: [
        {
          num: 1,
          notice: [
            { text: 'Learn to draw and paint with this fantastic app!', bold: true, center: true },
            { text: 'Perfect for beginners – kids or adults', center: true },
            { text: 'First 8 weeks free, then £3 per month', center: true },
          ],
          options: { A: 'Children will need an adult to help them with this app.', B: 'You can try this app for two months before you have to pay.', C: 'This app is only good for people who have experience of computer art.' },
          correct: 'B',
          evidence: `"First 8 weeks free" means about two months before you have to pay, matching B. Nothing says children need adult help (A), and it's "perfect for beginners" — not only for experienced artists (C).`
        },
        {
          num: 2,
          notice: [
            { text: 'Text Message', bold: true, center: true },
            { text: `Mark, I've got to finish my art project for Mrs Green tonight so I can't go to badminton club. Next week will be fine. — Steven` },
          ],
          question: 'Why did Steven send this message?',
          options: { A: 'to say Mark should finish the art project before playing badminton', B: 'to find out if Mark is going to badminton club next week', C: 'to say that he is not able to play badminton with Mark this evening' },
          correct: 'C',
          evidence: `"I've got to finish my art project... so I can't go to badminton club" — Steven is saying he can't play tonight, matching C. He isn't telling Mark to finish his own project (A) or asking about next week (B).`
        },
        {
          num: 3,
          notice: [
            { text: 'Notice', bold: true, center: true },
            { text: 'School groups booked on museum tours must wait here while their teachers see receptionist.', center: true },
          ],
          question: 'While school groups are waiting, what will their teachers do?',
          options: { A: 'speak to a member of staff', B: 'go and pay for tickets', C: 'book a tour of the museum' },
          correct: 'A',
          evidence: `"...while their teachers see receptionist" — seeing the receptionist means speaking to a member of staff (A), not paying for tickets (B) or booking a tour (C).`
        },
        {
          num: 4,
          notice: [
            { text: 'Text Message', bold: true, center: true },
            { text: `Isabel, How about swimming at the lake tomorrow morning? Mum can take us. We'll be back before dinner. Ask your mother and ring me. — Sue` },
          ],
          question: 'Why did Sue write this message?',
          options: { A: 'to suggest a day out at the lake', B: "to find out how they'll get to the lake", C: "to check how long they'll stay at the lake" },
          correct: 'A',
          evidence: `"How about swimming at the lake tomorrow morning?" — Sue is suggesting an outing. She already says how they'll travel ("Mum can take us") and when they'll be back, so she isn't asking about those things.`
        },
        {
          num: 5,
          notice: [
            { text: 'Text Message', bold: true, center: true },
            { text: `Patrick, I've finished that book I borrowed from you. Do you want me to return it now, or can I lend it to my brother? — Henry` },
          ],
          question: 'What is Henry doing in this message?',
          options: { A: "explaining why he can't return Patrick's book", B: "checking if Patrick needs his book back immediately", C: 'asking Patrick to lend him another book' },
          correct: 'B',
          evidence: `"Do you want me to return it now, or can I lend it to my brother?" — Henry is asking whether Patrick wants the book back straight away, matching B.`
        },
        {
          num: 6,
          notice: [
            { text: 'Email — To: Music students, From: Mr Boyd', bold: true, center: true },
            { text: 'Workers will finish painting the music room on Friday after school, so we can have band practice there on Monday.', center: true },
          ],
          options: { A: 'The workers are going to paint the music room next week.', B: 'The students will have a lesson in the music room on Friday.', C: 'The band can use the music room starting from Monday.' },
          correct: 'C',
          evidence: `"...finish painting... on Friday... so we can have band practice there on Monday" — the room is ready for the band from Monday, matching C. Painting finishes this Friday, not next week (A), and Friday is when it's finished, not when students use it (B).`
        },
      ],
      crossHref: 'test1.html#r1', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r2', section: 'reading', number: 'PART 2', navLabel: 'R · Part 2',
      title: 'Three people, one topic', subtitle: 'Questions 7–13',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Read all three texts first and underline each person’s key ideas. Then go question by question — the answer is usually one specific detail, not the general topic.',
      type: 'match3',
      passageTitle: 'Holidays in France',
      persons: ['Marco', 'Jing', 'Tommy'],
      personTexts: {
        Marco: `Last June my family and I went to France for our summer holiday. We spent two weeks at a campsite in the south of the country, near Marseilles. There was a beach not too far away but it was very crowded so I spent nearly all my time at the campsite pool, which was much nicer. I met some French kids there and we had a great time together. I really need to work hard on my French though, so that next time it will be easier to talk to people.`,
        Jing: `I'd always wanted to visit France, so I was really excited when my parents told me we were going to the city of Caen in the north of the country for our summer holidays last year. There were some lovely beaches not far from the city and we also went to an attractive indoor market, which sold everything from fish to flowers. It was wonderful. However, the best thing we did was a one-day cooking course. I've never cooked anything before and it was really fun!`,
        Tommy: `My family always spend our summer holidays in the south of France, and last year we stayed at a campsite on a beach near Arles. I loved swimming in the sea and in the campsite pool. I also enjoyed using my French when we went shopping at the local market. My school friends would be amazed! Because my mum and dad are artists, they wanted to visit a museum about the painter, Van Gogh. Usually I don't like museums, but actually this one was really interesting.`,
      },
      items: [
        { num: 7, question: 'Who describes a market he visited?', correct: 'B', evidence: `Jing: "we also went to an attractive indoor market, which sold everything from fish to flowers."` },
        { num: 8, question: 'Who plans to improve his spoken French?', correct: 'A', evidence: `Marco: "I really need to work hard on my French though, so that next time it will be easier to talk to people."` },
        { num: 9, question: 'Who was surprised he enjoyed a place his parents took him to?', correct: 'C', evidence: `Tommy: "Usually I don't like museums, but actually this one was really interesting" — about the Van Gogh museum his parents wanted to visit.` },
        { num: 10, question: 'Who preferred the pool to the beach?', correct: 'A', evidence: `Marco: "There was a beach not too far away but it was very crowded so I spent nearly all my time at the campsite pool, which was much nicer."` },
        { num: 11, question: 'Who made some new friends during his holiday?', correct: 'A', evidence: `Marco: "I met some French kids there and we had a great time together."` },
        { num: 12, question: 'Who learnt how to do something new on his holiday?', correct: 'B', evidence: `Jing: "the best thing we did was a one-day cooking course. I've never cooked anything before and it was really fun!"` },
        { num: 13, question: 'Who says he liked practising his French?', correct: 'C', evidence: `Tommy: "I also enjoyed using my French when we went shopping at the local market."` },
      ],
      crossHref: 'test1.html#r2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r3', section: 'reading', number: 'PART 3', navLabel: 'R · Part 3',
      title: 'Long text', subtitle: 'Questions 14–18',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Questions follow the order of the text, one per paragraph. Find the matching paragraph first, then compare it carefully with all three options before choosing.',
      type: 'mc-text',
      passageTitle: 'A fantastic business idea',
      passageParagraphs: [
        `When sisters Caroline and Isabel Bercaw were 11 and 12 years old, bath bombs (coloured balls that you add to your bath water to make it smell nice) suddenly became very popular. Caroline and Isabel often used them, especially after doing sports, and so did their friends. They all thought that the bath bombs made bath-time feel special.`,
        `Caroline and Isabel got so interested in bath bombs that they looked online and found some instructions for how to make their own. Their first ones weren't great, but they practised until their bath bombs were perfect. Then they had the clever idea of adding a surprise in the centre of each one, such as a small toy or a piece of jewellery.`,
        `When they had a big box of their new bath bombs, they agreed on a price, and then took them to a local market to find out if people wanted to buy them. The girls couldn't believe it when they sold all the bombs in just a few hours.`,
        `After that, they began to work hard on their business. They had a lot to learn, and asked for help whenever they needed it. They spoke to their teachers at school, called business owners, and of course talked to their parents. Soon, they were selling their bath bombs in shops all over their home town.`,
        `The business continued to grow and is now a big success. The girls think this is because of the little gift inside each bath bomb. This made their bombs exciting and fun to use, especially for young people.`,
      ],
      items: [
        { num: 14, question: 'What do we learn about bath bombs from the first paragraph?', options: { A: 'how often you should use them', B: 'where you can get them', C: 'why some people like them' }, correct: 'C', evidence: `"...the bath bombs made bath-time feel special" — the paragraph explains why people liked using them, not how often (A) or where to get them (B).` },
        { num: 15, question: 'When Caroline and Isabel began making bath bombs, they', options: { A: "didn't enjoy doing it.", B: "weren't very good at it.", C: "couldn't find any instructions." }, correct: 'B', evidence: `"Their first ones weren't great, but they practised until their bath bombs were perfect" — they weren't good at first, not that they disliked it (A) or lacked instructions (C — they "found some instructions" online).` },
        { num: 16, question: 'What were the girls surprised about at the market?', options: { A: 'how quickly they sold their bath bombs', B: 'how many other people were selling bath bombs', C: 'how much money customers were happy to pay for the bath bombs' }, correct: 'A', evidence: `"The girls couldn't believe it when they sold all the bombs in just a few hours" — surprised by how fast they sold out, not by competitors (B) or price (C).` },
        { num: 17, question: 'What do we learn about Caroline and Isabel in the fourth paragraph?', options: { A: 'They wanted to find a business partner to work with.', B: 'It was difficult for them to get time off school.', C: 'They got advice from lots of different people.' }, correct: 'C', evidence: `"They spoke to their teachers at school, called business owners, and of course talked to their parents" — advice from many different sources, matching C.` },
        { num: 18, question: 'What is the writer doing in the final paragraph?', options: { A: "suggesting a way the girls could make their business better", B: 'saying what will happen to the business in the future', C: "explaining why the girls' business has done well" }, correct: 'C', evidence: `"The girls think this is because of the little gift inside each bath bomb. This made their bombs exciting and fun to use" — explaining the reason for the business's success.` },
      ],
      crossHref: 'test1.html#r3', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r4', section: 'reading', number: 'PART 4', navLabel: 'R · Part 4',
      title: 'Vocabulary cloze', subtitle: 'Questions 19–24',
      instructions: 'For each question, choose the correct answer.',
      tip: 'This part tests vocabulary, not grammar. Look at the words just before and after the gap — collocations and fixed phrases usually point to the right answer.',
      type: 'cloze-mc',
      passageTitle: 'Underwater post office',
      passageParagraphs: [
        `Each year, thousands of tourists visit a small island country called Vanuatu. It's in the South Pacific Ocean and is about 1,700 km east of Australia. In 2003, Vanuatu decided to (19) ........... an unusual post office three metres under the sea in Mele Bay, which has a popular beach.`,
        `People who want to use the underwater post office first write a message on a postcard. Then they use a (20) ........... machine to cover their postcards in plastic. After that they swim to the underwater letter box to send their postcards home. All post is (21) ........... from the post office by a diver at 3 p.m. each day.`,
        `Visiting Vanuatu's underwater post office is a great (22) ........... for tourists to see some of its local sea life. Japan, Norway and Malaysia have also (23) ........... underwater post offices. Visitors who (24) ........... to these areas have a lot of fun using them.`,
      ],
      items: [
        { num: 19, options: { A: 'start', B: 'begin', C: 'open' }, correct: 'C', evidence: `You "open" a post office (a place/business) — "start/begin" don't collocate naturally with opening a building like this.` },
        { num: 20, options: { A: 'special', B: 'correct', C: 'perfect' }, correct: 'A', evidence: `A "special machine" describes a particular type of machine used for this purpose; "correct/perfect machine" don't fit here.` },
        { num: 21, options: { A: 'collected', B: 'prepared', C: 'received' }, correct: 'A', evidence: `Post is "collected" (picked up) by the diver each day — "prepared/received" don't fit the diver's action of taking the post away.` },
        { num: 22, options: { A: 'thing', B: 'way', C: 'event' }, correct: 'B', evidence: `"a great way... to see local sea life" — "way" means a method or opportunity; "thing/event" don't fit this pattern.` },
        { num: 23, options: { A: 'included', B: 'put', C: 'built' }, correct: 'C', evidence: `Countries have "built" underwater post offices (constructed them) — "included/put" don't fit "post offices" as the object.` },
        { num: 24, options: { A: 'follow', B: 'travel', C: 'explore' }, correct: 'B', evidence: `Visitors who "travel" to these areas — "travel to" is the natural collocation; "follow/explore to" aren't correct here.` },
      ],
      crossHref: 'test1.html#r4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r5', section: 'reading', number: 'PART 5', navLabel: 'R · Part 5',
      title: 'Grammar cloze', subtitle: 'Questions 25–30',
      instructions: 'For each question, write the correct answer. Write ONE word for each gap.',
      tip: 'This part tests grammar (prepositions, pronouns, articles, linkers), not vocabulary. Read the whole sentence first — never leave a gap empty, even if unsure.',
      type: 'cloze-open',
      example: 'from',
      passageParagraphs: [
        `Hi everyone,\n\nMy name's Jiaxin. I'm 13 years old and I come (0) from China. I joined this website because I'm looking (25) ............... a penfriend. I'd love to meet someone I can write to in English.`,
        `Let me tell (26) ............... some things about myself. I live in Beijing, which is (27) ............... capital city of China. My parents (28) ............... both teachers in my school. We all travel there together every morning (29) ............... bus.`,
        `My favourite hobbies are football, reading and playing computer games. (30) ............... you'd like to make friends with me, please write back soon.`,
      ],
      items: [
        { num: 25, accepted: ['for'], evidence: `"looking for a penfriend" — fixed phrase "look for" means to search for something.` },
        { num: 26, accepted: ['you'], evidence: `"tell you some things about myself" — "tell" needs an object pronoun; "you" refers to the reader.` },
        { num: 27, accepted: ['the'], evidence: `"the capital city of China" — definite article for a unique, specific place.` },
        { num: 28, accepted: ['are'], evidence: `"My parents are both teachers" — the plural subject "parents" takes "are".` },
        { num: 29, accepted: ['by'], evidence: `"travel... by bus" — fixed phrase for a method of transport.` },
        { num: 30, accepted: ['if', 'If'], evidence: `"If you'd like to make friends... please write back" — conditional "if" introduces the condition.` },
      ],
      crossHref: 'test1.html#r5', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r6', section: 'reading', number: 'PART 6', navLabel: 'W · Part 6',
      title: 'Email writing', subtitle: 'Question 31',
      instructions: '',
      tip: 'Cover all three bullet points — missing one loses marks even if the email is well written. Use informal language (contractions, simple linkers) and start/end the email appropriately.',
      type: 'writing',
      prompt: 'You would like to go to the sports centre with your friend, Sam.\nWrite an email to Sam.\nIn your email:',
      bullets: ['invite Sam to the sports centre', 'say when you would like to go', 'suggest an activity you can do there.'],
      wordCount: 'Write 25 words or more.',
      lines: 6,
      model: `Hi Sam,

Would you like to come to the sports centre with me this Saturday? We could play badminton together — it's always really fun and the courts are usually free in the morning.

Let me know soon!

Alex`,
      crossHref: 'test1.html#r6', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r7', section: 'reading', number: 'PART 7', navLabel: 'W · Part 7',
      title: 'Story from pictures', subtitle: 'Question 32',
      instructions: 'Look at the three pictures. Write the story shown in the pictures.',
      tip: 'Tell the story using the past tense and link the events with time words (first, then, after that, finally). Keep sentences simple and clear rather than complex.',
      type: 'writing-story',
      image: '../IMAGENES/test3-part7-story.jpg',
      imageAlt: 'A boy searches his bookshelf for a book, then phones a friend, then gives the book back to him at the door.',
      wordCount: 'Write 35 words or more.',
      lines: 8,
      model: `Last Saturday, a boy looked everywhere on his bookshelf for his friend's book, but he couldn't find it. Then he remembered where it was, so he phoned his friend. A little later, his friend came to his house, and the boy gave the book back to him at the door.`,
      crossHref: 'test1.html#r7', crossLabel: 'Try this same part in Test 1'
    },

    // ---------------- LISTENING ----------------
    {
      id: 'l1', section: 'listening', number: 'LISTENING 1', navLabel: 'L · Part 1',
      title: 'Short conversations', subtitle: 'Questions 1–5',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Read the question and look at the three options before you listen. The speakers often mention all three options — the correct answer is usually the final decision they agree on.',
      type: 'listening-mc',
      items: [
        { num: 1, question: 'What has the girl lost?', options: { A: 'Key', B: 'Scarf', C: 'Purse' }, correct: 'B', evidence: `Daisy: "It's my scarf. I can't find it..." — she already has her key ("I've got that, Dad"), and it's her mum's purse that's missing, not hers.` },
        { num: 2, question: 'What can the boy see from his bedroom window?', options: { A: 'City buildings', B: 'Car park', C: 'River and trees' }, correct: 'B', evidence: `Boy: "I can't see it [the city] from my bedroom — that just has a view of a big car park." Their flat overlooks the city in general, but his own bedroom only looks over the car park.` },
        { num: 3, question: 'What do they decide to eat?', options: { A: 'Pizza', B: 'Sandwiches', C: 'Salad' }, correct: 'A', evidence: `Girl: "why don't we share a pizza today?" Boy: "OK, great idea!" — they agree on pizza, not the café's sandwiches, and the boy says he'll probably have salad "tonight anyway".` },
        { num: 4, question: "Where will Calum's birthday party be?", options: { A: 'Barbecue in garden', B: 'Swimming pool / Sports centre', C: 'Café' }, correct: 'A', evidence: `Girl: "Last time I spoke to him, he wanted to have a barbecue in his garden." Boy: "Oh, yes, you're right!" — they correct the pool-party idea to a garden barbecue.` },
        { num: 5, question: 'Where will the friends meet tomorrow?', options: { A: 'Library', B: 'Cinema', C: 'Tram stop' }, correct: 'C', evidence: `Girl: "Why don't I meet you at your tram stop when you get off, instead?" Boy: "Good idea." — they meet at the tram stop, not the cinema (too busy) or the library (just nearby).` },
      ],
      crossHref: 'test1.html#l1', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l2', section: 'listening', number: 'LISTENING 2', navLabel: 'L · Part 2',
      title: 'Note completion', subtitle: 'Questions 6–10',
      instructions: 'For each question, write the correct answer in the gap. Write one word or a number or a date or a time.',
      tip: "Answers are usually single words, numbers, dates or times — check spelling and don't write more than needed. Numbers and letters are often spelled out, so listen carefully.",
      type: 'listening-gap',
      context: 'You will hear a teacher telling his class about an art competition.',
      tableTitle: 'Art Competition',
      rows: [
        { label: 'Age of students who can enter:', fixed: '11–16' },
        { label: 'Title of painting:', num: 6, accepted: ['buildings'], evidence: `Teacher: "the title for everyone's painting must be Buildings."` },
        { label: 'Final date to enter competition:', num: 7, accepted: ['18th may', 'eighteenth of may', '18 may', 'the eighteenth of may', 'the 18th of may'], evidence: `Teacher: "you must give it to her by the eighteenth" (of May) — the final date to hand in the painting.` },
        { label: 'Person who will choose the winner: Jacob', num: 8, accepted: ['fossley'], evidence: `Teacher: "His name's Jacob Fossley. His surname's spelled F-O-double S-L-E-Y."` },
        { label: "Jacob's job:", num: 9, accepted: ['photographer'], evidence: `Teacher: "he's a famous photographer."` },
        { label: 'Prize:', num: 10, accepted: ['skateboard'], evidence: `Teacher: "the prize? Not a laptop... but a skateboard!"` },
      ],
      crossHref: 'test1.html#l2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l3', section: 'listening', number: 'LISTENING 3', navLabel: 'L · Part 3',
      title: 'Longer conversation', subtitle: 'Questions 11–15',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Some questions ask about one speaker, others about what both agree on — read carefully who the question refers to. Listen for opinions and feelings, not just facts.',
      type: 'listening-mc',
      context: 'You will hear a girl, Martha, talking to her friend, Dan, about a class trip they have been on.',
      items: [
        { num: 11, question: 'Where did Dan and Martha go on their school trip this year?', options: { A: 'a river', B: 'the sea', C: 'a lake' }, correct: 'C', evidence: `Dan: "I think this year's school trip to the lake was much better than last year's to the sea, Martha." — this year was the lake; the other class went to the river.` },
        { num: 12, question: 'Which activity did Martha enjoy the most?', options: { A: 'cycling', B: 'horse riding', C: 'windsurfing' }, correct: 'A', evidence: `Martha: "I especially liked riding our bikes on those paths." Horse riding was Dan's favourite, and she'd only "like to learn" windsurfing some time.` },
        { num: 13, question: 'What was hard for Dan during the sailing lesson?', options: { A: 'remembering the instructions', B: 'working with his classmates', C: 'understanding the teacher' }, correct: 'A', evidence: `Dan: "the teacher explained everything clearly... but I kept forgetting what to do next." Everyone helped each other, so working with classmates wasn't the problem.` },
        { num: 14, question: "Why didn't Martha go swimming?", options: { A: "She doesn't like deep water.", B: "The weather wasn't warm enough.", C: "She didn't take a swimsuit with her." }, correct: 'B', evidence: `Martha: "I did [take my swimming things], but it was such a cold day." Deep water "is never a problem" for her.` },
        { num: 15, question: 'What do Martha and Dan agree about the barbecue?', options: { A: 'It was in a good place.', B: 'It finished too soon.', C: 'It was quite boring.' }, correct: 'B', evidence: `Martha: "we had to leave so early." Dan: "people weren't bored... everyone was having such a great time." Dan actually thought the spot itself was "a bit dirty".` },
      ],
      crossHref: 'test1.html#l3', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l4', section: 'listening', number: 'LISTENING 4', navLabel: 'L · Part 4',
      title: 'Five short conversations', subtitle: 'Questions 16–20',
      instructions: 'For each question, choose the correct answer.',
      tip: "Each question is a completely different, short conversation — read the new question and options before each one starts, as there's no link between them.",
      type: 'listening-mc',
      items: [
        { num: 16, question: 'You will hear a girl talking about buying a present. What kind of present does she decide to buy?', options: { A: 'clothes', B: 'food', C: 'jewellery' }, correct: 'C', evidence: `Girl: "I saw some earrings at that new market and I'm going to get them tomorrow." Her brother bought chocolates (food) and her classmate Ben bought a T-shirt (clothes) — but she's buying jewellery.` },
        { num: 17, question: 'You will hear a boy leaving a message for his mother. What does he want her to do for him?', options: { A: 'buy something', B: 'repair something', C: 'return something' }, correct: 'C', evidence: `Boy: "I must get my books back to the city library... Could you possibly do it for me?" — he wants her to return his library books.` },
        { num: 18, question: 'You will hear a boy talking to his grandmother about his day at school. What did he enjoy most?', options: { A: 'taking part in a sports event', B: 'watching a film', C: 'playing music' }, correct: 'A', evidence: `Boy: "At lunchtime we had a table-tennis competition. That was the best bit of the day." The documentary was "a bit boring" and he'd forgotten his guitar so couldn't play music.` },
        { num: 19, question: 'You will hear two friends talking about the clubs they go to after school. What kind of club do they both enjoy going to?', options: { A: 'a sports club', B: 'an art club', C: 'a music club' }, correct: 'A', evidence: `Boy: "I do that [basketball] on Wednesdays." Girl: "I go to basketball then. It's fun." — basketball (a sports club) is the one they share; his painting and choir, and her trumpet, are different clubs.` },
        { num: 20, question: 'You will hear two friends talking about a film. What didn\'t they like about the film?', options: { A: 'its length', B: 'one of its stars', C: 'the way it ended' }, correct: 'B', evidence: `Boy: "The main actor was no good." Girl: "I know. He never is." They liked that it wasn't too long, and found the ending "quite interesting".` },
      ],
      crossHref: 'test1.html#l4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l5', section: 'listening', number: 'LISTENING 5', navLabel: 'L · Part 5',
      title: 'Matching', subtitle: 'Questions 21–25',
      instructions: 'For each question, choose the correct answer.',
      tip: "There are more jobs than names, so some options won't be used — don't assume every letter is an answer. Listen for the whole idea about each friend, not just a job word mentioned in passing.",
      type: 'listening-match',
      context: 'You will hear Alice talking to her friend Jake about what some people in their class will do to help with the school play. What will each person do to help with the play?',
      example: { person: 'Alice', correct: 'G' },
      options: { A: 'be the photographer', B: 'do the make-up', C: 'make clothes', D: 'make posters', E: 'prepare the room', F: 'sell tickets', G: 'serve drinks', H: 'tidy up afterwards' },
      items: [
        { num: 21, person: 'Jake', correct: 'H', evidence: `Jake: "I wanted to help with selling tickets but there's lots of people already doing that, so I'm going to clean the room after everyone's finished." — tidying up, not selling tickets.` },
        { num: 22, person: 'Suzy', correct: 'B', evidence: `Jake: "she's decided to help with the make-up instead" (instead of taking photos).` },
        { num: 23, person: 'Dan', correct: 'A', evidence: `Alice: "So will Dan take the pictures?" Jake: "Yeah, he loves that." — Dan is the photographer.` },
        { num: 24, person: 'Lauren', correct: 'D', evidence: `Jake: "She usually makes the clothes. But this time she's doing the posters." — posters, not clothes.` },
        { num: 25, person: 'George', correct: 'E', evidence: `Jake: "He's getting the room ready for the play." — preparing the room, not selling tickets.` },
      ],
      crossHref: 'test1.html#l5', crossLabel: 'Try this same part in Test 1'
    },
  ]
};
