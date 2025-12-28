document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('backToTop');

    // 2. MOBILE MENU TOGGLE
    // This handles the sliding menu and changes the icon to an "X" when open
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            
            // Toggle between the "bars" icon and the "X" (times) icon
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // 3. SCROLL EVENTS (Sticky Nav & Back to Top)
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        // Sticky Navbar: Adds 'sticky' class after scrolling 50px
        if (navbar) {
            navbar.classList.toggle('sticky', scrollValue > 50);
        }

        // Back to Top Button: Becomes visible after scrolling 300px
        if (backToTopBtn) {
            if (scrollValue > 300) {
                backToTopBtn.style.display = "flex"; // Using flex to keep icon centered
            } else {
                backToTopBtn.style.display = "none";
            }
        }
    });

    // 4. BACK TO TOP CLICK ACTION
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 5. REVEAL ANIMATIONS ON SCROLL (Intersection Observer)
    // This looks for your specific animation classes and adds 'revealed' when they enter the screen
    const itemsToAnimate = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-item, .reveal-element');

    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // triggers slightly before the element reaches the bottom
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once it has revealed, we stop observing it (animation happens only once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions
