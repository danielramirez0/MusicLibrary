import React from "react";
import "./row.css";

const Row = (props) => {
  let sourceData = props.music;
  return (
    <>
      {sourceData.map((music) => (
        <tr key={music.id}>
          <th scope="row">{music.id}</th>
          <td>{music.title}</td>
          <td>{music.album}</td>
          <td>{music.artist}</td>
          <td>{music.genre}</td>
          <td>{music.release_date}</td>
          <td>
            <button type="button" className="btn btn-danger" aria-label="Close" onClick={() => props.deleteRecord(music.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Row;
