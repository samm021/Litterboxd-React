import React from 'react'
import { Icon } from '@iconify/react'
import searchAlt from '@iconify-icons/uil/search-alt'
import { Text } from 'react-font'
import { DebounceInput } from 'react-debounce-input'
import { Link } from 'react-router-dom'
import { useFetch } from '../routes'


const Navbar = () => {
  const { setSearchInput } = useFetch()

  return (
    <nav className="bg-gray-800 sticky m-0 p-0 top-0 w-auto flex flex-row justify-between">
      <div className="p-5">
        <Link to="/" onClick={ _=> setSearchInput('') }>
          <Text family='Monoton' className="md:text-3xl text-green-400 italic uppercase tracking-widest">LITTER  BOXD</Text>
        </Link>
      </div>
      <div className="p-5 flex">
        <Link to="/" onClick={ _=> setSearchInput('') }>
          <Text family='Poppins' className="text-md pt-1 text-yellow-300">popular</Text>
        </Link>
        <Link to="/favorites">
          <Text family='Poppins' className="text-md mx-6 pt-1 text-yellow-300">favorites</Text>
        </Link>
        <div className="w-full h-8 px-3 bg-white border rounded-lg flex justify-between items-center relative">
          <DebounceInput placeholder="search movie"
          className="appearance-none w-full outline-none focus:outline-none active:outline-none"
          minLength={3}
          debounceTimeout={1000}
          onChange={ e => setSearchInput(encodeURIComponent(e.target.value.trim())) }/>
          <div className="ml-1 outline-none focus:outline-none active:outline-none">
            <Icon icon={searchAlt} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
