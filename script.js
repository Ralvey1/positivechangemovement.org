document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();

            if (!name || !email) {
                alert("Please fill out both your name and email.");
                event.preventDefault(); // Stop form submission if fields are empty
            } else {
                alert("Thank you for joining the Empowerment Network!");
            }
        });
    }

    // Button click alert
    const myButton = document.getElementById("myButton");
    if (myButton) {
        myButton.addEventListener("click", function () {
            alert("Hello from External JavaScript!");
        });
    }

    // Highlight active navigation link
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load to check elements in viewport
});
