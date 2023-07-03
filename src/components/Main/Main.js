import React from "react";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import "./Main.css";
import { Route } from "react-router-dom";

function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject id="aboutproject" />
      <Techs id="techs" />
      <AboutMe id="aboutme" />
      <Portfolio />
    </main>
  );
}

export default Main;
