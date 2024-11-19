const events = document.querySelectorAll('.event');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            timelineObserver.unobserve(entry.target);
        }
    });
});

events.forEach(event => {
    timelineObserver.observe(event);
});