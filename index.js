document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.stage-section');
    const navLinks = document.querySelectorAll('.nav-anchor1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});
/*
document.querySelectorAll(''.project-link-wrapper').forEach(link => {
                          link.addEventListener('click', function(e)) {
  e.preventDefault();
  const destination = this.href;
  
  this.querySelector('hero-statement').style.color = #1a3cff;
  
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5 ease';
  
  setTimeout(( = {
    window.location.href = destination;
  }, 500);
});

});
*/

document.querySelectorAll('.project-link-wrapper').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Pause the click
        const destination = this.href;

        // Visual feedback: Flash the text blue before leaving
        this.querySelector('.hero-statement').style.color = '#1a3cff';
        
        // Add a fade-out to the body
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';

        // Navigate after the animation finishes
        setTimeout(() => {
            window.location.href = destination;
        }, 500);
    });
});
