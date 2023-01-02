import React from "react";
import "./Sorting.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeSort } from "../../../redux/slices/filterSlice";
import { RootState } from "../../../redux/store";

const Sorting: React.FC = () => {
  const currentSort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();
  return (
    <div className="sort">
      <div className="sort__wrapper">
        <select value={currentSort} onChange={(e) => dispatch(changeSort(e.target.value))}>
          <option value="rating">Сначала популярные</option>
          <option value="reverseRating">Сначала непопулярные</option>
          <option value="reversePrice">Сначала дорогие</option>
          <option value="price">Сначала недорогие</option>
          <option value="discount">Сначала со скидкой</option>
          <option value="reverseDiscount">Сначала без скидки</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
