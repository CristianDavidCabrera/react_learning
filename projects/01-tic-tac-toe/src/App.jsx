import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js";

function App() {
  /**
   * @description Inicializa el estado del tablero. Si hay un tablero guardado en localStorage, se carga, 
   * de lo contrario, se crea un tablero vacío.
   * @type {Array<null|string>} 
   * @default [null, null, null, null, null, null, null, null, null]
   */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  /**
   * @description Inicializa el estado del turno del jugador. Si hay un turno guardado en localStorage,
   * se carga, de lo contrario, el primer turno es para el jugador X.
   * @type {string} 
   * @default 'X'
   */
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  /**
   * @description Inicializa el estado del ganador. Puede ser:
   * - null (sin ganador)
   * - false (empate)
   * - 'X' o 'O' (ganador)
   * @type {null|boolean|string}
   */
  const [winner, setWinner] = useState(null);

  /**
   * @function resetGame
   * @description Reinicia el juego: resetea el tablero, el turno y el estado del ganador.
   * También limpia el almacenamiento local.
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null)); // Reinicia el tablero
    setTurn(TURNS.X); // Reinicia el turno al jugador X
    setWinner(null); // Reinicia el estado del ganador

    resetGameStorage(); // Limpia el almacenamiento local
  };

  /**
   * @function updateBoard
   * @description Actualiza el tablero y el turno después de que un jugador hace una jugada.
   * Guarda el estado actualizado del juego en el almacenamiento local y verifica si hay un ganador o empate.
   * @param {number} index - El índice de la casilla en el tablero.
   */
  const updateBoard = (index) => {
    // No actualiza la casilla si ya está ocupada o si ya hay un ganador
    if (board[index] || winner) return;

    // Actualiza el tablero con el turno actual
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el turno al siguiente jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guarda el estado actualizado en el almacenamiento local
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });

    // Verifica si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner); // Si hay ganador, actualiza el estado
      confetti(); // Muestra el efecto de confeti
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // Si el juego termina en empate, actualiza el estado
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {/* Renderiza cada casilla del tablero */}
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        {/* Muestra el turno de los jugadores */}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {/* Muestra el modal cuando hay un ganador */}
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
