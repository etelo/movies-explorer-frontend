import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__container-name">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            type="text"
            value="Виталий"
            minLength="2"
            required
          ></input>
        </div>
        <div className="profile__container-email">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            type="text"
            value="pochta@yandex.ru"
            minLength="2"
            required
          ></input>
        </div>
        <button className="profile__btn-edit" type="button">
          Редактировать
        </button>
        <button className="profile__btn-logout" type="button">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
