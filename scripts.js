// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const tags = document.querySelectorAll(".tag");
    const commandCards = document.querySelectorAll(".command-card");

    // Search filter
    searchBar.addEventListener("input", () => {
        const searchTerm = searchBar.value.toLowerCase();
        commandCards.forEach(card => {
            const text = card.querySelector("h3").textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Tag filter
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const filter = tag.dataset.filter;
            commandCards.forEach(card => {
                if (card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
