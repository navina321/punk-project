import './App.scss';
import { useState, useEffect } from 'react';
import Main from './containers/Main/Main'

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers()
  },[]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";

    const res = await fetch (url)
    const beerData = await res.json().results

    setBeers(beerData)
  }
  

  return (
    <div className="App">
      <h1>testing</h1>
      <div>
        <Main beers={beers}/>
      </div>
    </div>
  );
}

export default App;
