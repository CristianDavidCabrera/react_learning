
# Puntero de Ratón Seguidor en React

## 🖱️ Descripción
Este proyecto es un **puntero de ratón** divertido e interactivo que sigue el cursor del ratón del usuario a través de la pantalla, desarrollado con **React**. Es una excelente manera de practicar **React hooks**, manejo de eventos y gestión del estado para elementos de interfaz de usuario interactivos.

---

## 🚀 Demo  

🌐 **[Échale un ojo!!](https://mousefollower-cristian-david.netlify.app/)** 🚀

---

## 📁 Estructura del Proyecto
El proyecto tiene la siguiente estructura de archivos:

```
├── public/
├── src/
│   ├── components/
│   │   └── FollowMouse.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── App.css
├── package.json
└── README_EN.md
└── README_ES.md
```

---

## 🛠️ Instalación
Para ejecutar este proyecto de manera local, sigue estos pasos:

```bash
# Clona el repositorio
git clone https://github.com/CristianDavidCabrera/react_learning.git

# Navega al directorio del proyecto
cd 02-mouse-follower

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm start
```

---

## 📦 Conceptos Clave
- **React Hooks:** Uso de `useState` para gestionar la posición del puntero y el estado `enabled` para activar o desactivar el puntero.
- **Manejo de Eventos:** Uso del evento `pointermove` para rastrear los movimientos del ratón a través de la pantalla.
- **Manipulación del DOM:** Aplicación de `transform` en estilos en línea para posicionar el puntero en la ubicación actual del ratón.
- **Gestión del Estado:** Uso de `useEffect` para gestionar los efectos secundarios, como agregar/eliminar escuchadores de eventos y cambiar la clase del cuerpo.
- **Interacciones con el Botón:** Funcionalidad para activar o desactivar el puntero.

---

## 🚧 Posibles Mejoras Futuras
- Añadir diferentes estilos de puntero que los usuarios puedan alternar.
- Implementar animaciones para un movimiento de puntero más suave.
- Permitir que el usuario establezca colores y tamaños personalizados para el puntero.

---

## 📚 Recursos
- [Documentación de React](https://react.dev)
- [API de Eventos de Puntero](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [Propiedad CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

## 📝 Licencia
Este proyecto es un ejercicio completado como parte de mi práctica de desarrollo en React. Fue desarrollado con fines educativos y de aprendizaje únicamente. No tiene una licencia específica y no se recomienda para su uso en proyectos comerciales.