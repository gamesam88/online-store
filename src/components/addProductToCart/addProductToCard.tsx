import React from "react";
import "./addProductToCard.scss";
import { CountOfProduct } from "../countOfProduct/countOfProduct";
import { Btn } from "../btns/btn";
import { useState } from "react";
import { IcartItem } from "../../models/models";

interface IProps {
  cartItem?: IcartItem;
}

export function AddProductToCart(props: IProps) {
  const [count, setCount] = useState(1);

  const decreaseCount = (): void => {
    setCount((el) => (el > 0 ? (el -= 1) : 0));
  };

  const increaseCount = (): void => {
    setCount((el) => (el += 1));
  };
  const blockBtn = count ? "" : "blockBtn";
  const styleBtn = ["btn__addToCart", blockBtn];
  return (
    <div className="productToCart">
      <CountOfProduct count={count} decreaseCount={decreaseCount} increaseCount={increaseCount} />
      <Btn eltClass={styleBtn.join(" ")} btnText="В корзину" cartItem={props.cartItem} count={count} />
    </div>
  );
}
