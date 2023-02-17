import "./App.scss";
import { useState, useEffect } from "react";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";

function App() {
  const [beers, setBeers] = useState([]);
  //setting useState to false so there are no filters on API on page load
  const [filterByABV, setFilterByABV] = useState(false);
  const [filterByPH, setFilterByPH] = useState(false);
  const [filterClassics, setFilterClassics] = useState(false);

  //renders beer API on page load with filters if needed, prevents infinite re-rendering
  useEffect(() => {
    getBeers();
  }, [filterByABV, filterByPH, filterClassics]);

  //gets beers from API without filters as default
  const getBeers = async () => {
    let url = "https://api.punkapi.com/v2/beers";

    //adds parameters to url to get abv > 6
    if(filterByABV) {
      url += "?abv_gt=6.0&"
    }
    //adds parameters to url to get classics if brewed before 2010
    if(filterClassics) {
      url += "?brewed_before=01-2010&"
    }

    //returns beers from API dependent on if a filter has been used
    const res = await fetch(url);
    const beerData = await res.json();
    console.log(beerData)
    setBeers(beerData);
  };
  

  //handleSearch function, checks event of typing in search bar
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredBeersBySearch = beers.filter((beer) =>
      `${beer.name}`.toLowerCase().includes(value)
    );
    setBeers(filteredBeersBySearch);
  };

  //filter by ABV function checks event of selecting checkbox on filter
  const handleABVFilter = (e) => {
    setFilterByABV(e.target.checked)
  };
  //filter by ph function checks event of selecting checkbox on filter(
  const handlePHFilter = (e) => {
    setFilterByPH(e.target.checked)
  };
  //filter by classic function checks event of selecting checkbox on filter
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