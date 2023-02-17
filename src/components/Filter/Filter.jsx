import React from 'react'
import './Filter.scss'

const Filter = (handleABVFilter,handleClassicFilter,handlePHFilter) => {


  return (
    <div>
        <div>
            <input 
                onChange={handleABVFilter}
                type="checkbox"
                name="ABV"
                id="ABV"
            />
            <label>High Alcohol: ABV {'>'} 6%</label>
        </div>
        <div>
            <input 
                onChange={handleClassicFilter}
                type="checkbox"
                name="Classic"
                id="Classic"
            />
            <label>Classic Range: pre-2010</label>
        </div>
        <div>
            <input 
                onChange={handlePHFilter}
                type="checkbox"
                name="pH"
                id="pH"
            />
            <label>High Acidity: ph {'<'} 4</label>
        </div>
        
    </div>
  )
}

export default Filter