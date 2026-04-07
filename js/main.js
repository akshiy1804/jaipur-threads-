document.addEventListener("DOMContentLoaded", () => {

    const titles = document.querySelectorAll('h2, h3.animate-on-scroll');
    titles.forEach(title => {
        if (!title.classList.contains('animate-title')) {
            title.classList.add('animate-title');
        }
    });

    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

            }
        });
    }, { threshold: 0.1 });

    titles.forEach(title => titleObserver.observe(title));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
