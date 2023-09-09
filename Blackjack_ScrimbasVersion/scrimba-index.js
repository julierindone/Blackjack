// BLACKJACK - SCRIMBA VERSION
// This commit covers changes in lesson 34: Use a loop to render cards to 
let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")

let total = firstCard + secondCard
let totalEl = document.getElementById("total-el")

let message = ""
let messageEl = document.getElementById("message-el")

let hasBlackJack = false
let isAlive = true

function getRandomCard() {
  let randomCard = Math.floor((Math.random() * 12)) + 1
  console.log(randomCard)
  return randomCard
}

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
    let card = getRandomCard()
    total += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
