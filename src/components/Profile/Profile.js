import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../hook/useFormWithValidation";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ handleSignOut, handleProfileChange, responsProfileChange }) {
  const [errorField, setErrorField] = useState("");
  const [seeError, setSeeError] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getUserInfo(token)
        .then((userInfo) => {
          resetForm(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [resetForm]);

  const handleUpdateClick = (e) => {
    e.preventDefault();
    if (currentUser.name !== values.name || currentUser.email !== values.email) {
      handleProfileChange(values.name, values.email);
      setSeeError(true);
    }
  };

  const handleInputChange = (e) => {
    handleChange(e);
    setErrorField(e.target.name);
    setSeeError(false);
  };

  return (
    <section className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name ? currentUser.name : ""}!`}</h1>
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
        {responsProfileChange.text &&
          <span className={`profile__error-update ${responsProfileChange.isError && "profile__error-update_black"}`}>{seeError && responsProfileChange.text}</span>}
        <button
          className="profile__btn-edit"
          type="button"
          disabled={!isValid || (values.name === currentUser.name && values.email === currentUser.email)}
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
