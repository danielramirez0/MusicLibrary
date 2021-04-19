import React from "react";
import "./row.css";

const Row = (props) => {
  let renderData = props.music;
  return (
    <>
      {renderData.map((renderData) => (
        <tr key={renderData.id}>
          <th scope="row">{renderData.id}</th>
          <td>{renderData.song}</td>
          <td>{renderData.album}</td>
          <td>{renderData.artist}</td>
          <td>{renderData.genre}</td>
          <td>{renderData.releaseDate}</td>
        </tr>
      ))}
    </>
  );
};

export default Row;
