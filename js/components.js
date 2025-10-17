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

loadComponent('header', 'partials/header.html');
loadComponent('menu', 'partials/menu.html', setActiveMenu);
loadComponent('footer', 'partials/footer.html', () => {
    const script = document.createElement("script");
    script.src = "js/footer.js";
    document.body.appendChild(script);
});

loadComponent('disclaimer', 'partials/disclaimer.html', () => {
    const popup = document.getElementById('disclaimer-popup');
    const closeBtn = document.getElementById('close-disclaimer');
    const openBtn = document.getElementById('open-disclaimer');

    if (!localStorage.getItem('disclaimerSeen')) {
        popup.classList.remove('minimized'); 
        closeBtn.style.display = 'block';
        openBtn.style.display = 'none';
        localStorage.setItem('disclaimerSeen', 'true'); 
    } else {
        popup.classList.add('minimized');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        popup.classList.add('minimized');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'block';
    });

    openBtn.addEventListener('click', () => {
        popup.classList.remove('minimized');
        closeBtn.style.display = 'block';
        openBtn.style.display = 'none';
    });
});
