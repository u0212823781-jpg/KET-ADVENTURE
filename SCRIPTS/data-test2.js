const TEST2 = {
  pageTitle: 'KET Trainer — Test 2',
  title: 'Test 2',
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
            { text: 'Text to Ben', bold: true, center: true },
            { text: `Ben, I'll see you at the tennis centre later for our game. Did you say you booked for 5 or 6 o'clock? — Martine` },
          ],
          question: 'What is Martine\u2019s message saying?',
          options: { A: 'Martine is asking Ben where they are playing tennis later.', B: 'Martine is letting Ben know that she has changed her plans.', C: 'Martine is checking what time she will meet Ben.' },
          correct: 'C',
          evidence: `Martine asks "Did you say you booked for 5 or 6 o'clock?" — she's checking the time, not asking where, or saying her plans changed.`
        },
        {
          num: 2,
          notice: [
            { text: 'New in store!', bold: true, center: true },
            { text: 'Great adventure stories for young adults', center: true },
            { text: `See 'Teenage Books': 1st Floor`, center: true },
          ],
          question: 'What does this notice say?',
          options: { A: 'Some interesting books have just arrived.', B: 'There are books for teenagers on every floor.', C: 'Adventure stories are the most popular books.' },
          correct: 'A',
          evidence: `"New in store!" plus "great adventure stories" tells us new books have just arrived — not that they're on every floor or the most popular.`
        },
        {
          num: 3,
          notice: [
            { text: 'ABC Study App', bold: true, center: true },
            { text: '• Keep details in one place – including date to finish homework' },
            { text: '• No in-app advertisements' },
            { text: '• Share work with teachers and classmates' },
          ],
          question: 'The app helps students remember',
          options: { A: 'which website they should use to do their homework.', B: 'when they need to complete their homework.', C: 'who may be able to help them with their homework.' },
          correct: 'B',
          evidence: `"Keep details in one place – including date to finish homework" tells students when homework is due, matching B.`
        },
        {
          num: 4,
          notice: [
            { text: 'Greenhill Castle', bold: true, center: true },
            { text: 'Guided tour 10 a.m. (not included in ticket price)', center: true },
            { text: '12 people only', center: true },
          ],
          question: 'What does this notice say?',
          options: { A: 'There is a tour of the castle every hour.', B: 'Castle visitors have to pay extra to join a tour group.', C: 'Groups of more than 12 people must book tickets to enter the castle.' },
          correct: 'B',
          evidence: `"Guided tour 10 a.m. (not included in ticket price)" means the tour costs extra — matching B, not an hourly tour or a group-size rule for entry.`
        },
        {
          num: 5,
          notice: [
            { text: 'Email — To: Hockey Team, From: Mr Blake', bold: true, center: true },
            { text: `If you're not at the stadium at 6 p.m. today for practice, you won't be able to play in Saturday's match.` },
          ],
          question: 'What is Mr Blake doing in this email?',
          options: { A: "giving the team information about Saturday's match", B: "telling everyone in the team they must come to this evening's practice", C: 'explaining that the hockey team is going to practise in a different place today' },
          correct: 'B',
          evidence: `"If you're not at the stadium at 6 p.m. today for practice, you won't be able to play" — a warning that everyone must attend today's practice.`
        },
        {
          num: 6,
          notice: [
            { text: 'Text to Lucy', bold: true, center: true },
            { text: `Lucy, Grandma gave me the Race video game for my birthday, but I've already got it. Would you like it? I haven't used it. — Daniel` },
          ],
          question: 'Why has Daniel written this message?',
          options: { A: 'to check if Lucy has a video game he can borrow', B: 'to ask Lucy for her opinion of a video game', C: "to offer Lucy a video game he doesn't need" },
          correct: 'C',
          evidence: `"Would you like it? I haven't used it" — Daniel is offering Lucy a game he already has and doesn't need.`
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
      passageTitle: 'My museum visit',
      persons: ['Julia', 'Becky', 'Tania'],
      personTexts: {
        Julia: `Last week, I went to the Cartoon Museum with my mum. It's a small museum and we had to ask for directions because we got lost on our way there. When we finally got there, we walked around the various exhibitions, including one about the history of cartoons. The best part for me was joining a one-hour drawing class. An artist talked about his work and I did some cartoons of my own. It was a great little museum, but I saw most things, so I'm not planning to return.`,
        Becky: `I visited the Natural History Museum with my dad when I was younger, but this was my first visit on my own. I already knew about some of the stuff at the museum from lessons at school, but I was amazed at how much I enjoyed the exhibitions. My favourite one was the dinosaur exhibition. It was the busiest part of the museum and full of people, but I didn't mind that. I've been several times already, so I don't think I'll visit again.`,
        Tania: `I'm so glad my mum took me to the News Museum. It has exhibitions about the news and is different from most other museums because it's more about events than things. Unfortunately, I didn't have time to see everything, so I've already decided to go back. My favourite part was a special theatre showing short videos of interesting news reports. There was also an exhibition about photo-journalists and their work. I really enjoyed learning how they get such good pictures.`
      },
      items: [
        { num: 7, question: 'Who says that not many other museums are like the one she visited?', correct: 'C', evidence: `Tania: "it's different from most other museums because it's more about events than things."` },
        { num: 8, question: 'Who plans to return to the museum?', correct: 'C', evidence: `Tania: "I've already decided to go back."` },
        { num: 9, question: 'Who says the museum was hard to find?', correct: 'A', evidence: `Julia: "we had to ask for directions because we got lost on our way there."` },
        { num: 10, question: 'Who visited the museum alone?', correct: 'B', evidence: `Becky: "this was my first visit on my own."` },
        { num: 11, question: 'Who liked an exhibition about an interesting career?', correct: 'C', evidence: `Tania enjoyed the exhibition about photo-journalists and their work — an interesting career.` },
        { num: 12, question: 'Who says she enjoyed taking part in an activity at the museum?', correct: 'A', evidence: `Julia: "The best part for me was joining a one-hour drawing class... I did some cartoons of my own" — an activity she took part in.` },
        { num: 13, question: 'Who says than one exhibition was more popular than the others?', correct: 'B', evidence: `Becky: the dinosaur exhibition "was the busiest part of the museum and full of people."` },
      ],
      crossHref: 'test1.html#r2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r3', section: 'reading', number: 'PART 3', navLabel: 'R · Part 3',
      title: 'Long text', subtitle: 'Questions 14–18',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Questions follow the order of the text, one per paragraph. Find the matching paragraph first, then compare it carefully with all three options before choosing.',
      type: 'mc-text',
      passageTitle: 'Visiting the Kennedy Space Center in the USA',
      passageByline: '16-year-old Sophie Timms describes her school trip',
      passageParagraphs: [
        `Earlier this year, my school in England decided to send a group of four students on a trip to the Kennedy Space Center in Florida, USA. I wanted to go but knew that many other students did too. I decided to put my name on the list of interested students and then forgot all about it. A few weeks later, I couldn't believe it when I heard I was in the group.`,
        `On the 10th of March, I flew from England to Florida with my classmates Toby, Alice, Chris and our teacher Mr Scott. At the Space Center there was so much to see and do, and we all took lots of photos. Mr Scott planned each day carefully. He also asked me to keep a blog of our experiences and Toby agreed to make a short film.`,
        `I learnt so much. We met engineers and astronauts who explained a lot about space travel. It was brilliant to be around people who shared my love of space. They were really helpful and told me what I needed to do to get a job with a space project.`,
        `When I got back to school, I had to give a talk about the trip to the other students. I enjoyed talking about the Space Center and was pleased that everyone liked my photos. I found it quite hard to remember everything I learnt about the planet Mars, however! My favourite part was answering students' questions at the end. It was fun sharing my experiences with everyone.`
      ],
      items: [
        { num: 14, question: 'What do we learn about Sophie in the first paragraph?', options: { A: 'She was worried about travelling so far.', B: 'She was surprised she was chosen to go on the trip.', C: 'She was pleased that not many students wanted to go on the trip.' }, correct: 'B', evidence: `"A few weeks later, I couldn't believe it when I heard I was in the group" — she was surprised to be chosen.` },
        { num: 15, question: 'What did Sophie do during the visit?', options: { A: 'She filmed a video.', B: 'She wrote about the trip.', C: "She chose the day's activities." }, correct: 'B', evidence: `"He also asked me to keep a blog of our experiences" — Toby made the film and Mr Scott planned the days.` },
        { num: 16, question: 'What does Sophie say about the engineers she met?', options: { A: 'They discussed their next trip to space.', B: 'They gave her advice about working on a space project.', C: "They wanted to change people's ideas about space travel." }, correct: 'B', evidence: `"They... told me what I needed to do to get a job with a space project."` },
        { num: 17, question: 'What is Sophie doing in the last paragraph?', options: { A: 'describing what happened when she returned', B: "giving information about an astronaut's work", C: 'explaining how important her trip was' }, correct: 'A', evidence: `The last paragraph opens "When I got back to school, I had to give a talk..." — describing what happened on her return.` },
        { num: 18, question: 'What did Sophie enjoy most about the talk she gave?', options: { A: 'telling the students about Mars', B: 'showing the students her photos', C: "answering the students' questions" }, correct: 'C', evidence: `"My favourite part was answering students' questions at the end."` },
      ],
      crossHref: 'test1.html#r3', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r4', section: 'reading', number: 'PART 4', navLabel: 'R · Part 4',
      title: 'Vocabulary cloze', subtitle: 'Questions 19–24',
      instructions: 'For each question, choose the correct answer.',
      tip: 'This part tests vocabulary, not grammar. Look at the words just before and after the gap — collocations and fixed phrases usually point to the right answer.',
      type: 'cloze-mc',
      passageTitle: 'The white wolf',
      passageParagraphs: [
        `The white wolf, which is also (19) ............... the Arctic wolf, lives in the Canadian Arctic and northern Greenland. For hundreds of years, people around the world have hunted and killed grey wolves, but because only a few people live near the Arctic, the (20) ............... still has quite a (21) ............... number of white wolves.`,
        `White wolves are smaller than grey ones, and weigh between 45 and 85kg. They live alone or in packs with other wolves and (22) ............... many kilometres a day to find food. When they are born, wolf pups have dark fur and their eyes are blue, but these (23) ............... to a yellow-gold colour when the wolves are about 10 weeks old. (24) ..............., it is possible to find a few adult wolves with blue eyes.`
      ],
      items: [
        { num: 19, options: { A: 'described', B: 'called', C: 'known' }, correct: 'B', evidence: `"also called the Arctic wolf" — fixed expression "also called X".` },
        { num: 20, options: { A: 'part', B: 'area', C: 'piece' }, correct: 'B', evidence: `"the area still has quite a large number" — "area" refers to the region (Canadian Arctic/Greenland).` },
        { num: 21, options: { A: 'large', B: 'tall', C: 'full' }, correct: 'A', evidence: `"quite a large number of white wolves" — "large number" is the natural collocation.` },
        { num: 22, options: { A: 'travel', B: 'pass', C: 'make' }, correct: 'A', evidence: `"travel many kilometres a day to find food" — collocation "travel + distance".` },
        { num: 23, options: { A: 'take', B: 'change', C: 'become' }, correct: 'B', evidence: `"these change to a yellow-gold colour" — the eyes change colour.` },
        { num: 24, options: { A: 'Especially', B: 'Instead', C: 'However' }, correct: 'C', evidence: `"However, it is possible to find a few adult wolves with blue eyes" — a contrast with the previous sentence.` },
      ],
      crossHref: 'test1.html#r4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r5', section: 'reading', number: 'PART 5', navLabel: 'R · Part 5',
      title: 'Grammar cloze', subtitle: 'Questions 25–30',
      instructions: 'For each question, write the correct answer. Write ONE word for each gap.',
      tip: 'This part tests grammar (prepositions, pronouns, articles, linkers), not vocabulary. Read the whole sentence first — never leave a gap empty, even if unsure.',
      type: 'cloze-open',
      example: 'for',
      passageParagraphs: [
        `From: Miklos`,
        `Thank you (0) ............... agreeing to be my penpal. I would (25) ............... to improve my English and writing to you will help.`,
        `Why don't I tell you a bit about myself? I'm 12, and I live in a flat in Budapest (26) ............... my parents and my sister Adela. She is a year older (27) ............... me, and we go to (28) ............... same school.`,
        `My hobby is skiing and in winter I ski as much (29) ............... I can. My parents often take me to Dobogókő, where there is a ski centre.`,
        `(30) ............... do you enjoy doing in your free time? Write back and let me know.`
      ],
      items: [
        { num: 25, accepted: ['like', 'love'], evidence: `"I would like to improve my English" — "would like to" + infinitive.` },
        { num: 26, accepted: ['with'], evidence: `"I live in a flat in Budapest with my parents and my sister" — preposition "with" (living together).` },
        { num: 27, accepted: ['than'], evidence: `"She is a year older than me" — comparative "older than".` },
        { num: 28, accepted: ['the'], evidence: `"we go to the same school" — fixed phrase "the same + noun".` },
        { num: 29, accepted: ['as'], evidence: `"I ski as much as I can" — fixed structure "as much as".` },
        { num: 30, accepted: ['what'], evidence: `"What do you enjoy doing in your free time?" — question word "what".` },
      ],
      crossHref: 'test1.html#r5', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r6', section: 'reading', number: 'PART 6', navLabel: 'W · Part 6',
      title: 'Email writing', subtitle: 'Question 31',
      instructions: '',
      tip: "Answer every question Spencer asks — missing one loses marks even if the email is well written. Use informal language (contractions, simple linkers) and start/end the email appropriately.",
      type: 'writing',
      notice: [
        { text: 'From: Spencer', bold: true },
        { text: `I've just got a great new game on my phone. It's called SurfzUp. What's your favourite game on your phone? Why do you like it? How often do you play it?` }
      ],
      prompt: 'Read the email from your English friend, Spencer. Write an email to Spencer and answer the questions.',
      wordCount: 'Write 25 words or more.',
      lines: 6,
      model: `Hi Spencer,

My favourite game is called PuzzleQuest. I like it because it has really clever puzzles and it isn't stressful to play. I usually play it for about twenty minutes every evening before bed!

What's SurfzUp like? Is it difficult?

Speak soon,
Alex`,
      crossHref: 'test1.html#r6', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'r7', section: 'reading', number: 'PART 7', navLabel: 'W · Part 7',
      title: 'Story from pictures', subtitle: 'Question 32',
      instructions: 'Look at the three pictures. Write the story shown in the pictures.',
      tip: 'Tell the story using the past tense and link the events with time words (first, then, after that, finally). Keep sentences simple and clear rather than complex.',
      type: 'writing-story',
      pictures: [
        '[Picture 1: a group of cyclists lined up at the start of a race]',
        '[Picture 2: the cyclists riding together on the road during the race]',
        '[Picture 3: one cyclist crosses the finish line as people cheer and take a photo]'
      ],
      wordCount: 'Write 35 words or more.',
      lines: 8,
      model: `Last month, Mia took part in a cycling race with her friends. At the start, all the cyclists lined up together, waiting for the race to begin. During the race, Mia stayed close behind the leaders the whole way. Finally, she rode faster than everyone else and crossed the finish line first. Her friends cheered loudly and took a photo to remember the moment.`,
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
        { num: 1, question: 'How much did the girl pay for her trainers?', options: { A: '£47.99', B: '£51.75', C: '£75.50' }, correct: 'A', evidence: `Girl: "They were seventy-five pounds fifty but I got them for only forty-seven ninety-nine. I was lucky." — she paid £47.99.` },
        { num: 2, question: 'Which picture does the boy choose for his grandmother?', options: { A: 'flowers', B: 'the sea', C: 'a castle' }, correct: 'A', evidence: `Girl: "Those flowers are beautiful." Boy: "My grandmother loves them. I'll print that photo for her." — he picks the flowers photo.` },
        { num: 3, question: 'What are they going to do first this afternoon?', options: { A: 'play a board game', B: 'go shopping', C: 'go cycling' }, correct: 'C' },
        { num: 4, question: 'What did the girl put on the pizza yesterday?', options: { A: 'onion and mushroom', B: 'tomatoes and mushroom', C: 'onion and tomatoes' }, correct: 'C' },
        { num: 5, question: "Which girl is the boy's sister?", options: { A: 'long fair hair, glasses', B: 'short dark hair, glasses', C: 'long dark hair, no glasses' }, correct: 'B' },
      ],
      crossHref: 'test1.html#l1', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l2', section: 'listening', number: 'LISTENING 2', navLabel: 'L · Part 2',
      title: 'Note completion', subtitle: 'Questions 6–10',
      instructions: 'For each question, write the correct answer in the gap. Write one word or a number or a date or a time.',
      tip: "Answers are usually single words, numbers, dates or times — check spelling and don't write more than needed. Numbers and letters are often spelled out, so listen carefully.",
      type: 'listening-gap',
      context: "You will hear a boy called Jake leaving a message for a friend about coming to his house to play computer games.",
      tableTitle: "Computer game afternoon at Jake's house",
      rows: [
        { label: 'Day:', fixed: 'Sunday' },
        { label: "Jake's address: 51", num: 6, accepted: ['sherby'], suffix: 'Street' },
        { label: 'Travel to Jake\u2019s house by:', num: 7, accepted: ['tram'] },
        { label: 'Time to arrive:', num: 8, accepted: ['1.45', 'quarter to two', '1/4 to 2', 'quarter to 2'], suffix: 'p.m.' },
        { label: "Bring: Jake's", num: 9, accepted: ['gloves'] },
        { label: "Jake's mum's phone number:", num: 10, accepted: ['05568 129437', '05568129437'] },
      ],
      crossHref: 'test1.html#l2', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l3', section: 'listening', number: 'LISTENING 3', navLabel: 'L · Part 3',
      title: 'Longer conversation', subtitle: 'Questions 11–15',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Some questions ask about one speaker, others about what both agree on — read carefully who the question refers to. Listen for opinions and feelings, not just facts.',
      type: 'listening-mc',
      context: 'You will hear two friends, Emma and Jamie, planning a trip to a market.',
      items: [
        { num: 11, question: 'Who can take Emma and Jamie to the market?', options: { A: "Emma's mum", B: "Emma's neighbour", C: "Emma's cousin" }, correct: 'B' },
        { num: 12, question: 'When will they pick Jamie up?', options: { A: '10.15', B: '10.30', C: '10.45' }, correct: 'C' },
        { num: 13, question: 'What does Emma want to buy?', options: { A: 'jewellery', B: 'clothes', C: 'toys' }, correct: 'A' },
        { num: 14, question: 'Why does Jamie like the computer games on the market?', options: { A: "They're cheap.", B: "They're new.", C: "They're unusual." }, correct: 'C' },
        { num: 15, question: 'Emma and Jamie agree that the Moon Café', options: { A: 'has friendly staff.', B: 'serves great food.', C: 'is very noisy.' }, correct: 'B' },
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
        { num: 16, question: "You will hear two friends talking about a party. Why couldn't the girl go to it?", options: { A: 'She was feeling ill.', B: 'She needed to do her homework.', C: 'She had to look after her sister.' }, correct: 'C' },
        { num: 17, question: 'You will hear a teacher talking to a student called Danielle. What does he want Danielle to do?', options: { A: 'make her project longer than it is', B: 'try to finish her project earlier', C: 'change the subject of her project' }, correct: 'C' },
        { num: 18, question: 'You will hear a boy talking to his friend about his new school bag. Why does he like his new bag?', options: { A: "It's made of leather.", B: "It's a good size.", C: "It's a bright colour." }, correct: 'B' },
        { num: 19, question: 'You will hear a father leaving a message for his daughter. Why is he phoning his daughter?', options: { A: 'to offer her a lift', B: 'to explain a problem to her', C: 'to ask her about some directions' }, correct: 'B' },
        { num: 20, question: 'You will hear a girl talking about going to her first surfing lesson. How is she feeling about it?', options: { A: 'upset that the weather might be bad', B: "worried she won't be very good", C: "sorry that her friend can't go" }, correct: 'B' },
      ],
      crossHref: 'test1.html#l4', crossLabel: 'Try this same part in Test 1'
    },
    {
      id: 'l5', section: 'listening', number: 'LISTENING 5', navLabel: 'L · Part 5',
      title: 'Matching', subtitle: 'Questions 21–25',
      instructions: 'For each question, choose the correct answer.',
      tip: "There are more teams than names, so some options won't be used — don't assume every letter is an answer. Listen for the whole idea about each person, not just a sport word mentioned in passing.",
      type: 'listening-match',
      context: 'You will hear Carlos talking to his grandmother about the school sports teams he and his classmates are in. Which team is each person in?',
      example: { person: 'Carlos', correct: 'D' },
      options: { A: 'baseball', B: 'basketball', C: 'cycling', D: 'football', E: 'hockey', F: 'swimming', G: 'tennis', H: 'volleyball' },
      items: [
        { num: 21, person: 'Sofia', correct: 'B' },
        { num: 22, person: 'Aidan', correct: 'G' },
        { num: 23, person: 'Tina', correct: 'F' },
        { num: 24, person: 'Nick', correct: 'H' },
        { num: 25, person: 'Katrina', correct: 'C' },
      ],
      crossHref: 'test1.html#l5', crossLabel: 'Try this same part in Test 1'
    },
  ]
};
