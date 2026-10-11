(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const page = CONFIG.light;
  const setText = (id, text) => { $(id).textContent = text; };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const icons = {
    twilight: '<path d="M3 24h34M8 28h24M11 21a9 9 0 0 1 18 0M20 3v4M18 5h4M5 12v4M3 14h4M35 10v4M33 12h4"/>',
    sunrise: '<path d="M3 24h34M8 28h24M11 21a9 9 0 0 1 18 0M20 3v5M5 10l4 4M35 10l-4 4M3 19h4M33 19h4"/>',
    sun: '<circle cx="20" cy="16" r="7"/><path d="M20 1v4M20 27v4M5 16H1M39 16h-4M9 5l3 3M28 24l3 3M31 5l-3 3M12 24l-3 3"/>',
    sunset: '<path d="M3 24h34M8 28h24M11 21a9 9 0 0 1 18 0M20 3v5M5 10l4 4M35 10l-4 4M3 19h4M33 19h4M17 5l3 3 3-3"/>',
    moon: '<path d="M27 3a13 13 0 1 0 5 24A14 14 0 0 1 27 3Z"/>',
  };
  function icon(name) {
    return `<svg viewBox="0 0 40 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sun}</svg>`;
  }
  setText('site-name', CONFIG.name);
  setText('footer-name', CONFIG.name);
  setText('copyright', `© ${new Date().getFullYear()}`);
  $('contact-link').href = `mailto:${CONFIG.email}`;
  $('youtube-link').href = CONFIG.info.elsewhere.find(link => link.label === 'YouTube').url;
  page.navigation.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    $('site-nav').append(link);
  });
  $('hero-image').src = page.hero.src;
  $('hero-image').alt = page.hero.alt;
  page.title.forEach(line => {
    const span = document.createElement('span');
    span.textContent = line;
    $('hero-title').append(span);
  });
  setText('hero-subtitle', page.subtitle);
  setText('films-title', page.filmsTitle);
  setText('films-link', `${page.filmsLink}  →`);
  setText('empty-gallery', page.emptyGallery);

  const track = $('gallery-track');
  const tabs = $('photography');
  const dialog = $('photo-viewer');
  let photos = [];
  let viewerIndex = 0;
  let priorOverflow = '';
  let scrollFrame = 0;
  let heroRequest = 0;
  let heroTransition = Promise.resolve();

  async function updateHero(photo) {
    const request = ++heroRequest;
    const image = new Image();
    image.src = photo.src;
    image.alt = photo.alt;
    image.className = 'hero-image';
    // Decode before revealing the next photograph; a failed load keeps the current one.
    try { await image.decode(); } catch { return; }
    // Finish the current fade before starting another, and discard outdated selections.
    await heroTransition;
    if (request !== heroRequest) return;
    const previous = $('hero-image');
    if (previous.src === image.src) return;
    image.setAttribute('aria-hidden', 'true');
    previous.after(image);
    const animation = image.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: reducedMotion.matches ? 0 : 850,
      easing: 'ease-in-out',
      fill: 'forwards',
    });
    heroTransition = animation.finished.then(() => {
      previous.remove();
      image.id = 'hero-image';
      image.removeAttribute('aria-hidden');
      animation.cancel();
    });
  }

  function leadingIndex() {
    const cards = [...track.children];
    if (!cards.length) return 0;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll > 2 && track.scrollLeft >= maxScroll - 3) return cards.length - 1;
    const firstLeft = cards[0].offsetLeft;
    return cards.reduce((best, card, index) =>
      Math.abs(card.offsetLeft - firstLeft - track.scrollLeft) < Math.abs(cards[best].offsetLeft - firstLeft - track.scrollLeft) ? index : best, 0);
  }
  function syncControls() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    $('gallery-prev').disabled = track.scrollLeft <= 2;
    $('gallery-next').disabled = maxScroll <= 2 || track.scrollLeft >= maxScroll - 3;
    const index = photos.length ? leadingIndex() + 1 : 0;
    setText('gallery-counter', `${String(index).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`);
  }
  function moveGallery(direction) {
    const cards = [...track.children];
    if (!cards.length) return;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const stops = [...new Set([0, ...cards.map(card => Math.min(maxScroll, card.offsetLeft - cards[0].offsetLeft)), maxScroll])];
    const next = direction > 0
      ? stops.find(left => left > track.scrollLeft + 2) ?? maxScroll
      : stops.reverse().find(left => left < track.scrollLeft - 2) ?? 0;
    track.scrollTo({ left: next, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  function selectPeriod(period) {
    photos = CONFIG.overview.photos.filter(photo => photo.light === period.id);
    updateHero(photos[0] || page.hero);
    [...tabs.children].forEach(button => {
      const selected = button.dataset.period === period.id;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $('gallery-panel').setAttribute('aria-labelledby', `tab-${period.id}`);
    track.replaceChildren();
    photos.forEach((photo, index) => {
      const card = document.createElement('figure');
      card.className = 'photo-card';
      // Preserve portrait/landscape character while keeping the strip an even height.
      card.style.setProperty('--ratio', String(Math.max(.75, Math.min(1.55, photo.width / photo.height))));
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'photo-button';
      button.dataset.index = index;
      button.setAttribute('aria-label', `Enlarge photograph: ${photo.alt}`);
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt;
      image.width = photo.width;
      image.height = photo.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      button.append(image);
      const caption = document.createElement('figcaption');
      caption.textContent = photo.location;
      card.append(button, caption);
      track.append(card);
    });
    $('empty-gallery').hidden = photos.length > 0;
    track.scrollTo({ left: 0, behavior: 'instant' });
    setText('gallery-status', `${period.label}: ${photos.length} photographs`);
    syncControls();
  }
  page.periods.forEach(period => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'light-tab';
    button.id = `tab-${period.id}`;
    button.dataset.period = period.id;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'gallery-panel');
    button.innerHTML = icon(period.icon);
    const label = document.createElement('span');
    label.textContent = period.label;
    button.append(label);
    button.addEventListener('click', () => selectPeriod(period));
    tabs.append(button);
  });
  tabs.addEventListener('keydown', event => {
    const buttons = [...tabs.children];
    let index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    if (event.key === 'ArrowRight') index = (index + 1) % buttons.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = buttons.length - 1;
    else return;
    event.preventDefault();
    buttons[index].focus({ preventScroll: true });
    selectPeriod(page.periods[index]);
  });
  $('gallery-prev').addEventListener('click', () => moveGallery(-1));
  $('gallery-next').addEventListener('click', () => moveGallery(1));
  track.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; syncControls(); });
  }, { passive: true });
  $('gallery-panel').addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1);
  });
  window.addEventListener('resize', syncControls);
  selectPeriod(page.periods.find(period => period.id === page.defaultPeriod) || page.periods[0]);

  function showPhoto(index) {
    if (!photos.length) return;
    viewerIndex = (index + photos.length) % photos.length;
    const photo = photos[viewerIndex];
    $('viewer-image').src = photo.src;
    $('viewer-image').alt = photo.alt;
    setText('viewer-caption', `${photo.location} — ${photo.alt}`);
    setText('viewer-counter', `${viewerIndex + 1} / ${photos.length}`);
    $('viewer-prev').disabled = $('viewer-next').disabled = photos.length < 2;
  }
  track.addEventListener('click', event => {
    const button = event.target.closest('.photo-button');
    if (!button) return;
    showPhoto(Number(button.dataset.index));
    priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    $('viewer-close').focus();
  });
  $('viewer-close').addEventListener('click', () => dialog.close());
  $('viewer-prev').addEventListener('click', () => showPhoto(viewerIndex - 1));
  $('viewer-next').addEventListener('click', () => showPhoto(viewerIndex + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showPhoto(viewerIndex + (event.key === 'ArrowRight' ? 1 : -1));
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.classList.contains('viewer-stage')) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = priorOverflow; });

  CONFIG.videos.forEach(video => {
    const link = document.createElement('a');
    link.className = 'film-card';
    link.href = video.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Watch ${video.title} on YouTube (opens in a new tab)`);
    const poster = document.createElement('div');
    poster.className = 'film-poster';
    const image = document.createElement('img');
    image.src = video.thumbnail;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    // Text and the play control remain usable when YouTube's image host is blocked.
    image.addEventListener('error', () => { image.hidden = true; });
    const location = document.createElement('span');
    location.className = 'film-location';
    location.textContent = video.location || video.title;
    const play = document.createElement('span');
    play.className = 'play-icon';
    play.innerHTML = '<svg viewBox="0 0 12 12" aria-hidden="true"><path fill="currentColor" d="M2 1 11 6 2 11Z"/></svg>';
    poster.append(image, location, play);
    const meta = document.createElement('div');
    meta.className = 'film-meta';
    const title = document.createElement('span');
    title.textContent = video.title;
    const duration = document.createElement('span');
    duration.className = 'film-runtime';
    duration.textContent = video.runtime;
    meta.append(title, duration);
    link.append(poster, meta);
    $('film-grid').append(link);
  });
})();
