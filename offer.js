/**
 * UI CORE SCRIPT
 * Handles Navbar, Search, and Mobile Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const searchInput = document.querySelector('.search-input');
    const navLinks = document.querySelector('.nav-links');
    
    // 1. STICKY NAVBAR
    // Adds a 'sticky' class when you scroll down, making the bar blur/shrink
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // 3. MOBILE HAMBURGER MENU (If you add a button with id "hamburger")
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }
});