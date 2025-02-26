/**
 * @file index.js
 * @description Este archivo es el punto de entrada principal de la aplicación React. Se encarga de renderizar el componente raíz (`App`) dentro del contenedor con el id "root" en el DOM.
 * 
 * @module index
 */

import ReactDOM from 'react-dom/client'; // Importa la funcionalidad para crear un "root" en el DOM donde se renderiza la aplicación.
import { App } from './App.jsx'; // Importa el componente raíz `App` desde el archivo `App.jsx`, que contiene la estructura principal de la aplicación.
import './index.css'; // Importa los estilos globales de la aplicación para ser aplicados a todos los componentes.

/**
 * @constant root
 * @description Se crea el contenedor principal para la aplicación en el DOM utilizando `createRoot`. Este contenedor es donde se renderiza el componente `App`.
 * 
 * @example
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * 
 * @type {object}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * @function renderApp
 * @description Función encargada de renderizar el componente `App` en el contenedor principal `root`. El componente `App` es el componente raíz de la aplicación.
 * 
 * @example
 * root.render(<App />);
 */
root.render(<App />);
