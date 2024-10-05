document.addEventListener('DOMContentLoaded', () => {
    const content = document.body;

    function loadPage(url, direction = 'top') {
        console.log(`Adding class: ${direction}`);
        content.classList.add(direction);

        // Listen for the transition to end
        content.addEventListener('transitionend', function handleTransitionEnd() {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.className = '';
                    console.log('Content loaded and class removed');
                    history.pushState(null, '', url);
                });

            // Remove the event listener after it has fired
            content.removeEventListener('transitionend', handleTransitionEnd);
        }, { once: true }); 
    }

    document.querySelectorAll('a.transition').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            const direction = link.dataset.direction || 'top';
            console.log(`Link clicked: ${url}, direction: ${direction}`);
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
