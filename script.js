function computerPlay() {
  const choiceArray = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * choiceArray.length);
  const computerChoice = choiceArray[random];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toString().toLowerCase();
  let results;

  if (player == computer) {
    results = "Draw";
  } else if (player == "scissors" && computer == "rock") {
    results = "Loser. Rock beats Scissors.";
  } else if (player == "scissors" && computer == "paper") {
    results = "Winner. Scissors beats Paper.";
  } else if (player == "rock" && computer == "paper") {
    results = "Loser. Paper beats Rock.";
  } else if (player == "rock" && computer == "scissors") {
    results = "Winner. Rock beats Scissors.";
  } else if (player == "paper" && computer == "scissors") {
    results = "Loser. Scissors beats Paper.";
  } else if (player == "paper" && computer == "rock") {
    results = "Winner. Paper beats Rock.";
  }

  return results;
}

//button to call playRound()
const buttons = document.querySelectorAll(".choiceBtn");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    //for (let i = 0; i < 5; i++) {
    const playerSelection = button.textContent;
    const computerSelection = computerPlay();
    let results = playRound(playerSelection, computerSelection);
    if (results.includes("Winner")) {
      playerScore++;
    } else if (results.includes("Loser")) {
      computerScore++;
    } else if (results.includes("Draw")) {
      //i--;
    }
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log(results);
    console.log("Your score:" + playerScore);
    console.log("Computer score:" + computerScore);
    //}
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        console.log("YOU WIN");
      } else if (computerScore > playerScore) {
        console.log("YOU LOSE");
      }
    }
  })
);

// const rockButton = document.querySelector('.rock');
// const paperButton = document.querySelector('.paper');
// const scissorsButton = document.querySelector('.scissors');

// let playerScore = 0;
// let computerScore = 0;
// //for (let i = 0; i<5;i++){
//     const playerSelection = window.prompt("Choose rock, paper, or scissors.", "rock");
//     const computerSelection = computerPlay();
//     let results = playRound(playerSelection, computerSelection);
//     if (results.includes("Winner")){
//         playerScore++;
//     }else if (results.includes("Loser")){
//         computerScore++;
//     }else if (results.includes("Draw")){
//         //i--;
//     }
//     console.log("You chose: " + playerSelection);
//     console.log("Computer chose: " + computerSelection);
//     console.log(results);
//     console.log("Your score:" + playerScore);
//     console.log("Computer score:" + computerScore);
// //}

// // if (playerScore>computerScore){
// //     console.log("YOU WIN");
// // }else {
// //     console.log("YOU LOSE");
// // }
