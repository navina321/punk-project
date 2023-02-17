import React from 'react'
import CardContainer from '../CardContainer/CardContainer'

const Main = ({beers}) => {
  return (
    <div>
        <CardContainer beers={beers}/>
        <h1>hello</h1>
    </div>
  )
}

export default Main