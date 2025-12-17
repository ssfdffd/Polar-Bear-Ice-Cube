document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    const categories = document.querySelectorAll(".reveal");
    categories.forEach(cat => observer.observe(cat));
    
    // Optional: Click to "Zoom" effect
    const imgBoxes = document.querySelectorAll(".img-box");
    imgBoxes.forEach(box => {
        box.addEventListener("click", () => {
            box.classList.toggle("zoomed");
            // You could expand this to a full lightbox later
        });
    });
});