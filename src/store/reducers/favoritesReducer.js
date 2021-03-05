const initialState = {
  favoriteMovies: []
}

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload]
      }
    case 'REPLACE_FAV':
      return {
        ...state,
        favoriteMovies: action.payload
      }
    default:
      return state
  }
}

export default favoritesReducer