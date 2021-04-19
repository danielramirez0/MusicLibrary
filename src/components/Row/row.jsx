import React from "react";
import "./row.css";
const testData = [
  {
    id: 1,
    song: "testS",
    album: "testAl",
    artist: "testAr",
    genre: "testG",
    releaseDate: "testRD",
  },
  {
    id: 2,
    song: "test2S",
    album: "test2Al",
    artist: "test2Ar",
    genre: "test2G",
    releaseDate: "test2RD",
  },
];

const Row = () => {
  return (
    <>
      {testData.map((testData) => (
        <tr>
          <th scope="row">{testData.id}</th>
          <td>{testData.song}</td>
          <td>{testData.album}</td>
          <td>{testData.artist}</td>
          <td>{testData.genre}</td>
          <td>{testData.releaseDate}</td>
        </tr>
      ))}
    </>
  );
};

export default Row;
