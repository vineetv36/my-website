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
