import React from 'react'

const SearchBox = ({handleSearch}) => {
  return (
    <div>
        <input 
            type="text" 
            placeholder='Search for ...'
            onInput={handleSearch}
        />
    </div>
  )
}

export default SearchBox