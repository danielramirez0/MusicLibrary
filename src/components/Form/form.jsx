import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    title: "",
    album: "",
    artist: "",
    genre: "",
    releaseDate: "",
  };

  handleSubmit(event) {
    event.preventDefault();
    let endpoint = "http://localhost:5000/api/songs";
    let record = {
      title: this.state.title,
      album: this.state.album,
      artist: this.state.artist,
      genre: this.state.genre,
      releaseDate: this.state.releaseDate,
    };

    this.props.addMusicData(endpoint, record);
  }

  handleChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group row">
            <label htmlFor="inputSong3" className="col-sm-2 col-form-label">
              Song Title
            </label>
            <div className="col-sm-10">
              <input type="text" name="title" onChange={(event) => this.handleChange(event)} value={this.state.title} className="form-control" id="inputSong3" placeholder="Song Title" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputAlbum" className="col-sm-2 col-form-label">
              Album
            </label>
            <div className="col-sm-10">
              <input type="text" name="album" onChange={(event) => this.handleChange(event)} value={this.state.album} className="form-control" id="inputAlbum" placeholder="Album" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputArtist" className="col-sm-2 col-form-label">
              Artist
            </label>
            <div className="col-sm-10">
              <input type="text" name="artist" onChange={(event) => this.handleChange(event)} value={this.state.artist} className="form-control" id="inputArtist" placeholder="Artist" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputGenre" className="col-sm-2 col-form-label">
              Genre
            </label>
            <div className="col-sm-10">
              <input type="text" name="genre" onChange={(event) => this.handleChange(event)} value={this.state.genre} className="form-control" id="inputGenre" placeholder="Genre" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputReleaseDate" className="col-sm-2 col-form-label">
              Release Date
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="releaseDate"
                onChange={(event) => this.handleChange(event)}
                value={this.state.releaseDate}
                className="form-control"
                id="inputReleaseDate"
                placeholder="Release Date in format (mm/dd/yyyy)"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10 ">
              <button type="submit" className="btn btn-primary">
                Submit New Record
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default Form;
