import AuthForm from "../AuthForm/AuthForm";
import React from "react";

import { useFormValidation } from "../../utils/useFormValidation";

function Login({ onLogin }) {
  const { isValid, handleChange, values, errors } = useFormValidation();

  function handleLogin(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <AuthForm
      name={"Login"}
      title={"Рады видеть!"}
      buttonText={"Войти"}
      buttonFigcaption={"Еще не зарегистрированы?"}
      buttonClassName={
        isValid ? "auth__save" : "auth__save auth__save_disabled"
      }
      buttonDisabled={!isValid}
      figcaptionlink="/signup"
      figcaptionRedirectToLogin={"Регистрация"}
      onSubmit={handleLogin}
    >
      <legend className="auth__input-figcaption">E-mail</legend>
      <input
        name="email"
        type="email"
        id="email-input"
        className="auth__input"
        required
        value={values.email || ""}
        onChange={handleChange}
      />
      <span className="auth-error">{errors.email}</span>

      <legend className="auth__input-figcaption">Пароль</legend>
      <input
        name="password"
        type="password"
        id="password-input"
        className="auth__input"
        placeholder=""
        required
        value={values.password || ""}
        onChange={handleChange}
      />

      <span className="auth-error">{errors.password}</span>
    </AuthForm>
  );
}

export default Login;
