import React from "react";
import { Link } from "react-scroll";

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__element button">
        <Link className="link" smooth="true" duration="500" to="aboutproject">
          О проекте
        </Link>
      </li>
      <li className="navtab__element button">
        <Link className="link" smooth="true" duration="500" to="tech">
          Технологии
        </Link>
      </li>
      <li className="navtab__element button">
        <Link className="link" smooth="true" duration="500" to="aboutme">
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
