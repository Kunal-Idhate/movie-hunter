import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import axios from "axios";
import { MovieState } from "../../context";
function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { favMovie, setFavMovie } = MovieState();

  const { type } = useParams();
  const getData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    );
    setMovieList(data.results);
  };

  const addFavMoive = (movie) => {
    const newMovies = [...favMovie, movie];
    const filteredMovies = newMovies.filter((obj, index) => {
      return (
        index ===
        newMovies.findIndex((o) => obj.original_title === o.original_title)
      );
    });
    setFavMovie(filteredMovies);
    localStorage.setItem(
      process.env.REACT_APP_LOCALHOST_KEY,
      JSON.stringify(filteredMovies)
    );
    alert("Added To Favourites");
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [type]);
  useEffect(() => {
    (async () => {
      const local_movies = await JSON.parse(
        localStorage.getItem("react_favourite_movie")
      );
      if (local_movies) {
        setFavMovie(local_movies);
      }
      console.log(favMovie);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            favMovie={favMovie}
            addFavMoive={addFavMoive}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
