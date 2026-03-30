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
      { src: "public/images/iceland/iceland1.webp", alt: "iceland" },
      { src: "public/images/iceland/iceland2.webp", alt: "iceland" },
      { src: "public/images/iceland/iceland3.webp", alt: "iceland" },
      { src: "public/images/norway/norway1.webp", alt: "Norway" },
      { src: "public/images/norway/norway2.webp", alt: "Norway" },
      { src: "public/images/norway/norway3.webp", alt: "Norway" },
      { src: "public/images/portugal/portugal1.webp", alt: "Portugal" },
      { src: "public/images/portugal/portugal2.webp", alt: "Portugal" },
      { src: "public/images/portugal/portugal3.webp", alt: "Portugal" },
      { src: "public/images/zionnps/zionnps1.webp", alt: "Zion National Park" },
      { src: "public/images/zionnps/zionnps2.webp", alt: "Zion National Park" },
      { src: "public/images/zionnps/zionnps3.webp", alt: "Zion National Park" },
    ],
    // Cycles through as photos are placed. sq = square, tall = portrait 2 rows, wide = landscape 2 cols
    rhythm: ["tall", "sq", "sq", "sq", "sq", "wide", "sq", "tall", "sq", "sq", "sq", "sq"],
  },

  travel: {
    destinations: [
      // { name: "Iceland", folder: "public/images/travel/iceland/", cover: "01.webp" },
    ]
  },

  videos: [
    // {
    //   title: "Olympic Peninsula — Spring 2025",
    //   category: "Landscape",
    //   runtime: "8:42",
    //   thumbnail: "public/images/videos/olympic.webp",
    //   url: "https://youtube.com/watch?v=...",
    // },
  ],

  info: {
    portrait: "public/images/portrait/portrait1.webp", // e.g. "public/images/portrait.webp"
    bio: [
      "I'm a DC-based travel photographer chasing the extraordinary moments, forgetten details and everything in between.",
      "I started traveling back in 2017 and since then, I've been to 5 continents and over 20 countries. Throughout my travels, I've captured cityscape moments, grand vistas in nature and life through different cultures",
      "Now I'm embarking on a journey of sharing these memories to the world and I hope you can join me as I learn a thing or two about art, cinematogaphy and content creation."
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
      { label: "YouTube",    url: "https://youtube.com/@viewsbyvineet" },
      // { label: "Newsletter", url: "" },
    ],
  },
};
