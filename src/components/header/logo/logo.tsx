import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./img/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
