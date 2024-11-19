const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
let currentIndex = -1;

console.log(navLinks);

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();

        if (currentIndex === -1) {
            currentIndex = 0;
        } else {
            if (event.key === "ArrowDown") {
                currentIndex = (currentIndex + 1) % navLinks.length;
            } else if (event.key === "ArrowUp") {
                currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            }
        }

        console.log("Фокус на элементе:", navLinks[currentIndex].textContent);
        navLinks[currentIndex].focus();
    }
});


