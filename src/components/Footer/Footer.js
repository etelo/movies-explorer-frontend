import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__line"></div>

      <div className="footer__container">
        <p className="footer__year">© 2023</p>
        <a
          className="footer__yandex-link"
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a className="footer__git-link" href="https://github.com/" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </footer>
  );
}
export default Footer;
