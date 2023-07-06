import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

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
      if (windowWidth >= 1280) {
        setCardsPerPage(12);
        setCardsPerLoad(3);
      } else if (windowWidth >= 768) {
        setCardsPerPage(8);
        setCardsPerLoad(2);
      } else if (windowWidth >= 320) {
        setCardsPerPage(5);
        setCardsPerLoad(2);
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
      <SearchForm handleSearch={handleSearch}/>


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
