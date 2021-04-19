import React from "react";
import "./table.css";
import Row from "../Row/row";

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
        {/* <tr>
          <th scope="row">{props.music[0].id}</th>
          <td>A song</td>
          <td>An Album</td>
          <td>An Artist</td>
          <td>A Genre</td>
          <td>A Date</td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default Table;
