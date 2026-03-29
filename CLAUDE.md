# Photography Portfolio — Build Instructions

Build a minimal photography portfolio website in the style of Samuel Elkins (samuelelkins.co). Read this entire file before writing any code.

## Stack

Plain HTML, CSS, vanilla JS. No frameworks, no bundler, no package.json. The finished site is a folder of static files that can be deployed by dragging to Netlify Drop.

## File structure to create

```
index.html       — Overview (main photo grid)
travel.html      — Travel destinations
videos.html      — Video projects
info.html        — Bio, clients, gear, contact
style.css        — All shared styles
nav.js           — Shared nav + lightbox logic
config.js        — Single source of truth for all content
public/
  images/
    overview/    — User drops photos here
    travel/      — One subfolder per destination
    videos/      — Video thumbnail images
```

---

## config.js

Create this file first. Every HTML page reads from it — the owner never touches HTML.

```js
const CONFIG = {
  name: "Your Name",
  email: "hello@yourname.com",

  nav: {
    links: [
      { label: "Overview", href: "index.html" },
      { label: "Travel",   href: "travel.html" },
      { label: "Videos",   href: "videos.html" },
      { label: "Info",     href: "info.html" },
    ]
  },

  overview: {
    photos: [
      // { src: "public/images/overview/01.jpg", alt: "Olympic Peninsula" },
    ],
    // Cycles through as photos are placed. sq = square, tall = portrait 2 rows, wide = landscape 2 cols
    rhythm: ["tall", "sq", "sq", "sq", "sq", "wide", "sq", "tall", "sq", "sq", "sq", "sq"],
  },

  travel: {
    destinations: [
      // { name: "Iceland", folder: "public/images/travel/iceland/", cover: "01.jpg" },
    ]
  },

  videos: [
    // {
    //   title: "Olympic Peninsula — Spring 2025",
    //   category: "Landscape",
    //   runtime: "8:42",
    //   thumbnail: "public/images/videos/olympic.jpg",
    //   url: "https://youtube.com/watch?v=...",
    // },
  ],

  info: {
    bio: [
      "Your Name is a photographer and filmmaker based in [City].",
      "Available for editorial, commercial, and personal commissions worldwide.",
    ],
    clients: [
      // { name: "Patagonia", years: "2022 — present" },
    ],
    gear: [
      // "Fujifilm GFX 100S II",
    ],
    elsewhere: [
      { label: "Instagram",  url: "https://instagram.com/yourhandle" },
      { label: "YouTube",    url: "https://youtube.com/@yourchannel" },
      { label: "Newsletter", url: "" },
    ],
  },
};
```

---

## style.css

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #ffffff;
  --text: #111111;
  --text-muted: #777777;
  --text-faint: #bbbbbb;
  --border: rgba(0, 0, 0, 0.1);
  --gap: 3px;
  --font: system-ui, -apple-system, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f0f0f;
    --text: #e2e2e2;
    --text-muted: #666666;
    --text-faint: #3a3a3a;
    --border: rgba(255, 255, 255, 0.07);
  }
}

html { -webkit-font-smoothing: antialiased; }
body { background: var(--bg); color: var(--text); font-family: var(--font); }

/* Nav */
nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 17px 24px;
  border-bottom: 0.5px solid var(--border);
  position: sticky; top: 0; background: var(--bg); z-index: 10;
}
.site-name { font-size: 13px; color: var(--text); text-decoration: none; }
.nav-links { display: flex; gap: 24px; }
.nav-links a { font-size: 12px; color: var(--text-muted); text-decoration: none; transition: color 0.1s; }
.nav-links a:hover, .nav-links a.active { color: var(--text); }
.nav-hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; padding: 4px; }
.nav-hamburger span { display: block; width: 18px; height: 0.5px; background: var(--text-muted); }

/* Overview grid */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gap);
}
.cell { background: #1a1a1a; overflow: hidden; cursor: pointer; display: block; position: relative; }
.cell:hover { opacity: 0.86; transition: opacity 0.12s; }
.cell img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cell.sq   { aspect-ratio: 1 / 1; }
.cell.tall { aspect-ratio: 2 / 3; grid-row: span 2; }
.cell.wide { grid-column: span 2; aspect-ratio: 3 / 2; }

/* Travel grid */
.travel-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--gap);
}
.travel-cell { aspect-ratio: 1 / 1; background: #1a1a1a; overflow: hidden; cursor: pointer; position: relative; }
.travel-cell:hover { opacity: 0.86; transition: opacity 0.12s; }
.travel-cell img { width: 100%; height: 100%; object-fit: cover; display: block; }
.travel-label {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 28px 10px 9px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.55));
}
.travel-label span { font-size: 11px; color: rgba(255,255,255,0.85); letter-spacing: 0.04em; }

/* Video grid */
.video-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px; padding: 20px;
}
.video-card { cursor: pointer; }
.video-card:hover { opacity: 0.86; transition: opacity 0.12s; }
.video-thumb {
  aspect-ratio: 16 / 9; background: #1a1a1a;
  border-radius: 4px; overflow: hidden;
  position: relative; display: flex; align-items: center; justify-content: center;
}
.video-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.play-btn {
  position: absolute; width: 38px; height: 38px; border-radius: 50%;
  background: rgba(255,255,255,0.12); border: 0.5px solid rgba(255,255,255,0.25);
  display: flex; align-items: center; justify-content: center;
}
.play-btn svg { margin-left: 2px; }
.video-meta { padding: 9px 2px 0; }
.video-title { font-size: 13px; color: var(--text); margin-bottom: 3px; }
.video-sub   { font-size: 11px; color: var(--text-muted); }

/* Info page */
.info-wrap { max-width: 480px; margin: 0 auto; padding: 52px 24px 72px; }
.info-section { margin-bottom: 40px; }
.info-label { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 14px; }
.info-body { font-size: 13px; color: var(--text-muted); line-height: 1.85; }
.info-body p { margin-bottom: 10px; }
.info-body p:last-child { margin-bottom: 0; }
.info-list { list-style: none; }
.info-list li { font-size: 13px; color: var(--text-muted); line-height: 1.95; display: flex; justify-content: space-between; gap: 16px; }
.info-list li span { font-size: 12px; color: var(--text-faint); white-space: nowrap; }
.info-link { color: var(--text); text-decoration: none; border-bottom: 0.5px solid var(--border); padding-bottom: 1px; }
.info-link:hover { border-color: var(--text-muted); }
.info-divider { height: 0.5px; background: var(--border); margin-bottom: 40px; }

/* Lightbox */
.lightbox {
  display: none; position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.93);
  align-items: center; justify-content: center; flex-direction: column;
  gap: 14px; cursor: pointer;
}
.lightbox.open { display: flex; }
.lightbox img { max-width: 88vw; max-height: 85vh; object-fit: contain; display: block; }
.lightbox-hint { font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.06em; }

/* Footer */
footer {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 24px; border-top: 0.5px solid var(--border); margin-top: var(--gap);
}
.footer-copy { font-size: 11px; color: var(--text-faint); }
.footer-links { display: flex; gap: 16px; }
.footer-links a { font-size: 11px; color: var(--text-faint); text-decoration: none; }
.footer-links a:hover { color: var(--text-muted); }

/* Mobile */
@media (max-width: 640px) {
  nav { padding: 14px 16px; }
  .nav-links { display: none; }
  .nav-links.open {
    display: flex; flex-direction: column;
    position: absolute; top: 48px; left: 0; right: 0;
    background: var(--bg); border-bottom: 0.5px solid var(--border);
    padding: 16px 16px 20px; gap: 16px; z-index: 9;
  }
  .nav-hamburger { display: flex; }
  .photo-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .travel-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .video-grid  { grid-template-columns: 1fr; padding: 14px; }
  .info-wrap   { padding: 36px 16px 56px; }
  footer { padding: 12px 16px; flex-direction: column; gap: 8px; align-items: flex-start; }
}
```

---

## nav.js

```js
document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Mobile hamburger
  const hamburger = document.querySelector(".nav-hamburger");
  const navLinks  = document.querySelector(".nav-links");
  hamburger?.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // Lightbox
  const lb    = document.getElementById("lightbox");
  const lbImg = lb?.querySelector("img");
  if (!lb) return;

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      if (lbImg) lbImg.src = el.dataset.lightbox;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
  lb.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
});
```

---

## Nav HTML snippet (use in every page)

```html
<nav>
  <a class="site-name" href="index.html" id="nav-name"></a>
  <div class="nav-links" id="nav-links"></div>
  <div class="nav-hamburger"><span></span><span></span></div>
</nav>
```

Populate `#nav-name` and `#nav-links` from CONFIG in each page's script block.

## Footer HTML snippet (use in every page)

```html
<footer>
  <span class="footer-copy" id="footer-copy"></span>
  <div class="footer-links" id="footer-links"></div>
</footer>
```

## Lightbox HTML snippet (overview + travel pages only)

```html
<div class="lightbox" id="lightbox">
  <img src="" alt="">
  <span class="lightbox-hint">click anywhere · esc to close</span>
</div>
```

---

## index.html — Overview

- Load `config.js` and `nav.js`
- Build nav from `CONFIG.nav.links`
- Build photo grid from `CONFIG.overview.photos` using `CONFIG.overview.rhythm` to assign cell classes cyclically
- If `CONFIG.overview.photos` is empty, render 12 dark placeholder `.cell` divs using the rhythm (use varied dark hex backgrounds so the grid looks populated, not broken)
- Each populated cell: `<div class="cell [type]" data-lightbox="[src]"><img src="[src]" loading="lazy"></div>`
- Footer: year + name left, social links + "Contact" (→ info.html) right

## travel.html — Travel

- 4-column `.travel-grid`
- Each destination: `<div class="travel-cell" data-lightbox="[folder+cover]"><img ...><div class="travel-label"><span>[name]</span></div></div>`
- If `CONFIG.travel.destinations` is empty, render 12 placeholder cells with varied dark backgrounds and example destination names

## videos.html — Videos

- 2-column `.video-grid`
- Each video: card with 16:9 dark thumbnail + centered play button + title + "category · runtime" below
- Clicking opens `CONFIG.videos[i].url` in a new tab
- If `CONFIG.videos` is empty, render 4 placeholder cards with dark backgrounds and "Add your first video — edit config.js" text

## info.html — Info

Build sections in this order, each separated by `.info-divider`:
1. **About** — `CONFIG.info.bio` paragraphs
2. **Selected clients** — `CONFIG.info.clients` list (name left, years right). Omit section if array empty.
3. **Gear** — `CONFIG.info.gear` list. Omit section if array empty.
4. **Contact** — `CONFIG.email` as a mailto link + one line of context
5. **Elsewhere** — `CONFIG.info.elsewhere` links. No divider after last section.

---

## Rules — do not break these

- No hero section, no taglines, no CTAs, no booking forms, no pricing
- No accent colors — monochrome only throughout
- No CSS frameworks (Tailwind, Bootstrap) — plain CSS only
- No JS frameworks (React, Vue) — vanilla JS only
- No animations beyond `opacity` on hover
- Dark mode handled entirely by CSS custom properties — no JS needed
- `loading="lazy"` on every `<img>`
- All content driven from `config.js` — no hardcoded names, emails, or copy in HTML
