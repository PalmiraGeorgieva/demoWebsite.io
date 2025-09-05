// MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// FADE-IN ELEMENTS ON SCROLL
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);

      // Waves animations
      const waves = entry.target.querySelector('.waves');
      if (waves) waves.classList.add('playing');

      const awaves = entry.target.querySelector('.antenna-waves');
      if (awaves) awaves.classList.add('playing');
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});

// CONTACT FORM ALERT
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Съобщението ви е изпратено успешно!');
});

// COMMENT FORM
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const commentText = commentInput.value.trim();
  if (!commentText) return;

  const li = document.createElement('li');
  li.textContent = commentText;
  li.classList.add('fade-in-comment');
  
  commentsList.appendChild(li);
  commentInput.value = '';
});

// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 1000);
  }, 2000);

  centerWelcomeText();
  mainContent.style.display = 'block';
});

// CENTER WELCOME TEXT
function centerWelcomeText() {
  const homeSection = document.getElementById('home');
  const welcomeContainer = document.getElementById('welcome-container');

  if (!homeSection || !welcomeContainer) return;

  const homeHeight = homeSection.offsetHeight;
  const contentHeight = welcomeContainer.offsetHeight;
  const marginTop = Math.max((homeHeight - contentHeight) / 2, 20);

  welcomeContainer.style.marginTop = marginTop + 'px';
}

window.addEventListener('resize', centerWelcomeText);

// ABOUT SECTION REVEAL
const aboutContainer = document.querySelector('.about-us-container');

function revealAbout() {
  if (!aboutContainer) return;

  const top = aboutContainer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight - 100) {
    aboutContainer.classList.add('visible');
    window.removeEventListener('scroll', revealAbout);
  }
}

window.addEventListener('scroll', revealAbout);
revealAbout();
