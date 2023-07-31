import React from "react";
import { useLocation } from "react-router-dom";
import { BEATFILM_URL } from "../../constants/constants";
import { DurationConverter } from "../../../utils/utils";

export default function MoviesCard({
  handleSaveMovie,
  handleDeleteMovie,
  movie,
  saved,
  savedMovies,
}) {
  const location = useLocation();
  const savedMoviesRoute = location.pathname.includes("saved-movies");

  function onClick() {
    if (saved) {
      handleDeleteMovie(savedMovies.find((m) => m.movieId === movie.id));
    } else {
      handleSaveMovie(movie);
    }
  }

  function handleDelete() {
    handleDeleteMovie(movie);
  }

  const movieStatus = `${
    saved ? "movie__button button like_active" : "movie__button button like"
  }`;

  return (
    <div className="movie" key={movie.id || movie._id}>
      <div className="movie__image-wrapper">
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            src={
              savedMoviesRoute
                ? movie.image
                : `${BEATFILM_URL}${movie.image.url}`
            }
            alt={movie.nameRU}
            className="movie__image"
          />
        </a>{" "}
      </div>
      <div className="movie__description">
        <h2 className="movie__title">{movie.nameRU || movie.nameRu}</h2>
        {savedMoviesRoute ? (
          <button
            onClick={handleDelete}
            className="movie__button button delete"
          ></button>
        ) : (
          <button onClick={onClick} className={movieStatus}></button>
        )}
      </div>
      <p className="movie__duration">{DurationConverter(movie.duration)}</p>
    </div>
  );
}
