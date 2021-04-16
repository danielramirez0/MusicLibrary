import React from "react";
import "./searchBar.css";

function SearchBar(props) {
  return (
    <div class="container-fluid">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Artist, Song, Album...etc." aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
