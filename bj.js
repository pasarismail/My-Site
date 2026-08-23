let cards = [];
let usedCards = [];
let sum = 0;
let message = "";
let h5 = document.getElementById("h5")
let cardsp = document.getElementById("cards")
let sump = document.getElementById("sum")
let divy = document.getElementById("imgimg")
let gotBJ = false;
let isOut = false;
let alrdyP = false;




function start() {
  
  if (!alrdyP) {
    alrdyP = true;
  cards.push(draw(), draw())
  }
}
function newCard() {

  if (!isOut && !gotBJ) {
    
  cards.push(draw())
  }
}
function restart() {
  alrdyP = false;
  gotBJ = false;
  isOut = false;
  divy.innerHTML = "";
  cardsp.innerHTML = "Cards :";
  sump.innerHTML = "";
  sum = 0;
  cards = [];
  usedCards = [];
  h5.textContent = "Let's try again"
}


function draw() {
  
  let suit = "";
  let cardId = "";
  let cardValue = 0;
  let drawn = "";
  let draws = "";
  
  do {
    draws = Math.floor(Math.random() * 4) + 1;
    drawn = Math.floor(Math.random() * 13) + 1;
    
    if (drawn === 1) {cardValue = 11} else if (drawn > 10) {cardValue = 10} else {cardValue = drawn}
    if (draws === 1) {suit = "s"} else if (draws === 2) {suit = "h"} else if (draws === 3) {suit = "d"} else if (draws === 4) {suit = "c"}
    cardId = `${drawn}-${draws}`;
    
  } while (usedCards.includes(cardId));
  usedCards.push(cardId);

  let img = document.createElement("img");
  img.src = `./cards/${drawn}-${suit}.jpg`
  divy.appendChild(img);
  cardsp.textContent ="Cards: ";
 
   sum += cardValue;
   sump.textContent = sum;

 
  if (sum === 21) {message = "You got BLACKJACK", gotBJ = true} else if (sum > 21) {message = "You are out", isOut = true} else {message = "Do you want to draw a new card"}
  h5.textContent = message;
  return cardValue;
}
