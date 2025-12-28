document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('backToTop');

    // 2. MOBILE MENU TOGGLE
    // Opens/closes the menu and swaps the bars icon for an "X"
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            
            const icon = hamburger.querySelector('i');
            if (icon) {
                // Toggles between FontAwesome 'bars' and 'times' (X)
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // 3. SCROLL EVENTS (Sticky Nav & Back to Top)
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;

        // Sticky Navbar Logic: Triggered after 50px of scrolling
        if (navbar) {
            if (scrollValue > 50) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        // Back to Top Button Visibility: Triggered after 300px
        if (backToTopBtn) {
            if (scrollValue > 300) {
                backToTopBtn.style.display = "block";
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
    // This looks for all elements with reveal classes and adds 'revealed' 
    // when they enter the user's viewport.
    const itemsToAnimate = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-item, .reveal-element');

    const observerOptions = {
        root: null, // Relative to the browser viewport
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once animated to save browser resources
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    itemsToAnimate.forEach(item => {
        revealObserver.observe(item);
    });

    // 6. AUTO-CLOSE MOBILE MENU ON LINK CLICK
    // Prevents the menu from staying open if a user clicks an anchor link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
});
