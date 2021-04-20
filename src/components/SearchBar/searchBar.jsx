import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  return <input className="form-control me-2" type="text" placeholder="Search by artist, song title, album, etc..." aria-label="Search" onChange={props.inputTracking} />;
};

export default SearchBar;
