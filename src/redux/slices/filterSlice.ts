import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  brands: string[];
  categories: string[];
  sort: string;
}

const initialState: FilterState = {
  brands: [],
  categories: [],
  sort: "price",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      console.log(state.sort);
    },
  },
});

export const { changeSort } = filterSlice.actions;

export default filterSlice.reducer;
