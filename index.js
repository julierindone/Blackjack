//BLACKJACK - MY VERSION

let cards = []
let cardsEl = document.getElementById("cards-el")

let total = 0
let totalEl = document.getElementById("total-el")

let message = ""
let messageEl = document.getElementById("message-el")

let hasBlackJack = false
let isAlive = false

// let player = {
//   name: "Julie",
//   chips: 500,
// }
// let playerEl = document.getElementById("player-el")

function getRandomCard() {
  // this is adjusting the face cards to be worth 10 points. 
  // However, it's also printing 10 when it should probably be printing "jack" "queen" or "king".
  // Also, the Ace-worth-1-or-10 thing is being simplified to 11, so that's not being done now.
  let cardNumber = Math.floor(Math.random() * 13) + 1
  let pointValue = 0

  switch (cardNumber) {
    case 1:
      pointValue = 11
      break;
    case 11:
    case 12:
    case 13:
      pointValue = 10
      break;

    default:
      pointValue = cardNumber
  }
  return pointValue
}

function startGame() {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  total = firstCard + secondCard
  console.log(`firstcard + secondcard is total ${total}`)
  cards = [firstCard, secondCard]
  isAlive = true

  // playerEl.textContent = `${player.name}: $${player.chips}`

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
  console.log(`${total} when starting score function`)
  if (total <= 20) {
    console.log("another card - under 21")
    message = "Do you want to draw another card?"
    isAlive = true

  }
  else if (total == 21) {
    console.log("blackjack: 21")
    message = "You've got Blackjack!"
    hasBlackJack = true
  }
  else {
    console.log("over 21")
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  console.log(`is alive? ${isAlive}`)
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
