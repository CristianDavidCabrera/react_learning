/**
 * @function saveGameToStorage
 * @description Guarda el estado actual del juego en el almacenamiento local (localStorage) del navegador.
 * Se guarda el tablero y el turno del jugador para persistir el estado entre recargas de la página.
 * 
 * @param {Object} gameState - El estado actual del juego.
 * @param {Array} gameState.board - El tablero actual del juego (un array de 9 elementos donde cada uno es X, O, o null).
 * @param {string} gameState.turn - El turno del jugador actual, que puede ser "X" o "O".
 */
export const saveGameToStorage = ({ board, turn }) => {
  // Guarda la partida después de cada último movimiento
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

/**
 * @function resetGameStorage
 * @description Elimina el estado guardado del juego en el almacenamiento local (localStorage),
 * lo que permite reiniciar el juego desde cero.
 */
export const resetGameStorage = () => {
  // Elimina el estado guardado de la partida
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
