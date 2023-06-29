import React, { useState } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import MenuIcon from "../../images/Menu.svg";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <Logo />
      {isLoggedIn ? (
        <>
          <div className="header__movies-container">
            <a className="header__movies" href="/movies">
              Фильмы
            </a>
            <a className="header__saved-movies" href="/saved-movies">
              Сохраненные Фильмы
            </a>
          </div>

          <a className="header__account" href="/profile">
            Аккаунт
          </a>
          <button className="header__nav-button" onClick={handleMenuClick}>
            <img className="header__nav-button-img" alt="Навигация" src={MenuIcon} />
          </button>
          {isOpen && <Navigation handleClose={() => setIsOpen(false)} />}
        </>
      ) : (
        <div className="header__auth">
          <a href="/signup" className="header__singup">
            Регистрация
          </a>
          <a href="/signin" className="header__singin">
            Войти
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
