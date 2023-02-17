import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Filter from '../../components/Filter/Filter'
import './Nav.scss'

const Nav = ({handleSearch,handlePHFilter,handleABVFilter,handleClassicFilter}) => {

  return (
    <div>
        <div>
            <SearchBox handleSearch={handleSearch}/>
        </div>
        <div>
            <Filter 
               handleABVFilter={handleABVFilter}
               handlePHFilter={handlePHFilter}
               handleClassicFilter={handleClassicFilter} 
            />
        </div>
    </div>
  )
}

export default Nav