const inner = document.querySelector('.inner');
  const dots = document.querySelectorAll('.dot');
  let index = 0;

  const updateDots = () => {
    dots.forEach((dot, idx) => {
      dot.style.backgroundColor = idx === index ? '#717171' : '#bbb';
    });
  };

  document.querySelector('.right').addEventListener('click', () => {
    index = (index + 1) % 3; // Number of slides
    inner.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  });

  document.querySelector('.left').addEventListener('click', () => {
    index = (index - 1 + 3) % 3; // Number of slides
    inner.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  });

  updateDots();
