import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMinMax } from "../../helpers/filter";
import { ProductType } from "../../models/models";
import { clearFilters } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";
import ClearFiltersBtn from "./ClearFiltersBtn/ClearFiltersBtn";
import Filter from "./Filter/Filter";
import RangeSlider from "./RangeSlider/RangeSlider";
import "./SideBar.scss";

type PropsType = {
  products: ProductType[];
};

const SideBar: React.FC<PropsType> = ({ products }) => {
  const categories: Array<string> = Array.from(new Set(products.map((el) => el.category)));
  const brands: Array<string> = Array.from(new Set(products.map((el) => el.brand)));

  const dispatch = useDispatch();
  const { clear, price, stock } = useSelector((state: RootState) => state.filter);

  const priceElements = products.map((el) => el.price);
  const stokElements = products.map((el) => el.stock);

  const priceScope: number[] = findMinMax(priceElements);
  const stokScope: number[] = findMinMax(stokElements);

  useEffect(() => {
    return () => {
      dispatch(clearFilters(false));
    };
  }, [clear]);

  return (
    <aside className="sideBar">
      <div className="sideBar__container">
        <div className="sideBar__filters">
          <Filter data={brands} filterKey={"brand"} />
          <Filter data={categories} filterKey={"category"} />
          {priceElements.length && (
            <RangeSlider
              rangeName="Цена"
              range={price}
              type="price"
              elements={priceElements}
              scope={priceScope}
              step={50}
              addStr="$"
            />
          )}
          {stokElements.length && (
            <RangeSlider
              scope={stokScope}
              rangeName="На складе"
              range={stock}
              type="stock"
              elements={stokElements}
              step={2}
              addStr="шт"
            />
          )}
          <ClearFiltersBtn />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
