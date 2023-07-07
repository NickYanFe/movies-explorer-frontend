import React from "react";

function Tech() {
  return (
    <section className="aboutproject tech" id="tech">
      <h2 className="aboutproject__header tech__header">Технологии</h2>
      <h1 className="promo__header tech__title">7 технологий</h1>{" "}
      <p className="tech__description">
        На&nbsp;курсе вэб-разработки мы&nbsp;освоили технологии, которые
        применили в дипломном проекте.
      </p>
      <ul className="navtab tech__list">
        <li className="navtab__element tech__element">HTML</li>
        <li className="navtab__element tech__element">CSS</li>
        <li className="navtab__element tech__element">JS</li>
        <li className="navtab__element tech__element">React</li>
        <li className="navtab__element tech__element">Git</li>
        <li className="navtab__element tech__element">Express.js</li>
        <li className="navtab__element tech__element">mongoDB</li>
      </ul>
    </section>
  );
}

export default Tech;
