document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     ELEMENT REFERENCES
  ================================ */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.getElementById("main-navbar");
  const backToTopBtn = document.getElementById("backToTop");

  /* ================================
     MOBILE MENU TOGGLE
  ================================ */
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");

      const icon = hamburger.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });
  }

  /* ================================
     SCROLL EVENTS
     - Sticky Navbar
     - Back To Top Button
  ================================ */
  window.addEventListener("scroll", () => {

    // Sticky navbar
    if (navbar) {
      navbar.classList.toggle("sticky", window.scrollY > 50);
    }

    // Back to top button
    if (backToTopBtn) {
      backToTopBtn.style.display =
        window.scrollY > 300 ? "block" : "none";
    }

  });

  /* ================================
     BACK TO TOP CLICK
  ================================ */
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ================================
     SCROLL REVEAL ANIMATIONS
  ================================ */
  const animatedItems = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-item, .reveal-element"
  );

  if ("IntersectionObserver" in window && animatedItems.length > 0) {

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    animatedItems.forEach(item => observer.observe(item));
  }

});
