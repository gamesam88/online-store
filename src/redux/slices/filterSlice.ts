import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  brands: string[];
  categories: string[];
  sort: string;
  clear: boolean;
}

const initialState = {
  brands: [],
  categories: [],
  sort: "price",
  clear: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      console.log(state.sort);
    },

    clearFilters: (state, action: PayloadAction<boolean>) => {
      state.brands = [];
      state.categories = [];
      state.clear = action.payload;
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

export const { changeSort, addFilter, removeFilter, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
