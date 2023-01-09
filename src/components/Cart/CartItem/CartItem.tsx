import React from "react";
import { IcartItem } from "../../../models/models";
import CountOfProduct from "../../countOfProduct/countOfProduct";
import "./CartItem.scss";

export interface ICartItem {
  cartItem: IcartItem;
  count: number;
  index: number;
}

const CartItem: React.FC<ICartItem> = ({ cartItem, count, index }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__id">
          <span>{index}</span>
        </div>
        <div className="cart-item__image">
          <img src={cartItem.image} alt="product image" />
        </div>
        <div className="cart-item__text-content">
          <h3>{cartItem.title}</h3>
          <p>{cartItem.description}</p>
          <div>
            <span>Rating: {cartItem.rating}</span>
            <span>Discount: {cartItem.discountPercentage}%</span>
            <span>Price: {cartItem.price}$</span>
          </div>
        </div>
        <div className="cart-item__controls">
          <div className="controls__wrapper">
            <span>
              <b>На складе:</b> {cartItem.stock - count} шт.
            </span>
            <CountOfProduct cartItem={cartItem} count={count} class="controls__buttons" />
            <span>
              <b>Итог:</b> {cartItem.price * count} $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
