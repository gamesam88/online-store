import React, { useEffect } from "react";
import "./addProductToCard.scss";
import { CountOfProduct } from "../countOfProduct/countOfProduct";
import { Btn } from "../btns/btn";
import { useState } from "react";
import { IcartItem } from "../../models/models";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

interface IProps {
  cartItem?: IcartItem;
}

export function AddProductToCart(props: IProps) {
  const dispatch = useDispatch();

  const [item, setitem] = useState<IcartItem>();
  useEffect(() => {
    if (props.cartItem) {
      setitem(props.cartItem);
    }
  }, [props.cartItem]);

  const [count, setCount] = useState(1);

  const decreaseCount = (): void => {
    setCount((el) => (el > 1 ? (el -= 1) : 1));
  };

  const increaseCount = (): void => {
    setCount((el) => (el += 1));
  };

  const addToCartHandler = () => {
    if (item) {
      dispatch(addProduct({ cartItem: item, amount: count }));
    }
    return;
  };
  const blockBtn = count ? "" : "blockBtn";
  const styleBtn = ["btn__addToCart", blockBtn];
  return (
    <div className="productToCart">
      <CountOfProduct count={count} decreaseCount={decreaseCount} increaseCount={increaseCount} />
      <Btn eltClass={styleBtn.join(" ")} btnText="В корзину" handler={addToCartHandler} />
    </div>
  );
}
