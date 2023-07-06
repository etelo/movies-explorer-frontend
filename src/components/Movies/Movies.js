import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import {
  VIDEOS_COUNT_PHONE, VIDEOS_COUNT_PHONE_ADD,
  VIDEOS_COUNT_TABLET, VIDEOS_COUNT_TABLET_ADD,
  VIDEOS_COUNT_LAPTOP, VIDEOS_COUNT_LAPTOP_ADD,
  DEVICE_WIDTH_LAPTOP,
  DEVICE_WIDTH_TABLET,
  DEVICE_WIDTH_PHONE
} from "../../utils/constants"

function Movies({
  isLoading,
  error,
  searchResults,
  handleSearch,
  isSearched,
  handleFavoriteClick,
  favoriteMovies,
}) {

  const [cardsPerPage, setCardsPerPage] = useState(12);
  const [cardsPerLoad, setCardsPerLoad] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= DEVICE_WIDTH_LAPTOP) {
        setCardsPerPage(VIDEOS_COUNT_LAPTOP);
        setCardsPerLoad(VIDEOS_COUNT_LAPTOP_ADD);
      } else if (windowWidth >= DEVICE_WIDTH_TABLET) {
        setCardsPerPage(VIDEOS_COUNT_TABLET);
        setCardsPerLoad(VIDEOS_COUNT_TABLET_ADD);
      } else if (windowWidth >= DEVICE_WIDTH_PHONE) {
        setCardsPerPage(VIDEOS_COUNT_PHONE);
        setCardsPerLoad(VIDEOS_COUNT_PHONE_ADD);
      }
    };
    let resizeTimeout;
    const handleResizeWithDelay = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };
    handleResize();
    window.addEventListener("resize", handleResizeWithDelay);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResizeWithDelay);
    };
  }, []);

  const handleShowMore = () => {
    setCardsPerPage((prevCardsPerPage) => prevCardsPerPage + cardsPerLoad);
  };

  return (
    <div className="movies">
      <SearchForm handleSearch={handleSearch} />


      {isLoading ? (
        <Preloader />
      ) : error ? (
        <span className="movies__error-message">Во время запроса произошла ошибка...</span>
      ) : isSearched ? (
        searchResults.length === 0 ? (
          <span className="movies__no-results-message">Ничего не найдено</span>
        ) : (
          <>
            <MoviesCardList
              isSaved={false}
              movies={searchResults.slice(0, cardsPerPage)}
              handleFavoriteClick={handleFavoriteClick}
              favoriteMovies={favoriteMovies}
            />
            {searchResults.length > cardsPerPage && (
              <button className="movies__still" type="button" onClick={handleShowMore}>
                Ещё
              </button>
            )}
          </>
        )
      ) : null}


    </div>
  );

}

export default Movies;
