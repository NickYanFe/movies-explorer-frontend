import { SHORTS_DURATION } from "../components/constants/constants";

export function filteredMoviesSave(movies, query) {
  const filteredMovies = movies.filter((movie) => {
    const nameRU = movie.nameRU ? movie.nameRU.toLowerCase() : "";
    const nameEng = movie.nameEng ? movie.nameEng.toLowerCase() : "";
    const trimmedQuery = query ? query.toLowerCase().trim() : "";
    return nameRU.includes(trimmedQuery) || nameEng.includes(trimmedQuery);
  });
  return filteredMovies;
}

export function DurationConverter(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours} ч ${minutes} мин`;
}

export function filteredShortMovies(movies) {
  if (!movies) {
    return [];
  }
  return movies.filter((movie) => movie.duration < SHORTS_DURATION);
}
