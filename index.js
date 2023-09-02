let firstCard = 6
let secondCard = 9
let hasBlackJack = false
let isAlive = true
let message = ""

function isItBlackjack(firstCard, secondCard) {
  total = firstCard + secondCard
  console.log(`You've got ${total}...`)

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
  console.log(message)
}

function nextStep(hasBlackJack) {
  if (hasBlackJack == true) {
    console.log("Money, Money, Money!")
  }
  else if(hasBlackJack == false && isAlive == false) {
    console.log("YOU!\n   GET!!\n      NOTHING!!!\n\n (But you can play again if you like...\n    How about it?)")
  }
}

isItBlackjack(18, 2)
nextStep(hasBlackJack)