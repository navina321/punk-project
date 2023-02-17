import React from 'react'
import { useState } from 'react'
import './BeerCard.scss'


const BeerCard = ({name,tagline,image, description, ph, abv}) => {

  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  const beerDisplayJSX = (
    <div className='beer-display' onClick={handleClick}>
      <h1 className='beer-display__title'>{name}</h1>
      <div className='beer-display__img-container'>
        <img src={image} className='beer-display__image' alt={name}/>
      </div>
      <h2>"{tagline}"</h2>
    </div>
  )

  const beerInfoJSX = (
    <div className='beer-display' onClick={handleClick}>
      <h2>{name} Info</h2>
      <h3 className='beer-display__description'>{description}</h3>
      <h3 className='beer-display__info'>A.B.V:{abv}%</h3>
      <h3>p.H:{ph}</h3>

    </div>
  )

  return (
    <div className='beer-card'>
      {showInfo ? beerDisplayJSX : beerInfoJSX}
    </div>
  )
}

export default BeerCard