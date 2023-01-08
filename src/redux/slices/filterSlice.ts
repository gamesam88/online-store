import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  brands: string[];
  categories: string[];
  sort: string;
  clear: boolean;
  price: number[];
  stock: number[];
  foundAmount: number;
  searchValue: string;
}

const initialState = {
  brands: [],
  categories: [],
  sort: "rating",
  clear: false,
  price: [10, 1749],
  stock: [2, 152],
  foundAmount: 0,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },

    findProducts: (state, action: PayloadAction<number>) => {
      state.foundAmount = action.payload;
    },

    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },

    setRange: (state, action: PayloadAction<[string, number[]]>) => {
      switch (action.payload[0]) {
        case "price":
          state.price = action.payload[1];
          break;
        case "stock":
          state.stock = action.payload[1];
          break;
        default:
          break;
      }
    },

    clearFilters: (state, action: PayloadAction<boolean>) => {
      state.brands = [];
      state.categories = [];
      state.clear = action.payload;
      state.price = [10, 1749];
      state.stock = [2, 152];
    },

    addFilter: (state: FilterState, action: PayloadAction<Array<string>>) => {
      switch (action.payload[0]) {
        case "category":
          state.categories = [...state.categories, action.payload[1]];
          break;
        case "brand":
          state.brands = [...state.brands, action.payload[1]];
          break;
        default:
          break;
      }
    },

    removeFilter: (state: FilterState, action: PayloadAction<Array<string>>) => {
      switch (action.payload[0]) {
        case "category":
          state.categories.splice(
            state.categories.findIndex((value) => value === action.payload[1]),
            1
          );
          break;
        case "brand":
          state.brands.splice(
            state.brands.findIndex((value) => value === action.payload[1]),
            1
          );
          break;
        default:
          break;
      }
    },
  },
});

export const { changeSort, addFilter, removeFilter, clearFilters, setRange, findProducts, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
