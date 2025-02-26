import PropTypes from "prop-types";
import { Square } from "./Square.jsx";

/**
 * @function WinnerModal
 * @description Componente que muestra un modal cuando hay un ganador o un empate en el juego.
 * Si hay un ganador, se muestra el nombre del jugador ganador; si es empate, se muestra "Empate".
 * También ofrece la opción de reiniciar el juego.
 * 
 * @param {Object} props - Las propiedades que recibe el componente.
 * @param {string | boolean | null} props.winner - El jugador ganador ("X" o "O"), 
 *        false si es un empate, o null si no hay un ganador.
 * @param {Function} props.resetGame - Función que reinicia el juego cuando se hace clic en "Empezar de nuevo".
 * 
 * @returns {JSX.Element | null} El componente WinnerModal renderizado o null si no hay un ganador.
 */
export function WinnerModal({ winner, resetGame }) {
  // Si no hay ganador, no renderiza el modal
  if (winner === null) return null;

  // Determina el texto que se mostrará en el modal (empate o ganador)
  const winnerText = winner === false ? "Empate" : "Ganó";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {/* Si hay un ganador, se muestra en un componente Square */}
        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}

// Validación de las props con PropTypes
WinnerModal.propTypes = {
  /**
   * @type {string | boolean | null}
   * @description El jugador ganador ("X" o "O"), false para empate o null si no hay ganador.
   */
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.null]),

  /**
   * @type {Function}
   * @description Función que reinicia el juego cuando se hace clic en el botón "Empezar de nuevo".
   */
  resetGame: PropTypes.func.isRequired,
};
