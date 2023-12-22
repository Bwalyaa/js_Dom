const changeColor = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.backgroundColor = "black";
        });
    });
}