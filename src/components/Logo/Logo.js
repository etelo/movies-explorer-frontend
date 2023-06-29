import React from "react";
import logo from "../../images/Logo.svg";
import "./Logo.css";

function Logo() {
  return (
    <a href="/" className="logo">
      <img className="logo-pic" src={logo} alt="Логотип" />
    </a>
  );
}

export default Logo;
