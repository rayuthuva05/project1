function filterCards() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("tutor-card");

    Array.from(cards).forEach(card => {
        const cardText = card.getAttribute("data-name").toLowerCase();
        
        if (searchInput === "") {
            card.style.display = "block";
        } else {
            card.style.display = cardText.includes(searchInput) ? "block" : "none";
        }
    });
}
