import React from 'react'


const BeerCard = ({name,tagline,image}) => {


  const beerDisplayJSX = (
    <div className='beer-display'>
      <h1 className='beer-display__title'>{name}</h1>
      <div className='beer-display__img-container'>
        <img src={image} className='beer-display__image' alt={name}/>
      </div>
      <h2>"{tagline}"</h2>
    </div>
  )

  return (
    <div>
      {beerDisplayJSX}
    </div>
  )
}

export default BeerCard