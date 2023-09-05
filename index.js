//BLACKJACK - MY VERSION

let firstCard = 5
let secondCard = 10

let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")

let total = 0
let totalEl = document.getElementById("total-el")

let message = ""
let messageEl = document.getElementById("message-el")

let hasBlackJack = false
let isAlive = true

function startGame() {
  total = 0
  totalEl.textContent = total
  renderGame(cards)
  score()
}

function renderGame(cards) {
  cardString = ""

  for (let count = 0; count < cards.length; count += 1) {
    cardString += ` ${cards[count]} `
    total += cards[count]
  }
  cardsEl.textContent = cardString
  totalEl.innerText = total
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

function newCard() {
  if (isAlive === false) {
    messageEl.textContent = "Click START to play again."
  }

  else {
    let card = 6
    cards.push(card)
    total += card

    totalEl.textContent = total

    score()
  }
}
