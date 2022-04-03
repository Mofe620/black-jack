var myCards = document.querySelector("#cards");
var sum = document.querySelector("#sum");
var message = document.querySelector("#message");
var startBtn = document.querySelector("#startBtn");
var refresh = document.querySelector("#refresh");
var allCards = [];
var cardSum = 0;

function startGame(){
    renderGame()

}

function renderGame (){
   var newCard = Math.floor(Math.random()*13) + 1;
   allCards.push(newCard);
   myCards.textContent =  "Cards: " + allCards;
   cardSum += newCard;
   sum.textContent = "Sum: " + cardSum;
   startBtn.textContent = "New Card";

   if (cardSum === 21){
       message.textContent = "Woohoo! You've got BlackJack!!"
       startBtn.textContent = "Play Again";
   } else if (cardSum > 21) {
    message.textContent = "You lose...Game Over";
    sum.style.color = "red";
    sum.style.border = "2px dashed red";
    startBtn.textContent = "Play Again";

    //TRYING THINGS OUT. WONDERING HOW TO RELOAD THE GAME
    startBtn.remove();
    refresh = document.createElement("a");
    refresh.setAttribute('href', "index.html")
    refresh.setAttribute('id', "refresh-btn")
    refresh.textContent = "PLAY AGAIN";
    //refresh.addEventListener("click", window.location = "index.html");
    document.body.appendChild(refresh);
    //startBtn.addEventListener('mouseout', window.location.reload());
    //startBtn.setAttribute("onchange", window.location.reload());
   }
}