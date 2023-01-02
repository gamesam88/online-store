import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../../../redux/slices/filterSlice";
import { RootState } from "../../../../redux/store";

import "./FilterItem.scss";

type PropsType = {
  value: string;
  filterKey: string;
};

const FilterListItem: React.FC<PropsType> = ({ value, filterKey }) => {
  const dispatch = useDispatch();
  const { clear } = useSelector((state: RootState) => state.filter);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (clear) {
      setChecked(false);
    }
  }, [clear]);

  return (
    <div className="itemName">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          if (!checked) {
            setChecked(true);
            dispatch(addFilter([filterKey, value]));
          } else {
            setChecked(false);
            dispatch(removeFilter([filterKey, value]));
          }
        }}
      />
      <span>{value}</span>
    </div>
  );
};

export default FilterListItem;
