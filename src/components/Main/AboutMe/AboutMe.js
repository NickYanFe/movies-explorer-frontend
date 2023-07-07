import React from "react";
import kusto1 from "../../../images/kusto1.jpg";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutproject__header aboutme__header">Студент</h2>
      <div className="aboutme__content">
        <div className="aboutme__info">
          <h3 className="aboutme__name">Виталий</h3>{" "}
          <p className="aboutme__title">Фронтэнд-разработчик, 30 лет.</p>
          <article className="aboutme__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
            музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и ушёл с&nbsp;постоянной работы.
          </article>
          <a
            href="https://github.com/NickYanFe"
            target="_blank"
            rel="noreferrer"
            className="aboutme__github link button"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" alt=" Фотография." src={kusto1}></img>
      </div>
    </section>
  );
}

export default AboutMe;
