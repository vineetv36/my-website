const CONFIG = {
  name: "Vineet Velmurugan",
  email: "vineetv4j@gmail.com",

  nav: {
    links: [
      { label: "Photography", href: "index.html" },
      { label: "Travel",   href: "travel.html" },
      { label: "Videos",   href: "videos.html" },
      { label: "About",     href: "info.html" },
    ]
  },

  // Light categories are editorial groupings, not verified capture times.
  // Change a photo's `light` to move it between galleries.
  overview: {
    photos: [
      { src: "public/images/iceland/iceland1.webp", alt: "Waves breaking against basalt cliffs on a black-sand beach", location: "Iceland", light: "daylight", width: 1600, height: 2400 },
      { src: "public/images/iceland/iceland2.webp", alt: "Sunlight catching the falling water and mist of a waterfall", location: "Iceland", light: "daylight", width: 1600, height: 2400 },
      {"src": "public/images/norway/DSCF1003.webp", "alt": "Pale warm clouds above snowy mountains and an icy shoreline", "location": "Norway", "light": "first-light", "width": 1600, "height": 1066},
      { src: "public/images/norway/norway2.webp", alt: "Snow-covered mountains across a dark fjord at blue hour", location: "Norway", light: "blue-hour", width: 1600, height: 1066 },
      { src: "public/images/norway/norway3.webp", alt: "Green northern lights above a snowy valley", location: "Norway", light: "night", width: 1600, height: 1068 },
      { src: "public/images/portugal/portugal1.webp", alt: "Warm light on Porto Cathedral framed by a narrow street", location: "Portugal", light: "golden-hour", width: 1600, height: 2400 },
      { src: "public/images/portugal/portugal2.webp", alt: "A yellow palace tower above stone walls", location: "Portugal", light: "daylight", width: 1600, height: 2400 },
      { src: "public/images/portugal/portugal3.webp", alt: "A glowing lantern beneath a colorful stained-glass ceiling", location: "Portugal", light: "daylight", width: 1600, height: 2400 },
      { src: "public/images/zionnps/zionnps1.webp", alt: "Low sunlight across the cliffs and valley of Zion", location: "Zion, Utah", light: "golden-hour", width: 1600, height: 2400 },
      { src: "public/images/zionnps/zionnps2.webp", alt: "The Milky Way stretching above a silhouetted stargazer", location: "Zion, Utah", light: "night", width: 1600, height: 2133 },
      { src: "public/images/zionnps/zionnps3.webp", alt: "A winding road beneath sunlit canyon walls", location: "Zion, Utah", light: "first-light", width: 1600, height: 2133 },
      {"src": "public/images/japan/DSCF1304.webp", "alt": "An illuminated restaurant sign on a dark Japanese street", "location": "Japan", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1336.webp", "alt": "Snow-covered Mount Fuji framed by cherry blossoms", "location": "Japan", "light": "first-light", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1352.webp", "alt": "Soft warm light on Mount Fuji behind a convenience store", "location": "Japan", "light": "first-light", "width": 1600, "height": 1066},
      {"src": "public/images/japan/DSCF1374.webp", "alt": "A Japanese castle framed by cherry blossoms against a blue sky", "location": "Japan", "light": "daylight", "width": 1600, "height": 1066},
      {"src": "public/images/japan/DSCF1386.webp", "alt": "Hanging cherry blossoms above a red bridge and garden pond", "location": "Japan", "light": "daylight", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1582.webp", "alt": "Glowing signs above a street corner after dark", "location": "Japan", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1602.webp", "alt": "A motorcyclist waiting at a railway crossing under city lights", "location": "Japan", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1702.webp", "alt": "Mount Fuji rising beyond a field of colorful flowers", "location": "Japan", "light": "daylight", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1729.webp", "alt": "Visitors overlooking a sprawling city illuminated at night", "location": "Japan", "light": "night", "width": 1600, "height": 1066},
      {"src": "public/images/korea/DSCF1514.webp", "alt": "A blue-lit tower above the illuminated roof of a Korean pavilion", "location": "Korea", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/korea/DSCF1552.webp", "alt": "A pink sunset above a city skyline and distant hills", "location": "Korea", "light": "golden-hour", "width": 1600, "height": 1066},
      {"src": "public/images/korea/DSCF1567.webp", "alt": "Colorful illuminated lanterns hanging over patterned lantern figures", "location": "Korea", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/korea/DSCF1575.webp", "alt": "Illuminated high-rises beside a city stream at night", "location": "Korea", "light": "night", "width": 1600, "height": 2400},
      { src: "public/images/norway/norway1.webp", alt: "Soft light over snow-covered mountains and a quiet fjord", location: "Norway", light: "blue-hour", width: 1600, height: 1066 },
      {"src": "public/images/norway/DSCF1049.webp", "alt": "City lights outlining a harbor and bridge after dark", "location": "Norway", "light": "night", "width": 1600, "height": 1066},
      {"src": "public/images/sandiego/DSCF1756.webp", "alt": "Warm sunlight through an arch overlooking a domed conservatory", "location": "San Diego", "light": "golden-hour", "width": 1600, "height": 2400},
      {"src": "public/images/sandiego/DSCF1784.webp", "alt": "Waves breaking below coastal cliffs under a blue sky", "location": "San Diego", "light": "daylight", "width": 1600, "height": 2400},
      { src: "public/images/norway/DSCF1078.webp", alt: "Snowy mountains and shoreline houses across a dark fjord in blue light", location: "Norway", light: "blue-hour", width: 1600, height: 1066 },
      { src: "public/images/iceland/iceland3.webp", alt: "A waterfall flowing through a snow-covered landscape", location: "Iceland", light: "daylight", width: 1600, height: 1066 },
    ],
  },

  light: {
    title: ["Chasing", "the light."],
    subtitle: "A day around the world, told in photographs.",
    hero: {
      src: "public/images/norway/norway2.webp",
      alt: "Snow-covered Norwegian mountains across a fjord at blue hour",
    },
    defaultPeriod: "blue-hour",
    navigation: [
      { label: "Photography", href: "#photography" },
      { label: "Travel", href: "travel.html" },
      { label: "Films", href: "#films" },
      { label: "About", href: "info.html" },
    ],
    periods: [
      { id: "blue-hour", label: "Blue hour", icon: "twilight", backdrop: "public/images/norway/norway2.webp", backdropSrc: "public/images/backdrops/norway2.JPG", backdropSrcset: "public/images/backdrops/norway2-1920.webp 1920w, public/images/backdrops/norway2-3200.webp 3200w, public/images/backdrops/norway2-3888.webp 3888w" },
      { id: "first-light", label: "First light", icon: "sunrise", backdrop: "public/images/japan/DSCF1336.webp", backdropSrc: "public/images/backdrops/DSCF1336.JPG", backdropSrcset: "public/images/backdrops/DSCF1336-1920.webp 1920w, public/images/backdrops/DSCF1336-2592.webp 2592w" },
      { id: "daylight", label: "Daylight", icon: "sun", backdrop: "public/images/iceland/iceland2.webp", backdropSrc: "public/images/backdrops/iceland2.JPG", backdropSrcset: "public/images/backdrops/iceland2-1920.webp 1920w, public/images/backdrops/iceland2-3200.webp 3200w, public/images/backdrops/iceland2-4800.webp 4800w" },
      { id: "golden-hour", label: "Golden hour", icon: "sunset", backdrop: "public/images/korea/DSCF1552.webp", backdropSrc: "public/images/backdrops/DSCF1552.JPG", backdropSrcset: "public/images/backdrops/DSCF1552-1920.webp 1920w, public/images/backdrops/DSCF1552-3200.webp 3200w, public/images/backdrops/DSCF1552-4800.webp 4800w" },
      { id: "night", label: "Night", icon: "moon", backdrop: "public/images/norway/norway3.webp", backdropSrc: "public/images/backdrops/norway3.jpg", backdropSrcset: "public/images/backdrops/norway3-1920.webp 1920w, public/images/backdrops/norway3-3200.webp 3200w, public/images/backdrops/norway3-4240.webp 4240w" },
    ],
    filmsTitle: "Stories in motion",
    filmsLink: "Short films from the road.",
    emptyGallery: "More photographs to come. Explore another light.",
  },

  travel: {
    title: ["A few places.", "A thousand", "stories."],
    introduction: "Photographs from distant coasts, quiet cities, and wild landscapes. A little further from the everyday.",
    defaultDestination: "iceland",
    connections: [["iceland", "norway"], ["norway", "portugal"], ["korea", "japan"], ["zion", "san-diego"]],
    destinations: [
      { id: "iceland", name: "Iceland", region: "Fire & ice", folder: "public/images/iceland/", cover: "iceland1.webp", coordinates: [-19, 64.9], labelOffset: [-16, -23], description: "Black-sand shores, falling water, and a landscape shaped by the elements." },
      { id: "norway", name: "Norway", region: "Scandinavia", folder: "public/images/norway/", cover: "norway3.webp", coordinates: [11, 64], labelOffset: [18, -18], description: "Snow-covered fjords, blue mountain silhouettes, and light moving across the night sky." },
      { id: "portugal", name: "Portugal", region: "The Atlantic edge", folder: "public/images/portugal/", cover: "portugal1.webp", coordinates: [-8.2, 39.4], labelOffset: [-19, 24], description: "Warm stone, colorful palaces, and small details found along the city streets." },
      { id: "japan", name: "Japan", region: "Blossoms & neon", folder: "public/images/japan/", cover: "DSCF1336.webp", coordinates: [138.2, 36.2], labelOffset: [19, 19], description: "Cherry blossoms beneath Mount Fuji, quiet gardens, and streets that come alive after dark." },
      { id: "korea", name: "Korea", region: "Lanterns & late nights", folder: "public/images/korea/", cover: "DSCF1552.webp", coordinates: [127.9, 36.5], labelOffset: [-16, -25], description: "Pink skies over the city, lantern-lit evenings, and reflections along the water." },
      { id: "zion", name: "Zion", region: "Red rock country", folder: "public/images/zionnps/", cover: "zionnps1.webp", coordinates: [-113.03, 37.3], labelOffset: [20, -25], description: "Sandstone walls, winding canyon roads, and a sky full of stars." },
      { id: "san-diego", name: "San Diego", region: "Pacific daydreams", folder: "public/images/sandiego/", cover: "DSCF1784.webp", coordinates: [-117.16, 32.72], labelOffset: [-19, 25], description: "Pacific cliffs, sea air, and warm afternoon light beneath garden arches." },
    ],
  },

  videos: [
    {
      location: "London",
      title: "A Weekend in London | Osmo Pocket 4 & Fujifilm X100VI",
      category: "Travel",
      runtime: "3:20",
      thumbnail: "https://i.ytimg.com/vi/E0v2010s7Qo/hq720.jpg",
      url: "https://www.youtube.com/watch?v=E0v2010s7Qo",
    },
    {
      location: "San Diego",
      destination: "san-diego",
      title: "Summertime San Diego | Osmo Pocket 4 & Fujifilm X100VI",
      category: "Travel",
      runtime: "2:11",
      thumbnail: "https://i.ytimg.com/vi/Ou2aEb-f8YM/hq720.jpg",
      url: "https://www.youtube.com/watch?v=Ou2aEb-f8YM",
    },
    {
      location: "Japan",
      destination: "japan",
      title: "A Slice of Japan | Cinematic Travel Film | Fujifilm X100VI",
      category: "Travel",
      runtime: "3:54",
      thumbnail: "https://i.ytimg.com/vi/rz9JwXBtFHM/hq720.jpg",
      url: "https://www.youtube.com/watch?v=rz9JwXBtFHM",
    },
  ],

  info: {
    portrait: "public/images/portrait/portrait1.webp", // e.g. "public/images/portrait.webp"
    bio: [
      "I'm a DC-based travel photographer chasing the extraordinary moments, forgotten details and everything in between.",
      "I started traveling back in 2017 and since then, I've been to 5 continents and over 20 countries. Throughout my travels, I've captured cityscape moments, grand vistas in nature and life through different cultures",
      "Now I'm embarking on a journey of sharing these memories to the world and I hope you can join me as I learn a thing or two about art, cinematography and content creation."
    ],
    clients: [
      // { name: "Patagonia", years: "2022 — present" },
    ],
    gear: [
      "Fujifilm X100VI",
      "iPhone 17 Pro Max"
    ],
    elsewhere: [
      { label: "Instagram",  url: "https://instagram.com/yourhandle" },
      { label: "YouTube",    url: "https://www.youtube.com/@vineet.velmurugan" },
      // { label: "Newsletter", url: "" },
    ],
  },
};
