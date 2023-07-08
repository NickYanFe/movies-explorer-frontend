import React from "react";
function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>

      <nav className="portfolio__content">
        <a
          href="https://github.com/NickYanFe/second-project"
          target="_blank"
          rel="noreferrer"
          className="portfolio__sitelist link button"
        >
          Статичный сайт
        </a>

        <a
          href="https://github.com/NickYanFe/russian-travel"
          target="_blank"
          rel="noreferrer"
          className="portfolio__sitelist link button"
        >
          Адаптивный сайт
        </a>

        <a
          href="https://github.com/NickYanFe/mesto"
          target="_blank"
          rel="noreferrer"
          className="portfolio__sitelist link button"
        >
          Одностраничное приложение
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
