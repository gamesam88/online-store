/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ProductType } from "../../models/models";
import { ProductCard } from "../productCard/ProductCard";
//import  './catalog.scss'

type PropsType = {
  products: ProductType[];
};

export function Catalog(props: PropsType) {
  return (
    <div className="catalog-block">
      {props.products.map((product, id) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
