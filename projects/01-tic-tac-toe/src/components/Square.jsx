import PropTypes from "prop-types";

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

// Validación de las props con PropTypes
Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};