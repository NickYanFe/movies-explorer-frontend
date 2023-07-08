import React, { useState } from "react";

function MoviesCard({ isSavedMovies, movie }) {
  const [isLiked, setIsLiked] = useState(movie.isLiked);

  const setLikeClassName = `movie__button button like ${
    isLiked && "movie__button button like_active"
  }`;

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section className="movie">
      <div className="movie__image-wrapper">
        <img className="movie__image" alt={movie.title} src={movie.image} />
      </div>

      <div className="movie__description">
        <p className="movie__title">{movie.title}</p>

        {isSavedMovies && <button className="movie__button button delete" />}
        {!isSavedMovies && (
          <button onClick={handleLikeClick} className={setLikeClassName} />
        )}
      </div>
      <p className="movie__duration">{movie.duration}</p>
    </section>
  );
}

export default MoviesCard;
