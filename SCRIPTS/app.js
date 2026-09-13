/* ============================================================
   KET Adventure — generic renderer + checker
   Consumes a `TEST` object (defined in data-test1.js / data-test2.js)
   Every item can be checked on its own (small "Check" button) OR
   all together with the part's "Check my answers" button.
   ============================================================ */

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderNotice(lines) {
  const box = el('div', 'notice');
  lines.forEach(l => {
    const p = el(l.tag === 'ul' ? 'div' : 'p', null, l.text);
    if (l.bold) p.style.fontWeight = '600';
    if (l.center) p.style.textAlign = 'center';
    if (l.title) p.classList.add('n-title');
    box.appendChild(p);
  });
  return box;
}

function renderOptions(options, correctLetter) {
  const wrap = el('div', 'options');
  Object.keys(options).forEach(letter => {
    const btn = el('button', 'opt');
    btn.type = 'button';
    btn.dataset.letter = letter;
    btn.innerHTML = `<span class="letter">${letter}</span><span>${options[letter]}</span>`;
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
    });
    wrap.appendChild(btn);
  });
  wrap.dataset.correct = correctLetter;
  return wrap;
}

function renderEvidence(item) {
  const ev = el('div', 'evidence');
  if (item.evidence) {
    ev.innerHTML = `<b>Why:</b> ${item.evidence}`;
  } else {
    ev.classList.add('audio-note');
    ev.innerHTML = `<b>Note:</b> this answer comes from the audio — there's no full transcript available, so only the correct answer is shown here.`;
  }
  return ev;
}

/* ---------- Per-item "Check" button (small, individual) ---------- */

function addItemCheckButton(item, onCheck) {
  const btn = el('button', 'item-check', 'Check ✔');
  btn.type = 'button';
  btn.addEventListener('click', () => {
    onCheck();
    btn.remove();
    updatePartScore(item.closest('.part'));
  });
  item.appendChild(btn);
  return btn;
}

/* ---------- Grading a single item (shared by per-item + "check all") ---------- */

function gradeMcItem(item) {
  const opts = item.querySelector('.options');
  if (!opts) return;
  const correctLetter = opts.dataset.correct;
  const selected = opts.querySelector('.opt.selected');
  opts.querySelectorAll('.opt').forEach(o => {
    o.disabled = true;
    o.classList.remove('correct', 'incorrect');
    if (o.dataset.letter === correctLetter) o.classList.add('correct');
    else if (o === selected) o.classList.add('incorrect');
  });
  const ok = !!selected && selected.dataset.letter === correctLetter;
  item.dataset.graded = '1';
  item.dataset.correct = ok ? '1' : '0';
  const ev = item.querySelector('.evidence');
  if (ev) ev.classList.add('show');
}

function gradeGapItem(item, input) {
  if (!input || !input.dataset.accepted) return;
  const accepted = JSON.parse(input.dataset.accepted).map(a => a.toLowerCase().trim());
  const val = input.value.toLowerCase().trim();
  const ok = accepted.includes(val) && val !== '';
  input.classList.toggle('correct', ok);
  input.classList.toggle('incorrect', !ok);
  item.dataset.graded = '1';
  item.dataset.correct = ok ? '1' : '0';
  const ev = item.querySelector('.evidence');
  if (ev) ev.classList.add('show');
  const globalEv = item.closest('.part-body')?.querySelector(':scope > .evidence');
  if (globalEv) globalEv.classList.add('show');
}

function gradeSelectItem(item, select) {
  if (!select) return;
  const ok = select.value !== '' && select.value === select.dataset.correct;
  select.classList.toggle('correct', ok);
  select.classList.toggle('incorrect', select.value !== '' && !ok);
  item.dataset.graded = '1';
  item.dataset.correct = ok ? '1' : '0';
  const globalEv = item.closest('.part-body')?.querySelector(':scope > .evidence');
  if (globalEv) globalEv.classList.add('show');
}

/* ---------- Part type renderers ---------- */

function buildMcNotice(part) {
  const body = el('div');
  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'mc';
    const num = el('p', 'q-text');
    num.innerHTML = `<span class="q-num">${item.num}</span>`;
    wrap.appendChild(num);
    wrap.appendChild(renderNotice(item.notice));
    if (item.question) {
      wrap.appendChild(el('p', 'q-text', item.question));
    }
    wrap.appendChild(renderOptions(item.options, item.correct));
    addItemCheckButton(wrap, () => gradeMcItem(wrap));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildMatch3(part) {
  const body = el('div');
  const passage = el('div', 'passage');
  if (part.passageTitle) passage.appendChild(el('div', 'passage-title', part.passageTitle));
  part.persons.forEach(name => {
    passage.appendChild(el('div', 'person-name', name));
    passage.appendChild(el('p', null, part.personTexts[name]));
  });
  body.appendChild(passage);

  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'mc';
    wrap.appendChild(el('p', 'q-text', `<span class="q-num">${item.num}</span>${item.question}`));
    const optionsObj = {};
    part.persons.forEach((name, i) => { optionsObj[String.fromCharCode(65 + i)] = name; });
    wrap.appendChild(renderOptions(optionsObj, item.correct));
    addItemCheckButton(wrap, () => gradeMcItem(wrap));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildMcText(part) {
  const body = el('div');
  const passage = el('div', 'passage');
  if (part.passageTitle) passage.appendChild(el('div', 'passage-title', part.passageTitle));
  if (part.passageByline) passage.appendChild(el('div', 'passage-byline', part.passageByline));
  part.passageParagraphs.forEach(p => passage.appendChild(el('p', null, p)));
  body.appendChild(passage);

  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'mc';
    wrap.appendChild(el('p', 'q-text', `<span class="q-num">${item.num}</span>${item.question}`));
    wrap.appendChild(renderOptions(item.options, item.correct));
    addItemCheckButton(wrap, () => gradeMcItem(wrap));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildClozeMc(part) {
  const body = el('div');
  const passage = el('div', 'passage');
  if (part.passageTitle) passage.appendChild(el('div', 'passage-title', part.passageTitle));
  part.passageParagraphs.forEach(p => passage.appendChild(el('p', null, p)));
  body.appendChild(passage);

  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'mc';
    wrap.appendChild(el('p', 'q-text', `<span class="q-num">${item.num}</span>`));
    wrap.appendChild(renderOptions(item.options, item.correct));
    addItemCheckButton(wrap, () => gradeMcItem(wrap));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildClozeOpen(part) {
  const body = el('div');
  const passage = el('div', 'passage');
  if (part.passageTitle) passage.appendChild(el('div', 'passage-title', part.passageTitle));
  if (part.example) passage.appendChild(el('p', null, `<b>Example:</b> (0) ${part.example}`));
  part.passageParagraphs.forEach(p => passage.appendChild(el('p', null, p)));
  body.appendChild(passage);

  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'gap';
    const row = el('p', 'q-text');
    row.innerHTML = `<span class="q-num">${item.num}</span>`;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'gap-input';
    input.placeholder = '. . . . . . . . .';
    input.dataset.accepted = JSON.stringify(item.accepted);
    row.appendChild(input);
    wrap.appendChild(row);
    addItemCheckButton(wrap, () => gradeGapItem(wrap, input));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildWriting(part) {
  const body = el('div');
  if (part.notice) body.appendChild(renderNotice(part.notice));
  body.appendChild(el('p', 'q-text', part.prompt));
  if (part.bullets) {
    const ul = el('ul');
    ul.style.fontSize = '.92rem';
    ul.style.color = 'var(--ink-soft)';
    part.bullets.forEach(b => ul.appendChild(el('li', null, b)));
    body.appendChild(ul);
  }
  if (part.pictures) {
    const box = el('div', 'notice center');
    part.pictures.forEach(p => box.appendChild(el('p', null, p)));
    body.appendChild(box);
  }
  if (part.image) {
    const img = document.createElement('img');
    img.src = part.image;
    img.alt = part.imageAlt || 'Story pictures';
    img.className = 'story-image';
    body.appendChild(img);
  }
  body.appendChild(el('p', 'q-text', part.wordCount));
  for (let i = 0; i < (part.lines || 6); i++) body.appendChild(el('div', 'writing-lines'));

  const btn = el('button', 'btn ghost', '✏️ Show model answer');
  btn.type = 'button';
  const panel = el('div', 'model-panel', part.model);
  btn.addEventListener('click', () => {
    panel.classList.toggle('show');
    btn.textContent = panel.classList.contains('show') ? '✏️ Hide model answer' : '✏️ Show model answer';
  });
  body.appendChild(btn);
  body.appendChild(panel);
  return body;
}

function buildListeningMc(part) {
  const body = el('div');
  if (part.context) body.appendChild(el('p', 'instructions', part.context));
  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'mc';
    wrap.appendChild(el('p', 'q-text', `<span class="q-num">${item.num}</span>${item.question}`));
    wrap.appendChild(renderOptions(item.options, item.correct));
    addItemCheckButton(wrap, () => gradeMcItem(wrap));
    wrap.appendChild(renderEvidence(item));
    body.appendChild(wrap);
  });
  return body;
}

function buildListeningGap(part) {
  const body = el('div');
  if (part.context) body.appendChild(el('p', 'instructions', part.context));
  const box = el('div', 'notice');
  if (part.tableTitle) box.appendChild(el('div', 'n-title', part.tableTitle));
  part.rows.forEach(row => {
    const line = el('div', 'item');
    line.style.padding = '6px 0';
    line.style.borderTop = 'none';
    if (row.fixed !== undefined) {
      line.innerHTML = `<b>${row.label}</b> ${row.fixed}`;
    } else {
      const span = document.createElement('span');
      span.innerHTML = `<b>${row.label}</b> (${row.num}) `;
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'gap-input';
      input.dataset.accepted = JSON.stringify(row.accepted);
      span.appendChild(input);
      if (row.suffix) span.appendChild(document.createTextNode(' ' + row.suffix));
      line.appendChild(span);
      line.dataset.kind = 'gap';
      addItemCheckButton(line, () => gradeGapItem(line, input));
    }
    box.appendChild(line);
  });
  body.appendChild(box);
  body.appendChild(renderEvidence({}));
  return body;
}

function buildListeningMatch(part) {
  const body = el('div');
  if (part.context) body.appendChild(el('p', 'instructions', part.context));
  if (part.example) {
    body.appendChild(el('p', null, `<b>Example:</b> 0  ${part.example.person} — ${part.example.correct}`));
  }
  part.items.forEach(item => {
    const wrap = el('div', 'item');
    wrap.dataset.kind = 'select';
    const row = el('div', 'match-row');
    row.appendChild(el('span', 'who', `${item.num}  ${item.person}`));
    const select = document.createElement('select');
    select.className = 'gap-input';
    select.style.width = 'auto';
    select.dataset.correct = item.correct;
    select.appendChild(el('option', null, '-- choose --')).value = '';
    Object.keys(part.options).forEach(letter => {
      const opt = document.createElement('option');
      opt.value = letter;
      opt.textContent = `${letter} — ${part.options[letter]}`;
      select.appendChild(opt);
    });
    row.appendChild(select);
    wrap.appendChild(row);
    addItemCheckButton(wrap, () => gradeSelectItem(wrap, select));
    body.appendChild(wrap);
  });
  const legend = el('p', null, Object.entries(part.options).map(([l, t]) => `${l} ${t}`).join(' &nbsp;&nbsp; '));
  legend.style.fontSize = '.85rem';
  legend.style.color = 'var(--ink-soft)';
  body.appendChild(legend);
  body.appendChild(renderEvidence({}));
  return body;
}

const BUILDERS = {
  'mc-notice': buildMcNotice,
  'match3': buildMatch3,
  'mc-text': buildMcText,
  'cloze-mc': buildClozeMc,
  'cloze-open': buildClozeOpen,
  'writing': buildWriting,
  'writing-story': buildWriting,
  'listening-mc': buildListeningMc,
  'listening-gap': buildListeningGap,
  'listening-match': buildListeningMatch,
};

/* ---------- Scoring ---------- */

function updatePartScore(partEl) {
  if (!partEl) return;
  const items = partEl.querySelectorAll('.item[data-kind]');
  const total = items.length;
  let gradedCount = 0, correct = 0;
  items.forEach(it => {
    if (it.dataset.graded === '1') {
      gradedCount++;
      if (it.dataset.correct === '1') correct++;
    }
  });
  const scoreEl = partEl.querySelector('.score');
  if (scoreEl) {
    if (gradedCount === 0) {
      scoreEl.textContent = '';
      scoreEl.classList.remove('good');
    } else {
      const perfect = gradedCount === total && correct === total;
      scoreEl.textContent = `${correct} / ${total} correct${perfect ? ' 🎉' : ''}`;
      scoreEl.classList.toggle('good', perfect);
    }
  }
  const railLink = document.querySelector(`.rail a[href="#${partEl.id}"]`);
  if (railLink) railLink.classList.toggle('done', total > 0 && gradedCount === total);
}

/* "Check my answers" — grades every item in the part at once (including
   ones the student never pressed the small individual Check button for). */
function checkPart(partEl) {
  partEl.querySelectorAll('.item[data-kind="mc"]').forEach(item => gradeMcItem(item));
  partEl.querySelectorAll('.item[data-kind="gap"]').forEach(item => {
    const input = item.querySelector('input.gap-input');
    gradeGapItem(item, input);
  });
  partEl.querySelectorAll('.item[data-kind="select"]').forEach(item => {
    const select = item.querySelector('select.gap-input');
    gradeSelectItem(item, select);
  });
  // Once graded, the small per-item Check buttons are no longer needed.
  partEl.querySelectorAll('.item-check').forEach(btn => btn.remove());
  updatePartScore(partEl);
}

/* ---------- Page bootstrap ---------- */

function buildPart(part) {
  const section = el('section', 'part');
  section.id = part.id;

  const head = el('div', 'part-head');
  head.appendChild(el('span', 'badge', part.number));
  const titleWrap = el('div');
  titleWrap.appendChild(el('h2', null, part.title));
  if (part.subtitle) titleWrap.appendChild(el('span', 'sub', part.subtitle));
  head.appendChild(titleWrap);
  section.appendChild(head);

  const body = el('div', 'part-body');
  if (part.instructions) body.appendChild(el('p', 'instructions', part.instructions));
  if (part.tip) {
    const tip = el('div', 'tip');
    tip.innerHTML = `<b>⭐ Tip:</b> <span>${part.tip}</span>`;
    body.appendChild(tip);
  }

  const builder = BUILDERS[part.type];
  if (builder) body.appendChild(builder(part));

  if (part.type !== 'writing' && part.type !== 'writing-story') {
    const actions = el('div', 'part-actions');
    const checkBtn = el('button', 'btn', '✅ Check my answers');
    checkBtn.type = 'button';
    checkBtn.addEventListener('click', () => checkPart(section));
    actions.appendChild(checkBtn);
    actions.appendChild(el('span', 'score', ''));
    body.appendChild(actions);
  }

  if (part.crossHref) {
    const cross = el('div', 'crosslink');
    const a = el('a', null, `<span class="arrow">&#8594;</span> ${part.crossLabel}`);
    a.href = part.crossHref;
    cross.appendChild(a);
    body.appendChild(cross);
  }

  section.appendChild(body);
  return section;
}

function renderTest(test) {
  document.title = test.pageTitle;
  document.getElementById('test-title').textContent = test.title;
  document.getElementById('test-subtitle').textContent = test.subtitle;
  document.getElementById('switch-link').href = test.switchHref;
  document.getElementById('switch-link').textContent = test.switchLabel;
  document.getElementById('intro-text').textContent = test.intro;

  const railRW = document.getElementById('rail-rw');
  const railL = document.getElementById('rail-listening');
  const main = document.getElementById('parts');

  test.parts.forEach(part => {
    const a = el('a', null, `<span class="dot"></span>${part.navLabel}`);
    a.href = `#${part.id}`;
    (part.section === 'listening' ? railL : railRW).appendChild(a);
    main.appendChild(buildPart(part));
  });
}
