import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardlist from "../Movies/MoviesCardList/MoviesCardList";

import { filteredMoviesSave, filteredShortMovies } from "../../utils/utils";

function SavedMovies({ isLoggedIn, savedMovies, handleDeleteMovie }) {
  const [shortCard, setShortCard] = useState(false);
  const [filteredCards, setFilteredCards] = useState(savedMovies);
  const [query, setQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  function searchSavedMovies(query) {
    setQuery(query);
  }

  function handleShortToggle() {
    setShortCard(!shortCard);
  }

  useEffect(() => {
    const moviesCardList = filteredMoviesSave(savedMovies, query);
    setFilteredCards(shortCard ? filteredShortMovies(moviesCardList) : moviesCardList);
  }, [savedMovies, shortCard, query]);

  useEffect(() => {
    const filteredSavedMovies = filteredMoviesSave(savedMovies, query, shortCard);
    const notFoundCondition = filteredSavedMovies.length === 0 && query !== "";
    setNotFound(notFoundCondition);
  }, [savedMovies, query, shortCard]);

  return (
    <section className="savedmovies" isLoggedIn={isLoggedIn}>
      <Header isLoggedIn={true} />
      <main>
        <SearchForm
          onSubmit={searchSavedMovies}
          checkboxToggle={handleShortToggle}
        />
        <MoviesCardlist
          isSavedMoviesPage={true}
          handleDeleteMovie={handleDeleteMovie}
          movies={filteredCards}
          savedMovies={savedMovies}
          notFound={notFound}
        />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
