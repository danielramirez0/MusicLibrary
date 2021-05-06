import React, { Component } from "react";
import Row from "../Row/row";
import SearchBar from "../SearchBar/searchBar";

import "./table.css";

const Table = (props) => {
  return (
    <>
      <SearchBar inputTracking={(e) => props.handleChange(e)} />
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">SONG</th>
            <th scope="col">ALBUM</th>
            <th scope="col">ARTIST</th>
            <th scope="col">GENRE</th>
            {/* <th scope="col" style={{ display: this.state.showStore ? "block" : "none" }}> */}
            <th scope="col">RELEASE DATE</th>
            <th scope="col">REMOVE RECORD</th>
          </tr>
        </thead>
        <tbody>
          <Row music={props.music} deleteRecord={props.deleteRecord} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
