/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { PRODUCTS } from "../../data/data"
import { ProductCard } from "../productCard/ProductCard"
//import  './catalog.scss'


export function Catalog() {
  return (
    <div className="catalog-block">
      {
        PRODUCTS?.map((product, id) => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
      
      </div>
  )
};