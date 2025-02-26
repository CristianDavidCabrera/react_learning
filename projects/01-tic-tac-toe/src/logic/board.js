import { WINNER_COMBOS } from "../constants";
export const checkWinnerFrom = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras para ver si ganó X o O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  //revisamos si hay empate si no existen espacios vacíos en el tablero

  return newBoard.every((square) => square !== null);
};
