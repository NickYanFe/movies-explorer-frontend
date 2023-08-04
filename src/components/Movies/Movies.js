import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import moviesApi from "../../utils/MoviesApi";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import InfoToolTip from "../InfoToolTip/Infotooltip";
import { SHORTS_DURATION } from "../constants/constants";
import { NOT_FOUND_RESULTS, ENTER_SEARCH_TEXT } from "../constants/constants";
import Preloader from "../Movies/Preloader/Preloader"


function Movies({ handleSaveMovie, handleDeleteMovie, savedMovies }) {
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(null);
  const [infoToolTipData, setInfoToolTipData] = useState({
    title: "",
    logo: "",
  });

  function closeInfoToolTip() {
    setIsInfoToolTipOpen(null);
  }

  const isAnyPopupOpened = isInfoToolTipOpen;

  useEffect(() => {
    function closeAllPopupsEscapeClick(evt) {
      if (evt.key === "Escape") {
        closeInfoToolTip();
      }
    }
    if (isAnyPopupOpened) {
      document.addEventListener("keydown", closeAllPopupsEscapeClick);
      return () => {
        document.removeEventListener("keydown", closeAllPopupsEscapeClick);
      };
    }
  }, [isAnyPopupOpened]);

  const closeAllPopupsOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeInfoToolTip();
    }
  };
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [searchMovieText, setSearchMovieText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function filterMovies(allMovies, searchMovieText, isShortMovies) {
    if (searchMovieText === "") {
      localStorage.setItem("searchMovieText", searchMovieText);
      localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));
      localStorage.setItem("filteredMovies", JSON.stringify([]));
      return [];
    }

    localStorage.setItem("searchMovieText", searchMovieText);
    localStorage.setItem("isShortMovies", JSON.stringify(isShortMovies));

    const filteredMovies = allMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(searchMovieText.toLowerCase())
    );

    if (isShortMovies) {
      const filteredShortMovies = filteredMovies.filter(
        (item) => item.duration <= SHORTS_DURATION
      );
      localStorage.setItem(
        "filteredMovies",
        JSON.stringify(filteredShortMovies)
      );
      return filteredShortMovies;
    } else {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
      return filteredMovies;
    }
  }

  function checkboxToggle(event) {
    const newValue = event.target.checked;
    setIsShortMovies(newValue);
    const filteredMovies = filterMovies(allMovies, searchMovieText, newValue);
    setFilteredMovies(filteredMovies);
    localStorage.setItem("isShortMovies", String(newValue));
  }

  function searchButtonClick() {
    const filteredMovies = filterMovies(
      allMovies,
      searchMovieText,
      isShortMovies
    );
    setFilteredMovies(filteredMovies);
    console.log(filteredMovies);
  }

  useEffect(() => {
    const query = localStorage.getItem("searchMovieText");
    const storageMovies = localStorage.getItem("filteredMovies");
    const storageShortMovies = localStorage.getItem("isShortMovies");
    const storageAllMovies = localStorage.getItem("allMovies");
    if (query && storageMovies && storageShortMovies && storageAllMovies) {
      setSearchMovieText(query);
      setIsShortMovies(storageShortMovies === "true");
      setFilteredMovies(JSON.parse(storageMovies));
      setAllMovies(JSON.parse(storageAllMovies));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((data) => {
          localStorage.setItem("allMovies", JSON.stringify(data));
          setAllMovies(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <section className="movies">
      <Header isLoggedIn={true} />
      <main>
        <section className="movies">
          <SearchForm
            searchMovieText={searchMovieText}
            setSearchMovieText={setSearchMovieText}
            onSubmit={searchButtonClick}
            isShortMovies={isShortMovies}
            checkboxToggle={checkboxToggle}
          />
     {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={filteredMovies}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          )}
          {filteredMovies.length === 0 && searchMovieText !== "" && (
            <p className="search-span">{NOT_FOUND_RESULTS}</p>
          )}
          {searchMovieText === "" && (
            <p className="search-span">{ENTER_SEARCH_TEXT}</p>
          )}
        </section>
      </main>
      <Footer />
      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        title={infoToolTipData.title}
        logo={infoToolTipData.logo}
        buttonText={""}
        onClose={closeInfoToolTip}
        onOverlayClose={closeAllPopupsOverlayClick}
      />
    </section>
  );
}

export default Movies;
