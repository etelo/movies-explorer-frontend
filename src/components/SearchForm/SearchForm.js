import search from "../../images/Search.svg";
import "./SearchForm.css";
import React, { useState, useEffect } from "react";

function SearchForm({ handleSearch, handleFilter }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  useEffect(() => {
    const savedKeyword = localStorage.getItem("searchKeyword");
    const savedIsShortFilm = localStorage.getItem("isShortFilm");
    if (savedKeyword) {
      setKeyword(savedKeyword);
    }
    if (savedIsShortFilm) {
      setIsShortFilm(savedIsShortFilm === "true");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      setError(true);
    } else {
      setError(false);
      handleSearch(keyword, isShortFilm);
      
      localStorage.setItem("searchKeyword", keyword);
      localStorage.setItem("isShortFilm", isShortFilm.toString());
    }
  };

  return (
    <div className="searchform">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={handleSubmit} noValidate>
          <div className="searchform__search-box">
            <img className="searchform__img-search" src={search} alt="Иконка поиска" />
            <input
              className="searchform__input"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              minLength={2}
              maxLength={30}
              type="text"
              placeholder="Фильм"
              required
            ></input>

            <button className="searchform__submit" type="submit"></button>
          </div>

          <div className="searchform__short-box">
            <input
              className="searchform__checkbox"
              type="checkbox"
              checked={isShortFilm}
              onChange={(e) => setIsShortFilm(e.target.checked)}
            ></input>
            <span className="searchform__text">Короткометражки</span>
          </div>
        </form>
        {error && <span className="search-form__error">Нужно ввести ключевое слово</span>}
      </div>
    </div>
  );
}

export default SearchForm;
