import AuthForm from "../AuthForm/AuthForm";
import React from "react";

import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, onLogin, onLoading }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
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
      name={"Login"}
      title={"Рады видеть!"}
      buttonText={onLoading ? "Вхожу" : "Войти"}
      buttonFigcaption={"Еще не зарегистрированы?"}
      figcaptionlink="/signup"
      figcaptionRedirectToLogin={"Регистрация"}
      onSubmit={handleSubmit}
    >
      <legend className="auth__input-figcaption">E-mail</legend>
      <input
        name="Email"
        type="email"
        className="popup__input auth__input"
        placeholder=""
        required
        minLength="2"
        maxLength="30"
        onChange={handleEmailChange}
        value={email}
      />
      <span className="auth__error">Что-то пошло не так...</span>

      <legend className="auth__input-figcaption">Пароль</legend>
      <input
        name="Password"
        type="password"
        className="popup__input auth__input"
        placeholder=""
        required
        minLength="2"
        maxLength="30"
        onChange={handlePasswordChange}
        value={password}
      />
      <span className="auth__error">Что-то пошло не так...</span>
    </AuthForm>
  );
}

export default Login;
