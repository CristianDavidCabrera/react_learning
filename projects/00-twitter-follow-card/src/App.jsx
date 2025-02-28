/**
 * @file App.js
 * @description Este archivo contiene el componente principal `App` de la aplicación.
 * Se encarga de gestionar la lista de usuarios y de renderizar el componente `TwitterFollowCard` para cada uno de los usuarios.
 * 
 * @module App
 */

import './App.css'; // Importa los estilos específicos para la aplicación.
import { TwitterFollowCard } from './TwitterFollowCard'; // Importa el componente `TwitterFollowCard` que representa la tarjeta de un usuario.

 /**
  * @function App
  * @description Componente principal que gestiona la lista de usuarios y renderiza tarjetas de seguimiento para cada uno.
  * En esta función, se mapea la lista de usuarios y, para cada uno, se pasa un conjunto de propiedades al componente `TwitterFollowCard`.
  * El componente recibe `userName`, `initialIsFollowing` y el nombre completo del usuario como `children`.
  * 
  * @returns {JSX.Element} El JSX para renderizar la lista de tarjetas de seguimiento.
  * 
  * @example
  * // Mapea la lista de usuarios y renderiza una tarjeta de seguimiento para cada uno.
  * <TwitterFollowCard userName="cristiancc" initialIsFollowing={true}>Cristian Cabrera</TwitterFollowCard>
  */
export function App() {
    // Definición de la lista de usuarios, con el nombre de usuario, nombre completo y estado inicial de seguimiento.
    const users = [
        {
            userName: 'cristiancc',
            name: 'Cristian Cabrera',
            isFollowing: true
        },
        {
            userName: 'ppp',
            name: 'Pedro Perez',
            isFollowing: false
        },
        {
            userName: 'Raki',
            name: 'Ramón Izquierdo',
            isFollowing: true
        },
        {
            userName: 'Maru',
            name: 'Maria Ruiz',
            isFollowing: false
        }
    ];

    /**
     * @function renderUserCards
     * @description Mapea la lista de usuarios y renderiza un componente `TwitterFollowCard` para cada uno de ellos.
     * Cada tarjeta muestra el nombre de usuario, el nombre completo y un botón para seguir o dejar de seguir al usuario.
     * 
     * @returns {JSX.Element[]} Un arreglo de componentes `TwitterFollowCard` renderizados.
     */
    return (
        <>
            <section className='App'>
                {users.map(user => {
                    // Desestructuramos las propiedades del usuario.
                    const { userName, name, isFollowing } = user;

                    return (
                        /**
                         * @component TwitterFollowCard
                         * @description Este componente representa una tarjeta de usuario en la que se muestra el nombre de usuario,
                         * el nombre completo y un botón que permite seguir o dejar de seguir al usuario.
                         * 
                         * @param {string} userName - El nombre de usuario en Twitter.
                         * @param {boolean} initialIsFollowing - El estado inicial de si el usuario está siendo seguido o no.
                         * @param {string} children - El nombre completo del usuario que será mostrado en la tarjeta.
                         * 
                         * @example
                         * // Renderiza una tarjeta de seguimiento con el nombre de usuario y estado de seguimiento inicial.
                         * <TwitterFollowCard userName="cristiancc" initialIsFollowing={true}>Cristian Cabrera</TwitterFollowCard>
                         */
                        <TwitterFollowCard 
                            key={userName} // Usamos `userName` como key, ya que debe ser único para cada usuario.
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                        >
                            {name}    
                        </TwitterFollowCard>
                    );
                })}
            </section>
        </>
    );
}
