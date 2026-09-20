const TEST4 = {
  pageTitle: 'KET Trainer — Test 4',
  title: 'Test 4',
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
            { text: 'Text Message', bold: true, center: true },
            { text: `Maria, Are you sure you picked up the right trainers after football practice today? Mine are missing, and they look exactly like yours. — Harry` },
          ],
          options: { A: "Harry thinks it's possible that Maria has his trainers.", B: 'Harry is offering to help Maria find her trainers.', C: 'Harry is telling Maria to take her trainers to football practice.' },
          correct: 'A',
          evidence: `"Are you sure you picked up the right trainers... Mine are missing, and they look exactly like yours" — Harry suspects Maria might have taken his by mistake, matching A.`
        },
        {
          num: 2,
          notice: [
            { text: 'Text Message', bold: true, center: true },
            { text: `Lizzie, Liam's party's on the same day as the concert! I've spoken to Liam but there's nothing that he can do. What a shame! — Nadia` },
          ],
          question: 'How does Nadia feel?',
          options: { A: "angry that Liam didn't help her", B: 'worried about having such a busy day', C: 'sorry that she will have to miss an event' },
          correct: 'C',
          evidence: `"What a shame!" about the clash with the concert — she's disappointed she'll miss one of the events, not angry with Liam (who couldn't do anything) or worried about being busy.`
        },
        {
          num: 3,
          notice: [
            { text: 'Notice on Website', bold: true, center: true },
            { text: 'Upload your photos by March 17th. Winners decided on April 25th. £6 to enter.', center: true },
          ],
          question: 'This message on a website gives information about',
          options: { A: 'a photograph.', B: 'an exhibition.', C: 'a competition.' },
          correct: 'C',
          evidence: `"Upload your photos... Winners decided..." — entries, a fee and winners together describe a competition, not a single photo or an exhibition.`
        },
        {
          num: 4,
          notice: [
            { text: 'Notice at Library', bold: true, center: true },
            { text: 'All library staff are in a meeting this morning. If you are returning books, leave them on the desk. To borrow books, come back later.', center: true },
          ],
          options: { A: 'There is a new way of borrowing books at the library from today.', B: 'It is not possible to take books out of the library at the moment.', C: 'Visitors are invited to a special event at the library this morning.' },
          correct: 'B',
          evidence: `"To borrow books, come back later" — borrowing isn't possible right now, matching B; returning books is still fine, and there's no new system or special visitor event.`
        },
        {
          num: 5,
          notice: [
            { text: 'Text Message', bold: true, center: true },
            { text: `Alice, I've got your science book. Wait for me outside the library at 2 o'clock and I'll give it back. It was very useful. — Darren` },
          ],
          question: 'Darren is texting Alice to let her know',
          options: { A: "where he'll meet her.", B: 'which book he needs from her.', C: "what time he'll leave the library." },
          correct: 'A',
          evidence: `"Wait for me outside the library at 2 o'clock" — he's telling her where to meet him; the book is already his to return, and he doesn't say when he'll leave.`
        },
        {
          num: 6,
          notice: [
            { text: 'Email / Screen', bold: true, center: true },
            { text: 'Adventure Park — Ticket price £20. Visit again in the next 7 days and enter free!', center: true },
          ],
          options: { A: 'The adventure park will be free for everyone to visit next week.', B: "If you pay now and return this week, you won't pay a second time.", C: 'People who have already visited can pay less next time.' },
          correct: 'B',
          evidence: `"Visit again in the next 7 days and enter free!" — paying once lets you return free within a week, matching B; it's not free for everyone (A), and the return visit is free, not just cheaper (C).`
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
      passageTitle: 'Life on a farm',
      persons: ['Harry', 'Aaron', 'Sonny'],
      personTexts: {
        Harry: `I love our farm. From every window of our farmhouse, you can see beautiful countryside for miles. Of course, it's not a perfect life. There are always machines to repair, and farmers never get time off because the animals need them every day. That's the reason my family and I can't visit other countries in the summer. But what's fantastic is that you're never bored. My parents say the farm will be mine when I'm older, and I'm really happy about that.`,
        Aaron: `Being a farmer is a hard life. There are so many jobs to do and most of them are quite boring. Also, farmers can't travel much and that's something I really want to do when I'm older. One thing I love is being up before the sun each day. That's when I feed the chickens. It's quiet then, with only the noise of the animals. When I was little, the cows looked so big. I always ran away when they came near me. It seems silly now.`,
        Sonny: `My mum and dad are farmers. They often work from early morning until late at night, and always seem so tired. They do too much really, so I try to help if I can. One thing I'm good at is helping Dad when the farm machines break — it's a great feeling to get them working again. In fact, I'd like to be a mechanic when I leave school. However, I want to continue living in the countryside because I love all the animals.`,
      },
      items: [
        { num: 7, question: 'Who was frightened of a kind of farm animal when he was younger?', correct: 'B', evidence: `Aaron: "When I was little, the cows looked so big. I always ran away when they came near me."` },
        { num: 8, question: 'Who describes the views from the farm?', correct: 'A', evidence: `Harry: "From every window of our farmhouse, you can see beautiful countryside for miles."` },
        { num: 9, question: 'Who thinks living on a farm is not very exciting?', correct: 'B', evidence: `Aaron: "There are so many jobs to do and most of them are quite boring."` },
        { num: 10, question: 'Who enjoys repairing things on the farm?', correct: 'C', evidence: `Sonny: "One thing I'm good at is helping Dad when the farm machines break — it's a great feeling to get them working again."` },
        { num: 11, question: "Who explains why it's difficult for farmers to go away on holiday?", correct: 'A', evidence: `Harry: "farmers never get time off because the animals need them every day. That's the reason my family and I can't visit other countries in the summer."` },
        { num: 12, question: "Who thinks his parents don't rest enough?", correct: 'C', evidence: `Sonny: "They often work from early morning until late at night, and always seem so tired. They do too much really."` },
        { num: 13, question: 'Who is happy to get up early in the morning?', correct: 'B', evidence: `Aaron: "One thing I love is being up before the sun each day. That's when I feed the chickens."` },
      ],
      crossHref: 'test1.html#r2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r3', section: 'reading', number: 'PART 3', navLabel: 'R · Part 3',
      title: 'Long text', subtitle: 'Questions 14–18',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Questions follow the order of the text, one per paragraph. Find the matching paragraph first, then compare it carefully with all three options before choosing.',
      type: 'mc-text',
      passageTitle: 'The teenage sisters who helped clean up their local beaches',
      passageParagraphs: [
        `Sisters Melati and Isabel live on the Indonesian island of Bali. Bali is very popular with tourists, who go there for its beautiful beaches. Unfortunately, as Melati and Isabel know, the beaches aren't always as clean as everyone would like. This is because the sea brings in rubbish, just as it does in many countries.`,
        `A few years ago, Melati and Isabel's school teacher told them about people who helped make important changes in other countries. The girls thought about changes they could make in Bali, and as they loved going to their local beach with their parents, they agreed that trying to clean it up was a good idea.`,
        `One of the biggest problems on Bali's beaches was plastic bags. Melati and Isabel learnt that some countries don't allow companies to make or sell plastic bags anymore. "We thought, 'If they can do that, well, Bali can, too,'" explains Melati. "So we started a group and called it Bye Bye Plastic Bags."`,
        `Bye Bye Plastic Bags began as a small group of people who went out and cleaned beaches. But then journalists started writing about the group, so more people heard about the idea and thought it was important. Now, plastic bags aren't allowed in Bali anymore.`,
        `People in other countries have taken the girls' idea and started their own Bye Bye Plastic Bags groups. Now, the sisters want to help those people by telling them everything they have learnt. That way, more and more young people can help make the world a cleaner place.`,
      ],
      items: [
        { num: 14, question: 'What does the writer say about the island of Bali?', options: { A: 'Some of its beaches are more popular than others.', B: 'It has a problem that lots of other countries have.', C: 'The number of tourists who visit it is going up.' }, correct: 'B', evidence: `"the sea brings in rubbish, just as it does in many countries" — the same problem as other countries, matching B.` },
        { num: 15, question: 'The sisters decided to do something about the rubbish after', options: { A: 'talking to their parents.', B: 'visiting the beach.', C: 'listening to their teacher.' }, correct: 'C', evidence: `"their school teacher told them about people who helped make important changes... The girls thought about changes they could make in Bali" — it started after the teacher's story.` },
        { num: 16, question: 'What do we find out from the third paragraph?', options: { A: "which countries don't allow plastic bags", B: 'how the girls got the idea for starting their group', C: 'which beach in Bali had the biggest problem with plastic' }, correct: 'B', evidence: `"'If they can do that, well, Bali can, too,' explains Melati. 'So we started a group...'" — explains where the idea for the group came from.` },
        { num: 17, question: 'What does the writer explain in the fourth paragraph?', options: { A: 'why people enjoyed cleaning the beaches', B: 'how news stories helped Melati and Isabel', C: 'how long it took people to stop using plastic bags' }, correct: 'B', evidence: `"journalists started writing about the group, so more people heard about the idea and thought it was important" — news stories helped spread their idea.` },
        { num: 18, question: 'What do Melati and Isabel want to do next?', options: { A: 'teach other young people how they can improve the world', B: 'try to start Bye Bye Plastic Bags groups in other countries', C: 'visit other places in the world that have problems with rubbish' }, correct: 'A', evidence: `"the sisters want to help those people by telling them everything they have learnt. That way, more and more young people can help make the world a cleaner place." — teaching/sharing what they've learnt with other young people.` },
      ],
      crossHref: 'test1.html#r3', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r4', section: 'reading', number: 'PART 4', navLabel: 'R · Part 4',
      title: 'Vocabulary cloze', subtitle: 'Questions 19–24',
      instructions: 'For each question, choose the correct answer.',
      tip: 'This part tests vocabulary, not grammar. Look at the words just before and after the gap — collocations and fixed phrases usually point to the right answer.',
      type: 'cloze-mc',
      passageTitle: 'The clearest lake in the world',
      passageParagraphs: [
        `On New Zealand's South Island there is an amazing dark blue lake. Scientists say that it has this beautiful colour because the lake water is very clear. In fact, it may be the clearest lake (19) ........... in the world. In places, the lake is 80 metres deep and it is possible to see all the way to the bottom.`,
        `The lake is called Rotomairewhenua, which is the name given to it by the Maori people who have lived there for thousands of years. It's very important to them. For this (20) ........... you can't wash anything in the lake and visitors are not (21) ........... to swim there.`,
        `The lake isn't easy to get to. There are no roads to it, and if you (22) ........... to walk there, it will (23) ........... you two days. However, it is (24) ........... to fly over the lake in a helicopter.`,
      ],
      items: [
        { num: 19, options: { A: 'everywhere', B: 'somewhere', C: 'anywhere' }, correct: 'C', evidence: `"the clearest lake anywhere in the world" — "anywhere" is used in this kind of superlative claim; "everywhere/somewhere" don't fit the pattern.` },
        { num: 20, options: { A: 'fact', B: 'reason', C: 'answer' }, correct: 'B', evidence: `"For this reason you can't wash anything..." — "reason" introduces the cause; "fact/answer" don't fit here.` },
        { num: 21, options: { A: 'allowed', B: 'liked', C: 'agreed' }, correct: 'A', evidence: `"visitors are not allowed to swim there" — permission is expressed with "allowed"; "liked/agreed" don't fit this structure.` },
        { num: 22, options: { A: 'think', B: 'suppose', C: 'decide' }, correct: 'C', evidence: `"if you decide to walk there" — making a choice uses "decide"; "think/suppose" don't fit this pattern.` },
        { num: 23, options: { A: 'spend', B: 'take', C: 'need' }, correct: 'B', evidence: `"it will take you two days" — "take" + time expresses duration; "spend/need" don't fit this exact structure with "it".` },
        { num: 24, options: { A: 'able', B: 'available', C: 'possible' }, correct: 'C', evidence: `"it is possible to fly over the lake" — "it is possible to..." is the fixed structure; "able" needs a personal subject, and "available" doesn't fit an action like this.` },
      ],
      crossHref: 'test1.html#r4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r5', section: 'reading', number: 'PART 5', navLabel: 'R · Part 5',
      title: 'Grammar cloze', subtitle: 'Questions 25–30',
      instructions: 'For each question, write the correct answer. Write ONE word for each gap.',
      tip: 'This part tests grammar (prepositions, pronouns, articles, linkers), not vocabulary. Read the whole sentence first — never leave a gap empty, even if unsure.',
      type: 'cloze-open',
      example: 'you',
      passageParagraphs: [
        `From: Lilia | To: Elena\nElena, Are (0) you free any day during the school holiday next week? I haven't finished the school art project, so my mum has offered to take me (25) ............... the new fashion museum. She says it'll help me with ideas. Do you want to come? We can pick you up, if you like. I'm free on Wednesday, Thursday and Friday. (26) ............... about you?`,
        `From: Elena | To: Lilia\nLilia, That's (27) ............... great idea. I'd love to come (28) ............... you and your mum. I'm free on Friday. (29) ............... you give me your mum's phone number? My mum wants to talk to her (30) ............... the plans. Thanks, Elena.`,
      ],
      items: [
        { num: 25, accepted: ['to'], evidence: `"take me to the new fashion museum" — "to" for the destination after "take someone".` },
        { num: 26, accepted: ['what', 'how'], evidence: `"What about you?" (or "How about you?") — asking the other person the same question back.` },
        { num: 27, accepted: ['a'], evidence: `"That's a great idea" — indefinite article before a singular countable noun.` },
        { num: 28, accepted: ['with'], evidence: `"come with you and your mum" — "with" for accompanying someone.` },
        { num: 29, accepted: ['can', 'will', 'could', 'would'], evidence: `"Can you give me your mum's phone number?" — modal verb for a polite request.` },
        { num: 30, accepted: ['about'], evidence: `"talk to her about the plans" — fixed phrase "talk about" something.` },
      ],
      crossHref: 'test1.html#r5', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r6', section: 'reading', number: 'PART 6', navLabel: 'W · Part 6',
      title: 'Email writing', subtitle: 'Question 31',
      instructions: '',
      tip: 'Answer every question Morgan asks — missing one loses marks even if the email is well written. Use informal language (contractions, simple linkers) and start/end the email appropriately.',
      type: 'writing',
      notice: [
        { text: 'From: Morgan', bold: true },
        { text: `I love doing sport! What's your favourite sport? Why do you like doing it? Where do you do it?` },
      ],
      prompt: 'Read the email from your English friend, Morgan. Write an email to Morgan and answer the questions.',
      wordCount: 'Write 25 words or more.',
      lines: 6,
      model: `Hi Morgan,

My favourite sport is basketball. I like it because it's fast and really fun to play with my friends, and it keeps me fit too. I usually play it at the sports centre near my house on Saturdays.

Bye for now!`,
      crossHref: 'test1.html#r6', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r7', section: 'reading', number: 'PART 7', navLabel: 'W · Part 7',
      title: 'Story from pictures', subtitle: 'Question 32',
      instructions: 'Look at the three pictures. Write the story shown in the pictures.',
      tip: 'Tell the story using the past tense and link the events with time words (first, then, after that, finally). Keep sentences simple and clear rather than complex.',
      type: 'writing-story',
      image: '../IMAGENES/test4-part7-story.png',
      imageAlt: 'Pending: add the three story pictures for Test 4 Part 7 here.',
      wordCount: 'Write 35 words or more.',
      lines: 8,
      model: `[Pendiente: Alina tiene que compartir las tres imágenes de esta historia (o describirlas) para poder escribir el modelo de respuesta real.]`,
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
        { num: 1, question: 'What did the girl buy today?', options: { A: 'Shoes', B: 'Sweater', C: 'Dress' }, correct: 'C', evidence: `Girl: "I got this cool dress. I think I'll wear it for Tanya's barbecue party this afternoon." — she bought a dress; the sweater is an old one, and she didn't find shoes she liked.` },
        { num: 2, question: 'What will the weather be like this afternoon?', options: { A: 'Rain', B: 'Wind', C: 'Sun' }, correct: 'B', evidence: `Boy: "it's going to be really windy, so maybe not [football]." — windy this afternoon; rain isn't expected ("going to stay dry"), and sun is only predicted "again tomorrow".` },
        { num: 3, question: 'Where did the girl stay on her holiday?', options: { A: 'House / Guest house', B: 'Camping / Tents', C: 'Hotel' }, correct: 'A', evidence: `Girl: "Mum wanted to stay in a big hotel this time... so we booked a guest house with a nice garden instead." — a guest house, not a hotel or camping (Dad's usual favourite).` },
        { num: 4, question: 'Which homework has the boy finished?', options: { A: 'Maths', B: 'Geography', C: 'History' }, correct: 'C', evidence: `Boy: "did all the history exercise and I've almost finished the maths." — history is finished; geography hasn't really been started and maths is only "almost" done.` },
        { num: 5, question: 'What did the girl do at the weekend?', options: { A: 'Badminton', B: 'Sailing', C: 'Swimming' }, correct: 'A', evidence: `Girl: "I won a game of badminton that I played with my sister!" — badminton; swimming wasn't possible (a competition at the pool) and sailing was the boy's activity.` },
      ],
      crossHref: 'test1.html#l1', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l2', section: 'listening', number: 'LISTENING 2', navLabel: 'L · Part 2',
      title: 'Note completion', subtitle: 'Questions 6–10',
      instructions: 'For each question, write the correct answer in the gap. Write one word or a number or a date or a time.',
      tip: "Answers are usually single words, numbers, dates or times — check spelling and don't write more than needed. Numbers and letters are often spelled out, so listen carefully.",
      type: 'listening-gap',
      context: 'You will hear a teacher telling her students about a school trip to a glass factory.',
      tableTitle: 'Glass Factory Trip',
      rows: [
        { label: 'Date:', fixed: '21 June' },
        { label: 'Factory famous for:', num: 6, accepted: ['bowls'], suffix: 'made of glass', evidence: `Teacher: "this one is well-known for its bowls."` },
        { label: 'Factory advert shows drawing of:', num: 7, accepted: ['dolphin'], evidence: `Teacher: "the drawing which the factory uses for its adverts. It's a dolphin."` },
        { label: 'Leave school at:', num: 8, accepted: ['8.45', 'eight forty-five', '8:45', 'eight forty five'], suffix: 'a.m.', evidence: `Teacher: "the coach goes at eight forty-five."` },
        { label: 'Take:', num: 9, accepted: ['notebook', 'notebooks', 'note-book', 'note-books', 'note book', 'note books'], evidence: `Teacher: "please bring your notebooks."` },
        { label: 'Surname of teacher to contact:', num: 10, accepted: ['stapely'], evidence: `Teacher: "contact the new art teacher, Mr Stapely, who's planning everything. That's spelled S-T-A-P-E-L-Y."` },
      ],
      crossHref: 'test1.html#l2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l3', section: 'listening', number: 'LISTENING 3', navLabel: 'L · Part 3',
      title: 'Longer conversation', subtitle: 'Questions 11–15',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Some questions ask about one speaker, others about what both agree on — read carefully who the question refers to. Listen for opinions and feelings, not just facts.',
      type: 'listening-mc',
      context: 'You will hear a brother and sister, Mark and Jessica, talking about a music festival they went to for the weekend.',
      items: [
        { num: 11, question: 'How did they get to the festival?', options: { A: 'by coach', B: 'by car', C: 'by train' }, correct: 'B', evidence: `Mark: "I'm glad Mum could drive us there." Jessica: "it was a long way from a railway station and buses are very slow." — they went by car; train and coach weren't used.` },
        { num: 12, question: 'Where did they stay at the festival?', options: { A: 'on a campsite', B: 'in a small hotel', C: "in a family member's home" }, correct: 'C', evidence: `Jessica: "I liked it at Uncle Jim's flat." Mark: "You're right. It was nice — and better than a hotel." — they stayed at their uncle's home; camping was only suggested for "next time".` },
        { num: 13, question: "What didn't Mark like about the festival?", options: { A: 'There were too many people.', B: 'It was very expensive.', C: 'The weather was bad.' }, correct: 'A', evidence: `Mark: "it was cheaper than most festivals. It was just too crowded for me." — too many people; the weather was good ("we were lucky") and it wasn't expensive.` },
        { num: 14, question: 'What do they agree about the singer called Amelia?', options: { A: 'Her songs were unusual.', B: 'She looked wonderful.', C: 'She was their favourite musician.' }, correct: 'B', evidence: `Mark: "she was so pretty." Jessica: "she was beautiful and sang well." — they agree she looked wonderful; only Jessica calls her a favourite, and Mark actually preferred "that last band".` },
        { num: 15, question: 'What did Jessica buy from the festival shop?', options: { A: 'something to eat', B: 'something to read', C: 'something to wear' }, correct: 'C', evidence: `Mark: "I got chocolates for Mum. And a scarf for me." Jessica: "I got one of those too." — Jessica also bought a scarf (something to wear), not the book Mark didn't buy, or food.` },
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
        { num: 16, question: "You will hear two friends talking about a visitor who gave a talk at their school. What is the visitor's job?", options: { A: 'a tour guide', B: 'a musician', C: 'a photographer' }, correct: 'A', evidence: `Girl: "he meets so many different people and shows them round really interesting places." — a tour guide; the photographer is just mentioned as another travelling job, and the musician was the previous, boring speaker.` },
        { num: 17, question: 'You will hear two friends talking about a book. What is the girl reading about?', options: { A: 'an unusual animal', B: 'a famous musician', C: 'an exciting journey' }, correct: 'C', evidence: `Girl: "The story's about a teenage girl who travelled across Africa on a motorbike." — an exciting journey; the lion is just the cover picture, and becoming a singer is only a possible future.` },
        { num: 18, question: 'You will hear a teacher talking to her students. What does she want them to do?', options: { A: 'tidy the classroom', B: 'copy something into their books', C: 'get ready to go home' }, correct: 'A', evidence: `Teacher: "collect the books... those pens should be on my desk... if you notice any bits of paper on the floor, put them in the bin." — tidying the classroom, before they start their essays.` },
        { num: 19, question: 'You will hear two friends talking about some homework. How does the girl feel about her homework?', options: { A: 'pleased with the information she got', B: "worried that she hasn't written enough", C: 'sure that her teacher will like it' }, correct: 'A', evidence: `Girl: "I found out some things that I'm hoping Mrs Williams will enjoy." — pleased with what she found, though only "hoping" the teacher will like it, not sure.` },
        { num: 20, question: 'You will hear a teacher talking to his class about a book. Why is he talking to his class about the book?', options: { A: 'One of them has lost it.', B: "They're going to read it together.", C: 'The writer is someone they probably know.' }, correct: 'C', evidence: `Teacher: "Mrs Lam was a teacher here, remember? Well, now she's an author." — the writer used to be their teacher; the book doesn't belong to a student and they aren't told to read it together.` },
      ],
      crossHref: 'test1.html#l4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l5', section: 'listening', number: 'LISTENING 5', navLabel: 'L · Part 5',
      title: 'Matching', subtitle: 'Questions 21–25',
      instructions: 'For each question, choose the correct answer.',
      tip: "There are more opinions than places, so some options won't be used — don't assume every letter is an answer. Listen for the whole opinion about each room, not just one word.",
      type: 'listening-match',
      context: "You will hear Anna talking to her mother about her friend Sophie's house. What does Anna think of each place in Sophie's house?",
      example: { person: 'garden', correct: 'A' },
      options: { A: 'beautiful', B: 'big', C: 'cold', D: 'comfortable', E: 'dark', F: 'modern', G: 'tidy', H: 'unusual' },
      items: [
        { num: 21, person: "Sophie's bedroom", correct: 'G', evidence: `Anna: "Sophie's different from me — she puts all her books on the shelves and her clothes in the cupboard." — everything in its place, matching "tidy".` },
        { num: 22, person: "Leo's bedroom", correct: 'B', evidence: `Anna: "He's got lots of space, but I didn't think his room was very comfortable." — big (lots of space), but not comfortable.` },
        { num: 23, person: 'kitchen', correct: 'C', evidence: `Anna: "We didn't stay in there long, because it wasn't very warm." — cold; a more modern kitchen is only a future plan, not Anna's current opinion.` },
        { num: 24, person: 'living room', correct: 'D', evidence: `Anna: "I thought the chairs were really nice to sit in, and the carpet's soft... this one isn't [dark]." — comfortable; the dark living room was in their old house.` },
        { num: 25, person: 'bathroom', correct: 'H', evidence: `Anna: "I've never seen one like that before. The colours are so strange." — unusual.` },
      ],
      crossHref: 'test1.html#l5', crossLabel: 'Try this same part in Test 1'
    },
  ]
};
