import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({children, userName, initialIsFollowing}){

//ESTADO   
//estado, tenemos que importar el hook useState de react
//nos devuelve un array, en la primera posisción tenemos el estado actual
//y en la segunda posicon la formar de actualizarlo

//estas tres lineas se pueden destructurar 
/*
    const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1];
*/
//quedano así =>
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  

    const text = isFollowing ? 'Siguiendo':'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';


    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="avatar"  
                    src={`/images/${userName}.jpeg`}   
                />
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}


//Progapación de cambios.
// Cuando un padre sufre un cambio propaga los cambios a los hijos. 
// En cambio si solo cambia el hijo, el padre no cambia.
// La progapación es hacia abajo.

// Cuando se renderiza un componente padre, 
// también se renderizan los componentes hijos (aunque no haya sufrido cambios)

// Validación de props
TwitterFollowCard.propTypes = {
    children: PropTypes.node.isRequired,  // Validación para children (puede ser cualquier contenido)
    userName: PropTypes.string.isRequired,  // userName debe ser una cadena de texto y es obligatorio
    initialIsFollowing: PropTypes.bool  // initialIsFollowing debe ser un booleano
};
