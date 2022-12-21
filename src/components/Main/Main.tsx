import React, { useEffect } from "react";
import { ProductType, setProducts } from "../../redux/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import Sorting from "./Sorting/Sorting";
import axios from "axios";
import "./Main.scss";

interface Resp {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}

const Main = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const url = "https://dummyjson.com/products?limit=100";

  useEffect(() => {
    axios.get<Resp>(url).then((response) => {
      dispatch(setProducts(response.data.products));
    });
  }, []);

  console.log(products);

  return (
    <main className="main">
      <Sorting />
    </main>
  );
};

export default Main;
