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

export const sortHelper = (value: string, products: ProductType[]): ProductType[] => {
  const result = products.slice(0);
  switch (value) {
    case "price":
      return result.sort((a, b) => a.price - b.price);
      break;
    case "reversePrice":
      return result.sort((a, b) => b.price - a.price);
      break;
    case "reverseRating":
      return result.sort((a, b) => a.rating - b.rating);
      break;
    case "rating":
      return result.sort((a, b) => b.rating - a.rating);
      break;
    case "reverseDiscount":
      return result.sort((a, b) => a.discountPercentage - b.discountPercentage);
      break;
    case "discount":
      return result.sort((a, b) => b.discountPercentage - a.discountPercentage);
      break;
    default:
      return result;
      break;
  }
};

type TfindMinMax = (arr: number[]) => number[];

export const findMinMax: TfindMinMax = (arr) => {
  const min = Math.min(...arr.map((el) => el));
  const max = Math.max(...arr.map((el) => el));
  return [min, max];
};

export function objectFilter(obj: ProductType, value: string) {
  const items = Array.from(Object.values(obj));
  return items.join(" ").toUpperCase().indexOf(value.toUpperCase()) != -1 ? true : false;
}
