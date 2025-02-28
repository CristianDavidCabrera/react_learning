
# Tic-Tac-Toe in React

## 🎲 Description
This project is a classic **Tic-Tac-Toe** (Noughts and Crosses) game developed with **React**. It is an excellent practice for learning fundamental **React** concepts, such as the use of **hooks**, **prop-types**, **reusable components**, and **state management**.

---

## 🚀 Demo  

🌐 **[Play now!](https://cristian-david-tic-tac-toe.netlify.app/)** 🚀

---

## 📁 Project Structure
The project has the following file structure:

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
cd 01-tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 📦 Key Concepts
- **React Hooks:** Using `useState` to manage the board state, turn, and winner.
- **Reusable Components:** `Square` and `WinnerModal` are modular and reusable components.
- **PropTypes:** Used for prop validation to ensure the correct data types are passed.
- **LocalStorage:** Game state persistence to store the board and the current turn.
- **Visual Effects:** Using `canvas-confetti` to celebrate the winner.

---

## 🚧 Possible Future Improvements
- Add a game mode to play against AI.
- Allow symbol customization.
- Add transition animations for moves.

---

## 📚 Resources
- [React Documentation](https://react.dev)
- [PropTypes in React](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📝 License
This project is an exercise completed as part of my React development practice. It was developed for educational and learning purposes only. It does not have a specific license and is not recommended for use in commercial projects.
