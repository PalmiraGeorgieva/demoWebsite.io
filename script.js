document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // предотвратява презареждането на страницата
    alert('Съобщението ви е изпратено успешно!');
});
const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2, // колко да е видим елементът, за да стартира анимацията
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
const texts = [
  "Добре дошли на сайта ни!",
  "Оптичен интернет с най-висока скорост.",
  "Свържете се с нас за оферта.",
  "Насладете се на безпроблемна връзка."
];

const subtexts = [
  "Ние предлагаме качествени услуги.",
  "Стабилна и бърза връзка за дома и офиса.",
  "Обслужване на клиентите 24/7.",
  "Гарантираме надеждност и сигурност."
];


   let index = 0;
const mainText = document.getElementById('animated-text');
const subText = document.getElementById('animated-subtext');

// Генерираме всички span-ове веднъж
mainText.innerHTML = texts.map(t => `<span>${t}</span>`).join('');
subText.innerHTML = subtexts.map(t => `<span>${t}</span>`).join('');

mainText.querySelector('span').classList.add('active');
subText.querySelector('span').classList.add('active');

function changeText() {
  const mainSpans = mainText.querySelectorAll('span');
  const subSpans = subText.querySelectorAll('span');

  mainSpans.forEach(s => s.classList.remove('active'));
  subSpans.forEach(s => s.classList.remove('active'));

  mainSpans[index].classList.add('active');
  subSpans[index].classList.add('active');

  index = (index + 1) % texts.length;
}

setInterval(changeText, 4000);


// След това добавяме активирането на .waves.playing и .antenna-waves.playing

document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver, ако вече го имаш - използвай същия. Тук правя кратка версия:
  const observerOptions = { threshold: 0.25, rootMargin: "0px 0px -50px 0px" };
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");

      // ако вътре има .waves или .antenna-waves -> добавяме .playing
      const waves = entry.target.querySelector('.waves');
      if (waves) waves.classList.add('playing');

      const awaves = entry.target.querySelector('.antenna-waves');
      if (awaves) awaves.classList.add('playing');

      obs.unobserve(entry.target);
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
});

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const commentText = commentInput.value.trim();
  if (!commentText) return;
  
  // Създава нов елемент за коментар
  const li = document.createElement('li');
  li.textContent = commentText;
  
  // Добавяме класа с анимация
  li.classList.add('fade-in-comment');
  
  commentsList.appendChild(li);
  
  // Изчиства полето
  commentInput.value = '';
});

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
});
function centerWelcomeText() {
     const homeSection = document.getElementById('home');
  const welcomeContainer = document.getElementById('welcome-container');

  // Вземаме височината на секцията
  const homeHeight = homeSection.offsetHeight;
  const contentHeight = welcomeContainer.offsetHeight;

  // Изчисляваме горния margin, за да центрираме вертикално
  const marginTop = Math.max((homeHeight - contentHeight) / 2, 20); // минимум 20px
  welcomeContainer.style.marginTop = marginTop + 'px';
}
window.addEventListener('load', () => {
  centerWelcomeText();
  document.getElementById('main-content').style.display = 'block'; // показваме съдържанието след preloader
  document.getElementById('preloader').style.opacity = '0';
  setTimeout(() => { document.getElementById('preloader').style.display = 'none'; }, 1000);
});

// Центрираме при resize на прозореца
window.addEventListener('resize', centerWelcomeText);

const aboutContainer = document.querySelector('.about-us-container');

function revealAbout() {
  const top = aboutContainer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight - 100) { // когато секцията е почти видима
    aboutContainer.classList.add('visible');
    window.removeEventListener('scroll', revealAbout);
  }
}

window.addEventListener('scroll', revealAbout);
revealAbout(); // проверка при зареждане

