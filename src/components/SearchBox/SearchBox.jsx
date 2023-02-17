import React from 'react'
import './SearchBox.scss'

const SearchBox = ({handleSearch}) => {
  return (
    <div>
        <input 
            type="text" 
            placeholder='Search'
            onInput={handleSearch}
        />
    </div>
  )
}

export default SearchBox