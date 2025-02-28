import { useEffect, useState } from "react";

/**
 * FollowMouse Component
 * 
 * Este componente rastrea el movimiento del ratón en la pantalla y muestra un puntero que sigue su posición.
 * También permite activar o desactivar el puntero personalizado con el botón.
 * 
 * @component
 * @example
 * return (
 *   <FollowMouse />
 * )
 */
export const FollowMouse = () => {
  // Estado para controlar si el puntero está activado o desactivado
  const [enabled, setEnable] = useState(false);

  // Estado para almacenar la posición del ratón
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   * Efecto para rastrear el movimiento del ratón
   * 
   * Cuando el puntero está habilitado, se agrega un evento de 'pointermove'
   * para actualizar la posición del ratón y mover el puntero en consecuencia.
   * 
   * @effect
   * @see https://reactjs.org/docs/hooks-effect.html
   * 
   * @param {Object} event - El evento generado por el movimiento del puntero.
   * @returns {void}
   */
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    // Se activa el evento 'pointermove' solo si el puntero está habilitado
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    // Método de limpieza para remover el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  /**
   * Efecto para cambiar la clase del body cuando el puntero está habilitado
   * 
   * @effect
   * @see https://reactjs.org/docs/hooks-effect.html
   * 
   * @returns {void}
   */
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      {/* Puntero personalizado */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
          border: "1px, solid, #fff",
          borderRadius: "50%",
          opacity: "0.8",
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />
      {/* Botón para activar o desactivar el puntero */}
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
};