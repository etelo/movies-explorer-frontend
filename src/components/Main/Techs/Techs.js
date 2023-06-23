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
        <li className="techs__button">HTML</li>
        <li className="techs__button">CSS</li>
        <li className="techs__button">JS</li>
        <li className="techs__button">React</li>
        <li className="techs__button">Git</li>
        <li className="techs__button">Express.js</li>
        <li className="techs__button">MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
