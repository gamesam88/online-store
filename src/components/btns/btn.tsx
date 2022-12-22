import React from "react";

//mport { useState } from "react"
//import './productCard.css'

interface IBtnElt {
  eltClass: string;
  btnText: string;
  onClick?: () => void;
};

export function Btn ({eltClass, onClick, btnText}: IBtnElt) {
  return (
    <button
        className= {`btn btnStyle ${eltClass}`}
        onClick = {onClick}
        >
        {btnText}
    </button>
  )
};