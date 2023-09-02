let firstCard = 0
let secondCard = 0
let newestCard = 0

let cards = ""
let cardsEl = document.getElementById("cards-el")

let total = 0
let totalEl = document.getElementById("total-el")

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")


function startGame() {
  renderGame(11, 4)
}

function renderGame(firstCard, secondCard) {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  total = firstCard + secondCard
  totalEl.innerText = `${total}`

  score()
}

function score() {
  if (total <= 20) {
    message = "Do you want to draw another card?"
  }
  else if (total == 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  }
  else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard(newestCard) {
  newestCard = 3 // temp value

  if (isAlive == true && hasBlackJack == false) {
    
    total += newestCard
    totalEl.textContent = total
    cardsEl.textContent += ` ${newestCard}`
    
    score()
  }
  else {
    messageEl.textContent = "Click START to play again."
    isAlive = true
    hasBlackJack = false
  }
}
