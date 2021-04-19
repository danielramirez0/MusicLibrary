import React, { Component } from "react";
import SearchBar from "./SearchBar/searchBar";
import TitleBar from "./TitleBar/titleBar";
import Table from "./Table/table";
import "./app.css";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.setState({
      data: [
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
      ],
    });
  }
  // apiCall() {
  //   return new Promise((resolve, reject) => {
  //     const response = axios.get("http://www.devcodecampmusiclibrary.com/api/music");
  //     if (response != null) {
  //       resolve(response);
  //     } else {
  //       reject(new Error("Didn't work"));
  //     }
  //   });
  // }
  // async getMusic(params) {
  //   try {
  //     const response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    console.log(this.state.data);
    // console.log(this.apiCall());
    return (
      <div className="App">
        <br />
        <TitleBar />
        <SearchBar />
        <Table music={this.state.data} />
      </div>
    );
  }
}

export default App;
