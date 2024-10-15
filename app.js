let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const showWinner = (userWin , compChoice , userChoice) => {
   if(userWin){
    userScore++;
    userScorepara.textContent = userScore;
    msg.innerHTML = `You Wins! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
   }
   else{ 
    compScore++;
    compScorepara.textContent = compScore;
    msg.innerHTML = `You Lose. ${compChoice} beats Your ${userChoice}`
    msg.style.backgroundColor = "red";
   }
}

const draw = () => {
    msg.innerHTML = "It's a Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) =>{
  const compChoice = getcompchoice();
  
  if(userChoice === compChoice){
    draw();
  }
  else {
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ?false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice , userChoice);
  }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
