fetch('components/footer.html')
  .then(response => response.text())
  .then(data => document.querySelector('footer').innerHTML = data);
