import React, { useEffect } from "react";
import { ProductType } from "../../models/models";
import { setProducts } from "../../redux/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import Sorting from "./Sorting/Sorting";
import axios from "axios";
import "./Main.scss";
import { Catalog } from "../catalog/Catalog";
import SideBar from "../SideBar/SideBar";

type Resp = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

const Main = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  async function myFetch() {
    const url = "https://dummyjson.com/products?limit=100";
    axios.get<Resp>(url).then((response) => {
      dispatch(setProducts(response.data.products));
    });
  }

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <main className="main">
      <SideBar products={products} />
      <div className="main__wrapper">
        <Sorting />
        <Catalog products={products} />
      </div>
    </main>
  );
};

export default Main;
