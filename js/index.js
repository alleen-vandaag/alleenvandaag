function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error("Component niet gevonden: " + file);
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(err => console.error(err));
}

// Componenten laden
loadComponent('header', 'header.html');
loadComponent('menu', 'menu.html');
loadComponent('footer', 'footer.html');
