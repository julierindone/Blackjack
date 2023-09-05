// BLACKJACK - SCRIMBA VERSION
// At this commit, this file matches the code at the end of lesson 33: Use a loop to render cards.

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let total = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    totalEl.textContent = "Total: " + total
    if (total <= 20) {
        message = "Do you want to draw a new card?"
    } else if (total === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    total += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
