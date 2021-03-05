import React from 'react'
import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Text } from 'react-font'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetailed } from '../store/actions/moviesAction'
import { Loading } from '../routes'
import { Icon } from '@iconify/react'
import star from '@iconify-icons/uil/star'
import arrowLeft from '@iconify-icons/uil/arrow-left'

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const { detailedMovie, fetchingDetailedMovie } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(fetchDetailed(id))
    // eslint-disable-next-line
  }, [])

  if (fetchingDetailedMovie) {
    return (
      <div className="container flex flex-row flex-wrap w-auto justify-center mx-auto my-10">
        <Loading></Loading>
      </div>
    )
  } else {
    return (
      <div className="container mx-auto pt-0">
        <div className="flex justify-center px-6 my-12">
  
          <div className="w-3/4 flex">
  
            <img
              className="h-auto w-auto bg-gray-400 block bg-cover rounded-l-lg"
              src={detailedMovie.poster_path ? 'https://image.tmdb.org/t/p/w500/'+ detailedMovie.poster_path : 'https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png'} alt="Sunset in the mountains"
            ></img>
  
            <div className="w-full bg-gray-800 p-5 rounded-lg shadow-lg rounded-l-none">
              <Text family="Poppins" className="pt-10 mx-5 uppercase text-4xl font-bold text-green-400 text-center tracking-widest">{detailedMovie.original_title}</Text>
              <div className="px-8 pt-2 pb-6 mb-2 flex flex-col justify-center items-center">
                <div className="flex flex-row justify-start mt-10 pb-5">
                  {
                    [...Array(parseInt(detailedMovie.vote_average))].map((i) => {
                      return <Icon className="text-4xl" key={i} icon={star} style={{color: "#ffdb80"}}></Icon> 
                    })
                  }
                </div>
                <div className="mt-2">
                  <span className="text-gray-300 italic text-center tracking-widest">{detailedMovie.tagline ? detailedMovie.tagline : ''}</span>
                </div>
                <div div className="mt-10 px-10 w-full flex flex-row flex-wrap justify-between">
                  <span className="text-blue-300 font-light">{detailedMovie.release_date ? detailedMovie.release_date.slice(0,4) : ''}</span>
                  <span className="text-blue-300 font-light">{detailedMovie.runtime ? detailedMovie.runtime : ''} min</span>
                  <span className="text-blue-300 font-light">{detailedMovie.genres[0] ? detailedMovie.genres[0].name : ''}</span>
                </div>
                <div className="mt-10 whitespace-pre-line">
                  <p className="text-white text-center mx-2 tracking-wide leading-relaxed">{detailedMovie.overview}</p>
                </div>
                <div div className="mt-10 px-10 w-full flex flex-col flex-wrap justify-center items-center">
                  <span className="text-gray-300 text-sm font-light">{detailedMovie.production_companies[0] ? detailedMovie.production_companies[0].name : ''}</span>
                  <span className="text-gray-300 mt-2 text-sm font-light">{detailedMovie.spoken_languages[0] ? detailedMovie.spoken_languages[0].name: ''}</span>
                  <span className="text-gray-300 mt-2 text-sm font-light">{detailedMovie.status}</span>
                </div>
                <div className="mt-20">
                  <button className="text-red-400
                  focus:outline-none active:outline-none flex"
                  onClick={() => history.goBack()}><Icon className="text-2xl mr-2" icon={arrowLeft}></Icon><span>go back</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
