import React from "react";
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
        <tr>
          <th scope="row">1</th>
          <td>A song</td>
          <td>An Album</td>
          <td>An Artist</td>
          <td>A Genre</td>
          <td>A Date</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>A song</td>
          <td>An Album</td>
          <td>An Artist</td>
          <td>A Genre</td>
          <td>A Date</td>
        </tr>
        {/* <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Table;
