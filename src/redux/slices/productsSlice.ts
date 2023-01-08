import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../models/models";

export interface ProductsState {
  products: ProductType[];
  modal: boolean;
}

const initialState: ProductsState = {
  products: [],
  modal: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
  },
});

export const { setProducts, setModalState } = productsSlice.actions;

export default productsSlice.reducer;
