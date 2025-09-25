function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}

const dropdownParents = document.querySelectorAll("nav ul li.has-dropdown > a");

dropdownParents.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); 
    const dropdown = link.nextElementSibling;
    dropdown.classList.toggle("show");
  });
});

const navLinks = document.querySelectorAll('nav ul li a');
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath) {
    link.classList.add('active');

    const parentDropdown = link.closest('.dropdown');
    if (parentDropdown) {
      const parentLink = parentDropdown.previousElementSibling;
      if (parentLink) parentLink.classList.add('active');
    }
  }
});