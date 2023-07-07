import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardlist from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import initialMovies from "../../utils/initialMovies";

function Movies() {
  const [allInitialMovies, setAllInitialMovies] = React.useState([]);

  React.useEffect(() => {
    setAllInitialMovies(initialMovies);
  }, []);

  return (
    <section className="movies">
      <Header isLoggedIn={true} />
      <main>
        <SearchForm />
        <MoviesCardlist moviesList={allInitialMovies} />
        <Preloader />
      </main>
      <Footer />
    </section>
  );
}

export default Movies;
