import React from "react";
import "./MovieCard.css";
const MovieCard = props => {
  let starstab = [
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star",
    "fa fa-star"
  ];

  return (
    <div>
      <div className="MovieCard">
        <img src={props.Movie.img} alt="inception" className="MoviePic" />
        <div className="MovieRating">
          {starstab.map((el2, j) =>
            j < props.Movie.rating ? (
              <span className={el2 + " checked"} key={j}></span>
            ) : (
              <span className={el2} key={j}></span>
            )
          )}
        </div>
        <h4 className="MovieTitle">{props.Movie.title}</h4>
      </div>
    </div>
  );
};
export default MovieCard;
