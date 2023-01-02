import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./img/logo.png";

interface Ilogo {
  eltClass: string;
}

export function Logo({ eltClass }: Ilogo) {
  return (
    <Link to="/" className={`logo ${eltClass}`}>
      <img src={logoImg} alt="logo" />
    </Link>
  );
}
