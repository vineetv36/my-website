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
      { src: "public/images/iceland/iceland2.webp", alt: "Sunlight catching the falling water and mist of a waterfall", location: "Iceland", light: "golden-hour", width: 1600, height: 2400 },
      { src: "public/images/iceland/iceland3.webp", alt: "A waterfall flowing through a snow-covered landscape", location: "Iceland", light: "first-light", width: 1600, height: 1066 },
      { src: "public/images/norway/norway1.webp", alt: "Soft light over snow-covered mountains and a quiet fjord", location: "Norway", light: "first-light", width: 1600, height: 1066 },
      { src: "public/images/norway/norway2.webp", alt: "Snow-covered mountains across a dark fjord at blue hour", location: "Norway", light: "blue-hour", width: 1600, height: 1066 },
      { src: "public/images/norway/norway3.webp", alt: "Green northern lights above a snowy valley", location: "Norway", light: "night", width: 1600, height: 1068 },
      { src: "public/images/portugal/portugal1.webp", alt: "Warm light on Porto Cathedral framed by a narrow street", location: "Portugal", light: "golden-hour", width: 1600, height: 2400 },
      { src: "public/images/portugal/portugal2.webp", alt: "A yellow palace tower above stone walls", location: "Portugal", light: "daylight", width: 1600, height: 2400 },
      { src: "public/images/portugal/portugal3.webp", alt: "A glowing lantern beneath a colorful stained-glass ceiling", location: "Portugal", light: "daylight", width: 1600, height: 2400 },
      { src: "public/images/zionnps/zionnps1.webp", alt: "Low sunlight across the cliffs and valley of Zion", location: "Zion, Utah", light: "golden-hour", width: 1600, height: 2400 },
      { src: "public/images/zionnps/zionnps2.webp", alt: "The Milky Way stretching above a silhouetted stargazer", location: "Zion, Utah", light: "night", width: 1600, height: 2133 },
      { src: "public/images/zionnps/zionnps3.webp", alt: "A winding road beneath sunlit canyon walls", location: "Zion, Utah", light: "first-light", width: 1600, height: 2133 },
      {"src": "public/images/japan/DSCF1304.webp", "alt": "An illuminated restaurant sign on a dark Japanese street", "location": "Japan", "light": "night", "width": 1600, "height": 2400},
      {"src": "public/images/japan/DSCF1336.webp", "alt": "Snow-covered Mount Fuji framed by cherry blossoms", "location": "Japan", "light": "daylight", "width": 1600, "height": 2400},
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
      {"src": "public/images/norway/DSCF1003.webp", "alt": "Pale warm clouds above snowy mountains and an icy shoreline", "location": "Norway", "light": "first-light", "width": 1600, "height": 1066},
      {"src": "public/images/norway/DSCF1049.webp", "alt": "City lights outlining a harbor and bridge after dark", "location": "Norway", "light": "night", "width": 1600, "height": 1066},
      {"src": "public/images/sandiego/DSCF1756.webp", "alt": "Warm sunlight through an arch overlooking a domed conservatory", "location": "San Diego", "light": "golden-hour", "width": 1600, "height": 2400},
      {"src": "public/images/sandiego/DSCF1784.webp", "alt": "Waves breaking below coastal cliffs under a blue sky", "location": "San Diego", "light": "daylight", "width": 1600, "height": 2400},
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
      { label: "Films", href: "#films" },
      { label: "About", href: "info.html" },
    ],
    periods: [
      { id: "blue-hour", label: "Blue hour", icon: "twilight" },
      { id: "first-light", label: "First light", icon: "sunrise" },
      { id: "daylight", label: "Daylight", icon: "sun" },
      { id: "golden-hour", label: "Golden hour", icon: "sunset" },
      { id: "night", label: "Night", icon: "moon" },
    ],
    filmsTitle: "Stories in motion",
    filmsLink: "Short films from the road.",
    emptyGallery: "More photographs to come. Explore another light.",
  },

  travel: {
    destinations: [
      // { name: "Iceland", folder: "public/images/travel/iceland/", cover: "01.webp" },
    ]
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
      title: "Summertime San Diego | Osmo Pocket 4 & Fujifilm X100VI",
      category: "Travel",
      runtime: "2:11",
      thumbnail: "https://i.ytimg.com/vi/Ou2aEb-f8YM/hq720.jpg",
      url: "https://www.youtube.com/watch?v=Ou2aEb-f8YM",
    },
    {
      location: "Japan",
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
