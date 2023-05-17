const winner = document.getElementById("winner-text");
const playerScore = document.getElementById("playerScore");
const aiScore = document.getElementById("aiScore");
const add = document.getElementById("addScore");
const playerHand = document.getElementById("playerHand");
const aiHand = document.querySelector(".computer");
const handWinner = document.getElementById("winnerHand");
//button to reset the game and refresh the page
const resetButton = document.getElementById("reset");
resetButton.classList.add("hide");

const playerOptions = document.querySelectorAll(".options button");

let player = 0;
let computer = 0;

const aiChoices = ["boulder", "parchment", "shears"];

playerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    handWinner.innerText = "";
    //Computer Choice
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = aiChoices[computerNumber];
    const playerChoice = option.className.toString().split(" ")[1];

    playerHand.name = playerChoice;

    aiHand.src = `./games/rock-paper-scissors/assets/${computerChoice}.png`;

    playerHand.src = `./games/rock-paper-scissors/assets/${playerChoice}.png`;

    playerScore.innerText = player;
    aiScore.innerText = computer;

    if (computerChoice === playerChoice) {
      handWinner.innerText = "Its a draw!";
    }
    if (computerChoice === "boulder") {
      if (playerChoice === "parchment") {
        handWinner.innerText = "You win this hand";
        player++;
      } else if (playerChoice === "shears") {
        handWinner.innerText = "Computer wins this hand";
        computer++;
      }
    }

    if (computerChoice === "shears") {
      if (playerChoice === "boulder") {
        handWinner.innerText = "You win this hand";
        player++;
      } else if (playerChoice === "parchment") {
        handWinner.innerText = "Computer wins this hand";
        computer++;
      }
    }

    if (computerChoice === "parchment") {
      if (playerChoice === "shears") {
        handWinner.innerText = "You win this hand";
        player++;
      } else if (playerChoice === "boulder") {
        handWinner.innerText = "Computer wins this hand";
        computer++;
      }
    }
    if (player === 3) {
      winner.innerText = "Player wins!";
      resetButton.classList.remove("hide");

      playerOptions.forEach((option) => {
        option.classList.add("hide");
      });
    } else if (computer === 3) {
      winner.innerText = "Computer wins!";
      resetButton.classList.remove("hide");
      playerOptions.forEach((option) => {
        option.classList.add("hide");
      });
    }
  });
});
