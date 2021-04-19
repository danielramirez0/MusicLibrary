import React, { Component } from "react";
import SearchBar from "./SearchBar/searchBar";
import TitleBar from "./TitleBar/titleBar";
import Table from "./Table/table";
import Button from "./Button/button";
import Filter from "./Filter/filter";
import "./app.css";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          song: "Example Name",
          album: "Example Album",
          artist: "Example Artist",
          genre: "Example Genre",
          releaseDate: "Example Release Date",
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({});
  }
  apiCall(target) {
    return new Promise((resolve, reject) => {
      const response = axios.get(target);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Didn't work"));
      }
    });
  }

  async getMusic() {
    try {
      const response = await this.apiCall("http://www.devcodecampmusiclibrary.com/api/music");
      this.state.data = response
    } catch (error) {
      console.log(error);
    }
  }
  
  updateDataSet() {
    this.apiCall()
  }

  render() {
    return (
      <div className="App">
        <br />
        <TitleBar />
        <SearchBar />
        <Button type="submit" text="Display All Music" buttonClick={(dataSet) => )} />
        <Table music={this.state.data} />
        <Filter />
      </div>
    );
  }
}

export default App;
