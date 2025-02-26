# Tic-Tac-Toe en React

## 🎲 Descripción
Este proyecto es un juego clásico de **Tic-Tac-Toe** (Tres en raya) desarrollado con **React**. Es una excelente práctica para aprender conceptos fundamentales de **React**, como el uso de **hooks**, **prop-types**, **componentes reutilizables** y la **gestión del estado**.

---

## 📁 Estructura del Proyecto
El proyecto cuenta con la siguiente estructura de archivos:

```
├── public/
├── src/
│   ├── components/
│   │   ├── Square.jsx
│   │   └── WinnerModal.jsx
│   ├── logic/
│   │   ├── board.js
│   │   └── storage/index.js
│   ├── App.jsx
│   ├── constants.js
│   ├── index.css
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🛠️ Instalación
Para ejecutar este proyecto en local, sigue los siguientes pasos:

```bash
# Clona el repositorio
git clone https://github.com/CristianDavidCabrera/react_learning.git

# Navega al directorio del proyecto
cd 01-tic-tac-toe

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

---

## 📦 Conceptos Clave
- **React Hooks:** Uso de `useState` para gestionar el estado del tablero, el turno y el ganador.
- **Componentes reutilizables:** `Square` y `WinnerModal` son componentes modulares y reutilizables.
- **PropTypes:** Se utilizan para la validación de las props.
- **LocalStorage:** Persistencia del estado del juego para guardar el tablero y el turno actual.
- **Efectos visuales:** Uso de `canvas-confetti` para celebrar al ganador.

---

## 🚧 Posibles Mejoras Futuras
- Añadir un modo de juego contra la IA.
- Permitir la personalización de símbolos.
- Añadir animaciones de transición en las jugadas.

---

## 📚 Recursos
- [Documentación de React](https://react.dev)
- [PropTypes en React](https://es.reactjs.org/docs/typechecking-with-proptypes.html)
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📝 Licencia
Este proyecto es un ejercicio realizado como parte de mis prácticas de desarrollo con React. Se ha desarrollado únicamente con fines educativos y de aprendizaje. No posee una licencia específica y no se recomienda su uso en proyectos comerciales.


