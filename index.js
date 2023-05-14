// Intersection Observer for background color change
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    }
  });
};

const changes = document.querySelectorAll('.change');
const colorObserver = new IntersectionObserver(callback, { threshold: .9 });

changes.forEach(change => {
  colorObserver.observe(change);
});

// Scroll event handling for .scroll-section__howtofix elements
const howToFixElems = document.querySelectorAll('.scroll-section__howtofix');
const totalSections = howToFixElems.length;

window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  
  let activeIndex = Math.floor(scrollPercentage / (100 / totalSections));

  howToFixElems.forEach((elem, index) => {
    if (index === activeIndex) {
      elem.classList.remove("fade-out");
      elem.style.transform = `translateY(${scrollTop}px)`;
    } else {
      elem.classList.add("fade-out");
      elem.style.transform = '';
    }
  });
});

// Intersection Observer for fade-in of .scroll-section__bottom
document.addEventListener("DOMContentLoaded", function() {
  const bottomText = document.querySelector('.scroll-section__bottom');

  const fadeInCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };

  const fadeInObserver = new IntersectionObserver(fadeInCallback, { threshold: 0.1 });
  fadeInObserver.observe(bottomText);
});
// to create particles for the toxic barrel on random areas within 5ww size.
const particles = document.querySelectorAll('.particle');

particles.forEach((particle, index) => {
  particle.style.left = `${83.5 + Math.random() * 5}vw`;
});