
# Twitter Follow Card in React

## 🎲 Description
This project is a user follow card application inspired by Twitter, developed with React. It's a simple example to understand how to work with **hooks**, **prop-types**, and state management in React applications. Users can follow or unfollow others with just a click of a button.

---

## 📁 Project Structure
The project has the following file structure:

```
├── public/
│   ├── images/
│   │   └── (User images)
├── src/
│   ├── TwitterFollowCard.jsx      # Component for each user card
│   ├── App.jsx                    # Main component with the list of users
│   ├── index.css                  # Global styles
│   ├── index.js                   # Application entry point
└── package.json                   # Project dependencies and scripts
```

---

## 🛠️ Installation
To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/CristianDavidCabrera/react_learning.git

# Navigate to the project directory
cd 00-hola-mundo

# Install the dependencies
npm install

# Start the development server
npm run dev
```

---

## 📦 Key Concepts
- **React Hooks:** Using `useState` to manage the state of user follow/unfollow actions.
- **Reusable Components:** The `TwitterFollowCard` component is modular and can be used to represent any user.
- **PropTypes:** Used for prop validation to ensure that the data is correct.
- **Interactivity:** By clicking the follow button, it toggles between "Follow" and "Unfollow" using local state.

---

## 🚧 Possible Future Improvements
- Add the ability to load users from an external API.
- Implement a more dynamic interface with animations when clicking the buttons.
- Create a user authentication system to personalize the list of users to follow.

---

## 📚 Resources
- [React Documentation](https://react.dev)
- [PropTypes in React](https://es.reactjs.org/docs/typechecking-with-proptypes.html)

---

## 📝 License
This project is an exercise done as part of my React development practice. It has been developed solely for educational and learning purposes. It does not have a specific license and is not recommended for use in commercial projects.
