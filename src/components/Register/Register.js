import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";

function Register({ onLoading, onRegister, isLoggedIn }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/movies");
  }

  if (isLoggedIn) {
    return <redirect to="/" />;
  }

  return (
    <AuthForm
      name={"register"}
      title={"Добро пожаловать!"}
      buttonText={onLoading ? "Регистрирую" : "Зарегистрироваться"}
      buttonFigcaption={"Уже зарегистрированы?"}
      figcaptionlink="/signin"
      figcaptionRedirectToLogin={"Войти"}
      onSubmit={handleSubmit}
    >
      <legend className="auth__input-figcaption">Имя</legend>
      <input
        name="name"
        type="text"
        className="auth__input"
        placeholder=""
        required
        minLength="2"
        maxLength="30"
        onChange={handleNameChange}
        value={name}
        inputfigcaption={"Имя"}
      />
      <span className="auth-error">Что-то пошло не так...</span>
      <legend className="auth__input-figcaption">E-mail</legend>
      <input
        name="email"
        type="email"
        className="auth__input"
        placeholder=""
        required
        minLength="2"
        maxLength="30"
        onChange={handleEmailChange}
        value={email}
      />
      <span className="auth-error">Что-то пошло не так...</span>
      <legend className="auth__input-figcaption">Пароль</legend>
      <input
        name="password"
        type="password"
        className="auth__input"
        placeholder=""
        required
        minLength="2"
        maxLength="30"
        onChange={handlePasswordChange}
        value={password}
      />
      <span className="auth-error">Что-то пошло не так...</span>
    </AuthForm>
  );
}

export default Register;
