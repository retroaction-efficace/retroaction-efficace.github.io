document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded'); 

    const overlay = document.querySelector('.overlay');
    const transitionButtons = document.querySelectorAll('.transition');

    transitionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked');

            const direction = e.target.getAttribute('data-direction');
            const targetUrl = e.target.closest('a').href;
            console.log('Direction:', direction);
            console.log('Target URL:', targetUrl); 

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
