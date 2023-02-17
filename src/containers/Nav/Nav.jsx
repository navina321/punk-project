import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Filter from "../../components/Filter/Filter";
import "./Nav.scss";

const Nav = ({
  handleSearch,
  handlePHFilter,
  handleABVFilter,
  handleClassicFilter,
}) => {
  return (
    <div className="nav-bar">
      <h1 className="nav-bar__title">Punk Beers</h1>
      <div className="nav-bar__search">
        <SearchBox handleSearch={handleSearch} />
      </div>
      <div className="nav-bar__filter">
        <Filter
          handleABVFilter={handleABVFilter}
          handlePHFilter={handlePHFilter}
          handleClassicFilter={handleClassicFilter}
        />
      </div>
    </div>
  );
};

export default Nav;