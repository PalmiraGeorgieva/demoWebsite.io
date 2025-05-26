document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // предотвратява презареждането на страницата
    alert('Съобщението ви е изпратено успешно!');
});
const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });