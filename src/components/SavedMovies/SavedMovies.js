import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ resulBySerchSaveMovies, isSearchedSavedMovies, isLoading, handleSearch, favoriteMovies, errSavedMovies, handleFavoriteClick }) {

  return (
    <div className="movies">
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : errSavedMovies ? (
        <span className="movies__error-message">Во время запроса произошла ошибка...</span>
      ) : favoriteMovies ? (
        favoriteMovies.length === 0 ? (
          <span className="movies__no-results-message">Нет сохраненных фильмов</span>
        ) : (
          <>
            <MoviesCardList
              isSaved={true}
              movies={isSearchedSavedMovies ? resulBySerchSaveMovies : favoriteMovies}
              handleFavoriteClick={handleFavoriteClick}
            />
          </>
        )
      ) : null}
    </div>
  );
}

export default SavedMovies;
