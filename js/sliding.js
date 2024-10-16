const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// Create indicators dynamically
const indicatorContainer = document.querySelector('.indicators');
indicatorContainer.innerHTML = ''; // Clear any existing indicators
slides.forEach((_, index) => {
  const indicator = document.createElement('a');
  indicator.href = '#';
  indicator.classList.add('indicator');
  indicator.dataset.index = index;
  indicator.textContent = '◯';
  indicatorContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.indicator');

document.querySelector('.right').addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

document.querySelector('.left').addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  indicators.forEach((indicator, index) => {
    indicator.textContent = index === currentIndex ? '⚫' : '◯';
  });
}

updateCarousel();
