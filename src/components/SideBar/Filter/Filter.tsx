import React from "react";
import "./Filter.scss";
import FilterListItem from "./FilterItem/FilterItem";

interface IPropsType {
  data: string[];
  filterKey: string;
}

const Filter: React.FC<IPropsType> = (props) => {
  return (
    <div className="filter">
      {Array.from(props.data).map((el, id) => (
        <FilterListItem key={id} value={el} filterKey={props.filterKey} />
      ))}
    </div>
  );
};

export default Filter;
