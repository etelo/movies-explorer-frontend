import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ handleClose }) {
  return (
    <section className="navigation">
      <button className="navigation__btn-close" onClick={handleClose}></button>
      <div className="navigation__container">
        <NavLink to="/" className="navigation__link">
          Главная
        </NavLink>
        <NavLink to="/movies" className="navigation__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="navigation__link">
          Сохранённые Фильмы
        </NavLink>
      </div>

      <NavLink className="navigation__acc" to="/profile">
        Аккаунт
      </NavLink>
    </section>
  );
}

export default Navigation;
