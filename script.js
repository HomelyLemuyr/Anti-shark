document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Get all the navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Add a click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Remove the "active" class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            link.classList.add("active");

            // Get the target section's ID from the link's href
            const targetId = link.getAttribute("href").substring(1);

            // Scroll smoothly to the target section
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});


/* Send Email */

const form = document.querySelector("form");

function sendEmail(){
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "serafima.d.ershova@gmail.com", /* Change to your prefered email - create account with it on Elasticemail*/
        Password : "437A014A724D2501DAD63CEEABBCFD23D470", /* Password on Elasticemail to your account - recieved after verification */
        SecureToken : "58b91b58-1a2c-4627-9cd7-2b940cc222a1", /* You can generate it on the https://smtpjs.com/ */
        To : 'serafima.d.ershova@gmail.com', /* Same as your Elastic account*/
        From : 'serafima.d.ershova@gmail.com',
        Subject : "Contact from Anti Shark",
        Body : "Name: " + document.getElementById("contactName").value
            + "<br>Email: " +  document.getElementById("contactEmail").value
            + "<br>Message: " +  document.getElementById("contactMessage").value
    }).then(
        message => alert(message)
    );
}

form.addEventListener ("submit", (e) => {
    e.preventDefault();

    sendEmail();

});