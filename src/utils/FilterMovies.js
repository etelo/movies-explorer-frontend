import { DURATION_SHORTMOVIES } from "../utils/constants"

export function filterMovies(movies, query, duration) {
  const queryLower = query.toLowerCase().trim();

  const filteredMovies = movies.filter(movie => {
    // const { nameRU, nameEN, description, director, duration: movieDuration } = movie;
    // const movieInfo = [nameRU, nameEN, description, director].join(' ').toLowerCase();
    const { nameRU, nameEN, duration: movieDuration } = movie;
    const movieInfo = [nameRU, nameEN].join(' ').toLowerCase();

    if (duration) {
      return movieInfo.includes(queryLower) && movieDuration <= DURATION_SHORTMOVIES;
    } else {
      return movieInfo.includes(queryLower);
    }
  });

  return filteredMovies;
}
