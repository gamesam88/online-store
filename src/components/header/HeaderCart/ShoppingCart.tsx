import React from "react";
import cart from "./img/cart.png";
import { Link } from "react-router-dom";
import "./ShoppingCart.scss";

type TProps = {
  totalAmount: number;
};

function ShoppingCart({ totalAmount }: TProps) {
  return (
    <div className="img__cart">
      <Link to="/cart">
        <img src={cart} alt="cart" />
      </Link>
      <span>{totalAmount}</span>
    </div>
  );
}

export default ShoppingCart;
