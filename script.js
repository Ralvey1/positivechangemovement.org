document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");
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
                event.preventDefault(); // Prevent form submit
            } else {
                alert("Thank you for reaching out to Positive Change Movement!");
            }
        });
    }

    // Highlight active nav link
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Smooth scroll to anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.getElementById(this.getAttribute("href").substring(1));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in elements on scroll
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
    handleScroll();
});
