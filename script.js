
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");

    const isOpen = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});
