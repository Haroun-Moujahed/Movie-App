import React, { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

export class MovieContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchItem: "",
      searchRating: 0
    };
  }

  getRating = searchRating => {
    this.setState({
      searchRating: searchRating
    });
  };

  getSearch = searchItem => {
    this.setState({
      searchItem: searchItem
    });
  };
  render() {
    return (
      <div>
        <Navbar getRating={this.getRating} getSearch={this.getSearch} />
        <MovieList
          searchItem={this.state.searchItem}
          searchRating={this.state.searchRating}
        />
      </div>
    );
  }
}

export default MovieContainer;
