import React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { useFormValidation } from "../../utils/useFormValidation";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onSignOut }) {
  const { isValid, setValues, values, errors, handleChange, setIsValid, validateEmail } =
    useFormValidation();

  const currentUser = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);

    function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsEditing(false);
  }

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setIsValid(true);
    }
  }, [currentUser, setIsValid, setValues]);

  function editUserData() {
    setIsEditing(true);
  }

  useEffect(() => {
    if (!isEditing) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [currentUser, isEditing, setValues]);

  function checkDataChanged() {
    if (values.name !== currentUser.name || values.email !== currentUser.email) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }

  useEffect(() => {
    checkDataChanged();
  }, [values]);

  return (
    <section className="profile">
      <Header isLoggedIn={true} />
      <main className="profile__container">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>

        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__line">
            <label className="profile__fieldname">Имя</label>
            <input
              className="profile__input"
              name="name"
              type="text"
              placeholder="name"
              minLength="2"
              maxLength="40"
              required
              id="input"
              disabled={!isEditing}
              value={values.name || ""}
              onChange={handleChange}
            />
          </div>
          <span className="auth-error">{errors.name}</span>
          <div className="profile__line">
            <label className="profile__fieldname">E-mail</label>
            <input
              className="profile__input"
              name="email"
              type="email"
              placeholder="email"
              required
              id="input1"
              disabled={!isEditing}
              value={values.email || ""}
              onChange={handleChange}
              pattern={validateEmail}
            />
          </div>
          <span className="auth-error">{errors.email}</span>
          {isEditing ? (
            <button
              type="submit"
              className="profile__edit button link"
              disabled={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email)
              }
            >
              Сохранить
            </button>
          ) : (
            <button
              type="button"
              className="profile__edit button link"
              onClick={editUserData}
            >
              Редактировать
            </button>
          )}

          <button className="profile__signout button" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </form>
      </main>
    </section>
  );
}

export default Profile;
