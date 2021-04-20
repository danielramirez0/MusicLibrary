import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  return (
    // <div className="container-fluid scenter">
    // <form className="d-flex">
    <input className="form-control me-2" type="text" placeholder="Search by artist, song title, album, etc..." aria-label="Search" />
    // <button className="btn btn-outline-success" type="submit" onSubmit={props.goClicked}>
    // GO!
    // </button>
    // </form>
    // </div>
  );
};

export default SearchBar;
