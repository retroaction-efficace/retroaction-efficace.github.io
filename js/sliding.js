document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const overlay = document.querySelector('.overlay');
    const transitionButtons = document.querySelectorAll('.transition');

    transitionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked');

            const direction = e.target.getAttribute('data-direction');
            console.log('Direction:', direction);

            overlay.classList.remove('up', 'down');

            if (direction === 'up') {
                overlay.classList.add('up');
            } else if (direction === 'down') {
                overlay.classList.add('down');
            }

            setTimeout(() => {
                console.log(`Navigating to the next page with ${direction} slide`);
                overlay.classList.remove('up', 'down');
            }, 500); // Match this duration with the CSS transition duration
        });
    });
});
