// BLACKJACK - SCRIMBA VERSION

// Although we haven't been 100% on the same page up through the point of ,
// my version veered further away when it came to displaying cards after the first 2. 
//I solved the problem of listing by separating out the cards and total
// by putting them in a different method, while Per is creating an array.
// I'm not sure either is better, but maybe the array way will be more reusable. 
let firstCard = 5
let secondCard = 9
let cards = [firstCard, secondCard]
let total = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let totalEl = document.getElementById("total-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  console.log(`STARTGAME cards: ${cards}`)
  renderGame(cards)
  console.log("cards array from startGame after render: " + cards)
}

function renderGame(cards) {
  console.log(`BEGIN OF RENDERGAME cards: ${cards}`)
  cardString = `Cards:`
  // console.log("cardString: " + cardString)

  // for loop to include all cards in the text.
  for (let count = 0; count < cards.length; count += 1) {
    cardString += ` ${cards[count]} `
    total += cards[count]
    console.log(`INSIDE LOOP total: ${total}`)
  console.log("INSIDE LOOP cardString: " + cardString)

  }
  console.log("cardString post-loop: " + cardString)
  cardsEl.textContent = cardString

  console.log("END OF RENDERGAME total: " + total)

  // render out ALL the cards we have
  totalEl.textContent = `Total: ${total}`

  score()
}

function score() {
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
  console.log("START OF NEWCARD")
  console.log("START OF NEWCARD total: " + total)
  let card = 7
  cards.push(card)
  console.log("cards inside newcard: " + cards)
  total += card
  console.log(`END OF NEWCARD total: ${total}`)

  totalEl.textContent = `Total: ${total}`

  score()
}