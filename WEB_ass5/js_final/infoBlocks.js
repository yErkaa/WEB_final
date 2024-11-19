document.querySelectorAll('.info-block').forEach(block => {
    block.addEventListener('mouseover', () => {
        block.classList.add('animate__animated', 'animate__bounce');
    });
    block.addEventListener('mouseout', () => {
        block.classList.remove('animate__animated', 'animate__bounce');
    });
});