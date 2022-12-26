import React from "react";
import { ProductType } from "../../models/models";
import ClearFiltersBtn from "./ClearFiltersBtn/ClearFiltersBtn";

import Filter from "./FilterBrand/Filter";
import "./SideBar.scss";

type PropsType = {
  products: ProductType[];
};

const SideBar: React.FC<PropsType> = (props) => {
  const categories: Array<string> = Array.from(new Set(props.products.map((el) => el.category)));
  const brands: Array<string> = Array.from(new Set(props.products.map((el) => el.brand)));

  return (
    <aside className="sideBar">
      <div className="sideBar__container">
        <div className="sideBar__filters">
          <Filter data={brands} filterKey={"brand"} />
          <Filter data={categories} filterKey={"category"} />
          <ClearFiltersBtn />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
