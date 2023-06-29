import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>

      <div className="promo__navtab">
        <botton className="promo__button">
          <a className="promo__navtext" href="#aboutproject">
            О проекте
          </a>
        </botton>

        <botton className="promo__button">
          <a className="promo__navtext" href="#techs">
            Технологии
          </a>
        </botton>

        <botton className="promo__button">
          <a className="promo__navtext" href="#aboutme">
            Студент
          </a>
        </botton>
      </div>
    </section>
  );
}

export default Promo;
