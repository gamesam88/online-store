import React, { useEffect, useRef, useState } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./CartItem/CartItem";
import { ProductInCartType } from "../../redux/slices/cartSlice";
import { setModalState } from "../../redux/slices/productsSlice";

enum EPromo {
  "RS" = 10,
  "EPM" = 15,
}

const Cart = () => {
  const { productsInCart, totalAmount, totalPrice } = useSelector((state: RootState) => state.cart);
  const [cartElements, setCartElements] = useState<ProductInCartType[]>();
  const dispatch = useDispatch();
  const [promoValue, setpromoValue] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const percent = (100 - discount) * 0.01;
  const finalPrice = discount ? totalPrice * percent : totalPrice;
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpromoValue(event.target.value);
  };

  const numRef = useRef<HTMLInputElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxItemsOnPage, setMaxItemsOnPage] = useState<number>(3);
  const totalPages = cartElements && Math.ceil(cartElements.length / maxItemsOnPage);
  const arrStart = currentPage * maxItemsOnPage;
  const slicePage = cartElements && cartElements.slice(arrStart, arrStart + maxItemsOnPage);

  const onChangeNumInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxItemsOnPage(+event.target.value);
  };

  useEffect(() => {
    if (promoValue === "RS") {
      setDiscount(EPromo["RS"]);
    } else if (promoValue === "EPM") {
      setDiscount(EPromo["EPM"]);
    } else {
      setDiscount(0);
    }
  }, [promoValue]);

  useEffect(() => {
    setCartElements(productsInCart);
  }, [productsInCart]);

  useEffect(() => {
    if (cartElements && arrStart === cartElements.length) {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    }
  }, [cartElements]);

  useEffect(() => {
    if (totalPages && currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [maxItemsOnPage]);

  return (
    <div className="cart">
      <div className="cart__list">
        {slicePage?.length ? (
          <>
            <div className="cart__pages">
              <div className="cart__pages-container">
                <div className="cart__pages__input">
                  <span>Показать:</span>
                  <input type={"number"} min={1} value={maxItemsOnPage} ref={numRef} onChange={onChangeNumInput} />
                </div>{" "}
                <div className="cart__pages__butns">
                  <button
                    onClick={() => {
                      if (currentPage > 0) setCurrentPage(currentPage - 1);
                    }}
                  >
                    Назад
                  </button>
                  <span>
                    Страница: <b>{currentPage + 1}</b> из <b>{totalPages}</b>
                  </span>
                  <button
                    onClick={() => {
                      if (totalPages && currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
                    }}
                  >
                    Вперед
                  </button>
                </div>
              </div>
            </div>
            <ul className="cart__items">
              {slicePage?.length
                ? slicePage.map((el, id) => (
                    <li key={id + el.cartItem.title}>
                      <CartItem
                        cartItem={el.cartItem}
                        count={el.amount}
                        index={id + 1 + currentPage * maxItemsOnPage}
                      />
                    </li>
                  ))
                : ""}
            </ul>
          </>
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
            {discount ? <p className="payment__text-discount">Скидка: -{discount}%</p> : ""}
          </div>
          <div className="discount">
            <input ref={inputRef} value={promoValue} type="text" placeholder="PROMO" onChange={onChangeInput} />
            <span>Test promo: RS, EPM</span>
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
