import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Register.css";
import { useFormWithValidation } from "../../hook/useFormWithValidation";

function Register({
  isLoggedIn,
  handleRegister,
  errorMessageRegister,
  setErrorMessageRegister,
  isLoading,
}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/movies");
    }
  });

  useEffect(() => {
    setErrorMessageRegister("");
  }, [values, setErrorMessageRegister]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <section className="reg">
      <Logo />
      <h2 className="reg__title">Добро пожаловать!</h2>
      <form className="reg__form" onSubmit={handleSubmit}>
        <label className="reg__input-label">Имя</label>
        <input
          type="text"
          className="reg__input"
          placeholder="Виталий"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="reg__err">{errors.name}</span>}

        <label className="reg__input-label">E-mail</label>
        <input
          type="email"
          className="reg__input"
          placeholder="pochta@yandex.ru"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="reg__err">{errors.email}</span>}

        <label className="reg__input-label">Пароль</label>
        <input
          type="password"
          className="reg__input reg__input_err"
          placeholder="••••••••••••••"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="reg__err">{errors.password}</span>}

        <button type="submit" className="reg__btn-submit" disabled={isLoading || !isValid}>
          {isLoading ? "Загрузка..." : "Зарегистрироваться"}
        </button>
        {errorMessageRegister && (
          <span className="reg__err reg__err_center">{errorMessageRegister}</span>
        )}
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
