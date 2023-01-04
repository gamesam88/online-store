import React from "react";
import "./Search.scss";
import searchImg from "./img/search.png";
import { useState } from "react";

export function Search() {
  const [searchItem, setSearchItem] = useState(true);

  function changeSearch(): void {
    setSearchItem((prev) => !prev);
  }

  function changeInput(): void {
    setSearchItem((prev) => !prev);
  }
  return (
    <div>
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
