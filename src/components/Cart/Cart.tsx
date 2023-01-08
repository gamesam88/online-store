import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem/CartItem";
import { ProductInCartType } from "../../redux/slices/cartSlice";
import { setModalState } from "../../redux/slices/productsSlice";

const Cart = () => {
  const { productsInCart, totalAmount, totalPrice } = useSelector((state: RootState) => state.cart);
  const [cartElements, setCartElements] = useState<ProductInCartType[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    setCartElements(productsInCart);
  }, [productsInCart]);

  return (
    <div className="cart">
      <div className="cart__list">
        {cartElements?.length ? (
          <ul className="cart__items">
            {cartElements?.length
              ? cartElements.map((el, id) => (
                  <li key={id + el.cartItem.title}>
                    <CartItem cartItem={el.cartItem} count={el.amount} index={id + 1} />
                  </li>
                ))
              : ""}
          </ul>
        ) : (
          <div className="cart__empty">
            <h2>Корзина пуста</h2>
          </div>
        )}
      </div>
      <div className="cart__payment">
        <div className="payment__container">
          <div className="payment__text">
            <p>Количество товара:</p>
            <span>{totalAmount} шт.</span>
            <p>Цена всех товаров:</p>
            <span>{totalPrice} $</span>
          </div>
          <button
            onClick={() => {
              dispatch(setModalState(true));
            }}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
