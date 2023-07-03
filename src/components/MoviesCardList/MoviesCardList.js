import MoviesCard from "../MovieCard/MovieCard";
import "./MoviesCardList.css";

function MoviesCardList({ isSaved, movies, handleFavoriteClick, favoriteMovies, handleDeleteSavedClick }) {
  return (
    <div className="cards">
      <ul className="cards__list">
        {movies.map((movie) => (
          <MoviesCard
            key={isSaved? movie.movieId : movie.id}
            movie={movie}
            handleFavoriteClick={handleFavoriteClick}
            favoriteMovies={favoriteMovies}
            isSaved={isSaved}
            handleDeleteSavedClick={handleDeleteSavedClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
