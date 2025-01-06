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

    // Tag filter with toggle functionality
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const isActive = tag.classList.contains("active");
            tags.forEach(t => t.classList.remove("active")); // Remove active class from all tags

            if (!isActive) {
                // Activate this tag
                tag.classList.add("active");

                // Filter commands
                const filter = tag.dataset.filter;
                commandCards.forEach(card => {
                    if (card.classList.contains(filter)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            } else {
                // Deactivate all (show all commands)
                tag.classList.remove("active");
                commandCards.forEach(card => card.style.display = "block");
            }
        });
    });
});
