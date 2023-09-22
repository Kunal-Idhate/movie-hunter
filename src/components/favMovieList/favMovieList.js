import React, { useEffect, useState } from "react";
import "./favMovieList.css";
import FavCard from "../card/deleteCard";
function FavMovieList() {
  const [fevMovies, setFevMovies] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(
      process.env.REACT_APP_LOCALHOST_KEY,
      JSON.stringify(items)
    );
  };
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = fevMovies.filter(
      (favourite) => favourite.id !== movie.id
    );

    saveToLocalStorage(newFavouriteList);
    setFevMovies(newFavouriteList);
  };

  useEffect(() => {
    (async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      console.log(data);
      if (data) {
        setFevMovies(data);
      }
    })();
  }, []);
  return (
    <div className="movie__list">
      <h2 className="list__title">Favourite</h2>
      {!fevMovies.length ? (
        <>
          <div style={{ textAlign: "center" }}>
            Oops! No <span>Movies</span> add to Favourites
          </div>
        </>
      ) : (
        <div className="list__cards">
          {fevMovies.map((movie) => {
            return (
              <FavCard
                movie={movie}
                removeFavouriteMovie={removeFavouriteMovie}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FavMovieList;
