const addToFav = favoritedMovie => {
  return {
    type: 'ADD_TO_FAV',
    payload: favoritedMovie
  }
}

const replaceFavs = newFavoriteMovies => {
  return {
    type: 'REPLACE_FAV',
    payload: newFavoriteMovies
  }
}

export {
  addToFav,
  replaceFavs
}