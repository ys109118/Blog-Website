document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navbar color change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Function to handle vignette effect on postcard hover
    const postcards = document.querySelectorAll('.postcard');
    postcards.forEach(postcard => {
        postcard.addEventListener('mouseover', function() {
            postcard.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            postcard.style.transform = 'translateY(-10px) scale(1.02)';
        });
        postcard.addEventListener('mouseout', function() {
            postcard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            postcard.style.transform = 'translateY(0) scale(1)';
        });
    });
});
