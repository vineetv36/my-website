(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  ['site-name', 'footer-name'].forEach(id => { $(id).textContent = CONFIG.name; });
  $('copyright').textContent = `© ${new Date().getFullYear()}`;
  $('contact-link').href = `mailto:${CONFIG.email}`;
  const channel = CONFIG.info.elsewhere.find(link => link.label === 'YouTube').url;
  ['youtube-link', 'channel-link'].forEach(id => { $(id).href = channel; });
  CONFIG.light.navigation.forEach(item => {
    const link = document.createElement('a');
    const isFilms = item.href === '#films';
    link.href = isFilms ? 'videos.html' : item.href.startsWith('#') ? `index.html${item.href}` : item.href;
    link.textContent = item.label;
    if (isFilms) link.setAttribute('aria-current', 'page');
    $('site-nav').append(link);
  });
  renderFilms($('film-grid'));
  $('empty-films').hidden = CONFIG.videos.length > 0;
})();
