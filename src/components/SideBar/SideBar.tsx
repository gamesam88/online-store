import React from "react";
import { ProductType } from "../../models/models";
import Filter from "./FilterBrand/Filter";
import "./SideBar.scss";

type PropsType = {
  products: ProductType[];
};

const SideBar: React.FC<PropsType> = (props) => {
  const brands: Array<string> = Array.from(new Set(props.products.map((el) => el.brand)));
  const categories: Array<string> = Array.from(new Set(props.products.map((el) => el.category)));

  console.log(props);
  return (
    <aside className="sideBar">
      <div className="sideBar__container">
        <div className="sideBar__filters">
          <Filter data={brands} />
          <Filter data={categories} />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
