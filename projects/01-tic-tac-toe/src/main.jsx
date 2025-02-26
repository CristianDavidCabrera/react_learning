/**
 * @file main.jsx
 * @description Este archivo es el punto de entrada principal para la aplicación React.
 * Se encarga de renderizar el componente raíz (`App`) dentro del contenedor con el id "root".
 * También se utiliza `StrictMode` para ayudar a detectar problemas potenciales en la aplicación durante el desarrollo.
 * 
 * @module main
 */

import { StrictMode } from "react"; // Importa el modo estricto de React, utilizado para detectar problemas durante el desarrollo.
import { createRoot } from "react-dom/client"; // Importa la función para crear el "root" de la aplicación en el DOM.
import "./index.css"; // Importa los estilos globales de la aplicación.
import App from "./App.jsx"; // Importa el componente principal de la aplicación, que se renderiza en el contenedor "root".

/**
 * @function renderApp
 * @description Función para renderizar el componente `App` dentro del contenedor principal.
 * Utiliza `StrictMode` para activar el modo estricto de React durante el desarrollo.
 * 
 * @example
 * // Llama a createRoot y pasa el id "root" para renderizar la aplicación.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
