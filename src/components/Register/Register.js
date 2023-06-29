import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";

function Register() {
  return (
    <section className="reg">
      <Logo />
      <h2 className="reg__title">Добро пожаловать!</h2>
      <form className="reg__form">
        <label className="reg__input-label">Имя</label>
        <input type="text" className="reg__input" placeholder="Виталий" required />
        <label className="reg__input-label">E-mail</label>
        <input type="email" className="reg__input" placeholder="pochta@yandex.ru|" required />
        <label className="reg__input-label">Пароль</label>
        <input
          type="password"
          className="reg__input reg__input_err"
          placeholder="••••••••••••••"
          required
        />
        <span className="reg__err">Что-то пошло не так...</span>

        <button type="submit" className="reg__btn-submit">
          Зарегистрироваться
        </button>
      </form>

      <div className="reg__signin">
        <p className="reg__signin-text">Уже зарегистрированы?</p>
        <Link className="reg__signin-link" to="/signin">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
