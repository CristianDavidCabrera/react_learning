
# Follow Mouse Pointer in React

## 🖱️ Description
This project is a fun and interactive **mouse pointer** that follows the user's mouse cursor across the screen, developed with **React**. This is a great way to practice **React hooks**, event handling, and managing state for interactive UI elements.

---

## 📁 Project Structure
The project has the following file structure:

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

## 🛠️ Installation
To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/CristianDavidCabrera/react_learning.git

# Navigate to the project directory
cd 02-mouse-follower

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 📦 Key Concepts
- **React Hooks:** Using `useState` to manage the position of the pointer and `enabled` state for activating or deactivating the pointer.
- **Event Handling:** Using the `pointermove` event to track mouse movements across the screen.
- **DOM Manipulation:** Applying `transform` in inline styles to position the pointer at the current mouse location.
- **State Management:** Using `useEffect` to manage side effects like adding/removing event listeners and changing the body class.
- **Button Interactions:** Toggle functionality for enabling or disabling the pointer.

---

## 🚧 Possible Future Improvements
- Add different pointer styles that users can toggle between.
- Implement animations for smoother pointer movement.
- Allow the user to set custom colors and sizes for the pointer.

---

## 📚 Resources
- [React Documentation](https://react.dev)
- [Pointer Events API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [CSS Transform Property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

---

## 📝 License
This project is an exercise completed as part of my React development practice. It was developed for educational and learning purposes only. It does not have a specific license and is not recommended for use in commercial projects.