document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelector(".scroll-section__content").classList.add("scroll-section__content--visible");
            } else {
                entry.target.querySelector(".scroll-section__content").classList.remove("scroll-section__content--visible");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
        observer.observe(section);
    });
});