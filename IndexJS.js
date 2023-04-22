
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
var message="";


let sumEl=document.getElementById("sum-el");
//let sumEl=document.querySelector("#sum-el") 
let cardsEl=document.getElementById("cards-el");

function getRandomCard(){
    //random number formula between 2-12 : Math.floor(Math.random() * 11) + 2;

    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function renderGame() {
  sumEl.textContent="Sum: "+sum;
  var cardsNum="Cards: ";

  for(let i=0; i<cards.length; i++){
   cardsNum += cards[i]+",";
     }
  
    cardsNum=cardsNum.slice(0, -1); //removing the last ","
    cardsEl.textContent=cardsNum;

    if (sum <= 20){
    message="Do you want to draw a new card?";
        } else if(sum===21){
          message="Wohoo! You've got Blackjack!";
          hasBlackJack=true;
        }else {
         message="You're out of the game!";
         isAlive=false;
    }

    var messegeEl=document.querySelector("#message-el");
    console.log(messegeEl);
    messegeEl.textContent=message;
}


function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function NewCard(){
    if(isAlive==true && hasBlackJack==false){
    let card=getRandomCard();
    cards.push(card);
    sum+=card;
    renderGame();
  }
}
