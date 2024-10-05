function after(url) {
    console.log('after() called');
    const button = document.querySelector('footer .transition');
    button.style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-top');
    // Force reflow to ensure the transition starts
    void overlay.offsetWidth;
    overlay.classList.add('show-bottom');
    console.log('Classes updated:', overlay.classList);
    overlay.addEventListener('transitionend', function handleTransitionEnd() {
        console.log('Transition ended');
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Delay to match the transition duration
        overlay.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function before(url) {
    console.log('before() called');
    const button = document.querySelector('header .transition');
    button.style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-bottom');
    // Force reflow to ensure the transition starts
    void overlay.offsetWidth;
    overlay.classList.add('show-top');
    console.log('Classes updated:', overlay.classList);
    overlay.addEventListener('transitionend', function handleTransitionEnd() {
        console.log('Transition ended');
        setTimeout(() => {
            window.location.href = url;
        }, 500); // Delay to match the transition duration
        overlay.removeEventListener('transitionend', handleTransitionEnd);
    });
}
