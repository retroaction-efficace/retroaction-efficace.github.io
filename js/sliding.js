let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let indicators = document.getElementsByClassName("slide-indicator")[0];
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";

    indicators.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicators.innerHTML += (i <= slideIndex-1) ? '&#x25CF; ' : '&#x25CB; ';
    }
}

document.querySelector('.left').addEventListener('click', () => plusSlides(-1));
document.querySelector('.right').addEventListener('click', () => plusSlides(1));
