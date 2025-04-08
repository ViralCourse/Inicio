// Simple fade-in animation on scroll

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            } else {
                 // Optional: remove class if you want it to fade out when scrolling up
                 // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Observe elements with the .fade-in class
    const elementsToFade = document.querySelectorAll('.feature-item, .section-title, .cta h2, .cta p, .cta .btn');
    elementsToFade.forEach(el => {
        el.classList.add('fade-in'); // Add class initially to set starting state (opacity 0)
        fadeInObserver.observe(el);
    });

    // Smooth scroll for internal links (like the hero button)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

