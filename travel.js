(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const destinations = CONFIG.travel.destinations;
  const setText = (id, text) => { $(id).textContent = text; };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let photos = [];
  let viewerIndex = 0;
  let priorOverflow = '';
  let selectedDestination;
  ['site-name', 'footer-name'].forEach(id => setText(id, CONFIG.name));
  setText('copyright', `© ${new Date().getFullYear()}`);
  $('contact-link').href = `mailto:${CONFIG.email}`;
  $('youtube-link').href = CONFIG.info.elsewhere.find(link => link.label === 'YouTube').url;
  CONFIG.light.navigation.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href === '#films' ? 'videos.html' : item.href.startsWith('#') ? `index.html${item.href}` : item.href;
    link.textContent = item.label;
    if (item.href === 'travel.html') link.setAttribute('aria-current', 'page');
    $('site-nav').append(link);
  });
  CONFIG.travel.title.forEach((line, index) => {
    const span = document.createElement('span');
    span.textContent = line;
    if (index === 1) span.className = 'gold-text';
    $('atlas-title').append(span);
  });
  setText('atlas-introduction', CONFIG.travel.introduction);
  const countPhotos = destination => CONFIG.overview.photos.filter(photo => photo.src.startsWith(destination.folder));
  setText('atlas-stat', `${String(destinations.length).padStart(2, '0')} destinations / ${destinations.reduce((sum, destination) => sum + countPhotos(destination).length, 0)} photographs`);

  // Equal Earth projection, matching public/maps/world.svg (1100 × 550).
  // Longitude and latitude stay in config; no hand-positioned destination pins.
  function project([longitude, latitude]) {
    const radians = Math.PI / 180;
    const m = Math.sqrt(3) / 2;
    const l = Math.asin(m * Math.sin(latitude * radians));
    const l2 = l * l;
    const l6 = l2 * l2 * l2;
    const x = longitude * radians * Math.cos(l) / (m * (1.340264 + 3 * -.081106 * l2 + l6 * (7 * .000893 + 9 * .003796 * l2)));
    const y = l * (1.340264 + -.081106 * l2 + l6 * (.000893 + .003796 * l2));
    return [550 + 190 * x, 275 - 190 * y];
  }
  function coordinates([longitude, latitude]) {
    return `${Math.abs(latitude).toFixed(1)}°${latitude >= 0 ? 'N' : 'S'} / ${Math.abs(longitude).toFixed(1)}°${longitude >= 0 ? 'E' : 'W'}`;
  }
  function centerMap() {
    const viewport = document.querySelector('.map-scroll');
    $('map-hint').hidden = viewport.scrollWidth <= viewport.clientWidth;
    if (!selectedDestination) return;
    const [x] = project(selectedDestination.coordinates);
    viewport.scrollTo({ left: x / 1100 * $('map-canvas').clientWidth - viewport.clientWidth / 2, behavior: 'instant' });
  }
  window.addEventListener('resize', centerMap);
  destinations.forEach((destination, index) => {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = 'map-marker';
    marker.dataset.destination = destination.id;
    marker.setAttribute('aria-label', `Explore ${destination.name}`);
    marker.setAttribute('aria-controls', 'destination-gallery');
    const [x, y] = project(destination.coordinates);
    marker.style.left = `${x / 11}%`;
    marker.style.top = `${y / 5.5}%`;
    const label = document.createElement('span');
    label.className = 'marker-label';
    label.textContent = destination.name;
    label.setAttribute('aria-hidden', 'true');
    const [dx, dy] = destination.labelOffset;
    label.style.setProperty('--label-x', `${dx}px`);
    label.style.setProperty('--label-y', `${dy}px`);
    label.style.setProperty('--label-align', dx < 0 ? '-100%' : '0%');
    marker.append(label);
    marker.addEventListener('click', () => selectDestination(destination));
    $('map-markers').append(marker);

    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.destination = destination.id;
    button.setAttribute('aria-controls', 'destination-gallery');
    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    number.setAttribute('aria-hidden', 'true');
    button.append(number, document.createTextNode(destination.name));
    button.addEventListener('click', () => selectDestination(destination));
    $('destinations').append(button);
  });

  function selectDestination(destination, updateHash = true) {
    selectedDestination = destination;
    centerMap();
    photos = countPhotos(destination);
    document.querySelectorAll('[data-destination]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.destination === destination.id));
    });
    const index = String(destinations.indexOf(destination) + 1).padStart(2, '0');
    setText('preview-region', `${index} / ${destination.region}`);
    setText('preview-title', destination.name);
    setText('preview-description', destination.description);
    const cover = photos.find(photo => photo.src === destination.folder + destination.cover) || photos[0];
    $('preview-image').hidden = !cover;
    if (cover) {
      $('preview-image').src = cover.src;
      $('preview-image').alt = cover.alt;
    }
    const count = `${String(photos.length).padStart(2, '0')} photographs`;
    setText('preview-count', count);
    setText('preview-coordinates', coordinates(destination.coordinates));
    setText('gallery-region', destination.region);
    setText('destination-title', destination.name);
    setText('destination-count', count);
    setText('atlas-status', `${destination.name}: ${photos.length} photographs`);
    $('travel-grid').replaceChildren();
    photos.forEach((photo, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'atlas-photo';
      button.dataset.index = index;
      button.setAttribute('aria-label', `Enlarge photograph: ${photo.alt}`);
      const image = new Image();
      image.src = photo.src;
      image.alt = photo.alt;
      image.width = photo.width;
      image.height = photo.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      const caption = document.createElement('span');
      caption.textContent = `${String(index + 1).padStart(2, '0')} / ${destination.name}`;
      button.append(image, caption);
      $('travel-grid').append(button);
    });
    $('empty-destination').hidden = photos.length > 0;
    if (updateHash) history.replaceState(null, '', `#${destination.id}`);
  }
  function selectFromHash() {
    const id = location.hash.slice(1);
    const destination = destinations.find(item => item.id === id);
    if (destination) selectDestination(destination, false);
  }
  const initial = destinations.find(item => item.id === location.hash.slice(1)) || destinations.find(item => item.id === CONFIG.travel.defaultDestination) || destinations[0];
  if (initial) selectDestination(initial, false);
  window.addEventListener('hashchange', selectFromHash);
  $('view-destination').addEventListener('click', () => {
    $('destination-gallery').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    $('destination-title').tabIndex = -1;
    $('destination-title').focus({ preventScroll: true });
  });

  const dialog = $('photo-viewer');
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
  $('travel-grid').addEventListener('click', event => {
    const button = event.target.closest('.atlas-photo');
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
})();
