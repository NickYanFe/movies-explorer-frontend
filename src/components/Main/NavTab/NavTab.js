import React from "react";

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__element button">
        <a className="link" href="#aboutproject">
          О проекте
        </a>
      </li>
      <li className="navtab__element button">
        <a className="link" href="#tech">
          Технологии
        </a>
      </li>
      <li className="navtab__element button">
        <a className="link" href="#aboutme">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
