function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Component niet gevonden: " + file);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback(); // roep functie aan nadat HTML in de DOM staat
        })
        .catch(err => console.error(err));
}

// Functie om de actieve link te markeren
function setActiveMenu() {
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "") currentPath = "index.html"; // fallback voor homepage

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Componenten laden en callback gebruiken voor menu
loadComponent('header', 'header.html');
loadComponent('menu', 'menu.html', setActiveMenu); // active class wordt nu pas gezet
loadComponent('footer', 'footer.html');