// scripts.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to all logos
    const logos = document.querySelectorAll(".logo, .logo-card img");
    
    logos.forEach(logo => {
        logo.addEventListener("click", () => {
            alert(`You clicked on: ${logo.alt}`);
        });
    });

    // Example interactive behavior for logos
    const header = document.querySelector("header");

    logos.forEach(logo => {
        logo.addEventListener("mouseover", () => {
            header.style.backgroundColor = "#3e8e41"; // Darker green on hover
        });

        logo.addEventListener("mouseout", () => {
            header.style.backgroundColor = "#4CAF50"; // Reset to default
        });
    });
});
