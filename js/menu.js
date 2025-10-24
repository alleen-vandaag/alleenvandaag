fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;

    // Active state logic:
    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add("active");

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
