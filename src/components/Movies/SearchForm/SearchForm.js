import React from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../../../images/search_icon.svg";

function SearchForm() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/movies");
  }
  return (
    <section className="searchform">
      <form
        placeholder="Фильмы"
        className="searchform__placeholder"
        onSubmit={handleSubmit}
        action="#"
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
        />
        <button className="searchform__button button" type="submit" />
      </form>
      <div className="shorts ">
        <input className="shorts__button" type="checkbox" id="switch" />
        <label for="switch" />
        <p className="searchform__shorts">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
