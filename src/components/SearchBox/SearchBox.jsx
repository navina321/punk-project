import React from 'react'
import './SearchBox.scss'

const SearchBox = ({handleSearch}) => {
  return (
    <div>
        <input 
            type="text" 
            placeholder='Search Punk API'
            onInput={handleSearch}
        />
    </div>
  )
}

export default SearchBox