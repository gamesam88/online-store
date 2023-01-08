import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fiterHelper, sortHelper } from "../../helpers/filter";
import { ProductType } from "../../models/models";
import { RootState } from "../../redux/store";
import { ProductCard } from "../productCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { findProducts } from "../../redux/slices/filterSlice";

//import  './catalog.scss'

type PropsType = {
  products: ProductType[];
};

export function Catalog(props: PropsType) {
  const dispatch = useDispatch();
  const { brands, categories, sort, price, stock } = useSelector((state: RootState) => state.filter);
  const [searchParams, setSearchParams] = useSearchParams("");

  const prodQuery = searchParams.get("/") || "";
  console.log(prodQuery);

  const priceQuery = `${price[0]}↕${price[1]}`;
  const stockQuery = `${stock[0]}↕${stock[1]}`;

  useEffect(() => {
    setSearchParams({ brands, categories, sort, price: priceQuery, stock: stockQuery });
  }, [brands, categories, sort, price, stock]);

  const filteredProducts = fiterHelper(props.products, brands, categories);
  const sortProducts = sortHelper(sort, filteredProducts);
  const rangeProducts = sortProducts.filter(
    (el) => el.price >= price[0] && el.price <= price[1] && el.stock >= stock[0] && el.stock <= stock[1]
  );

  useEffect(() => {
    dispatch(findProducts(rangeProducts.length));
  }, [rangeProducts]);

  return (
    <div className="catalog-block">
      {rangeProducts.map((product) => (
        <ProductCard product={product} key={product.id} id={product.id} />
      ))}
    </div>
  );
}
