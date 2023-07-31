import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function AuthForm(props) {
  return (
    <>
      <form className="auth" onSubmit={props.onSubmit}>
        <img className="auth__logo" src={logo} alt=" Логотип." />
        <h1 className="auth__header">{`${props.title}`}</h1>
        <div className="auth__container">{props.children}</div>

        <button
          className={props.buttonClassName}
          type="submit"
          disabled={props.buttonDisabled}
        >
          {props.buttonText || "Сохранить"}
        </button>

        <figcaption className="auth__figcaption">
          {" "}
          {props.buttonFigcaption}
          <Link to={props.figcaptionlink} className="auth__signin-link">
            {" "}
            {props.figcaptionRedirectToLogin}
          </Link>
        </figcaption>
      </form>
    </>
  );
}

export default AuthForm;
