import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="movies">
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList isSaved={true} />}
    </div>
  );
}

export default Movies;
