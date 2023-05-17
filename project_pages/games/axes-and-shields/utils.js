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

const checkWinner = (user) => {
  const player = user.sort();

  for (let i = 0; i < winCombos.length; i++) {
    if (
      player.includes(winCombos[i][0]) &&
      player.includes(winCombos[i][1]) &&
      player.includes(winCombos[i][2])
    ) {
      return true;
    }
  }
  return false;
};

module.exports = checkWinner;
