import React, { Component } from "react";
import Row from "../Row/row";
import "./table.css";

function Table(props) {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">SONG</th>
          <th scope="col">ALBUM</th>
          <th scope="col">ARTIST</th>
          <th scope="col">GENRE</th>
          <th scope="col">RELEASE DATE</th>
        </tr>
      </thead>
      <tbody>
        <Row music={props.music} />
      </tbody>
    </table>
  );
}

export default Table;
