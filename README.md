

# 🎥 Movie Recommendation App (Frontend)

This is the **frontend** of the Movie Recommendation App, a React-based web application that allows users to discover movies, search by title or genre, and manage their favorite movies.

## 🌟 Features

* **Search Movies**: Search for movies by title or genre in real-time.
* **View Movies**: Display a list of movies with their details (title, genre, and rating).
* **Favorites**: Save and manage favorite movies in a separate list.
* **Responsive Design**: Optimized for mobile and desktop devices.

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your system.
* A package manager like `npm` or `yarn`.

---

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/matthewzegekwe/caps_frontend
   cd movie-recommendation-app-frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

---

## 🛠️ Project Structure

```
src/
├── components/
│   ├── Favorites.jsx        # Component to display the favorite movies list
│   ├── MovieList.jsx        # Component to display movies and add to favorites
│   ├── SearchBar.jsx        # Component for the search functionality
├── App.jsx                  # Main app entry point
├── App.css                  # Styling for the app
```

---

## 🛠️ Built With

* **React.js**: JavaScript library for building the user interface.
* **Vite**: Frontend tooling for fast builds and development.
* **CSS**: For styling the app.

---

## 🧪 Usage

### Search for Movies

* Type the name of a movie or genre in the search bar to filter the movie list.

### Add Movies to Favorites

* Click the "Add to Favorites" button on any movie to save it in your favorites list.

### View Favorites

* Scroll down to the **Favorites** section to see your saved movies.

---

## 🌐 Deployment

* **Frontend Deployment**: You can deploy this app using [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
* Ensure that the backend API URL is correctly configured in the `.env` file.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 💬 Acknowledgments

* [React.js Documentation](https://reactjs.org/docs/)
