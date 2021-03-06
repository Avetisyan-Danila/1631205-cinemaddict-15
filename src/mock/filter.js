const filmToFilterMap = {
  watchlist: (films) => films.filter((film) => !film.watchlist).length,
  history: (films) => films.filter((film) => !film.isWatched).length,
  favorites: (films) => films.filter((film) => !film.isFavorite).length,
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map(
  ([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(films),
  }),
);
