document.addEventListener('DOMContentLoaded', function() {
            fetch('components/header.html')
                .then(response => response.text())
                .then(data => {
                    document.querySelector('header').innerHTML = data;

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

                    document.querySelector('.nav').addEventListener('mouseleave', () => {
                        const nav = document.querySelector('.nav');
                        nav.style.width = '0';
                        document.querySelector('main').style.marginRight = '0';
                    });

                    const currentPage = window.location.pathname.split('/').pop();
                    const darkLogoPages = ['module-1.html', 'module-2.html', 'module-3.html'];
                    const colorLogo = document.getElementById('color');
                    const darkLogo = document.getElementById('dark');

                    if (darkLogoPages.includes(currentPage)) {
                        darkLogo.classList.add('visible');
                    } else {
                        colorLogo.classList.add('visible');
                    }
                });
        });
