import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

import {
  DESKTOP_WIDTH_SIZE,
  DESKTOP_CARDS_COUNT,
  DESKTOP_MORE_CARDS_COUNT,
  TABLET_WIDTH_SIZE,
  TABLET_CARDS_COUNT,
  MOBILE_CARDS_COUNT,
  MORE_CARDS_COUNT,
} from "../../constants/constants";

function MoviesCardList({
  movies,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  const location = useLocation();
  const savedMoviesRoute = location.pathname.includes("saved-movies");

  useEffect(() => {
    const shownCount = () => {
      const display = window.innerWidth;
      if (display > DESKTOP_WIDTH_SIZE) {
        setShownMovies(DESKTOP_CARDS_COUNT);
      } else if (display > TABLET_WIDTH_SIZE) {
        setShownMovies(TABLET_CARDS_COUNT);
      } else {
        setShownMovies(MOBILE_CARDS_COUNT);
      }
    };

    shownCount();
    window.addEventListener("resize", shownCount);

    return () => {
      window.removeEventListener("resize", shownCount);
    };
  }, []);

  function showMore() {
    const display = window.innerWidth;
    if (display > DESKTOP_WIDTH_SIZE) {
      setShownMovies(shownMovies + DESKTOP_MORE_CARDS_COUNT);
    } else {
      setShownMovies(shownMovies + MORE_CARDS_COUNT);
    }
  }

  function getSavedCard(savedMovies, movie) {
    return savedMovies.find((savedMovies) => savedMovies.movieId === movie.id);
  }

  return (
    <section className="moviescardlist">
      {savedMoviesRoute ? (
        <div className="moviescardlist__grid">
          {movies.map((movie) => (
            <MoviesCard
              key={movie._id}
              movies={movies}
              movie={movie}
              saved={getSavedCard(savedMovies, movie)}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
            />
          ))}
        </div>
      ) : (
        <div className="moviescardlist__grid">
          {movies.slice(0, shownMovies).map((movie) => (
            <MoviesCard
              key={movie.id}
              movies={movies}
              movie={movie}
              saved={getSavedCard(savedMovies, movie)}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          ))}
        </div>
      )}

      {movies.length > shownMovies ? (
        <button className="more-button button" onClick={showMore}>
          Еще
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
