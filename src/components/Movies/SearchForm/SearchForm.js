import React from "react";
import search_icon from "../../../images/search_icon.svg";

function SearchForm(props) {
  const { onSubmit, isShortMovies, setSearchMovieText, checkboxToggle } = props;

  const [searchText, setSearchText] = React.useState("");

  function handleChange(event) {
    if (setSearchMovieText) {
      setSearchMovieText(event.target.value);
    }
    setSearchText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchText);
  }

  return (
    <section className="searchform">
      <form
        placeholder="Фильмы"
        className="searchform__placeholder"
        onSubmit={handleSubmit}
      >
        <img
          src={search_icon}
          alt=" Иконка поиска."
          className="searchform__logo"
        />

        <input
          type="text"
          className="searchform__input"
          placeholder="Фильм"
          required
          id="searchform__input"
          onChange={handleChange}
        />
        <button className="searchform__button button" type="submit" />
      </form>
      <div className="shorts">
        <input
          className="shorts__button"
          type="checkbox"
          id="switch"
          checked={isShortMovies}
          onChange={checkboxToggle}
        />
        <label for="switch" />
        <p className="searchform__shorts">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
