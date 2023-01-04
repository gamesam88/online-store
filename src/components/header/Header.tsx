import React from "react";
import "./header.scss";
import ShoppingCart from "./HeaderCart/ShoppingCart";
import Logo from "./logo/logo";

function Header() {
  return (
    <header className="header">
      <div className=" header__container">
        <Logo />
        <h3>Total price: 0</h3>
        <ShoppingCart />
      </div>
    </header>
  );
}

export default Header;
