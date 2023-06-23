import "./Portfolio.css";
import arrow from "../../../images/Arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>

      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/etelo/russian-travel"
          >
            Статичный сайт
            <img className="portfolio__img-arrow" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>

        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/etelo/mesto"
          >
            Адаптивный сайт
            <img className="portfolio__img-arrow" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>

        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/etelo/react-mesto-api-full-gha"
          >
            Одностраничное приложение
            <img className="portfolio__img-arrow" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
