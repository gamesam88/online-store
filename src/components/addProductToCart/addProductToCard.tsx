import React, { useEffect } from "react";
import "./addProductToCard.scss";
import { Btn } from "../btns/btn";
import { useState } from "react";
import { IcartItem } from "../../models/models";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import CountOfProduct from "../countOfProduct/countOfProduct";

interface IProps {
  cartItem?: IcartItem;
}

export function AddProductToCart(props: IProps) {
  const productsInCart = useSelector((state: RootState) => state.cart.productsInCart);
  const dispatch = useDispatch();

  const [item, setitem] = useState<IcartItem>();
  useEffect(() => {
    if (props.cartItem) {
      setitem(props.cartItem);
    }
  }, [props.cartItem]);

  const addToCartHandler = () => {
    if (item) {
      dispatch(addProduct({ cartItem: item, amount: 1 }));
    }
    return;
  };

  const count = item && productsInCart.find((el) => el.cartItem.id === item.id)?.amount;

  return (
    <div className="productToCart">
      {count ? (
        <CountOfProduct cartItem={item} count={count} class="controls__buttons" />
      ) : (
        <Btn eltClass="btn__addToCart" btnText="В корзину" handler={addToCartHandler} />
      )}
    </div>
  );
}
