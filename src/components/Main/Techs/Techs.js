import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h3 className="techs__header">Технологии</h3>
      <div className="techs__line"></div>

      <h1 className="techs__title">7 технологий</h1>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>

      <ul className="techs__buttons">
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            JS
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Git
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Express.js
          </a>
        </li>
        <li className="techs__button">
          <a
            className="techs__link"
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
