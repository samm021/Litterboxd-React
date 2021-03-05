import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPopular, fetchSearched, fetchedSearched } from '../store/actions/moviesAction'

const useFetch = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchPopular())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchSearched(searchInput))
    } else {
      dispatch(fetchedSearched([]))
    }
  // eslint-disable-next-line
  }, [searchInput])

  return {
    searchInput,
    setSearchInput
  }
}

export default useFetch
