// BLACKJACK - SCRIMBA VERSION
// This commit covers changes in lesson 34: Use a loop to render cards to 
let cards = []
let cardsEl = document.getElementById("cards-el")

let total = 0
let totalEl = document.getElementById("total-el")

let message = ""
let messageEl = document.getElementById("message-el")

let hasBlackJack = false
let isAlive = false

let player = {
  name: "Julie",
  chips: 500,
}
let playerEl = document.getElementById("player-el")

function getRandomCard() {
  let randomCard = Math.floor((Math.random() * 12)) + 1
  console.log(`card drawn is ${randomCard}`)

  if (randomCard === 1) {
    return 11
  }
  else if (randomCard > 10) {
    return 10
  }

  else {
    return randomCard
  }
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  total = firstCard + secondCard
  cards = [firstCard, secondCard]
  isAlive = true

  playerEl.textContent = `${player.name}: $${player.chips}`

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
    isAlive = true
  } 
  else if (total === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === false || hasBlackJack === true) {
    messageEl.textContent = "Click START to play again."
    total = 0
    totalEl.textContent = total
  }

  else {
    let card = getRandomCard()
    total += card
    cards.push(card)
    
        console.log(`Total: ${total}`)
    console.log(`new card value: ${card}`)
    console.log(`cards: ${cards}`)

    renderGame()
  }
}
