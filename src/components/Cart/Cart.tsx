import React, { useEffect, useRef, useState } from "react";
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

  const [promoValue, setpromoValue] = useState<string>("");
  const [discount, setDiscount] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpromoValue(event.target.value);
  };

  const finalPrice = discount ? totalPrice * 0.9 : totalPrice;

  useEffect(() => {
    if (promoValue === "PROMO") {
      setDiscount(true);
    } else {
      setDiscount(false);
    }
  }, [promoValue]);

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
            <span>{finalPrice} $</span>
            {discount ? <p className="payment__text-discount">Скидка: -10%</p> : ""}
          </div>
          <div className="discount">
            <input ref={inputRef} value={promoValue} type="text" placeholder="PROMO" onChange={onChangeInput} />
          </div>
          <button
            onClick={() => {
              if (totalPrice) {
                dispatch(setModalState(true));
              } else {
                alert("Корзина пуста");
              }
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
