# Chasing the Light

A static photography portfolio: plain HTML, CSS, and JavaScript. No framework, package install, build step, API key, or server-side code is required.

## GitHub Pages

After merging the redesign branch, select **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`. The existing `CNAME` remains unchanged. Asset and page links are relative, so the site works at both a custom domain and a project URL such as `https://username.github.io/my-website/`. `.nojekyll` keeps the site buildless.

## Content

Edit `config.js`:

- `light`: hero image, headline, navigation, and the five time-of-day labels. `defaultPeriod` selects the opening gallery. Each period can set `backdrop` to a photo path in its gallery; otherwise its first photo is used. `backdropSrc` points to the high-resolution JPG and `backdropSrcset` lists responsive WebP versions from `public/images/backdrops/`; gallery thumbnails stay separate. Regenerate the responsive versions when replacing a backdrop original.
- `overview.photos`: each photo has a relative `src`, descriptive `alt`, `location`, actual `width` and `height`, and a `light` value of `blue-hour`, `first-light`, `daylight`, `golden-hour`, or `night`.
- These light groups are an initial editorial selection based on appearance, not verified capture-time metadata. Reassign them to match your recollection of each shoot.
- `travel`: atlas copy, default destination, and destination entries. Each entry uses its photo folder to select gallery images, a cover filename, geographic `[longitude, latitude]`, and a map-label offset. Destination links can be shared as `travel.html#japan`. `connections` defines decorative lines between destination markers, not a chronological travel itinerary.
- Videos can set `destination` to a travel destination ID (for example `japan`) to appear alongside that destination’s photographs.
- `videos`: actual YouTube watch URLs, thumbnail URLs, titles, locations, and runtimes. Thumbnails need access to YouTube's image host; the titled film links remain usable if images cannot load.

The homepage uses `light.css` and `light.js`; About shares `light.css` and uses `about.js`; Videos shares `light.css` and uses `videos.js`. Film cards on both the homepage and Videos page use `films.js`. Travel uses `light.css`, `travel.css`, and `travel.js` for the interactive atlas. The redesigned homepage links Photography to its gallery, Films to its film section, and About to `info.html`. The film section also links to the full Videos page.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. This is only a local preview server; GitHub Pages serves the files directly.

## Controls

Select a light category to replace the single horizontal gallery. Scroll or swipe the strip, or use its previous/next buttons. The category buttons support Left/Right, Home, and End keys. Select a photograph for the modal viewer; use Left/Right to browse and Escape to close. Reduced-motion preferences are respected.

## Atlas map

The atlas serves a local SVG generated from Natural Earth’s public-domain 1:50m country outlines in an Equal Earth projection. Markers use the same projection and real coordinates. The paper-style atlas frames Europe, East Asia, or western North America according to the selected destination; a thumbnail list and photograph card provide the navigation. Country markers are representative locations, not exact photo locations. See `public/maps/README.md` for the source and projection details. No map API, runtime mapping dependency, or build step is required.
