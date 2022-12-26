import React from "react";
import { useDispatch } from "react-redux";
import { clearFilters } from "../../../redux/slices/filterSlice";
import "./ClearFiltersBtn.scss";

const ClearFiltersBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="clearButton"
      onClick={() => {
        dispatch(clearFilters(true));
      }}
    >
      Очистить
    </button>
  );
};

export default ClearFiltersBtn;
