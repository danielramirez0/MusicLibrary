import React, { Component } from "react";
import TitleBar from "./TitleBar/titleBar";
import Table from "./Table/table";
import Form from "./Form/form";
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
      showForm: false,
      mainEndpoint: "http://127.0.0.1:8000/music/",

    };
  }

  componentDidMount() {
    this.runPromise();
  }

  getMusicData(endpoint) {
    return new Promise((resolve, reject) => {
      const response = axios.get(endpoint);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to access data from " + endpoint));
      }
    });
  }

  deleteMusicAPICall(endpoint, recordID) {
    return new Promise((res, rej) => {
      const response = axios.delete(`${endpoint}/${recordID}`);
      if (response != null) {
        res(response);
      } else {
        rej(new Error("Unable to delete data at " + endpoint));
      }
    });
  }

  addMusicAPICall(endpoint, record) {
    return new Promise((res, rej) => {
      const response = axios.post(endpoint, record);
      if (response != null) {
        res(response);
      } else {
        rej(new Error("Unable to post data at " + endpoint));
      }
    });
  }

  async addMusicData(record) {
    try {
      const response = await this.addMusicAPICall(this.state.mainEndpoint, record);
      this.setState({
        viewData: [...this.state.viewData, response.data],
        showForm: false,
        showTable: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateMusicData(endpoint) {
    axios.put(endpoint);
  }

  async deleteMusicData(recordID) {
    try {
      const response = await this.deleteMusicAPICall(this.state.mainEndpoint, recordID);
      this.setState({
        viewData: [response.data],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async runPromise() {
    try {
      const response = await this.getMusicData(this.state.mainEndpoint);
      this.setState({
        rootData: response.data,
        viewData: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  displayTable(mode) {
    mode === "off" ? this.setState({ showTable: false }) : this.setState({ showTable: true, showForm: false });
  }

  displayForm(mode) {
    mode === "off" ? this.setState({ showForm: false }) : this.setState({ showForm: true, showTable: false });
  }

  displayReset() {
    this.state.showForm === true ? this.setState({ showForm: false }) : this.setState({});
    this.state.showTable === true ? this.setState({ showTable: false }) : this.setState({});
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { searchInput, data } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.id.toString().includes(searchInput.toString()) ||
        value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.album.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.artist.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.genre.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.releaseDate.toString().toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    this.setState({ filteredData });
  };

  render() {
    return (
      <div className="App">
        <br />
        <TitleBar />
        <ButtonGroup toggleTable={(mode) => this.displayTable(mode)} toggleForm={(mode) => this.displayForm(mode)} resetUI={() => this.displayReset()} />
        {this.state.showForm === false ? null : <Form addMusicData={(record) => this.addMusicData(record)} />}
        {this.state.showTable === false ? null : <Table music={this.state.viewData} deleteRecord={(record) => this.deleteMusicData(record)} handleChange={(e) => this.handleChange(e)} />}
      </div>
    );
  }
}

export default App;
