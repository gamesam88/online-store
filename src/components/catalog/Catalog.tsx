import React from "react";
import { useSelector } from "react-redux";
import { fiterHelper, sortHelper } from "../../helpers/filter";
import { ProductType } from "../../models/models";
import { RootState } from "../../redux/store";
import { ProductCard } from "../productCard/ProductCard";

//import  './catalog.scss'

type PropsType = {
  products: ProductType[];
};

export function Catalog(props: PropsType) {
  const { brands, categories, sort, price, stock } = useSelector((state: RootState) => state.filter);
  const filteredProducts: ProductType[] = fiterHelper(props.products, brands, categories);
  const sortProducts: ProductType[] = sortHelper(sort, filteredProducts);
  const rangeProducts: ProductType[] = sortProducts.filter(
    (el) => el.price >= price[0] && el.price <= price[1] && el.stock >= stock[0] && el.stock <= stock[1]
  );

  return (
    <div className="catalog-block">
      {rangeProducts.map((product) => (
        <ProductCard product={product} key={product.id} id={product.id} />
      ))}
    </div>
  );
}
