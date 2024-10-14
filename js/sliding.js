const carousel = document.querySelector('.carousel');
  let index = 0;

  document.querySelector('.right').addEventListener('click', () => {
    index = (index + 1) % 3; // Number of slides
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });

  document.querySelector('.left').addEventListener('click', () => {
    index = (index - 1 + 3) % 3; // Number of slides
    carousel.style.transform = `translateX(-${index * 100}%)`;
  });
