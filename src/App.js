import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetails/movie";
import { useState } from "react";
import FavMovieList from "./components/favMovieList/favMovieList";
import MovieContext from "./context";
import Error from "./pages/error/error";

function App() {
  const [favMovie, setFavMovie] = useState([]);

  return (
    <div className="App">
      <MovieContext.Provider value={{ favMovie, setFavMovie }}>
        <BrowserRouter>
          <div className="appHeader">
            <AppHeader />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/movies/:type" element={<MovieList />} />
            <Route path="/favourite" element={<FavMovieList />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
