document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('backToTop');

    // 1. Hamburger Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 2. Scroll Logic
    window.addEventListener('scroll', () => {
        // Sticky Navbar
        navbar.classList.toggle('sticky', window.scrollY > 50);

        // Back to Top Button
        if (window.scrollY > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // 3. Back to Top Click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Reveal Animation (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    const categories = document.querySelectorAll(".reveal");
    categories.forEach(cat => observer.observe(cat));
});
