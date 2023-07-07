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
            Я занимаюсь программированием примерно десять лет, начав с языка C#.
            В 2022 году я решил расширить свои навыки и начал обучение веб-разработке на десятимесячных курсах Яндекс Практикума.
            Эта область мне невероятно интересна.
            В настоящее время я работаю над дипломным проектом и ищу возможности для дальнейшего роста и развития в этом направлении.
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
