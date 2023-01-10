import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fiterHelper, objectFilter, sortHelper } from "../../helpers/filter";
import { ProductType } from "../../models/models";
import { RootState } from "../../redux/store";
import { ProductCard } from "../productCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { findProducts } from "../../redux/slices/filterSlice";

type PropsType = {
  products: ProductType[];
};

export function Catalog(props: PropsType) {
  const dispatch = useDispatch();
  const { brands, categories, sort, price, stock, searchValue } = useSelector((state: RootState) => state.filter);
  const [searchParams, setSearchParams] = useSearchParams("/online-store");

  const prodQuery = searchParams.get("/online-store") || "";
  console.log(prodQuery);

  const priceQuery = `${price[0]}↕${price[1]}`;
  const stockQuery = `${stock[0]}↕${stock[1]}`;

  useEffect(() => {
    setSearchParams({ search: searchValue, brands, categories, sort, price: priceQuery, stock: stockQuery });
  }, [brands, categories, sort, price, stock, searchValue]);

  const filteredProducts = fiterHelper(props.products, brands, categories);
  const sortProducts = sortHelper(sort, filteredProducts);
  const rangeProducts = sortProducts.filter(
    (el) => el.price >= price[0] && el.price <= price[1] && el.stock >= stock[0] && el.stock <= stock[1]
  );
  const searchProducts = rangeProducts.filter((el) => objectFilter(el, searchValue));

  const finalArr = searchValue ? searchProducts : rangeProducts;

  console.log(rangeProducts);

  useEffect(() => {
    dispatch(findProducts(finalArr.length));
  }, [finalArr]);

  return (
    <div className="catalog-block">
      {finalArr.map((product) => (
        <ProductCard product={product} key={product.id} id={product.id} />
      ))}
    </div>
  );
}
