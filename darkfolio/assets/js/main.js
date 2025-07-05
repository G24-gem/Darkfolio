window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const terminal = document.getElementById('terminal-intro');
  const main = document.getElementById('main-content');

  // Ensure loader is removed after intro finishes
  setTimeout(() => {
    if (loader) loader.style.display = 'none';
    if (terminal) terminal.style.display = 'none';
    if (main) main.classList.remove('hidden');
  }, 5000); // buffer time to avoid race conditions
});
