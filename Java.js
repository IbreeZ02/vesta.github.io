const darkModeToggle = document.getElementById('dark-mode-toggle');
const content = document.querySelector('.content');

darkModeToggle.addEventListener('click', () => {
  content.classList.toggle('dark-mode');
});
