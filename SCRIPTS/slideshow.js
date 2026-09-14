function initSlideshow(config) {
  // config: { folder, count, prefix, pad, title, backHref }
  const pad = config.pad || 2;
  const slideSrc = (n) => `${config.folder}/${config.prefix}${String(n).padStart(pad, '0')}.jpg`;

  let current = 1;
  const total = config.count;

  const img = document.getElementById('slide-img');
  const counter = document.getElementById('slide-counter');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fsBtn = document.getElementById('fs-btn');
  const stage = document.getElementById('stage');

  function preload(n) {
    if (n < 1 || n > total) return;
    const im = new Image();
    im.src = slideSrc(n);
  }

  function show(n) {
    current = Math.min(Math.max(n, 1), total);
    img.src = slideSrc(current);
    counter.textContent = `${current} / ${total}`;
    prevBtn.disabled = current === 1;
    nextBtn.disabled = current === total;
    preload(current + 1);
    preload(current - 1);
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { show(current + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { show(current - 1); e.preventDefault(); }
    if (e.key === 'f' || e.key === 'F') { toggleFullscreen(); }
  });

  let touchStartX = null;
  stage.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  stage.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > 40) show(current - 1);
    if (dx < -40) show(current + 1);
    touchStartX = null;
  });

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      stage.requestFullscreen ? stage.requestFullscreen() : stage.webkitRequestFullscreen && stage.webkitRequestFullscreen();
    } else {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
    }
  }
  fsBtn.addEventListener('click', toggleFullscreen);

  document.getElementById('deck-title').textContent = config.title;
  show(1);
}
