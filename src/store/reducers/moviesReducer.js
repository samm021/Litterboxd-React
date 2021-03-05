const initialState = {
  fetchingPopularMovies: true,
  fetchingSearchedMovies: true,
  fetchingDetailedMovie: true,
  notFoundSearchedMovies: false,
  popularMovies: [],
  searchedMovies: [],
  detailedMovie: {}
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_POPULAR':
      return {
        ...state,
        fetchingPopularMovies: true,
        popularMovies: []
      }
    case 'FETCHING_SEARCHED':
      return {
        ...state,
        fetchingSearchedMovies: true,
        searchedMovies: []
      }
    case 'FETCHING_DETAILED':
      return {
        ...state,
        fetchingDetailedMovie: true,
        detailedMovie: {}
      }
    case 'NOT_FOUND_SEARCHED':
      return {
        ...state,
        notFoundSearchedMovies: true,
        searchedMovies: []
      }
    case 'FETCHED_POPULAR':
      return {
        ...state,
        fetchingPopularMovies: false,
        popularMovies: action.payload,
      }
    case 'FETCHED_SEARCHED':
      return {
        ...state,
        fetchingSearchedMovies: false,
        notFoundSearchedMovies: false,
        searchedMovies: action.payload
      }
    case 'FETCHED_DETAILED':
      return {
        ...state,
        fetchingDetailedMovie: false,
        detailedMovie: action.payload
      }
    default:
      return state
  }
}

export default moviesReducer