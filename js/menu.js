document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split("/").pop(); // bv. 'benikverslaafd.html'

  // Zoek alle links in het menu
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    const href = link.getAttribute("href");

    // Check of dit de huidige pagina is
    if (href === currentPage) {
      link.classList.add("active");

      // Als dit een submenu-item is, markeer ook de parent link
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const parentLink = parentDropdown.parentElement.querySelector("a");
        if (parentLink) {
          parentLink.classList.add("active");
        }
      }
    }
  });
});
