import { createStore, combineReducers, applyMiddleware } from 'redux'
import moviesReducer from './reducers/moviesReducer'
import favoritesReducer from './reducers/favoritesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store