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

  overview: {
    photos: [
      { src: "public/images/norway/norway1.jpg", alt: "Norway" },
      { src: "public/images/norway/norway2.jpg", alt: "Norway" },
      { src: "public/images/portugal/portugal1.jpg", alt: "Portugal" },
      { src: "public/images/portugal/portugal2.jpg", alt: "Portugal" },
      { src: "public/images/zion/zion1.jpg", alt: "Zion National Park" },
      { src: "public/images/zion/zion2.jpg", alt: "Zion National Park" },
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
    portrait: "public/images/portrait/portrait.jpg", // e.g. "public/images/portrait.jpg"
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
      { label: "YouTube",    url: "https://youtube.com/@viewsbyvineet" },
      { label: "Newsletter", url: "" },
    ],
  },
};
