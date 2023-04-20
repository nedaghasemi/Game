let firstCard=6
let secondCard=9
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
//random number formula between 2-12 : Math.floor(Math.random() * 11) + 2;
let message=""


function startGame() {
    
if (sum <= 20){
    message="Do you want to draw a new card? 🙂"
} else if(sum===21){
    message="Wohoo! You've got Blackjack! 🥳"
    hasBlackJack=true
}else {
    message="You're out of the game! 😭"
    isAlive=false
}

console.log(hasBlackJack)
console.log(isAlive)
console.log(message)
}
