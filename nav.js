document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Nav icons
  const icons = document.getElementById("nav-icons");
  if (icons && typeof CONFIG !== "undefined") {
    const iconSVGs = {
      mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
      youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98"/></svg>',
    };
    const a1 = document.createElement("a"); a1.href = "mailto:" + CONFIG.email; a1.innerHTML = iconSVGs.mail; a1.title = "Email"; icons.appendChild(a1);
    const igLink = CONFIG.info.elsewhere.find(e => e.label === "Instagram");
    if (igLink && igLink.url) { const a2 = document.createElement("a"); a2.href = igLink.url; a2.target = "_blank"; a2.innerHTML = iconSVGs.instagram; a2.title = "Instagram"; icons.appendChild(a2); }
    const ytLink = CONFIG.info.elsewhere.find(e => e.label === "YouTube");
    if (ytLink && ytLink.url) { const a3 = document.createElement("a"); a3.href = ytLink.url; a3.target = "_blank"; a3.innerHTML = iconSVGs.youtube; a3.title = "YouTube"; icons.appendChild(a3); }
  }

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
