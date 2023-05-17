const cellOne = document.getElementById("div1");
const cellTwo = document.getElementById("div2");
const cellThree = document.getElementById("div3");
const cellFour = document.getElementById("div4");
const cellFive = document.getElementById("div5");
const cellSix = document.getElementById("div6");
const cellSeven = document.getElementById("div7");
const cellEight = document.getElementById("div8");
const cellNine = document.getElementById("div9");
const player = document.getElementById("player-turn");
const reStart = document.getElementById("restartBtn");

const cellValue = {
  div1: 1,
  div2: 2,
  div3: 3,
  div4: 4,
  div5: 5,
  div6: 6,
  div7: 7,
  div8: 8,
  div9: 9,
};

const cellVariables = {
  div1: cellOne,
  div2: cellTwo,
  div3: cellThree,
  div4: cellFour,
  div5: cellFive,
  div6: cellSix,
  div7: cellSeven,
  div8: cellEight,
  div9: cellNine,
};
const winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const playerOne = [];
const playerTwo = [];
let turn = true;
player.innerText = "Player one's turn";

const checkWinner = (user) => {
  const player = user.sort();

  for (let i = 0; i < winCombos.length; i++) {
    if (
      player.includes(winCombos[i][0]) &&
      player.includes(winCombos[i][1]) &&
      player.includes(winCombos[i][2])
    ) {
      for (cell in cellVariables) {
        cellVariables[cell].classList.add("noClick");
      }
      reStart.classList.remove("hide");
      return true;
    }
  }
  return false;
};

const whatCell = (cell, user) => {
  user.push(cellValue[cell]);
};

const playerHeader = (turn) => {
  turn
    ? (player.innerText = "Player one's turn")
    : (player.innerText = "Player two's turn");
};

const placeToken = (player, cell) => {
  const axe = document.createElement("img");
  axe.id = "axeID";
  axe.classList.add("thumb");
  axe.src = "./games/axes-and-shields/axe.png";
  const shield = document.createElement("img");
  shield.id = "shieldID";
  shield.classList.add("thumb");
  shield.src = "./games/axes-and-shields/shield.png";
  if (player === playerOne) {
    cellVariables[cell].appendChild(axe);
  } else {
    cellVariables[cell].appendChild(shield);
  }
};

const checkDraw = () => {
  let count = 0;
  for (const cell in cellVariables) {
    const classList = cellVariables[cell].classList;
    if (classList.contains("noClick")) {
      count++;
    }
  }

  if (count === 9) {
    player.innerText = "It's a draw!";
    reStart.classList.remove("hide");
  }
};

const playTurn = (cell) => {
  if (turn) {
    // checks cell number and adds to player array
    whatCell(cell, playerOne);
    turn = false;
    playerHeader(turn);
    // places player token in cell and stops that cell being clicked on
    placeToken(playerOne, cell);
    cellVariables[cell].classList.add("noClick");
    // checks play area for a draw
    checkDraw();
    // checks play area for a winner
    checkWinner(playerOne) ? (player.innerText = "Player one wins!") : null;
    //swaps turn to player two and changes the heading
  } else {
    whatCell(cell, playerTwo);
    turn = true;
    playerHeader(turn);

    placeToken(playerTwo, cell);
    cellVariables[cell].classList.add("noClick");
    checkDraw();
    checkWinner(playerTwo) ? (player.innerText = "Player two wins!") : null;
  }
};

const axeImage = document.getElementById("axeID");
const shieldImage = document.getElementById("shieldId");

const restart = () => {
  // Clear player arrays
  playerOne.length = 0;
  playerTwo.length = 0;

  // Clear cell contents and remove noClick class
  for (const cell in cellVariables) {
    cellVariables[cell].innerText = "";
    cellVariables[cell].classList.remove("noClick");
  }

  // Reset turn and player header
  turn = true;
  playerHeader(turn);

  // Hide the restart button
  document.getElementById("restartBtn").classList.add("hide");

  // Clear the game result message
  player.innerText = "Player one's turn";
};
