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
      // data: [
      //   {
      //     id: 1,
      //     song: "Example Name",
      //     album: "Example Album",
      //     artist: "Example Artist",
      //     genre: "Example Genre",
      //     releaseDate: "Example Release Date",
      //   },
      // ],
      data: "",
      showTable: false,
    };
  }

  componentDidMount() {
    this.runPromise();
  }

  getMusicData(target) {
    return new Promise((resolve, reject) => {
      const response = axios.get(target);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to access data from " + target));
      }
    });
  }

  async runPromise() {
    try {
      const response = await this.getMusicData("http://www.devcodecampmusiclibrary.com/api/music");
      console.log(response.data);
      this.setState((this.state.data = response.data));
    } catch (error) {
      console.log(error);
    }
  }

  updateDataSet() {
    this.apiCall();
  }

  render() {
    return (
      <div className="App">
        <br />
        <TitleBar />
        <SearchBar />
        <Button type="button" text="Display All Music" buttonClick={() => this.setState({ showTable: true })} />
        <Button type="button" text="Reset" buttonClick={() => this.setState({ showTable: false })} />
        <Filter />
        {this.state.showTable === false ? null : <Table music={this.state.data} />}
      </div>
    );
  }
}

export default App;
