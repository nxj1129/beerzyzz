import React from "react";
import "./SearchSection.css";
import beerIcon from "../assets/beer-icon.png";
import Search from "./Search.js";

function SearchSection() {
  return (
    <div className="searchSection">
      <div className="topContent">
        <h1 className="searchTitle">Find your beer</h1>
        <Search />
      </div>
      <div className="bottomContent">
        <img className="beerIcon" src={beerIcon} alt="beerIcon" />
      </div>
    </div>
  );
}

export default SearchSection;
