document.addEventListener('DOMContentLoaded', () => {

    /* === HAMBURGER === */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    /* === STICKY NAV === */
    const navbar = document.getElementById('main-navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY > 50);
    });

    /* === REVEAL + TIMELINE === */
    const reveals = document.querySelectorAll(
        '.reveal-element, .reveal-item, .reveal-left, .reveal-right, .timeline-container'
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all items we want to animate
    const itemsToAnimate = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-item');

    // 2. Setup the Observer
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters the viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'revealed' class
                entry.target.classList.add('revealed');
                // Once it's shown, we don't need to observe it anymore
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Start observing each item
    itemsToAnimate.forEach(item => {
        observer.observe(item);
    });
});
