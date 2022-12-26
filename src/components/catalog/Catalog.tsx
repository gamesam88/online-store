import React from "react";
import { useSelector } from "react-redux";
import { fiterHelper } from "../../helpers/filter";
import { ProductType } from "../../models/models";
import { RootState } from "../../redux/store";
import { ProductCard } from "../productCard/ProductCard";

//import  './catalog.scss'

type PropsType = {
  products: ProductType[];
};

export function Catalog(props: PropsType) {
  const { brands, categories } = useSelector((state: RootState) => state.filter);
  const filter = useSelector((state: RootState) => state.filter);
  console.log(filter);

  return (
    <div className="catalog-block">
      {fiterHelper(props.products, brands, categories).map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
