/* ============================================================
   KET Trainer — generic renderer + checker
   Consumes a `TEST` object (defined in data-test1.js / data-test2.js)
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

function renderOptions(options, correctLetter, onPick) {
  const wrap = el('div', 'options');
  Object.keys(options).forEach(letter => {
    const btn = el('button', 'opt');
    btn.type = 'button';
    btn.dataset.letter = letter;
    btn.innerHTML = `<span class="letter">${letter}</span><span>${options[letter]}</span>`;
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      if (onPick) onPick(letter);
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

/* ---------- Checking ---------- */

function checkPart(partEl, part) {
  let total = 0, correct = 0;

  partEl.querySelectorAll('.item[data-kind="mc"]').forEach(item => {
    const opts = item.querySelector('.options');
    if (!opts) return;
    total++;
    const correctLetter = opts.dataset.correct;
    const selected = opts.querySelector('.opt.selected');
    opts.querySelectorAll('.opt').forEach(o => {
      o.disabled = true;
      o.classList.remove('correct', 'incorrect');
      if (o.dataset.letter === correctLetter) o.classList.add('correct');
      else if (o === selected) o.classList.add('incorrect');
    });
    if (selected && selected.dataset.letter === correctLetter) correct++;
    const ev = item.querySelector('.evidence');
    if (ev) ev.classList.add('show');
  });

  partEl.querySelectorAll('.item[data-kind="gap"] input, .item[data-kind="gap"]').forEach(() => {});
  partEl.querySelectorAll('input.gap-input').forEach(input => {
    if (!input.dataset.accepted) return;
    total++;
    const accepted = JSON.parse(input.dataset.accepted).map(a => a.toLowerCase().trim());
    const val = input.value.toLowerCase().trim();
    const ok = accepted.includes(val) && val !== '';
    input.classList.toggle('correct', ok);
    input.classList.toggle('incorrect', !ok);
    if (ok) correct++;
    const evWrap = input.closest('.notice') ? partEl.querySelector('.evidence') : input.closest('.item')?.querySelector('.evidence');
    if (evWrap) evWrap.classList.add('show');
  });

  partEl.querySelectorAll('.item[data-kind="select"] select').forEach(select => {
    total++;
    const ok = select.value === select.dataset.correct;
    select.classList.toggle('correct', ok);
    select.classList.toggle('incorrect', select.value !== '' && !ok);
    if (ok) correct++;
  });
  const globalEv = partEl.querySelector('.part-body > .evidence');
  if (globalEv) globalEv.classList.add('show');

  const scoreEl = partEl.querySelector('.score');
  if (scoreEl) {
    const perfect = total > 0 && correct === total;
    scoreEl.textContent = `${correct} / ${total} correct${perfect ? ' 🎉' : ''}`;
    scoreEl.classList.toggle('good', perfect);
  }
  const railLink = document.querySelector(`.rail a[href="#${part.id}"]`);
  if (railLink && total > 0) railLink.classList.add('done');
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
    checkBtn.addEventListener('click', () => checkPart(section, part));
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
