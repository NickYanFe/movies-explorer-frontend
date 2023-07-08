import React from "react";

function AboutProject() {
  return (
    <section className="aboutproject" id="aboutproject">
      <h2 className="aboutproject__header">О проекте</h2>
      <div className="aboutproject__content">
        <div className="aboutproject__diploma">
          <h2 className="aboutproject__title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="aboutproject__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки
          </p>
        </div>
        <div className="aboutproject__diploma">
          <h2 className="aboutproject__title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="aboutproject__description">
            У каждого этапа был мягкий и жесткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься
          </p>
        </div>
      </div>
      <div className="aboutproject__timescale">
        <p className="aboutproject__oneweek ">1 неделя</p>
        <p className="aboutproject__fourweeks">4 недели</p>
      </div>
      <div className="aboutproject__timescale">
        <p className="aboutproject__oneweek aboutproject__figcaption">
          Back-end
        </p>
        <p className="aboutproject__fourweeks aboutproject__figcaption">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
