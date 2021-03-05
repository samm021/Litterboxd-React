import React from 'react'
import { Card, Empty } from '../routes'
import { useSelector } from 'react-redux'

const Favorites = () => {
  const { favoriteMovies } = useSelector(state => state.favorites)
  return (
    <div className="container flex flex-row flex-wrap w-auto justify-center mx-auto my-10">
      { favoriteMovies.length > 0 
        ? favoriteMovies.map(favorite => {
          return <Card
          key={favorite.id}
          movie={favorite}></Card>
        })
        : <Empty/>
      }
    </div>
  )
}

export default Favorites
