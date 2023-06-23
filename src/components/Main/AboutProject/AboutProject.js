import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutproject">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__line"></div>

      <div className="aboutproject__info">
        <h3 className="aboutproject__info-title aboutproject__info-title_left">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="aboutproject__info-title aboutproject__info-title_right">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="aboutproject__info-text aboutproject__info-text_left">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
          доработки.
        </p>
        <p className="aboutproject__info-text aboutproject__info-text_right">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
          защититься.
        </p>
      </div>

      <div className="aboutproject__timeline">
        <p className="aboutproject__timeline-text aboutproject__timeline-text_firstweek">
          1 неделя
        </p>
        <p className="aboutproject__timeline-text aboutproject__timeline-text_leftweeks">
          4 недели
        </p>
        <h3 className="aboutproject__timeline-sign">Back-end</h3>
        <h3 className="aboutproject__timeline-sign">Front-end</h3>
      </div>
    </section>
  );
}
export default AboutProject;
