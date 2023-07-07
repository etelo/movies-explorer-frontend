import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Login.css";
import { useFormWithValidation } from "../../hook/useFormWithValidation";

function Login({ isLoggedIn, handleLogin, errorMessageLogin, setErrorMessageLogin, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/movies");
    }
  });

  useEffect(() => {
    setErrorMessageLogin("");
  }, [values, setErrorMessageLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values.email, values.password);
  };

  return (
    <section className="login">
      <Logo />
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__input-label">E-mail</label>
        <input
          type="email"
          className="login__input"
          placeholder="pochta@yandex.ru"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="login__err">{errors.email}</span>}

        <label className="login__input-label">Пароль</label>
        <input
          type="password"
          className={`login__input ${errors.password ? "login__input_err" : ""}`}
          placeholder="••••••••••••••"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="login__err">{errors.password}</span>}

        <button type="submit" className="login__btn-submit" disabled={isLoading || !isValid}>
          {isLoading ? "Загрузка..." : "Войти"}
        </button>
        {errorMessageLogin && (
          <span className="login__err login__err_center">{errorMessageLogin}</span>
        )}
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
