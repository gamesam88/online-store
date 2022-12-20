import React from "react";

import "./navHeader.css"

interface INav{
    styleNav: string;
}

export function NavHeader({styleNav}: INav){
    return(
        // eslint-disable-next-line react/react-in-jsx-scope
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