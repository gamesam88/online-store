import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./productsSlice";

export interface CartState {
  productsInCart: ProductType[];
}

const initialState: CartState = {
  productsInCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<ProductType[]>) => {
      state.productsInCart = action.payload;
    },
  },
});

export const { changeSort } = cartSlice.actions;

export default cartSlice.reducer;
