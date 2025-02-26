import { WINNER_COMBOS } from "../constants";

/**
 * @function checkWinnerFrom
 * @description Revisa todas las combinaciones ganadoras posibles para determinar si hay un ganador en el tablero.
 * Si una de las combinaciones está completa con el mismo jugador (X o O), devuelve el jugador ganador.
 * Si no hay ganador, devuelve null.
 * 
 * @param {Array} boardToCheck - El estado actual del tablero (un array de 9 elementos donde cada uno es X, O, o null).
 * 
 * @returns {string | null} El jugador ganador ("X" o "O") si hay un ganador, o null si no hay ganador.
 */
export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para ver si ganó X o O
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // Devuelve X o O si la combinación es ganadora
    }
  }

  return null; // Si no hay ganador, devuelve null
};

/**
 * @function checkEndGame
 * @description Revisa si el juego ha terminado en empate, lo que sucede cuando no quedan espacios vacíos en el tablero.
 * 
 * @param {Array} newBoard - El estado actualizado del tablero (un array de 9 elementos donde cada uno es X, O, o null).
 * 
 * @returns {boolean} Devuelve true si el juego terminó en empate (sin espacios vacíos), o false si hay espacios vacíos.
 */
export const checkEndGame = (newBoard) => {
  // Revisa si hay empate si no existen espacios vacíos en el tablero
  return newBoard.every((square) => square !== null); // Devuelve true si todas las casillas están ocupadas
};
