import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1 className="errorpage__header">404</h1>
      <p className="errorpage__message">Страница не найдена</p>
      <p className="errorpage__return-link">
        <Link className="error__link" to="/">
          Назад
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
