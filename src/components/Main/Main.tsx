import React, { useEffect } from "react";
import { ProductType } from "../../models/models";
import { setProducts } from "../../redux/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import Sorting from "./Sorting/Sorting";
import { Search } from "./Search/Search";
import axios from "axios";
import "./Main.scss";
import { Catalog } from "../catalog/Catalog";
import SideBar from "../SideBar/SideBar";
import ViewMode from "./viewMode/ViewMode";

type Resp = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

const Main = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { foundAmount } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  async function myFetch() {
    try {
      const url = "https://dummyjson.com/products?limit=100";
      axios.get<Resp>(url).then((response) => {
        dispatch(setProducts(response.data.products));
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    myFetch();
  }, []);

  return (
    <>
      {products.length ? (
        <main className="main">
          <SideBar products={products} />
          <div className="main__wrapper">
            <div className="catalog-top-bar">
              <Search />
              <span>Найдено: {foundAmount}</span>
              <Sorting />
              <ViewMode />
            </div>
            <Catalog products={products} />
          </div>
        </main>
      ) : (
        <h3>Загрузка...</h3>
      )}
    </>
  );
};

export default Main;
