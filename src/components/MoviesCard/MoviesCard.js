import "./MoviesCard.css";

function MoviesCard({
  poster,
  title = "33 слова о дизайне",
  duration = "1ч42м",
  isSaved,
  favorite,
}) {
  return (
    <>
      <li className="movie">
        <div className="movie__header-container">
          <div className="movie__text-container">
            <h2 className="movie__title">{title}</h2>
            <p className="movie__duration">{duration}</p>
          </div>

          {isSaved ? (
            <button className="movie__button movie__button_save-delete" type="button"></button>
          ) : (
            <button
              className={`movie__button ${
                favorite ? "movie__button_favorite-active" : "movie__button_favorite-inactive"
              }`}
              type="button"
            ></button>
          )}
        </div>

        <img src={poster} className="movie__poster" alt="Постер к фильму" />
      </li>
    </>
  );
}

export default MoviesCard;
