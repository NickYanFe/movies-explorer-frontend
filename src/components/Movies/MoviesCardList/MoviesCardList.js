import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSavedMovies, moviesList }) {
  return (
    <section className="moviescardlist">
      <div className="moviescardlist__grid">
        {moviesList.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            isSavedMovies={isSavedMovies}
          />
        ))}
      </div>
      <button className="more-button button" id="moremoviesbutton">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
