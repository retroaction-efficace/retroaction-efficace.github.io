function after(url) {
    document.querySelector('footer .transition').style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-top');
    overlay.classList.add('show-bottom');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

function before(url) {
    document.querySelector('header .transition').style.display = 'none';
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('iframe').src = url;
    overlay.classList.remove('show-bottom');
    overlay.classList.add('show-top');
    setTimeout(() => {
        window.location.href = url;
    }, 500); 
}
