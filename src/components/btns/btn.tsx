import React from "react";

interface IBtnElt {
  eltClass: string;
  btnText: string;
  handler: () => void;
}

export function Btn({ eltClass, handler, btnText }: IBtnElt) {
  return (
    <button className={`btn btnStyle ${eltClass}`} onClick={() => handler()}>
      {btnText}
    </button>
  );
}
