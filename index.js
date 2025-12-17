document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('content-scroll');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.project-link');

    // Function to update active link
    const updateActiveLink = () => {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // If the section is roughly in the middle of the viewport
            if (scrollContainer.scrollTop >= sectionTop - 200) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Listen for scroll events in the right column
    scrollContainer.addEventListener('scroll', updateActiveLink);

    // Smooth scroll for clicks
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                scrollContainer.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
