import React, { useContext, useEffect, useState } from "react";
import "./MovieCard.css";
import mainApi from "../../utils/MainApi";

function MoviesCard({ movie, isSaved, favoriteMovies, handleFavoriteClick }) {
  const isMovieInFavorites = favoriteMovies && favoriteMovies.find((savedMovie) => savedMovie.movieId === movie.id);
  const [favorite, setFavorite] = useState(isMovieInFavorites !== undefined);

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const fullUrl = "https://api.nomoreparties.co" + movie.image.url;
    setImgSrc(fullUrl);
  }, [movie]);

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "ч" : ""} ${minutes}мин`;
  };

  const handleMovieCardClick = () => {
    window.open(movie.trailerLink, "_blank");
  };

  const handleFavoriteButton = () => {
    setFavorite(!favorite);
    handleFavoriteClick(movie);
  };

  const handleDeleteSavedButton = () => {
    handleFavoriteClick(movie);
  };

  return (
    <>
      <li className="movie">
        <div className="movie__header-container">
          <div className="movie__text-container">
            <h2 className="movie__title">{movie.nameRU}</h2>
            <p className="movie__duration">{formatDuration(movie.duration)}</p>
          </div>

          {isSaved ? (
            <button className="movie__button movie__button_save-delete" type="button" onClick={handleDeleteSavedButton}></button>
          ) : (
            <button
              className={`movie__button ${favorite ? "movie__button_favorite-active" : "movie__button_favorite-inactive"
                }`}
              type="button"
              onClick={handleFavoriteButton}
            ></button>
          )}
        </div>

        <img
          src={isSaved ? movie.image : imgSrc}
          className="movie__poster"
          alt="Постер к фильму"
          onClick={handleMovieCardClick}
        />
      </li>
    </>
  );
}

export default MoviesCard;
