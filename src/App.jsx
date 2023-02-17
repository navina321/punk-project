import './App.scss';
import { useState, useEffect } from 'react';
import Main from './containers/Main/Main'
import Nav from './containers/Nav/Nav';

function App() {

  const [beers, setBeers] = useState([]);
 // const [searchInput, setSearchInput] = useState([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";

    const res = await fetch (url)
    const beerData = await res.json()

    setBeers(beerData.results)
  }
  console.log(getBeers)
  
  // useEffect(() => {
  //   getBeers()
  // },[]);

  //handleSearch function
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredBeersBySearch = beers.filter(beer => (`${beer.name}`.toLowerCase().includes(value)));
    setBeers(filteredBeersBySearch);
  }

  //filter by ABV function
  const handleABVFilter = () => {

  }
  //filter by ph function
  const handlePHFilter = () => {
    
  }
  //filter by classic function
  const handleClassicFilter = () => {
    
  }
  
  return (
    <div className="punk-beer">
      <div className='punk-beer__nav'>
        <h1>Punk Beers</h1>
        <Nav 
          handleSearch={handleSearch}
          handleABVFilter={handleABVFilter}
          handlePHFilter={handlePHFilter}
          handleClassicFilter={handleClassicFilter}
        />
      </div>
      <div className='punk-beer__main'>
        <Main beers={beers}/>
      </div>
    </div>
  );
}

export default App;
