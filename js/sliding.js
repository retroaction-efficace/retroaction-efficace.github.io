document.addEventListener('DOMContentLoaded', () => {
    const content = document.body;

    function loadPage(url, direction = 'top') {
        content.classList.add(direction);
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.className = '';
                    history.pushState(null, '', url); // Update the URL
                });
        }, 500); // Ensure this matches the CSS transition duration
    }

    document.querySelectorAll('a.transition').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            const direction = link.dataset.direction || 'top';
            loadPage(url, direction);
        });
    });

    window.addEventListener('popstate', () => {
        const url = window.location.pathname;
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
            });
    });
});
