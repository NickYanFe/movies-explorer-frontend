import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardlist from "../Movies/MoviesCardList/MoviesCardList";
import initialMovies from "../../utils/initialMovies";

function SavedMovies() {
  const [onlyLikedMovies, setOnlyLikedMovies] = React.useState([]);
  React.useEffect(() => {
    setOnlyLikedMovies(
      initialMovies.filter((movie) => {
        return movie.isLiked;
      })
    );
  }, []);

  return (
    <section className="savedmovies">
      <Header isLoggedIn={true} />
      <main>
        <SearchForm />
        <MoviesCardlist moviesList={onlyLikedMovies} isSavedMovies={true} />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
