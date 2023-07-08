import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
function Profile() {
  const buttonText = "Редактировать";

  function profileEdit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll(".profile__input");
    const button = document.querySelector(".profile__edit");
    inputs.forEach(function (input) {
      if (input.disabled) {
        input.disabled = false;
        button.innerText = "Сохранить";
      } else {
        input.disabled = true;
        button.innerText = "Редактировать";
      }
    });
  }
  const navigate = useNavigate();

  function onSignOut(e) {
    e.preventDefault();
    navigate("/signin");
  }

  return (
    <section className="profile">
      <Header isLoggedIn={true} />
      <main className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>

        <form className="profile__form">
          <div className="profile__line">
            <label className="profile__fieldname">Имя</label>
            <input
              className="profile__input"
              defaultValue="Виталий"
              name="name"
              type="text"
              placeholder="name"
              minLength="2"
              maxLength="40"
              required
              id="input"
              disabled
            />
          </div>
          <span className="auth-error">Что-то пошло не так...</span>
          <div className="profile__line">
            <label className="profile__fieldname">E-mail</label>
            <input
              className="profile__input"
              defaultValue="pochta@yandex.ru"
              name="email"
              type="email"
              placeholder="email"
              required
              id="input1"
              disabled
            />
          </div>
          <span className="auth-error">Что-то пошло не так...</span>
          <button className="profile__edit button link" onClick={profileEdit}>
            {buttonText}
          </button>
          <button className="profile__signout button" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </form>
      </main>
    </section>
  );
}

export default Profile;
