import React from 'react'
import { Text } from 'react-font'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import heart from '@iconify-icons/uil/heart-alt'
import heartBreak from '@iconify-icons/uil/heart-break'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToFav, replaceFavs } from '../store/actions/favoritesAction'

const Card = (props) => {
  const { favoriteMovies } = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const notify = () => toast.error('added to favorites!', {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: false,
    draggable: false
  })

  const warning = () => toast.warn(`you've added this movie already...`, {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: false,
    draggable: false
  })

  const deleted = () => toast.error(`deleted from favorites!`, {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: false,
    draggable: false
  })

  const wut = () => toast.dark(`?????`, {
    position: "top-center",
    autoClose: 1000,
    pauseOnHover: false,
    draggable: false
  })

  const addToFavorites = () => {
    if (!favoriteMovies.find(favorite => favorite.id === props.movie.id)) {
      notify()
      const favoriteMovie = {...props.movie}
      favoriteMovie.favorited = true
      dispatch(addToFav(favoriteMovie))
    } else {
      warning()
    }
  }

  const removeFavorite = () => {
    const filteredFavoriteMovies = [...favoriteMovies.filter(favorite => favorite.id !== props.movie.id)]
    if (filteredFavoriteMovies.length !== favoriteMovies.length) {
      dispatch(replaceFavs(filteredFavoriteMovies))
      deleted()
    } else {
      wut()
    }
  }

  return (
    <>
    <ToastContainer/>
    <div className="max-w-md mx-5 rounded-md overflow-hidden shadow-2xl my-2 bg-gray-800">
      <Link to={`/detail/${props.movie.id}`}>
      <img className="w-full" src={props.movie.backdrop_path ? 'https://image.tmdb.org/t/p/w500/'+props.movie.backdrop_path : 'https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png'} alt="Sunset in the mountains"></img>
      </Link>
      <div className="px-6 py-4 align-start">
        <div className="flex justify-between">
        <Text family="Poppins" className="font-semibold text-lg mb-2 text-blue-300 w-4/5">{props.movie.title}</Text>
        <Text family="Poppins" className="font-semibold text-lg mb-2 text-green-400">{props.movie.vote_average}<span className="text-gray-400 text-sm"> / 10</span> </Text>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-gray-300 text-sm font-light">
            { props.movie.adult ? 'R' : 'PG-13'} / {new Date(props.movie.release_date).getFullYear()} / {props.movie.original_language}
          </span>
          <div className="inline-flex">
          {
            props.movie.favorited
            ? <button onClick={removeFavorite} className="focus:outline-none active:outline-none p-0 mx-3">
                <Icon className="text-md" style= {{color: '#a1a6a2'}} icon={heartBreak}></Icon>
              </button>
            : <button onClick={addToFavorites} className="focus:outline-none active:outline-none p-0 mx-3">
                <Icon className="text-md" style= {{color: '#eb8275'}} icon={heart}></Icon>
              </button>
          }
          <Link to={`/detail/${props.movie.id}`}>
            <span className="text-yellow-400 text-sm font-light">
              details
            </span>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
