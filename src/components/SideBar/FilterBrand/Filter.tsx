import React from "react";
import "./Filter.scss";
import BrandItem from "./BrandItem/FilterItem";

type PropsType = {
  data: string[];
};

const Filter: React.FC<PropsType> = (props) => {
  return (
    <div className={"brand"}>
      {Array.from(props.data).map((el, id) => (
        <BrandItem key={id} itemName={el} />
      ))}
    </div>
  );
};

export default Filter;
