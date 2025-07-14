 document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".data-1, .data-2, .data-3, .data-4, .data-5, .data-6, .data-7");

        // Function to show a specific section and hide others
        function showSection(className) {
            sections.forEach(section => {
                section.style.display = section.classList.contains(className) ? "block" : "none";
            });
        }

        // Initial state: show data-1 (Mumbai), hide others
        showSection("data-1");

        // Add click events to all scroller buttons
        document.querySelector(".mumbai").addEventListener("click", () => showSection("data-1"));
        document.querySelector(".rajasthan").addEventListener("click", () => showSection("data-2"));
        document.querySelector(".sikkim").addEventListener("click", () => showSection("data-3"));
        document.querySelector(".telangana").addEventListener("click", () => showSection("data-4"));
        document.querySelector(".westb").addEventListener("click", () => showSection("data-5"));
        document.querySelector(".delhi").addEventListener("click", () => showSection("data-6"));
        document.querySelector(".goa").addEventListener("click", () => showSection("data-7"));
});