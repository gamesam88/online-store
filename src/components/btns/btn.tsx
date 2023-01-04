import React from "react";
import { IcartItem } from "../../models/models";

//mport { useState } from "react"
//import './productCard.css'

interface IBtnElt {
  eltClass: string;
  btnText: string;
  onClick?: () => void;
  cartItem?: IcartItem;
  count: number;
}

export function Btn({ eltClass, onClick, btnText }: IBtnElt) {
  return (
    <button className={`btn btnStyle ${eltClass}`} onClick={onClick}>
      {btnText}
    </button>
  );
}
