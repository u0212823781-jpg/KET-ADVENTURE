const TEST1 = {
  pageTitle: 'KET Trainer — Test 1',
  title: 'Test 1',
  subtitle: 'Key English Test — Reading, Writing & Listening',
  switchHref: 'test2.html',
  switchLabel: 'Go to Test 2 →',
  intro: `Solve each part and click "Check my answers" to see how you did, with evidence from the text for every answer. At the end of each part there's a link to the same exercise in Test 2.`,
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
            { text: 'Bored with computer games? Looking for a different hobby?', center: true },
            { text: 'Join us at chess club!', bold: true, center: true },
            { text: 'Fridays @ 16.00 in room 16.', center: true },
          ],
          question: 'The club wants to find people who',
          options: { A: 'like playing a variety of games.', B: 'are interested in trying something new.', C: 'have experience of playing computer chess.' },
          correct: 'B',
          evidence: '“Bored with computer games? Looking for a different hobby?” is aimed at people wanting something new — not people who already play lots of games (A) or already know chess (C).'
        },
        {
          num: 2,
          notice: [
            { text: 'Message to Zoe', bold: true, center: true },
            { text: `Zoe, have you got an extra T-shirt I can borrow for gym class? I've forgotten mine and it's too late to go back home. — Tilda` },
          ],
          question: 'Why has Tilda sent this message?',
          options: { A: 'to find out if Zoe is able to lend her something', B: 'to ask if Zoe can collect something from the gym', C: 'to check if Zoe has remembered to bring the right sports kit' },
          correct: 'A',
          evidence: `Tilda asks "have you got an extra T-shirt I can borrow" — she's asking if Zoe can lend her something, not asking her to collect or check anything.`
        },
        {
          num: 3,
          notice: [
            { text: `BREAD ISN'T GOOD FOR DUCKS!`, bold: true, center: true },
            { text: 'Bird food available at visitor centre – £1 per bag', center: true },
          ],
          question: 'What is this sign saying?',
          options: { A: 'Bird food costs less at the visitor centre than at other places.', B: 'The visitor centre wants more people to give food to the ducks.', C: 'Visitors must be careful about the kind of food they give to the ducks.' },
          correct: 'C',
          evidence: `"Bread isn't good for ducks!" plus "bird food available" tells visitors to choose the right food — it's not about price (A) or getting more people to feed them (B).`
        },
        {
          num: 4,
          notice: [
            { text: 'Email — To: Josh, From: Ms. Wilson', bold: true, center: true },
            { text: `Josh, sorry to hear you're not well. If you aren't able to play in the big match next week, let me know soon. — Ms. Wilson` },
          ],
          question: 'What is Ms. Wilson saying to Josh?',
          options: { A: "I'm afraid I haven't decided if you can take part in the competition yet.", B: "It's a shame you missed the last match, but I'm glad you're feeling better.", C: "You must contact me if your health doesn't improve over the next few days." },
          correct: 'C',
          evidence: `"If you aren't able to play... let me know soon" means Josh must contact her if he's still not well — matching option C.`
        },
        {
          num: 5,
          notice: [
            { text: 'Text to Mum', bold: true, center: true },
            { text: `Mum, the 4 p.m. bus is delayed and won't arrive for another hour. If I can't get a lift with anyone, I'll walk home. — Eric` },
          ],
          question: 'Why has Eric sent his mum this message?',
          options: { A: 'to explain why he missed the bus', B: 'to tell her his plans for getting home', C: 'to find out if she can give him a lift' },
          correct: 'B',
          evidence: `Eric explains what he'll do next (get a lift or walk) — he's telling her his plan, not asking for a lift or saying he missed a bus.`
        },
        {
          num: 6,
          notice: [
            { text: 'Email — From: Mrs Brown, To: All students, Subject: Theatre trip', bold: true, center: true },
            { text: `Anyone who's already on the list for this trip but hasn't paid, please give me £15.00 by 3 p.m.` },
          ],
          question: 'What is this email saying?',
          options: { A: 'There are a few spaces left if anyone wants to go on the trip.', B: "If you've got a place on the trip, you need to pay today.", C: 'Students who have paid for the trip should come to a meeting at 3 p.m.' },
          correct: 'B',
          evidence: `"Already on the list... please give me £15.00 by 3 p.m." means students who have a place must pay today — matching B.`
        },
      ],
      crossHref: 'test2.html#r1', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r2', section: 'reading', number: 'PART 2', navLabel: 'R · Part 2',
      title: 'Three people, one topic', subtitle: 'Questions 7–13',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Read all three texts first and underline each person’s key ideas. Then go question by question — the answer is usually one specific detail, not the general topic.',
      type: 'match3',
      passageTitle: 'Studying a foreign language',
      persons: ['Frank', 'Marc', 'Ivan'],
      personTexts: {
        Frank: `At the moment, I'm learning Arabic because I'd like to be a journalist one day, and being able to speak other languages is important for this job. It wasn't possible to learn Arabic at school, but a friend of mine knew a woman who could give me lessons and now she comes to my house twice a week. It was difficult at first because I was a complete beginner. But I worked hard and after just six months I was able to speak and write the language quite well, which I'm really happy about.`,
        Marc: `I've lived in lots of different countries because of my dad's career, so I've had to learn several different languages. I seem to learn them quite easily. The last place I lived was Thailand. I'm still studying the language so I can continue to chat with my Thai classmates now I'm back in my home country. I've downloaded a new app with exercises in Thai, and I can't wait to use it each morning because it's so much fun.`,
        Ivan: `My mum comes from Russia and her parents still live there. We often stay with them during the school holidays, but unfortunately I didn't learn Russian when I was little so talking to them has always been hard. After our last trip I decided it was time for me to learn the language and I found a course at my local college – we work hard but the teacher makes us laugh. I think that's why I never forget any of the vocabulary she teaches us.`
      },
      items: [
        { num: 7, question: "Who says he's pleased about how quickly he improved?", correct: 'A', evidence: `Frank: "after just six months I was able to speak and write the language quite well, which I'm really happy about."` },
        { num: 8, question: 'Who is learning a foreign language without a teacher?', correct: 'B', evidence: `Marc uses an app by himself ("I've downloaded a new app with exercises in Thai") — no teacher is mentioned, unlike Frank (has lessons) or Ivan (has a course).` },
        { num: 9, question: 'Who needs to know a foreign language for the career he wants?', correct: 'A', evidence: `Frank: "I'd like to be a journalist one day, and being able to speak other languages is important for this job."` },
        { num: 10, question: 'Who says he remembers all the new words he learns in his language lessons?', correct: 'C', evidence: `Ivan: "I never forget any of the vocabulary she teaches us."` },
        { num: 11, question: 'Who is practising a language so he can have conversations with friends?', correct: 'B', evidence: `Marc: "I'm still studying the language so I can continue to chat with my Thai classmates."` },
        { num: 12, question: 'Who is studying a foreign language for family reasons?', correct: 'C', evidence: `Ivan learns Russian because his mum's family lives there and he wants to talk to them.` },
        { num: 13, question: 'Who says he has lots of experience learning new languages?', correct: 'B', evidence: `Marc: "I've had to learn several different languages... I seem to learn them quite easily."` },
      ],
      crossHref: 'test2.html#r2', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r3', section: 'reading', number: 'PART 3', navLabel: 'R · Part 3',
      title: 'Long text', subtitle: 'Questions 14–18',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Questions follow the order of the text, one per paragraph. Find the matching paragraph first, then compare it carefully with all three options before choosing.',
      type: 'mc-text',
      passageTitle: 'My first trip to Hollywood, USA',
      passageByline: 'Jelica Shaw talks about a family holiday to Los Angeles',
      passageParagraphs: [
        `This summer, my parents and I had a holiday in Hollywood, an area in Los Angeles famous for its filmmaking. My mum and dad are journalists and sometimes work there, so they know the city really well.`,
        `Our hotel was near the Hollywood Walk of Fame, a famous pavement that has over 2,600 metal stars with the names of famous actors and singers on them. It's very popular with visitors. We walked along it every day, and I'm glad about that, as there were so many names to read!`,
        `The second day, we went on a tour at Universal Studios. This is a film studio where famous actors work, and it also has some exciting rides. The rides were good, but visiting the places where movies such as Jurassic Park were made was my favourite part of the tour.`,
        `On the third day, we went on the Rodeo Drive Tour. It's a bus tour to see famous people's houses. Actually, most of the homes were a really long way from the road or behind trees or gates, which is a pity. But the guide was so funny that I still enjoyed myself and the time went by very quickly.`,
        `For our final night, we watched a film at an outdoor theatre called the Hollywood Bowl. The Sound of Music is my dad's favourite film so I know the story and songs quite well, but I couldn't believe 17,500 other people wanted to watch it too. I had no idea it was so popular! It was certainly an experience I'll never forget.`
      ],
      items: [
        { num: 14, question: "What do we learn about Jelica's parents in the first paragraph?", options: { A: 'They have been to Hollywood many times.', B: "They don't have a summer holiday every year.", C: 'They have careers in the film business.' }, correct: 'C', evidence: `"My mum and dad are journalists and sometimes work there" — they have careers in the film/media business.` },
        { num: 15, question: 'What does Jelica say about the Hollywood Walk of Fame?', options: { A: 'She thought it was too crowded.', B: 'She was pleased she visited it more than once.', C: 'She liked being able to see it from her hotel room.' }, correct: 'B', evidence: `"We walked along it every day, and I'm glad about that" — pleased she went more than once.` },
        { num: 16, question: 'What did Jelica like most about visiting Universal Studios Hollywood?', options: { A: 'going on all the rides', B: 'meeting some famous actors', C: 'seeing where films were made' }, correct: 'C', evidence: `"visiting the places where movies such as Jurassic Park were made was my favourite part of the tour."` },
        { num: 17, question: 'What does Jelica say about the Rodeo Drive Tour?', options: { A: 'The bus ride took too long.', B: 'The guide was a bit boring.', C: 'The homes were quite hard to see.' }, correct: 'C', evidence: `"most of the homes were a really long way from the road or behind trees or gates" — hard to see.` },
        { num: 18, question: 'What was Jelica surprised about at the Hollywood Bowl?', options: { A: 'which film was shown', B: 'the number of people at the film', C: 'the fact that people sang during the film' }, correct: 'B', evidence: `"I couldn't believe 17,500 other people wanted to watch it too... I had no idea it was so popular!" — surprised by the number of people.` },
      ],
      crossHref: 'test2.html#r3', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r4', section: 'reading', number: 'PART 4', navLabel: 'R · Part 4',
      title: 'Vocabulary cloze', subtitle: 'Questions 19–24',
      instructions: 'For each question, choose the correct answer.',
      tip: 'This part tests vocabulary, not grammar. Look at the words just before and after the gap — collocations and fixed phrases usually point to the right answer.',
      type: 'cloze-mc',
      passageTitle: 'Mark Twain',
      passageParagraphs: [
        `The American writer Mark Twain was born in 1835. At the age of four, the family (19) ........... to Hannibal, a town on the Mississippi River. When he was a child, he (20) ........... most of his free time chatting to the people who worked on the river. He loved hearing the stories they (21) ........... about their lives.`,
        `When he was only 11, Mark began earning money for his family. He worked in a printing company and wrote articles for the local newspaper, but what he really wanted to do was to (22) ........... a river boat captain. He studied (23) ........... for his licence and then worked for many years on the river.`,
        `Lots of the ideas for Twain's most (24) ........... book, The Adventures of Huckleberry Finn, came from his life on the Mississippi.`
      ],
      items: [
        { num: 19, options: { A: 'left', B: 'moved', C: 'got' }, correct: 'B', evidence: `"the family moved to Hannibal" — describes relocating to a town; "left/got to" don't fit the pattern.` },
        { num: 20, options: { A: 'spent', B: 'took', C: 'used' }, correct: 'A', evidence: `"spent most of his free time chatting" — "spend + time" is the natural collocation.` },
        { num: 21, options: { A: 'spoke', B: 'said', C: 'told' }, correct: 'C', evidence: `"the stories they told about their lives" — you tell a story (fixed collocation).` },
        { num: 22, options: { A: 'become', B: 'start', C: 'begin' }, correct: 'A', evidence: `"wanted to do was to become a river boat captain" — become + role/job is the correct pattern.` },
        { num: 23, options: { A: 'long', B: 'hard', C: 'right' }, correct: 'B', evidence: `"He studied hard for his licence" — "hard" describes effort while studying.` },
        { num: 24, options: { A: 'excellent', B: 'famous', C: 'known' }, correct: 'B', evidence: `"Twain's most famous book" — a well-known book; "excellent/known" don't fit as naturally with "most".` },
      ],
      crossHref: 'test2.html#r4', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r5', section: 'reading', number: 'PART 5', navLabel: 'R · Part 5',
      title: 'Grammar cloze', subtitle: 'Questions 25–30',
      instructions: 'For each question, write the correct answer. Write ONE word for each gap.',
      tip: 'This part tests grammar (prepositions, pronouns, articles, linkers), not vocabulary. Read the whole sentence first — never leave a gap empty, even if unsure.',
      type: 'cloze-open',
      example: 'to',
      passageParagraphs: [
        `Welcome (0) ............... my blog! Each week, I give you my opinion about (25) ............... latest computer game that I've tried. Today's post is about a brilliant game called MathsFun. (26) ............... is very easy to play and includes exercises and quizzes.`,
        `(27) ............... are two reasons why I like this computer game. First, I can choose to play alone or (28) ............... friends. Second, any level of player, from beginner to advanced, can play.`,
        `MathsFun has helped me a lot. A month (29) ..............., I wasn't getting good marks at school, but now I am. (30) ............... you want to improve too, you should try this game.`
      ],
      items: [
        { num: 25, accepted: ['the'], evidence: `"about the latest computer game" — "the" refers to a specific, most recent game.` },
        { num: 26, accepted: ['it', 'this'], evidence: `"It is very easy to play", referring back to MathsFun — pronoun "it" (or "this").` },
        { num: 27, accepted: ['there'], evidence: `"There are two reasons why..." — existential "there is/are" structure.` },
        { num: 28, accepted: ['with'], evidence: `"play alone or with friends" — preposition "with" for accompanying someone.` },
        { num: 29, accepted: ['ago', 'back'], evidence: `"A month ago, I wasn't getting good marks" — time expression "ago" (or "back").` },
        { num: 30, accepted: ['if'], evidence: `"If you want to improve too, you should try this game" — conditional "if".` },
      ],
      crossHref: 'test2.html#r5', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r6', section: 'reading', number: 'PART 6', navLabel: 'W · Part 6',
      title: 'Email writing', subtitle: 'Question 31',
      instructions: '',
      tip: 'Cover all three bullet points — missing one loses marks even if the email is well written. Use informal language (contractions, simple linkers) and start/end the email appropriately.',
      type: 'writing',
      prompt: 'You would like to go to the cinema on Saturday. Write an email to your English friend, Jay.\nIn your email:',
      bullets: ['invite Jay to come with you', 'suggest a film to see', 'explain why Jay will enjoy the film.'],
      wordCount: 'Write 25 words or more.',
      lines: 6,
      model: `Hi Jay,

Do you want to come to the cinema with me on Saturday? I'd like to see the new adventure film — I've heard it's really exciting with amazing special effects. I think you'll love it because you always enjoy action movies!

Let me know if you can come.

Best,
Alex`,
      crossHref: 'test2.html#r6', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'r7', section: 'reading', number: 'PART 7', navLabel: 'W · Part 7',
      title: 'Story from pictures', subtitle: 'Question 32',
      instructions: 'Look at the three pictures. Write the story shown in the pictures.',
      tip: 'Tell the story using the past tense and link the events with time words (first, then, after that, finally). Keep sentences simple and clear rather than complex.',
      type: 'writing-story',
      image: '../IMAGENES/test1-part7-story.png',
      imageAlt: 'Three pictures: two friends playing football when the wind blows the ball into a tree; they look up at the tree; one friend climbs up to get the ball while the other reaches up from below.',
      wordCount: 'Write 35 words or more.',
      lines: 8,
      model: `Last Saturday, Ben and Tom were playing football in the park. Suddenly, a strong wind blew the ball away, high into a big tree. The two friends ran over and looked up in surprise. Ben decided to climb the tree to get the ball while Tom waited below. After a few minutes, Ben reached the ball and threw it down, and they both laughed and carried on with their game.`,
      crossHref: 'test2.html#r7', crossLabel: 'Try this same part in Test 2'
    },

    // ---------------- LISTENING ----------------
    {
      id: 'l1', section: 'listening', number: 'LISTENING 1', navLabel: 'L · Part 1',
      title: 'Short conversations', subtitle: 'Questions 1–5',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Read the question and look at the three options before you listen. The speakers often mention all three options — the correct answer is usually the final decision they agree on.',
      type: 'listening-mc',
      items: [
        { num: 1, question: 'What will they have for lunch?', options: { A: 'a barbecue', B: 'a hot dog and chips', C: 'sandwiches' }, correct: 'A', evidence: `Boy: "Are we having sandwiches...?" Mum: "Why don't we have a barbecue this time?" Boy: "OK, your idea sounds good." — they agree on the barbecue.` },
        { num: 2, question: 'Which sport is the girl going to play this term?', options: { A: 'volleyball', B: 'hockey', C: 'basketball' }, correct: 'B', evidence: `Girl: "my teacher's put my name on the list for hockey, and I'm not sure I'll like it." — hockey is what she's actually doing this term.` },
        { num: 3, question: 'Where will the friends go first?', options: { A: 'a shop', B: 'a café', C: 'a library' }, correct: 'A' },
        { num: 4, question: 'How does the girl get to school now?', options: { A: 'by bus', B: 'by bike', C: 'on foot' }, correct: 'C' },
        { num: 5, question: 'What do they decide to buy for their mother?', options: { A: 'a necklace', B: 'earrings', C: 'a bracelet' }, correct: 'B' },
      ],
      crossHref: 'test2.html#l1', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'l2', section: 'listening', number: 'LISTENING 2', navLabel: 'L · Part 2',
      title: 'Note completion', subtitle: 'Questions 6–10',
      instructions: 'For each question, write the correct answer in the gap. Write one word or a number or a date or a time.',
      tip: "Answers are usually single words, numbers, dates or times — check spelling and don't write more than needed. Numbers and letters are often spelled out, so listen carefully.",
      type: 'listening-gap',
      context: 'You will hear a girl called Mandy leaving a phone message for a friend about spending Sunday at the beach.',
      tableTitle: 'Sunday at the beach',
      rows: [
        { label: 'Travel to the beach by:', fixed: 'bus' },
        { label: 'Take:', num: 6, accepted: ['kite'] },
        { label: 'Place for lunch:', num: 7, accepted: ['park'] },
        { label: 'Sport we\u2019ll play:', num: 8, accepted: ['volleyball'] },
        { label: 'Cost of boat trip on Sunday: £', num: 9, accepted: ['3.75', 'three pounds seventy five', 'three pounds seventy-five'], suffix: 'each' },
        { label: 'Arrive at Mandy\u2019s home at:', num: 10, accepted: ['six thirty', '18:30', '6:30'], suffix: 'p.m.' },
      ],
      crossHref: 'test2.html#l2', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'l3', section: 'listening', number: 'LISTENING 3', navLabel: 'L · Part 3',
      title: 'Longer conversation', subtitle: 'Questions 11–15',
      instructions: 'For each question, choose the correct answer.',
      tip: 'Some questions ask about one speaker, others about what both agree on — read carefully who the question refers to. Listen for opinions and feelings, not just facts.',
      type: 'listening-mc',
      context: 'You will hear two friends, Ned and Aisha, talking about their first week at a new school.',
      items: [
        { num: 11, question: 'When did they meet each other for the first time?', options: { A: 'on the way to school', B: 'in a lesson', C: 'in the lunch break' }, correct: 'B' },
        { num: 12, question: 'How did Ned feel before he started the new school?', options: { A: 'scared', B: 'excited', C: 'lucky' }, correct: 'B' },
        { num: 13, question: 'Ned and Aisha agree that', options: { A: 'the teachers are very kind.', B: 'their classmates are all very nice.', C: 'the school building is very attractive.' }, correct: 'A' },
        { num: 14, question: "Which lesson doesn't Aisha like much?", options: { A: 'geography', B: 'maths', C: 'history' }, correct: 'C' },
        { num: 15, question: 'What do they both say about homework at the new school?', options: { A: 'They got less in their old schools.', B: 'It takes a long time to do.', C: 'Some of it is quite easy.' }, correct: 'A' },
      ],
      crossHref: 'test2.html#l3', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'l4', section: 'listening', number: 'LISTENING 4', navLabel: 'L · Part 4',
      title: 'Five short conversations', subtitle: 'Questions 16–20',
      instructions: 'For each question, choose the correct answer.',
      tip: "Each question is a completely different, short conversation — read the new question and options before each one starts, as there's no link between them.",
      type: 'listening-mc',
      items: [
        { num: 16, question: 'You will hear two friends talking about a book. How did the boy get the book?', options: { A: 'He borrowed it from a family member.', B: 'He won it in a sports event.', C: 'He bought it in a shop.' }, correct: 'B' },
        { num: 17, question: 'You will hear a girl talking to her father about a lesson. What type of lesson did she have?', options: { A: 'a guitar lesson', B: 'a tennis lesson', C: 'a dance lesson' }, correct: 'A' },
        { num: 18, question: 'You will hear a boy telling his friend about his next holiday. Where will the boy stay on holiday?', options: { A: 'in a house', B: 'in a hotel', C: 'in a tent' }, correct: 'C' },
        { num: 19, question: 'You will hear a teacher talking to his class. What does he want his class to do now?', options: { A: 'start some maths problems', B: 'talk about their new textbook', C: 'check an exercise in pairs' }, correct: 'C' },
        { num: 20, question: 'You will hear two friends talking about their plans for Saturday. What are they going to do together on Saturday?', options: { A: 'have a cycle ride', B: 'cook some special food', C: 'go for a walk' }, correct: 'C' },
      ],
      crossHref: 'test2.html#l4', crossLabel: 'Try this same part in Test 2'
    },
    {
      id: 'l5', section: 'listening', number: 'LISTENING 5', navLabel: 'L · Part 5',
      title: 'Matching', subtitle: 'Questions 21–25',
      instructions: 'For each question, choose the correct answer.',
      tip: "There are more jobs than names, so some options won't be used — don't assume every letter is an answer. Listen for the whole idea about each friend, not just a job word mentioned in passing.",
      type: 'listening-match',
      context: 'You will hear a boy telling his mum about the jobs his friends would like to do. Which job would each friend like to do?',
      example: { person: 'Alex', correct: 'A' },
      options: { A: 'actor', B: 'chef', C: 'dentist', D: 'doctor', E: 'farmer', F: 'musician', G: 'teacher', H: 'tour guide' },
      items: [
        { num: 21, person: 'Sally', correct: 'H' },
        { num: 22, person: 'Peter', correct: 'E' },
        { num: 23, person: 'Amy', correct: 'G' },
        { num: 24, person: 'Tom', correct: 'B' },
        { num: 25, person: 'Jane', correct: 'C' },
      ],
      crossHref: 'test2.html#l5', crossLabel: 'Try this same part in Test 2'
    },
  ]
};
