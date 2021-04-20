import React, { Component } from "react";
import Row from "../Row/row";
import SearchBar from "../SearchBar/searchBar";

import "./table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.music,
      filteredData: props.music,
      searchInput: "",
    };
  }

  globalSearch = () => {
    let { searchInput, data } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.album.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.genre.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.releaseDate.toString().toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    this.setState({ filteredData });
  };

  render() {
    // const Table = (props) => {
    return (
      <>
        <SearchBar />
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
            </tr>
          </thead>
          <tbody>
            <Row music={this.state.filteredData} />
          </tbody>
        </table>
      </>
    );
  }
  // };
}

export default Table;
