import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import axios from "axios";
function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [type]);

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    );
    setMovieList(data.results);
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
