import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import './Main.scss'

const Main = ({beers}) => {
  return (
    <div className='Main'>
        <CardContainer beers={beers}/>
    </div>
  )
}

export default Main