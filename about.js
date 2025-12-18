document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('backToTop');

    // 1. Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 2. Scroll Events (Sticky Nav & Back to Top)
    window.addEventListener('scroll', () => {
        // Sticky Navbar
        navbar.classList.toggle('sticky', window.scrollY > 50);

        // Back to Top Button Visibility
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // 3. Back to Top Click Action
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Reveal Animations on Scroll
    const itemsToAnimate = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-item, .reveal-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    itemsToAnimate.forEach(item => observer.observe(item));
});
