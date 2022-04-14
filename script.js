let cardOpen = document.querySelector(".main-card-open");
let btnMore = document.querySelector(".btn-more-btn");
let deckCardsTwo = document.querySelector(".deck-cards-two");
let secBtnMore = document.querySelector(".btn-more-btn");

function closedButton() {
    cardOpen.style.display = "none"
}

function btnMoreF() {
    secBtnMore.style.display = "none"
    deckCardsTwo.style.display = "grid"
}