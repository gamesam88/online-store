import { ProductType } from "../models/models";

export const fiterHelper = (arr: ProductType[], brands: string[], categories: string[]): ProductType[] => {
  if (!categories.length && !brands.length) {
    return arr;
  }
  if (!categories.length) {
    return arr.filter((el) => brands.indexOf(el.brand) !== -1);
  }
  if (!brands.length) {
    return arr.filter((el) => categories.indexOf(el.category) !== -1);
  }

  return arr.filter((el) => brands.indexOf(el.brand) !== -1).filter((el) => categories.indexOf(el.category) !== -1);
};
