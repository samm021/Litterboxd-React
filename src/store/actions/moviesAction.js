const API_KEY = process.env.REACT_APP_API_KEY

const fetchingPopular = () => {
  return {
    type: 'FETCHING_POPULAR'
  }
}

const fetchingSearched = () => {
  return {
    type: 'FETCHING_SEARCHED'
  }
}

const fetchingDetailed = () => {
  return {
    type: 'FETCHING_DETAILED'
  }
}

const fetchedPopular = popularMovies => {
  return {
    type: 'FETCHED_POPULAR',
    payload: popularMovies 
  }
}

const fetchedSearched = searchedMovies => {
  return {
    type: 'FETCHED_SEARCHED',
    payload: searchedMovies
  }
}

const fetchedDetailed = detailedMovie => {
  return {
    type: 'FETCHED_DETAILED',
    payload: detailedMovie
  }
}

const fetchPopular = () => {
  return async dispatch => {
    try {
      dispatch(fetchingPopular)
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      const json = await res.json()
      dispatch(fetchedPopular(json.results))
    }
    catch(err) {
      console.log(err)
    }
  }
}

const fetchSearched = query => {
  return async dispatch => {
    try {
      dispatch(fetchingSearched())
      const res  = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      const json = await res.json()
      dispatch(fetchedSearched(json.results))
    } catch(err) {
      console.log(err)
    }
  }
}

const fetchDetailed = id => {
  return async dispatch => {
    try {
      dispatch(fetchingDetailed())
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      const json = await res.json()
      dispatch(fetchedDetailed(json))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export {
  fetchingPopular,
  fetchingSearched,
  fetchingDetailed,
  fetchedPopular,
  fetchedSearched,
  fetchedDetailed,
  fetchPopular,
  fetchSearched,
  fetchDetailed
}

