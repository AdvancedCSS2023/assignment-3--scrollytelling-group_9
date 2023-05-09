// const callback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         document.body.style.backgroundColor = entry.target.dataset.color;
//       }
//     });
//   };
  
//   const changes = document.querySelectorAll('.change');
  
//   const observer = new IntersectionObserver(callback, { threshold: .1 });
  
//   changes.forEach(change => {
//     observer.observe(change);
//   });

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    }
  });
};

const changes = document.querySelectorAll('.change');
const fish = document.querySelectorAll('.fish');

const observer = new IntersectionObserver(callback, { threshold: .9 });

changes.forEach(change => {
  observer.observe(change);
});

const howToFixElems = document.querySelectorAll('.scroll-section__howtofix');
const totalSections = howToFixElems.length;

document.addEventListener("DOMContentLoaded", function() {
  let fading = false;

  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    
    let activeIndex = Math.floor(scrollPercentage / (100 / totalSections));

    howToFixElems.forEach((elem, index) => {
      if (index === activeIndex) {
        elem.classList.remove("fade-out");
        elem.style.transform = `translateY(${scrollTop}px)`;
        fading = false;
      } else {
        elem.classList.add("fade-out");
        elem.style.transform = '';
        fading = true;
      }
    });
  });
});

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

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}
