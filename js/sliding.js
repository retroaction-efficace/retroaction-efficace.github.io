function after(url) {
    document.querySelector('footer .transition').style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-top');
    overlay.classList.add('show-bottom');
    overlay.addEventListener('transitionend', function() {
        window.location.href = url;
    }, { once: true });
}

function before(url) {
    document.querySelector('header .transition').style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-bottom');
    overlay.classList.add('show-top');
    overlay.addEventListener('transitionend', function() {
        window.location.href = url;
    }, { once: true });
}
