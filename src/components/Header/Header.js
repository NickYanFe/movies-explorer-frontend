import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBurgerMenu = () => {
    setIsOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo button">
        <img src={logo} alt=" Логотип." />
      </Link>
      {isLoggedIn && (
        <div className="header__navigation">
          <nav className="header__moviesbox">
            <Link to="/movies" className="header__movies link button">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__movies link button">
              Сохраненные фильмы
            </Link>
          </nav>
          <Link to="/profile" className="header__profile button">
            <img src={profile} alt=" Профиль." />
          </Link>
          <button
            className="header__burger button"
            onClick={openBurgerMenu}
          ></button>
          {isOpen && <BurgerMenu onClose={closeBurgerMenu} />}
        </div>
      )}
      {!isLoggedIn && (
        <nav className="header__menu">
          <Link to="/signup" className="header__authbutton link button">
            Регистрация
          </Link>
          <Link to="/signin" className="header__authbutton link button">
            Войти
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
