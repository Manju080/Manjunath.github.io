// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
    
    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
        });
    });
    
    // Animation for sections when scrolled into view
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
            }
        });
    }, {threshold: 0.1});
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

mermaid.initialize({ startOnLoad: true });