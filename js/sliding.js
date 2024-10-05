function after(url) {
    const button = document.querySelector('footer .transition');
    button.style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-top');
    overlay.classList.add('show-bottom');
    overlay.addEventListener('transitionend', function handleTransitionEnd() {
        window.location.href = url;
        overlay.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function before(url) {
    const button = document.querySelector('header .transition');
    button.style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-bottom');
    overlay.classList.add('show-top');
    overlay.addEventListener('transitionend', function handleTransitionEnd() {
        window.location.href = url;
        overlay.removeEventListener('transitionend', handleTransitionEnd);
    });
}
