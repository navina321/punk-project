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
  
  return (
    <div className="punk-beer">
      <h1>testing</h1>
      <div>
        <Nav handleSearch={handleSearch}/>
      </div>
      <div>
        <Main beers={beers}/>
      </div>
    </div>
  );
}

export default App;
