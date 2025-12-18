document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const backToTopBtn = document.getElementById('backToTop');

    /* Hamburger toggle */
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    /* Back to top */
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
