import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  return (
    <div className="container-fluid scenter">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Artist, Song, Album...etc." aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onSubmit={props.userInput}>
          GO!
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
