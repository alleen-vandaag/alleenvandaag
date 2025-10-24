fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = data;

    const currentPage = window.location.pathname.split("/").pop();

    const links = menuContainer.querySelectorAll("a");

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
  })
  .catch(err => console.error("Menu kon niet geladen worden:", err));
