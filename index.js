const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = entry.target.dataset.color;
      }
    });
  };
  
  const changes = document.querySelectorAll('.change');
  
  const observer = new IntersectionObserver(callback, { threshold: .1 });
  
  changes.forEach(change => {
    observer.observe(change);
  });