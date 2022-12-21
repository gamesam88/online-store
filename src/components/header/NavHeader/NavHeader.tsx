import React from "react";
import "./navHeader.scss";
interface INav {
  styleNav: string;
}

function NavHeader({ styleNav }: INav) {
  return (
    <nav className={`navigation ${styleNav}`}>
      <ul className="header__nav">
        <li>Техника</li>
        <li>Одежда</li>
        <li>Косметика</li>
        <li>Для животных</li>
        <li>Мебель</li>
      </ul>
    </nav>
  );
}

export default NavHeader;
