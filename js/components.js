function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Component niet gevonden: " + file);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
            if (callback) callback(); 
        })
        .catch(err => console.error(err));
}

function setActiveMenu() {
    const navLinks = document.querySelectorAll('nav ul li a');
    let currentPath = window.location.pathname.split("/").pop();
    if (currentPath === "") currentPath = "index.html";

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

loadComponent('header', 'header.html');
loadComponent('menu', 'menu.html', setActiveMenu);
loadComponent('footer', 'footer.html', () => {
    const script = document.createElement("script");
    script.src = "js/footer.js";
    document.body.appendChild(script);
});
