/**
 * @file TwitterFollowCard.js
 * @description Este archivo contiene el componente `TwitterFollowCard` que representa la tarjeta de un usuario en Twitter.
 * La tarjeta muestra el avatar del usuario, su nombre y nombre de usuario, y un botón para seguir o dejar de seguir al usuario.
 * Utiliza el hook `useState` de React para gestionar el estado de si el usuario está siendo seguido o no.
 * 
 * @module TwitterFollowCard
 */

import PropTypes from 'prop-types'; // Importa PropTypes para la validación de las propiedades (props) del componente.
import { useState } from 'react'; // Importa el hook `useState` de React para gestionar el estado dentro del componente.

 /**
  * @function TwitterFollowCard
  * @description Componente que representa una tarjeta de usuario con su avatar, nombre y nombre de usuario.
  * También tiene un botón que permite seguir o dejar de seguir al usuario.
  * 
  * @param {Object} props - Las propiedades que recibe el componente.
  * @param {ReactNode} children - El nombre completo del usuario que se muestra en la tarjeta.
  * @param {string} userName - El nombre de usuario de Twitter.
  * @param {boolean} initialIsFollowing - El estado inicial que indica si el usuario está siendo seguido.
  * 
  * @returns {JSX.Element} El JSX para renderizar la tarjeta del usuario con el botón de seguir.
  * 
  * @example
  * // Muestra una tarjeta para el usuario "cristiancc" que tiene el estado de ser seguido.
  * <TwitterFollowCard userName="cristiancc" initialIsFollowing={true}>Cristian Cabrera</TwitterFollowCard>
  */
export function TwitterFollowCard({children, userName, initialIsFollowing}) {

    // **ESTADO**
    // Utiliza el hook useState para gestionar el estado del botón (si el usuario está siendo seguido o no).
    // Devuelve un array donde la primera posición es el estado actual y la segunda es la función para actualizarlo.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    // **Condición del texto del botón**
    // Si el usuario está siendo seguido, el texto será "Siguiendo", en caso contrario será "Seguir".
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    // **Clase CSS del botón**
    // Si el usuario está siendo seguido, la clase CSS se actualiza para indicar el estado visual de seguimiento.
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    // **Manejo del click**
    // Esta función invierte el estado de seguimiento (es decir, si se está siguiendo al usuario o no).
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    // **Renderizado**
    // El JSX de la tarjeta sigue esta estructura:
    // - Un avatar del usuario.
    // - El nombre completo y el nombre de usuario.
    // - Un botón que cambia su texto y clase de acuerdo con el estado de seguimiento.
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="avatar"  
                    src={`/images/${userName}.jpeg`}   // El avatar se carga dinámicamente usando el nombre de usuario.
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>  {/* Muestra el nombre completo del usuario (pasado como children). */}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>  {/* Muestra el nombre de usuario. */}
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> {/* Muestra el texto del botón ("Seguir" o "Siguiendo"). */}
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>  {/* Texto alternativo que aparece al hacer hover o dependiendo del estado. */}
                </button>
            </aside>
        </article>
    );
}

// **Validación de las propiedades (Props)**
// Utiliza `PropTypes` para asegurar que las propiedades pasadas al componente sean del tipo esperado.
TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,  // La propiedad `children` puede ser cualquier tipo de contenido (generalmente el nombre completo del usuario).
    userName: PropTypes.string.isRequired,  // La propiedad `userName` debe ser una cadena de texto y es obligatoria.
    initialIsFollowing: PropTypes.bool  // La propiedad `initialIsFollowing` debe ser un booleano que indique el estado inicial de seguimiento.
};
