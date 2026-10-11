'use strict';

function renderFilms(container) {
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
    container.append(link);
  });
}
