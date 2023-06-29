import search from "../../images/Search.svg";
import "./SearchForm.css";
// import React, { useState } from "react";
// import FilterCheckbox from "react-filter-checkbox";

function SearchForm() {
  return (
    <div className="searchform">
      <div className="searchform__container">
        <form className="searchform__form">
          <div className="searchform__search-box">
            <img className="searchform__img-search" src={search} alt="Иконка поиска" />
            <input className="searchform__input" minLength={2} maxLength={30} type="text" placeholder="Фильм" required></input>
            <button className="searchform__submit" type="submit"></button> 
          </div>

          <div className="searchform__short-box">
            <input className="searchform__checkbox" type="checkbox"></input>
            <span className="searchform__text">Короткометражки</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
