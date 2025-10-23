document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = lightbox.querySelector(".close");

  if (!gallery || !lightbox || !lightboxImg) return;

  let resizeObserver;

  gallery.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;

    const src = img.src;
    const alt = img.alt || "";
    const caption = img.dataset.caption || img.alt || "";

    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightboxCaption.textContent = caption;

    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";

    adjustCaptionWidth();

    if (resizeObserver) resizeObserver.disconnect();
    resizeObserver = new ResizeObserver(adjustCaptionWidth);
    resizeObserver.observe(lightboxImg);
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  function adjustCaptionWidth() {
    if (!lightboxImg || !lightboxCaption) return;
    const imgWidth = lightboxImg.getBoundingClientRect().width;
    lightboxCaption.style.width = `${imgWidth}px`;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightboxCaption.textContent = "";
    lightboxCaption.style.width = "auto";
    document.body.style.overflow = "";

    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  }
});