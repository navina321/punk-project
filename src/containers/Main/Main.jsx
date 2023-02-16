import React from 'react'
import CardContainer from '../CardContainer/CardContainer'

const Main = ({beers}) => {
  return (
    <div>
        <CardContainer beers={beers}/>
    </div>
  )
}

export default Main