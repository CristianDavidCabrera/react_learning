# Twitter Follow Card en React

## 🎲 Descripción
Este proyecto es una aplicación de tarjetas de seguimiento de usuarios al estilo Twitter, desarrollada con React. Es un ejemplo simple para entender cómo trabajar con **hooks**, **prop-types**, y la gestión de estado en aplicaciones de React. Los usuarios pueden seguir o dejar de seguir a otros con solo hacer clic en un botón.

---

## 📁 Estructura del Proyecto
El proyecto cuenta con la siguiente estructura de archivos:
```
├── public/
│   ├── images/
│   │   └── (Imágenes de los usuarios)
├── src/
│   ├── TwitterFollowCard.jsx      # Componente para cada tarjeta de usuario
│   ├── App.jsx                    # Componente principal con la lista de usuarios
│   ├── index.css                  # Estilos globales
│   ├── index.js                   # Punto de entrada de la aplicación
└── package.json                   # Dependencias y scripts del proyecto
```

---

## 🛠️ Instalación
Para ejecutar este proyecto en local, sigue los siguientes pasos:

```bash
# Clona el repositorio
git clone https://github.com/CristianDavidCabrera/react_learning.git

# Navega al directorio del proyecto
cd 00-hola-mundo

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

---

## 📦 Conceptos Clave
- **React Hooks:** Uso de `useState` para gestionar el estado del seguimiento de los usuarios.
- **Componentes reutilizables:** El componente `TwitterFollowCard` es modular y puede usarse para representar cualquier usuario.
- **PropTypes:** Se utilizan para la validación de las props, asegurando que los datos sean correctos.
- **Interactividad:** Al hacer clic en el botón de seguir, se alterna entre "Seguir" y "Dejar de seguir" utilizando el estado local.

---

## 🚧 Posible Mejoras Futuras
Añadir la posibilidad de cargar los usuarios desde una API externa.
Implementar una interfaz más dinámica con animaciones al hacer clic en los botones.
Crear un sistema de autenticación de usuarios para personalizar la lista de usuarios a seguir.

---

## 📚 Recursos
- [Documentación de React](https://react.dev)
- [PropTypes en React](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

---

## 📝 Licencia
Este proyecto es un ejercicio realizado como parte de mis prácticas de desarrollo con React. Se ha desarrollado únicamente con fines educativos y de aprendizaje. No posee una licencia específica y no se recomienda su uso en proyectos comerciales.

