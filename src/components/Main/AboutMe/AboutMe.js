import "./AboutMe.css";
import avatar from "../../../images/Avatar.jpg";

function AboutMe() {
  return (
    <section className="aboutme">
      <h3 className="aboutme__header">Студент</h3>
      <div className="aboutme__line"></div>

      <div className="aboutme__container">
        <div className="aboutme__info">
          <h3 className="aboutme__name">Александр</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 36 лет</p>
          <p className="aboutme__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="aboutme__git"
            href="https://github.com/etelo"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>

        <img className="aboutme__image" src={avatar} alt="Фото" />
      </div>
    </section>
  );
}
export default AboutMe;
