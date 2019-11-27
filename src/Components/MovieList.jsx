import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import "./MovieList.css";
export class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      MovieArr: [
        {
          img:
            "https://d3tudoxwnizvk7.cloudfront.net/gallery-tablet-jpeg/inception_posterlarge_8-1308772917.jpg",
          title: "Inception - 2010",
          rating: 2
        },
        {
          img:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3290/3290236_sa.jpg",
          title: "Shawshank Redemption - 1994",
          rating: 4
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
          title: "Blade Runner - 2017",
          rating: 4
        },
        {
          img:
            "http://img.over-blog-kiwi.com/1/36/64/60/20150323/ob_23a5c4_illuminatiwatcherdotcom-interstellar-m.jpg",

          title: "Interstellar - 2014",
          rating: 3
        },
        {
          img:
            "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
          title: "Black Panther - 2018",
          rating: 5
        }
      ],
      toAddMovie: {
        img: "",
        title: "",
        rating: 0
      }
    };
  }
  getChangeImg = valeur => {
    this.setState({
      toAddMovie: { ...this.state.toAddMovie, img: valeur }
    });
  };
  getChangeTitle = valeur => {
    this.setState({
      toAddMovie: { ...this.state.toAddMovie, title: valeur }
    });
  };
  getChangeRating = valeur => {
    this.setState({
      toAddMovie: { ...this.state.toAddMovie, rating: valeur }
    });
  };
  addMovie = () => {
    if (
      this.state.toAddMovie.img !== "" &&
      this.state.toAddMovie.title !== "" &&
      this.state.toAddMovie.rating !== 0
    ) {
      let arr = this.state.MovieArr;
      arr = [...arr, this.state.toAddMovie];
      this.setState({
        MovieArr: arr
      });
      this.setState({
        toAddMovie: { ...this.state.toAddMovie, img: "", title: "", rating: 0 }
      });
    } else alert("Bara mout");
  };
  render() {
    return (
      <div className="MovieList">
        {this.state.MovieArr.map((el, i) =>
          el.title.substring(0, this.props.searchItem.length).toUpperCase() ===
            this.props.searchItem.toUpperCase() &&
          el.rating >= this.props.searchRating ? (
            <MovieCard Movie={el} key={i} />
          ) : (
            <></>
          )
        )}
        <div className="addMovie">
          <Modal
            buttonLabel={"Add"}
            className={"addModal"}
            getChangeImg={this.getChangeImg}
            getChangeTitle={this.getChangeTitle}
            getChangeRating={this.getChangeRating}
            addMovie={this.addMovie}
          />
        </div>
      </div>
    );
  }
}

export default MovieList;
