import React, { useState } from "react";
import "./FilterItem.scss";

type PropsType = {
  itemName: string;
};

const FilterItem: React.FC<PropsType> = ({ itemName }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="itemName">
      <input
        id="brandChek"
        type="checkbox"
        checked={checked}
        onClick={() => {
          setChecked(!checked);
        }}
      />
      <span>{itemName}</span>
    </div>
  );
};

export default FilterItem;
