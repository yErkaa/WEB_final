
function initHoverAnimation() {
    const mainImage = document.getElementById('mainImage');
    mainImage.addEventListener('mouseenter', () => {
        mainImage.style.transform = 'scale(1.1)';
    });
    mainImage.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
    });
}

initHoverAnimation();
