import "./Promo.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>

      <div className="promo__navtab">
        <HashLink className="promo__button" smooth to="#aboutproject">
          О проекте
        </HashLink>
        <HashLink className="promo__button" smooth to="#techs">
          Технологии
        </HashLink>
        <HashLink className="promo__button" smooth to="#aboutme">
          Студент
        </HashLink>
      </div>
    </section>
  );
}

export default Promo;
