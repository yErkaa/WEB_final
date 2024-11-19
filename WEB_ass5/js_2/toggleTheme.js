
function toggleTheme() {
    setTimeout(() => {
        document.body.classList.toggle('night-theme');
        document.body.classList.toggle('day-theme');
    }, 2000);
}


document.getElementById('themeToggle').addEventListener('click', toggleTheme);

document.body.classList.add('day-theme');