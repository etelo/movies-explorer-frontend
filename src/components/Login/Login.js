import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";

function Login() {
  return (
    <section className="login">
      <Logo />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__input-label">E-mail</label>
        <input type="email" className="login__input" placeholder="E-mail" required />
        <label className="login__input-label">Пароль</label>
        <input type="password" className="login__input" placeholder="" required />

        <button type="submit" className="login__btn-submit">
          Войти
        </button>
      </form>

      <div className="login__signup">
        <p className="login__signup-text">Ещё не зарегистрированы?</p>
        <Link className="login__signup-link" to="/signup">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
