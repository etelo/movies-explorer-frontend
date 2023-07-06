export function filterMovies(movies, query, duration) {
  const queryLower = query.toLowerCase().trim();

  const filteredMovies = movies.filter(movie => {
    // const { nameRU, nameEN, description, director, duration: movieDuration } = movie;
    // const movieInfo = [nameRU, nameEN, description, director].join(' ').toLowerCase();
    const { nameRU, nameEN, duration: movieDuration } = movie;
    const movieInfo = [nameRU, nameEN].join(' ').toLowerCase();

    if (duration) {
      return movieInfo.includes(queryLower) && movieDuration <= 40;
    } else {
      return movieInfo.includes(queryLower);
    }
  });

  return filteredMovies;
}
