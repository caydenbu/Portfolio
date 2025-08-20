const CARD = document.getElementById("odds-card");

let pixelChange = 5;
const YEXP = 1.1;
const MAXCARDS = 40;
let totalCards = 0;

function duplicateCard(card) {
    if (totalCards >= MAXCARDS) {
        // Stops anim and deletes are cloned cards
        setTimeout(
            () =>
                document
                    .querySelectorAll(".clone")
                    .forEach((el) => el.remove()),
            2000,
        );
        return;
    }
    const CLONE = card.cloneNode(true);
    CLONE.style.position = "absolute";
    CLONE.classList.add("clone");

    // New link because clones cover up main link
    CLONE.onclick = () => {
        window.open("https://github.com/caydenbu/BeatTheOdds", "_blank");
    };

    const RECT = card.getBoundingClientRect();
    const LEFT = RECT.left + window.scrollX; // page coords
    const TOP = RECT.top + window.scrollY; // page coords

    CLONE.style.left = LEFT - 5 + "px"; // 10px to the left
    CLONE.style.top = TOP + pixelChange + "px";
    pixelChange *= YEXP;

    document.body.appendChild(CLONE);
    totalCards++;
    setTimeout(() => duplicateCard(CLONE), 20);
}

CARD.onclick = () => {
    window.open("https://github.com/caydenbu/BeatTheOdds", "_blank");
};

CARD.addEventListener("mouseenter", () => {
    // reset animation and exec
    pixelChange = 5;
    totalCards = 0;
    duplicateCard(CARD);
});
