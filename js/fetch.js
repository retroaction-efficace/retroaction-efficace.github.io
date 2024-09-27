document.addEventListener('DOMContentLoaded', async () => {
  const components = [
    { selector: 'nav', url: 'components/nav.html' },
    { selector: 'header', url: 'components/header.html' },
    { selector: 'footer', url: 'components/footer.html' }
  ];

  await Promise.all(components.map(async ({ selector, url }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      document.querySelector(selector).innerHTML = await response.text();
    } catch (error) {
      console.error(`Error loading ${selector}:`, error);
    }
  }));
});
