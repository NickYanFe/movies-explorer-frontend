import React from "react";
import { useState } from "react";
import profile from "../../images/profile.svg";
import { Link } from "react-router-dom";

function BurgerMenu({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`burgermenu ${{ isOpen } && "burgermenu_open"}`}>
      <button
        type="button"
        className="burger__close button"
        aria-label="закрыть"
        onClick={onClose}
      ></button>
      <nav className="burger__links">
        <Link to="/" className="burger__link button link">
          Главная
        </Link>
        <Link to="/movies" className="burger__link button link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="burger__link button link">
          Сохраненные фильмы
        </Link>
      </nav>
      <Link to="/profile" className="burger__account button">
        <img src={profile} alt=" Профиль." />
      </Link>
    </div>
  );
}

export default BurgerMenu;
