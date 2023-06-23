import React from "react";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import "./Main.css";

function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
