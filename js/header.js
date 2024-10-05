document.addEventListener('DOMContentLoaded', function() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Add event listeners after loading the header
            document.querySelector('.menu').addEventListener('click', () => {
                const nav = document.querySelector('.nav');
                if (nav.style.width === '250px') {
                    nav.style.width = '0';
                } else {
                    nav.style.width = '250px';
                }
            });

            document.querySelector('.nav').addEventListener('mouseleave', function() {
                this.style.width = '0';
            });
        });
});
