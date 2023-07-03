import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../hook/useFormWithValidation";
import mainApi from "../../utils/MainApi";

function Profile({ handleSignOut }) {
  const [updateError, setUpdateError] = useState("");
  const [errorField, setErrorField] = useState("");

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    mainApi
      .getUserInfo(token)
      .then((userInfo) => {
        resetForm(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resetForm]);

  const handleUpdateClick = (e) => {
    const token = localStorage.getItem("token");


    e.preventDefault();
    if (isValid) {
      const { name, email } = values;
      mainApi
        .updateUserInfo(token, name, email)
        .then(() => {
        })
        .catch((err) => {
          setUpdateError(err.message);
          console.log(err.message);
        });
    }
  };

  const handleInputChange = (e) => {
    handleChange(e);
    setUpdateError("");
    setErrorField(e.target.name);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__container-name">
          <label className={`profile__label ${errors.name && "profile__input_error"}`}>Имя</label>
          <input
            className={`profile__input ${errors.name && "profile__input_error"}`}
            type="text"
            value={values.name || ""}
            name="name"
            minLength="2"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="profile__container-email">
          <label className={`profile__label ${errors.email && "profile__input_error"}`}>E-mail</label>
          <input
            className={`profile__input ${errors.email && "profile__input_error"}`}
            type="email"
            value={values.email || ""}
            name="email"
            minLength="2"
            onChange={handleInputChange}
            required
          ></input>
        </div>
        {(errors.email || errors.name) && (
          <span className="profile__error-valid">
            {errorField === "name" && errors.name} 
            {errorField === "email" && errors.email}
          </span>
        )}
        {updateError && <span className="profile__error-update">{updateError}</span>}
        <button
          className="profile__btn-edit"
          type="button"
          disabled={!isValid}
          onClick={handleUpdateClick}>
          Редактировать
        </button>
        <button className="profile__btn-logout" type="button" onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
