import React from "react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../../redux/slices/filterSlice";
import "./ClearFiltersBtn.scss";

const ClearFiltersBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn-98"
      onClick={() => {
        dispatch(clearFilters(true));
      }}
    >
      Сбросить
    </button>
  );
};

export default ClearFiltersBtn;
