# Atlas geography

`world.svg` uses Natural Earth's public-domain 1:50m country boundaries, distributed in world-atlas 2.0.2 (`countries-50m.json`). Generated with D3 Geo's Equal Earth projection, scale 190 and translation [550, 275], in a 1100 × 550 viewBox. The same Equal Earth formula in `travel.js` projects destination longitude/latitude onto this map.

Sources: https://www.naturalearthdata.com/ and https://github.com/topojson/world-atlas

Markers for country galleries indicate representative locations, not exact camera positions. Zion and San Diego use their geographic coordinates. Country shading indicates destinations with photographs; it is not a record of every place visited.

The SVG is committed and served locally: no map service, API key, runtime mapping dependency, or build step is needed for GitHub Pages.
