import React from 'react'
import { Card, Loading } from '../routes'
import { useSelector } from 'react-redux'

const Home = () => {
  const { popularMovies, searchedMovies, fetchingPopularMovies, fetchingSearchedMovies } = useSelector(state => state.movies)


  if (fetchingPopularMovies || fetchingSearchedMovies) {
    return (
      <div className="container flex flex-row flex-wrap w-auto justify-center mx-auto my-10">
        <Loading></Loading>
      </div>
    )
  } else {
    return (
      <div className="container flex flex-row flex-wrap w-auto justify-center mx-auto my-10">
        { searchedMovies.length > 0 
          ? searchedMovies.map(movie => {
            movie.favorited = false
            return <Card
            key={movie.id}
            movie={movie}></Card>
          })
          : popularMovies.map(movie => {
            movie.favorited = false
            return <Card
            key={movie.id}
            movie={movie}></Card>
          })
        }
      </div>
    )
  }
}

export default Home
