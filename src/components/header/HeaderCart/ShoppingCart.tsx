import React from "react";
import cart from "./img/cart.png";
import { Link } from "react-router-dom";
import "./ShoppingCart.scss";

function ShoppingCart() {
  return (
    <div className="img__cart">
      <Link to="/cart">
        <img src={cart} alt="cart" />
      </Link>
      <span>0</span>
    </div>
  );
}

export default ShoppingCart;
