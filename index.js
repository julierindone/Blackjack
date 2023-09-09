//BLACKJACK - MY VERSION

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
  // this is adjusting the face cards to be worth 10 points. 
  // However, it's also printing 10 when it should probably be printing "jack" "queen" or "king".
  // Also, the Ace-worth-1-or-10 thing isn't happening yet.
  let cardNumber = Math.floor(Math.random() * 13) + 1
  let pointValue = 0

  console.log(`rCV is ${cardNumber}`)

  switch (cardNumber) {
    case 11:
    case 12:
    case 13:
      pointValue = 10
      break;

    default:
      pointValue = cardNumber
  }
  console.log(`this card is worth ${pointValue} points`)
  return pointValue
}

function startGame() {
  // totalEl.textContent = total
  renderGame()
}

function renderGame() {
  cardString = ""

  for (let count = 0; count < cards.length; count += 1) {
    cardString += ` ${cards[count]} `
  }
  cardsEl.textContent = cardString
  totalEl.innerText = total

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

function newCard() {
  if (isAlive === false || hasBlackJack === true) {
    messageEl.textContent = "Click START to play again."
  }

  else {
    let card = getRandomCard()
    total += card
    cards.push(card)
    console.log(`Total: ${total}`)
    console.log(`new card value: ${card}`)
    console.log(`cards: ${cards}`)
    renderGame()

    score()
  }
}
