import React from 'react'
import BeerCard from '../../components/BeerCard/BeerCard'
import './CardContainer.scss'
const CardContainer = ({beers}) => {

    const beerCardJSX = beers.map((beer) => {
        return (
            <BeerCard
                name={beer.name}
                image={beer.image_url}
                description={beer.description}
                tagline={beer.tagline}
                abv={beer.abv}
                ph={beer.ph}
                key={beer.id}
            />
        )
    })
  return (
    <div className='card-container'>
        {beerCardJSX}
    </div>
  )
}

export default CardContainer