import React from 'react'
import './SearchBox.scss'

const SearchBox = ({handleSearch}) => {
  return (
    <div className='search-box'>
        <input 
            type="text" 
            placeholder='Search Punk API'
            onInput={handleSearch}
            className='search-box__input'
        />
    </div>
  )
}

export default SearchBox