// ================================
// Khana Pina - JavaScript
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Search Box
    // -----------------------------

    const searchBox = document.querySelector("main input");

    if (searchBox) {

        searchBox.addEventListener("focus", function () {
            this.placeholder = "Type your favorite food...";
        });

        searchBox.addEventListener("blur", function () {
            this.placeholder = "Search for Restaurant, cuisine or a Dish";
        });

        // Search message
        searchBox.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                const searchValue = this.value.trim();

                if (searchValue !== "") {
                    alert("Searching for: " + searchValue);
                } else {
                    alert("Please enter a restaurant, cuisine or dish.");
                }
            }
        });

    }


    // -----------------------------
    // Navigation Animation
    // -----------------------------

    const navLinks = document.querySelectorAll("header a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Small click animation
            this.style.transform = "scale(0.9)";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

            // DO NOT use event.preventDefault()
            // The browser will now open the linked page.
        });

    });


    // -----------------------------
    // Logo Hover Effect
    // -----------------------------

    const logo = document.querySelector(".logo img");

    if (logo) {

        logo.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(-3deg) scale(1.08)";
        });

        logo.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(0deg) scale(1)";
        });

    }


    // -----------------------------
    // Main Image Animation
    // -----------------------------

    const mainImage = document.querySelector("main img");

    if (mainImage) {

        mainImage.addEventListener("click", function () {

            this.style.transform = "scale(1.1) rotate(2deg)";

            setTimeout(() => {
                this.style.transform = "scale(1) rotate(0deg)";
            }, 300);

        });

    }

});