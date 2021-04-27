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

  addMusicData(endpoint, data) {
    return new Promise((resolve, reject) => {
      const response = axios.post(endpoint, data);
      let dataWithKey = data;
      dataWithKey.id = this.state.viewData.length + 1;
      console.log(data);
      if (response != null) {
        resolve(response);
        this.setState({
          viewData: [...this.state.viewData, dataWithKey],
          showForm: false,
          showTable: true,
        });
      } else {
        reject(new Error("Unable to add record at " + endpoint));
      }
    });
  }

  updateMusicData(endpoint) {
    return new Promise((resolve, reject) => {
      const response = axios.put(endpoint);
      if (response != null) {
        resolve(response);
        // this.runPromise();
      } else {
        reject(new Error("Unable to add record at " + endpoint));
      }
    });
  }

  deleteMusicData(endpoint, id) {
    return new Promise((resolve, reject) => {
      const response = axios.delete(endpoint, id);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to add record at " + endpoint));
      }
    });
  }

  async runPromise() {
    try {
      // const response = await this.getMusicData("http://www.devcodecampmusiclibrary.com/api/music");
      const response = await this.getMusicData("http://localhost:5000/api/songs");
      this.setState(((this.state.rootData = response.data), (this.state.viewData = response.data)));
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

  render() {
    return (
      <div className="App">
        <br />
        <TitleBar />
        <ButtonGroup toggleTable={(mode) => this.displayTable(mode)} toggleForm={(mode) => this.displayForm(mode)} resetUI={() => this.displayReset()} />
        {this.state.showForm === false ? null : <Form addMusicData={(endpoint, data) => this.addMusicData(endpoint, data)} />}
        {this.state.showTable === false ? null : <Table music={this.state.viewData} />}
      </div>
    );
  }
}

export default App;
