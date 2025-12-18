document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('backToTop');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navLinks.classList.remove('open');
            hamburger.querySelector('i').className = 'fas fa-bars';
        }
    });

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('sticky', window.scrollY > 50);
        backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
