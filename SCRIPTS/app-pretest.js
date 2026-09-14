/* ---------- helpers ---------- */
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
function norm(s) {
  return (s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.!?]$/, '');
}

/* ---------- builders ---------- */

function buildMatch(part) {
  const wrap = el('div', 'match-list');
  part.pairs.forEach((pair, i) => {
    const row = el('div', 'match-row');
    row.dataset.kind = 'match';
    row.appendChild(el('span', 'left', pair.left));
    const select = document.createElement('select');
    select.className = 'gap-input';
    select.dataset.correct = pair.correct;
    const blank = document.createElement('option');
    blank.value = ''; blank.textContent = '— choose —';
    select.appendChild(blank);
    part.options.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.letter;
      o.textContent = `${opt.letter}. ${opt.text}`;
      select.appendChild(o);
    });
    row.appendChild(select);
    wrap.appendChild(row);
  });
  return wrap;
}

function buildMc3(part) {
  const wrap = el('div');
  part.items.forEach((item, i) => {
    const box = el('div', 'mc-item');
    box.dataset.kind = 'mc';
    box.appendChild(el('div', 'mc-stem', item.stem));
    const opts = el('div', 'options');
    opts.dataset.correct = item.correct;
    item.options.forEach(o => {
      const btn = el('button', 'opt', item.showLetters === false ? o.text : `${o.letter}) ${o.text}`);
      btn.type = 'button';
      btn.dataset.letter = o.letter;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        opts.querySelectorAll('.opt').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
      opts.appendChild(btn);
    });
    box.appendChild(opts);
    wrap.appendChild(box);
  });
  return wrap;
}

function buildGap(part) {
  const wrap = el('div');
  if (part.wordBank) {
    const wb = el('div', 'wordbank', 'Word bank: ' + part.wordBank.join(' • '));
    wrap.appendChild(wb);
  }
  part.items.forEach(item => {
    const row = el('div', 'gap-item');
    row.dataset.kind = 'gap';
    row.appendChild(el('span', 'stem', item.stem));
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'gap-input';
    input.dataset.accepted = JSON.stringify(item.accepted);
    row.appendChild(input);
    const ans = el('span', 'gap-answer', '(' + item.accepted[0] + ')');
    row.appendChild(ans);
    wrap.appendChild(row);
  });
  return wrap;
}

function buildCloze(part) {
  const wrap = el('div');
  if (part.image) {
    const img = document.createElement('img');
    img.src = part.image; img.alt = part.title; img.className = 'cloze-img';
    wrap.appendChild(img);
  }
  if (part.wordBank) {
    const wb = el('div', 'wordbank');
    wb.textContent = 'Word bank: ' + part.wordBank.join(' • ');
    if (part.extraWord) {
      const extra = el('span', 'extra', 'One word is extra — you will not need all of them!');
      wb.appendChild(extra);
    }
    wrap.appendChild(wb);
  }
  const p = el('p', 'cloze-text');
  p.dataset.kind = 'cloze';
  part.text.forEach(chunk => {
    if (typeof chunk === 'string') {
      p.appendChild(document.createTextNode(chunk));
    } else {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'gap-input';
      input.dataset.accepted = JSON.stringify(chunk.accepted);
      p.appendChild(input);
    }
  });
  wrap.appendChild(p);
  return wrap;
}

function buildWriting(part) {
  const wrap = el('div', 'writing-box');
  if (part.prompt) wrap.appendChild(el('p', 'instructions', part.prompt));
  const ta = document.createElement('textarea');
  ta.placeholder = part.placeholder || 'Write your answer here...';
  wrap.appendChild(ta);
  const meta = el('div', 'writing-meta');
  const count = el('span', 'wordcount', '0 words');
  ta.addEventListener('input', () => {
    const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    count.textContent = n + ' words' + (part.minWords ? ` (min. ${part.minWords})` : '');
  });
  meta.appendChild(count);
  const toggle = el('button', 'btn ghost', 'Show model answer');
  toggle.type = 'button';
  meta.appendChild(toggle);
  wrap.appendChild(meta);
  const model = el('div', 'model-answer', part.model);
  toggle.addEventListener('click', () => {
    model.classList.toggle('show');
    toggle.textContent = model.classList.contains('show') ? 'Hide model answer' : 'Show model answer';
  });
  wrap.appendChild(model);
  return wrap;
}

function buildWritingMulti(part) {
  const wrap = el('div');
  part.items.forEach(item => {
    const box = el('div', 'wm-item');
    box.appendChild(el('div', 'wm-stem', item.stem));
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'gap-input';
    input.placeholder = 'Write your answer...';
    box.appendChild(input);
    const toggle = el('button', 'btn ghost', 'Show a model answer');
    toggle.type = 'button';
    toggle.style.marginTop = '8px';
    box.appendChild(toggle);
    const model = el('div', 'model-answer', item.model);
    toggle.addEventListener('click', () => {
      model.classList.toggle('show');
      toggle.textContent = model.classList.contains('show') ? 'Hide model answer' : 'Show a model answer';
    });
    box.appendChild(model);
    wrap.appendChild(box);
  });
  return wrap;
}

function buildReference(part) {
  const wrap = el('div', 'reference');
  part.tables.forEach(tbl => {
    const h = el('h4', null, tbl.title);
    h.style.margin = '0 0 8px';
    h.style.fontFamily = "'Baloo 2', cursive";
    h.style.color = '#5b3fae';
    wrap.appendChild(h);
    const table = document.createElement('table');
    table.className = 'ref-table';
    const thead = document.createElement('tr');
    tbl.headers.forEach(hd => thead.appendChild(el('th', null, hd)));
    table.appendChild(thead);
    tbl.rows.forEach(r => {
      const tr = document.createElement('tr');
      r.forEach(c => tr.appendChild(el('td', null, c)));
      table.appendChild(tr);
    });
    wrap.appendChild(table);
    wrap.appendChild(el('div', null, ''));
  });
  return wrap;
}

const BUILDERS = {
  match: buildMatch,
  mc3: buildMc3,
  gap: buildGap,
  cloze: buildCloze,
  writing: buildWriting,
  'writing-multi': buildWritingMulti,
  reference: buildReference,
};

const NOT_GRADABLE = ['writing', 'writing-multi', 'reference'];

/* ---------- grading ---------- */

function checkPart(sectionEl) {
  let total = 0, correct = 0;

  sectionEl.querySelectorAll('.match-row').forEach(row => {
    const select = row.querySelector('select');
    total++;
    const ok = select.value !== '' && select.value === select.dataset.correct;
    select.classList.toggle('correct', ok);
    select.classList.toggle('incorrect', select.value !== '' && !ok);
    if (ok) correct++;
  });

  sectionEl.querySelectorAll('.mc-item').forEach(box => {
    const opts = box.querySelector('.options');
    total++;
    const correctLetter = opts.dataset.correct;
    const selected = opts.querySelector('.opt.selected');
    opts.querySelectorAll('.opt').forEach(b => {
      b.disabled = true;
      b.classList.remove('correct', 'incorrect');
      if (b.dataset.letter === correctLetter) b.classList.add('correct');
      else if (b === selected) b.classList.add('incorrect');
    });
    if (selected && selected.dataset.letter === correctLetter) correct++;
  });

  sectionEl.querySelectorAll('.gap-item').forEach(row => {
    const input = row.querySelector('input.gap-input');
    total++;
    const accepted = JSON.parse(input.dataset.accepted).map(norm);
    const ok = accepted.includes(norm(input.value)) && input.value.trim() !== '';
    input.classList.toggle('correct', ok);
    input.classList.toggle('incorrect', !ok);
    if (ok) correct++;
    row.querySelector('.gap-answer').classList.add('show');
  });

  sectionEl.querySelectorAll('.cloze-text').forEach(p => {
    p.querySelectorAll('input.gap-input').forEach(input => {
      total++;
      const accepted = JSON.parse(input.dataset.accepted).map(norm);
      const ok = accepted.includes(norm(input.value)) && input.value.trim() !== '';
      input.classList.toggle('correct', ok);
      input.classList.toggle('incorrect', !ok);
      if (ok) correct++;
      input.title = 'Answer: ' + JSON.parse(input.dataset.accepted)[0];
    });
  });

  const scoreEl = sectionEl.querySelector('.score');
  if (scoreEl) {
    scoreEl.textContent = `${correct} / ${total} correct`;
    scoreEl.classList.toggle('good', total > 0 && correct === total);
  }
  const railLink = document.querySelector(`.rail a[href="#${sectionEl.id}"]`);
  if (railLink && total > 0) railLink.classList.add('done');
}

/* ---------- page bootstrap ---------- */

function buildPart(part) {
  const section = el('section', 'part');
  section.id = part.id;

  const head = el('div', 'part-head');
  head.appendChild(el('span', 'badge', part.number));
  const titleWrap = el('div');
  titleWrap.appendChild(el('h3', null, part.title));
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

  if (!NOT_GRADABLE.includes(part.type)) {
    const actions = el('div', 'part-actions');
    const checkBtn = el('button', 'btn', '✅ Check my answers');
    checkBtn.type = 'button';
    const resetBtn = el('button', 'btn ghost reset-btn', '🔄 Try again');
    resetBtn.type = 'button';
    resetBtn.style.display = 'none';

    checkBtn.addEventListener('click', () => {
      checkPart(section);
      checkBtn.disabled = true;
      checkBtn.textContent = '✔️ Checked';
      section.querySelectorAll('select, input.gap-input').forEach(f => { f.disabled = true; });
      resetBtn.style.display = 'inline-block';
    });

    resetBtn.addEventListener('click', () => {
      section.querySelectorAll('select').forEach(s => {
        s.value = '';
        s.disabled = false;
        s.classList.remove('correct', 'incorrect');
      });
      section.querySelectorAll('input.gap-input').forEach(i => {
        i.value = '';
        i.disabled = false;
        i.classList.remove('correct', 'incorrect');
        i.removeAttribute('title');
      });
      section.querySelectorAll('.gap-answer').forEach(a => a.classList.remove('show'));
      section.querySelectorAll('.opt').forEach(b => {
        b.disabled = false;
        b.classList.remove('selected', 'correct', 'incorrect');
      });
      const scoreEl = section.querySelector('.score');
      if (scoreEl) { scoreEl.textContent = ''; scoreEl.classList.remove('good'); }
      const railLink = document.querySelector(`.rail a[href="#${section.id}"]`);
      if (railLink) railLink.classList.remove('done');
      checkBtn.disabled = false;
      checkBtn.textContent = '✅ Check my answers';
      resetBtn.style.display = 'none';
    });

    actions.appendChild(checkBtn);
    actions.appendChild(resetBtn);
    actions.appendChild(el('span', 'score', ''));
    body.appendChild(actions);
  }

  section.appendChild(body);
  return section;
}

function renderTrainer(data) {
  document.title = data.pageTitle;
  document.getElementById('page-title').textContent = data.title;
  document.getElementById('page-subtitle').textContent = data.subtitle;
  document.getElementById('intro-text').textContent = data.intro;

  const rail = document.getElementById('rail');
  const main = document.getElementById('sections');

  data.sections.forEach(sec => {
    const group = el('div', 'rail-group');
    group.appendChild(el('div', 'rail-label', sec.label));
    sec.exercises.forEach(part => {
      const a = el('a', null, '');
      a.innerHTML = `<span class="dot"></span>${part.navLabel || part.title}`;
      a.href = `#${part.id}`;
      group.appendChild(a);
    });
    rail.appendChild(group);

    const head = el('div', 'section-head');
    head.appendChild(el('h2', null, sec.label));
    if (sec.description) head.appendChild(el('p', null, sec.description));
    main.appendChild(head);

    if (sec.poster || sec.playHref) {
      const row = el('div', 'poster-row');
      if (sec.poster) {
        const details = document.createElement('details');
        details.className = 'poster-toggle';
        const summary = document.createElement('summary');
        summary.textContent = 'See the vocabulary poster';
        details.appendChild(summary);
        const img = document.createElement('img');
        img.src = sec.poster;
        img.alt = sec.label + ' poster';
        details.appendChild(img);
        row.appendChild(details);
      }
      if (sec.playHref) {
        const play = el('a', 'play-btn', '▶ Play the presentation');
        play.href = sec.playHref;
        row.appendChild(play);
      }
      main.appendChild(row);
    }

    sec.exercises.forEach(part => main.appendChild(buildPart(part)));

    if (sec.crossLinks) {
      const cross = el('div', 'crosslink');
      sec.crossLinks.forEach(link => {
        const a = el('a', null, '');
        a.innerHTML = `<span class="arrow">→</span> ${link.label}`;
        a.href = link.href;
        cross.appendChild(a);
      });
      main.appendChild(cross);
    }
  });
}
