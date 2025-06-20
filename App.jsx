import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [movies] = useState([
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "The Dark Knight", genre: "Action", rating: 9.0 },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🎥 Movie Recommendation App</h1>
      <SearchBar query={query} onSearch={handleSearch} />
      <MovieList movies={filteredMovies} onAddToFavorites={addToFavorites} />
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
    
