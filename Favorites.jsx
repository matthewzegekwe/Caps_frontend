import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((movie) => (
          <div key={movie.id} className="favorite-card">
            <div>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No favorites added</p>
      )}
    </div>
  );
};

export default Favorites;
