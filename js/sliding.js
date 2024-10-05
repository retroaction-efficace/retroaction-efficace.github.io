document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const transitionButtons = document.querySelectorAll('.transition');

    transitionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const direction = e.target.getAttribute('data-direction');

            if (direction === 'up') {
                overlay.classList.add('up');
            } else if (direction === 'down') {
                overlay.classList.add('down');
            }

            setTimeout(() => {
                // Replace with the actual navigation logic
                console.log(`Navigating to the next page with ${direction} slide`);
            }, 500);
        });
    });
});
