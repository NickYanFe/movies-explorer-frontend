import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__header">
        Учебный проект Яндекс.Практикум x BeatFilm
      </h2>
      <div className="footer__copyright">
        <p className="footer-year">&#169; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer-link" src="">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
              className="button link"
            >
              {" "}
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer-link " src="">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="button link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
