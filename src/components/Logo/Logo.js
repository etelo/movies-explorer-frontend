import React from "react";
import logo from "../../images/Logo.svg";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img className="logo-pic" src={logo} alt="Логотип" />
    </Link>
  );
}

export default Logo;
