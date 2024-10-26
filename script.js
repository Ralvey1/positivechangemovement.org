// script.js
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Basic validation
        if (name === "" || email === "") {
            alert("Please fill out both your name and email.");
            event.preventDefault(); // Prevent form submission if fields are empty
        } else {
            alert("Thank you for joining the Empowerment Network!");
        }
    });
});
