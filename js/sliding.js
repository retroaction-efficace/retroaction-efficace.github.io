document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    function loadPage(url, direction = 'top') {
        content.classList.add(`hidden-${direction}`);
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.className = '';
                });
        }, 500);
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            const direction = link.dataset.direction || 'top';
            loadPage(url, direction);
        });
    });
});
