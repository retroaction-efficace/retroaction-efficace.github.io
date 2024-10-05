document.addEventListener('DOMContentLoaded', function() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Add event listeners after loading the header
            document.querySelector('.menu').addEventListener('click', () => {
                const nav = document.querySelector('.nav');
                const main = document.querySelector('main');
                if (nav.style.width === '250px') {
                    nav.style.width = '0';
                    main.style.marginRight = '0';
                } else {
                    nav.style.width = '250px';
                    main.style.marginRight = '250px';
                }
            });

            document.querySelector('.close').addEventListener('click', () => {
                const nav = document.querySelector('.nav');
                nav.style.width = '0';
                document.querySelector('main').style.marginRight = '0';
            });
        });
});
