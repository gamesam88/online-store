import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IcartItem } from "../../models/models";

export type ProductInCartType = {
  cartItem: IcartItem;
  amount: number;
};

export interface CartState {
  productsInCart: ProductInCartType[];
  totalPrice: number;
  totalAmount: number;
}

const initialState: CartState = {
  productsInCart: [],
  totalPrice: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductInCartType>) => {
      const index: number = state.productsInCart.findIndex(
        (element) => element.cartItem.id === action.payload.cartItem.id
      );

      if (index !== -1) {
        state.productsInCart[index].amount += action.payload.amount;
        state.totalPrice += action.payload.amount * action.payload.cartItem.price;
        state.totalAmount += action.payload.amount;
      } else {
        state.productsInCart = [...state.productsInCart, action.payload];
        state.totalPrice += action.payload.amount * action.payload.cartItem.price;
        state.totalAmount += action.payload.amount;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.productsInCart.findIndex((el) => el.cartItem.id === action.payload);

      if (index !== -1) {
        if (state.productsInCart[index].amount > 1) {
          state.productsInCart[index].amount -= 1;
          state.totalPrice -= state.productsInCart[index].cartItem.price;
          state.totalAmount -= 1;
        } else if (state.productsInCart[index].amount <= 1) {
          state.totalPrice -= state.productsInCart[index].cartItem.price;
          state.totalAmount -= 1;
          state.productsInCart.splice(index, 1);
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
