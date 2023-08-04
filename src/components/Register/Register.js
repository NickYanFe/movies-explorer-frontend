import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormValidation } from "../../utils/useFormValidation";

function Register({ onRegister }) {
  const { isValid, handleChange, values, errors, validateEmail } = useFormValidation();

  function handleRegister(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <AuthForm
      name="register"
      title={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
      buttonFigcaption={"Уже зарегистрированы?"}
      buttonClassName={
        isValid ? "auth__save" : "auth__save auth__save_disabled"
      }
      buttonDisabled={!isValid}
      figcaptionlink="/signin"
      figcaptionRedirectToLogin={"Войти"}
      onSubmit={handleRegister}
    >
      <legend className="auth__input-figcaption">Имя</legend>
      <input
        name="name"
        type="text"
        id="name-input"
        className="auth__input"
        required
        minLength="2"
        maxLength="30"
        value={values.name || ""}
        onChange={handleChange}
        inputfigcaption={"Имя"}
      />
      <span className="auth-error">{errors.name}</span>
      <legend className="auth__input-figcaption">E-mail</legend>
      <input
        name="email"
        type="email"
        id="email-input"
        className="auth__input"
        required
        minLength="2"
        maxLength="30"
        value={values.email || ""}
        onChange={handleChange}
        pattern={validateEmail}
      />
      <span className="auth-error">{errors.email}</span>
      <legend className="auth__input-figcaption">Пароль</legend>
      <input
        name="password"
        type="password"
        className="auth__input"
        id="password-input"
        required
        value={values.password || ""}
        onChange={handleChange}
      />
      <span className="auth-error">{errors.password}</span>
    </AuthForm>
  );
}

export default Register;
