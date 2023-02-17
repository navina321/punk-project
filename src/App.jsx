import "./App.scss";
import { useState, useEffect } from "react";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";

function App() {
  const [beers, setBeers] = useState([]);
  // const [searchInput, setSearchInput] = useState([]);
  const [filterByABV, setFilterByABV] = useState(false);
  const [filterByPH, setFilterByPH] = useState(false);
  const [filterClassics, setFilterClassics] = useState(false);

  useEffect(() => {
    getBeers();
  }, [filterByABV, filterByPH, filterClassics]);

  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

    if(filterByABV) {
      url += "?abv_gt=6.0&"
    }
    if(filterClassics) {
      url += "?brewed_before=01-2010&"
    }

    const res = await fetch(url);
    const beerData = await res.json();
    console.log(beerData)
    setBeers(beerData);
  };
  

  //handleSearch function
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredBeersBySearch = beers.filter((beer) =>
      `${beer.name}`.toLowerCase().includes(value)
    );
    setBeers(filteredBeersBySearch);
  };

  //filter by ABV function
  const handleABVFilter = (e) => {
    setFilterByABV(e.target.checked)
  };
  //filter by ph function
  const handlePHFilter = (e) => {
    setFilterByPH(e.target.checked)
  };
  //filter by classic function
  const handleClassicFilter = (e) => {
    setFilterClassics(e.target.checked)
  };

  return (
    <div className="punk-beer">
      <div className="punk-beer__nav">
        <Nav
          handleSearch={handleSearch}
          handleABVFilter={handleABVFilter}
          handlePHFilter={handlePHFilter}
          handleClassicFilter={handleClassicFilter}
        />
      </div>
      <div className="punk-beer__main">
        <Main beers={beers} />
      </div>
    </div>
  );
}

export default App;
