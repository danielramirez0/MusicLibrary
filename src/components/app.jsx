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

  addMusicData(target, data) {
    return new Promise((resolve, reject) => {
      const response = axios.post(target, data);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to add record at " + target));
      }
    });
  }

  updateMusicData(target) {
    return new Promise((resolve, reject) => {
      const response = axios.put(target);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to add record at " + target));
      }
    });
  }

  deleteMusicData(target) {
    return new Promise((resolve, reject) => {
      const response = axios.delete(target);
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Unable to add record at " + target));
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
        {this.state.showTable === false ? null : <Table music={this.state.viewData} />}
        {this.state.showForm === false ? null : <Form music={this.state.viewData} />}
      </div>
    );
  }
}

export default App;
