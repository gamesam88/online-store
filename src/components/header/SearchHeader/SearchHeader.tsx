import React from "react";
import "./SearchHeader.scss";
import searchImg from "./img/search.png";
import { useState } from "react";

interface ISearch {
  styleSearch: string;
}

export function SearchHeader({ styleSearch }: ISearch) {
  const [searchItem, setSearchItem] = useState(true);

  function changeSearch(): void {
    setSearchItem((prev) => !prev);
  }

  function changeInput(): void {
    setSearchItem((prev) => !prev);
  }
  return (
    <div className={styleSearch}>
      {searchItem === true ? (
        <div onClick={changeSearch}>
          <img src={searchImg} alt="searchImg" className="image__search" />
        </div>
      ) : (
        <div
          onKeyDown={(ev): void => {
            if (ev.keyCode === 13) {
              changeInput();
            }
          }}
        >
          <input type="text" className="inputStyle" />
        </div>
      )}
    </div>
  );
}
