document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const transitionButtons = document.querySelectorAll('.transition');

    transitionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const direction = e.target.getAttribute('data-direction');
            const targetUrl = e.target.closest('a').href;

            overlay.classList.remove('up', 'down');

            if (direction === 'up') {
                overlay.classList.add('up');
            } else if (direction === 'down') {
                overlay.classList.add('down');
            }

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
