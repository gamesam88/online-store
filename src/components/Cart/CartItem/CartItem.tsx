import React from "react";
import { IcartItem } from "../../../models/models";
import "./CartItem.scss";

export interface ICartItem {
  cartItem: IcartItem;
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

const CartItem: React.FC<ICartItem> = ({ cartItem, addProduct, removeProduct }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div className="cart-item__id">
          <span>{cartItem.id}</span>
        </div>
        <div className="cart-item__image">
          <img src={cartItem.image} alt="product image" />
        </div>
        <div className="cart-item__text-content">
          <h4>{cartItem.title}</h4>
          <span></span>
          <p>props.description</p>
          <div>
            <span>Rating:{cartItem.description}</span>
            <span>Discount:{cartItem.discountPercentage}</span>
          </div>
        </div>
        <div className="cart-item__controls">
          <div className="controls__wrapper">
            <span>{cartItem.stock}</span>
            <div className="controls__buttons">
              <button onClick={() => addProduct(cartItem.id)}></button>
              <span>1</span>
              <button onClick={() => removeProduct(cartItem.id)}></button>
            </div>
            <span>{cartItem.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
