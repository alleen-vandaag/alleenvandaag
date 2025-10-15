const searchInput = document.getElementById('blog-search');
const searchButton = document.getElementById('search-button');
const blogCards = document.querySelectorAll('.blogkaart');

function filterBlogs() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
       
        blogCards.forEach(card => card.style.display = 'flex');
        return;
    }
    const regex = new RegExp(`\\b${query}\\b`, 'i'); 

    blogCards.forEach(card => {
        const title = card.querySelector('.blogtitel').textContent;
        const intro = card.querySelector('.blogintro').textContent;
        if (regex.test(title) || regex.test(intro)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

searchButton.addEventListener('click', filterBlogs);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterBlogs();
});

