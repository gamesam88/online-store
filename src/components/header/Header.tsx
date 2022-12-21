import React from "react";
import "./header.scss";
import { Logo } from "./logo/logo";
import { NavHeader } from "./NavHeader/NavHeader";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { ShoppingCart } from "./HeaderCart/ShoppingCart";

export function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo eltClass="header__logo" />
        <NavHeader styleNav="header__navigation" />
        <SearchHeader styleSearch="header__search" />
        <ShoppingCart styleCart="header__cart" />
      </div>
    </header>
  );
}
