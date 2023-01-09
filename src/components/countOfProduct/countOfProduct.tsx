import React from "react";
import { useDispatch } from "react-redux";
import { IcartItem } from "../../models/models";
import { addProduct, removeProduct } from "../../redux/slices/cartSlice";
import "./countOfProduct.scss";

interface IProps {
  cartItem: IcartItem;
  count: number;
  class: string;
}

const CountOfProduct: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className={props.class}>
      <button onClick={() => dispatch(addProduct({ cartItem: props.cartItem, amount: 1 }))}>+</button>
      <span>
        <b>{props.count}</b>
      </span>
      <button onClick={() => dispatch(removeProduct(props.cartItem.id))}>-</button>
    </div>
  );
};

export default CountOfProduct;
