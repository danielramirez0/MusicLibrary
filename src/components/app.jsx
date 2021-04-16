import React, { Component } from "react";
import "./app.css";
import SearchBar from "./SearchBar/searchBar";
import TitleBar from "./TitleBar/titleBar";
import Table from "./Table/table";
const axios = require("axios");
// import TitleBar from "./TitleBar/titleBar";
// import BookViewer from "./BookViewer/bookViewer";
// import BookCreator from "./BookCreator/bookCreator";
// import Footer from "./Footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.music = "";
    this.state = {
      bookNumber: 0,
    };
  }

  apiCall() {
    return new Promise((resolve, reject) => {
      const response = axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      if (response != null) {
        resolve(response);
      } else {
        reject(new Error("Didn't work"));
      }
    });
  }
  async getMusic(params) {
    try {
      const response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  addNewBook(book) {
    this.books.push(book);
    this.setState({
      bookNumber: this.books.length - 1,
    });
  }

  goToPreviousBook() {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if (tempBookNumber < 0) {
      tempBookNumber = this.books.length - 1;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  }

  goToNextBook() {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if (tempBookNumber === this.books.length) {
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  }
  render() {
    console.log("GFYS");
    console.log(this.apiCall());
    this.getMusic();
    return (
      <div className="App">
        <br />
        <TitleBar />
        <SearchBar />
        <Table />
        {/* <TitleBar />
        <BookViewer book={this.books[this.state.bookNumber]} nextBook={() => this.goToNextBook()} previousBook={() => this.goToPreviousBook()} />
        <BookCreator addNewBook={this.addNewBook.bind(this)} /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
