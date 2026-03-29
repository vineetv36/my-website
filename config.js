const CONFIG = {
  name: "Your Name",
  email: "hello@yourname.com",

  nav: {
    links: [
      { label: "Photography", href: "index.html" },
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
    portrait: "public/images/portrait.jpg", // e.g. "public/images/portrait.jpg"
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
