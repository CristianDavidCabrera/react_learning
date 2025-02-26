import PropTypes from "prop-types";

/**
 * @function Square
 * @description Componente que representa una casilla en el tablero del juego Tic-Tac-Toe. 
 * Este componente maneja el evento de clic para actualizar el estado del tablero y 
 * aplica una clase adicional cuando la casilla está seleccionada.
 * 
 * @param {Object} props - Las propiedades que recibe el componente.
 * @param {ReactNode} props.children - El contenido que se mostrará dentro de la casilla (X, O).
 * @param {boolean} props.isSelected - Indica si la casilla está seleccionada por el turno actual.
 * @param {Function} props.updateBoard - Función que actualiza el tablero cuando se hace clic en una casilla.
 * @param {number} props.index - El índice de la casilla en el tablero (0-8).
 * 
 * @returns {JSX.Element} El componente Square renderizado.
 */
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Aplica una clase 'is-selected' si la casilla está seleccionada.
  const className = `square ${isSelected ? "is-selected" : ""}`;

  /**
   * @function handleClick
   * @description Maneja el clic en la casilla y actualiza el tablero
   */
  const handleClick = () => {
    updateBoard(index); // Llama a la función `updateBoard` con el índice de la casilla.
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

// Validación de las props con PropTypes
Square.propTypes = {
  /**
   * @type {ReactNode}
   * @description El contenido dentro de la casilla (X, O).
   */
  children: PropTypes.node,

  /**
   * @type {boolean}
   * @description Indica si la casilla está seleccionada (activa) en el turno actual.
   */
  isSelected: PropTypes.bool.isRequired,

  /**
   * @type {Function}
   * @description Función que actualiza el estado del tablero cuando se hace clic en la casilla.
   */
  updateBoard: PropTypes.func.isRequired,

  /**
   * @type {number}
   * @description El índice de la casilla en el tablero.
   */
  index: PropTypes.number.isRequired,
};
