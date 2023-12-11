document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Add a click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section's ID from the link's href
            const targetId = link.getAttribute("href").substring(1);

            // Scroll smoothly to the target section
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
