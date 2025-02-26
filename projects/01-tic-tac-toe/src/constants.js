/**
 * @constant TURNS
 * @description Un objeto que define los dos posibles jugadores en el juego Tic-Tac-Toe.
 * Los jugadores se representan por los caracteres "×" y "o".
 * 
 * @type {Object}
 * @property {string} X - Representa el jugador X.
 * @property {string} O - Representa el jugador O.
 */
export const TURNS = {
  X: "×", // Representa al jugador X
  O: "o", // Representa al jugador O
};

/**
 * @constant WINNER_COMBOS
 * @description Un arreglo de combinaciones ganadoras para el juego Tic-Tac-Toe.
 * Cada combinación está representada por un array de tres índices del tablero (de 0 a 8) que corresponden
 * a una línea horizontal, vertical o diagonal ganadora.
 * 
 * @type {Array<Array<number>>}
 * @example
 * // La primera combinación [0, 1, 2] representa las casillas de la fila superior.
 * // [3, 4, 5] representa las casillas de la fila del medio, y así sucesivamente.
 */
export const WINNER_COMBOS = [
  [0, 1, 2], // Fila superior
  [3, 4, 5], // Fila del medio
  [6, 7, 8], // Fila inferior
  [0, 3, 6], // Columna izquierda
  [1, 4, 7], // Columna central
  [2, 5, 8], // Columna derecha
  [0, 4, 8], // Diagonal de izquierda a derecha
  [2, 4, 6], // Diagonal de derecha a izquierda
];
