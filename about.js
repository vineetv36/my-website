(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  ['site-name', 'footer-name', 'portrait-name'].forEach(id => { $(id).textContent = CONFIG.name; });
  $('copyright').textContent = `© ${new Date().getFullYear()}`;
  ['contact-link', 'about-email'].forEach(id => { $(id).href = `mailto:${CONFIG.email}`; });
  $('about-email').textContent = CONFIG.email;
  $('youtube-link').href = CONFIG.info.elsewhere.find(link => link.label === 'YouTube').url;
  CONFIG.light.navigation.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href.startsWith('#') ? `index.html${item.href}` : item.href;
    link.textContent = item.label;
    if (item.href === 'info.html') link.setAttribute('aria-current', 'page');
    $('site-nav').append(link);
  });
  CONFIG.info.bio.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    $('info-content').append(paragraph);
  });
  if (CONFIG.info.portrait) {
    const image = new Image();
    image.src = CONFIG.info.portrait;
    image.alt = `Portrait of ${CONFIG.name}`;
    image.decoding = 'async';
    $('info-photo').prepend(image);
  } else {
    $('info-photo').hidden = true;
  }
  CONFIG.info.gear.forEach(gear => {
    const item = document.createElement('li');
    item.textContent = gear;
    $('about-gear').append(item);
  });
  if (CONFIG.info.clients.length) {
    $('about-clients').hidden = false;
    CONFIG.info.clients.forEach(client => {
      const item = document.createElement('li');
      item.textContent = `${client.name} — ${client.years}`;
      $('client-list').append(item);
    });
  }
})();
