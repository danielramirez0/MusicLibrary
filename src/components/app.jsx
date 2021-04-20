import React, { Component } from "react";
import SearchBar from "./SearchBar/searchBar";
import TitleBar from "./TitleBar/titleBar";
import Table from "./Table/table";
import ButtonGroup from "./ButtonGroup/buttonGroup";
import "./app.css";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootData: "",
      viewData: "",
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
      this.setState(((this.state.rootData = response.data), (this.state.viewData = response.data)));
    } catch (error) {
      console.log(error);
    }
  }

  updateViewData() {}

  displayTable(mode) {
    mode === "off" ? this.setState({ showTable: false }) : this.setState({ showTable: true });
  }

  displayReset() {
    this.state.showSearch === true ? this.setState({ showSearch: false }) : this.setState({});
    this.state.showTable === true ? this.setState({ showTable: false }) : this.setState({});
  }

  render() {
    return (
      <div className="App">
        <br />
        <TitleBar />
        <SearchBar userSubmission />
        <ButtonGroup toggleTable={(mode) => this.displayTable(mode)} toggleSearch={(mode) => this.displaySearch(mode)} resetUI={() => this.displayReset()} />
        {this.state.showTable === false ? null : <Table music={this.state.viewData} />}
      </div>
    );
  }
}

export default App;
