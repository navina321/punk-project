import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import './Main.scss'

const Main = ({beers}) => {
  return (
    <div className='punk-beer__main'>
        <CardContainer beers={beers}/>
    </div>
  )
}

export default Main