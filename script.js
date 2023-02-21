
function name_id() {
  const nameForm = document.getElementById("nameForm");
  const welcomeMsg = document.getElementById("welcomeMsg");
  const container = document.getElementById("container");

  var input = document.getElementById("name_id").value;

  //storing the name so i can use it in different pages
  window.name = input;

  //styles to do the transition
  nameForm.style.display = "none";

  welcomeMsg.style.display = "flex";
  document.getElementById("welcome").innerText = "Welcome, " + input;

  setTimeout(function () {
    window.location.href = "game.html";
  }, 8500);
  //end os styles

}

//displaying the name in game.html
document.getElementById("score1").innerText = window.name + "\n0";

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
const container = document.getElementById("container");
const restartPage = document.getElementById("restartPage");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    //for (let i = 0; i < 5; i++) {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    let results = playRound(playerSelection, computerSelection);
    if (results.includes("Winner")) {
      playerScore++;
      document.getElementById("score1").innerText = window.name + '\n' + playerScore;
      document.getElementById("whoWon").innerText = window.name + " won this round.";
    } else if (results.includes("Loser")) {
      computerScore++;
      document.getElementById("score2").innerText = 'Computer' + '\n' + computerScore;
      document.getElementById("whoWon").innerText = window.name + " lost this round.";
    } else if (results.includes("Draw")) {
      //i--;
      document.getElementById("whoWon").innerText = "It's a draw.";
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
        document.getElementById("resultMsg").innerText = window.name + " won.";
        container.style.display = "none";
        restartPage.style.display = "flex";
      } else if (computerScore > playerScore) {
        console.log("YOU LOSE");
        document.getElementById("resultMsg").innerText = "Computer won.";
        container.style.display = "none";
        restartPage.style.display = "flex";
      }
    }
  })
);




function playAgain() {
  window.location.href = "game.html";
}

function quitGame() {
  window.location.href = "index.html";
}

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
