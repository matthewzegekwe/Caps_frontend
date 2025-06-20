import React from "react";

const MovieList = ({ movies, onAddToFavorites }) => {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}</p>
            </div>
            <button onClick={() => onAddToFavorites(movie)}>
              Add to Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;
