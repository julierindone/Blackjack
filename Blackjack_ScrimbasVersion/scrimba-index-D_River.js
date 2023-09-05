// BLACKJACK - SCRIMBA VERSION

// Both versions have gone off the rails at this point. 
let firstCard = 3
let secondCard = 8
let cards = [firstCard, secondCard]
let total = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  total = 0
  cards = [firstCard, secondCard]
  // cardString = ""
  totalEl.textContent = total
  renderGame(cards)
  score()
}

function renderGame(cards) {
  cardString = `Cards:`

  for (let count = 0; count < cards.length; count += 1) {
    cardString += ` ${cards[count]} `
    total += cards[count]
  }
  cardsEl.textContent = cardString
  totalEl.textContent = `Total: ${total}`

  // score()
}

function score() {
  if (total <= 20) {
    message = "Do you want to draw another card?"
    isAlive= true
  }
  else if (total == 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
    isAlive= false
    total = 0

  }
  else {
    message = "You're out of the game!"
    isAlive = false
    total = 0
  }
  messageEl.textContent = message
}

function newCard() {
  console.log("isAliveinside newCard() " + isAlive)

  if (isAlive === false) {
    messageEl.textContent = "CLICK START TO PLAY AGAIN"
  }
  
  else {
  // if (isAlive=== true) {
    let card = 6
    cards.push(card)
    total += card
    console.log("newCard pre-score() total: " + total)

    totalEl.textContent = `Total: ${total}`

    score()
  }
}