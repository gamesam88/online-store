import React, { useEffect, useState } from "react";
import "./RangeSlider.scss";
import ReactSlider from "react-slider";
import { useDispatch } from "react-redux";
import { setRange } from "../../../redux/slices/filterSlice";

type PropsType = {
  rangeName: string;
  range: number[];
  type: "price" | "stock";
  elements: number[];
  step: number;
  addStr?: string;
  scope: number[];
};

const RangeSlider: React.FC<PropsType> = ({ rangeName, range, type, step, scope, addStr }) => {
  const dispatch = useDispatch();

  const [minValue, minSet] = useState<number>(range[0]);
  const [maxValue, maxSet] = useState<number>(range[1]);

  useEffect(() => {
    if (scope.length) {
      minSet(scope[0]);
      maxSet(scope[1]);
    }
  }, []);

  useEffect(() => {
    minSet(range[0]);
    maxSet(range[1]);
  }, [range]);

  return (
    <div className="range-slider">
      <h3>{rangeName}</h3>
      <div className="values-wrapper">
        <p>
          <span>{`${minValue} ${addStr}`}</span>
        </p>
        <p>
          <span>{`${maxValue} ${addStr}`}</span>
        </p>
      </div>
      <ReactSlider
        value={range}
        className="slider"
        trackClassName="tracker"
        min={scope[0]}
        max={scope[1]}
        minDistance={10}
        step={step}
        withTracks={true}
        pearling={true}
        renderThumb={(props) => <div {...props} className="thumb"></div>}
        renderTrack={(props) => <div {...props} className="track"></div>}
        onChange={([min, max]) => {
          dispatch(setRange([type, [min, max]]));
        }}
      />
    </div>
  );
};

export default RangeSlider;
