import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function FavCard({ movie, removeFavouriteMovie }) {
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = (e) => {
    removeFavouriteMovie(movie);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <div className="loader">
            <ReactLoading
              type="spinningBubbles"
              color="red"
              height={"35%"}
              width={"35%"}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="cards">
            <img
              alt="..."
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />

            <div className="cards__overlay">
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="card__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="card__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="card__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />
                  </span>
                </div>
                <div className="card__description">
                  {movie ? movie.overview.slice(0, 118) + "..." : ""}
                </div>
              </Link>
              <button
                className="button favorite__button"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FavCard;
