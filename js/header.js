document.addEventListener('DOMContentLoaded', function() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Add event listeners after loading the header
            document.querySelector('.menu').addEventListener('click', () => {
                document.querySelector('.nav').classList.toggle('hidden');
            });

            document.querySelector('.nav').addEventListener('mouseleave', function() {
                this.classList.add('hidden');
            });
        });
});
