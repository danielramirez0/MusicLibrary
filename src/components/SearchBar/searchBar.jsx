import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Artist, Song, Album...etc." aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
