import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import './Nav.scss'

const Nav = ({handleSearch}) => {

  return (
    <div>
        <div>
            <SearchBox handleSearch={handleSearch}/>
        </div>
    </div>
  )
}

export default Nav