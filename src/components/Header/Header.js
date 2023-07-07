import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import MenuIcon from "../../images/Menu.svg";
import Navigation from "../Navigation/Navigation";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (location.pathname.includes("/movies")) {
      setActiveLink("movies");
    } else if (location.pathname.includes("/saved-movies")) {
      setActiveLink("saved-movies");
    } else {
      setActiveLink("");
    }
  }, [location]);

  return (
    <header className="header">
      <Logo />
      {isLoggedIn ? (
        <>
          <div className="header__movies-container">
            <Link 
              className={`header__movies ${activeLink === "movies" ? "active-link" : ""}`}
              to="/movies"
            >
              Фильмы
            </Link >
            <Link 
              className={`header__saved-movies ${
                activeLink === "saved-movies" ? "active-link" : ""
              }`}
              to="/saved-movies"
            >
              Сохраненные Фильмы
            </Link >
          </div>

          <Link  className="header__account" to="/profile">
            Аккаунт
          </Link >
          <button className="header__nav-button" onClick={handleMenuClick}>
            <img className="header__nav-button-img" alt="Навигация" src={MenuIcon} />
          </button>
          {isOpen && <Navigation handleClose={() => setIsOpen(false)} />}
        </>
      ) : (
        <div className="header__auth">
          <Link  to="/signup" className="header__singup">
            Регистрация
          </Link >
          <Link  to="/signin" className="header__singin">
            Войти
          </Link >
        </div>
      )}
    </header>
  );
}

export default Header;
