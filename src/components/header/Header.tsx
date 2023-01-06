import React from "react";
import "./header.scss";
import ShoppingCart from "./HeaderCart/ShoppingCart";
import Logo from "./logo/logo";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Header() {
  const { totalAmount, totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <header className="header">
      <div className=" header__container">
        <Logo />
        <h3>Total price: {totalPrice}</h3>
        <ShoppingCart totalAmount={totalAmount} />
      </div>
    </header>
  );
}

export default Header;
