import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/header/header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetails/movie";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appHeader">
          <AppHeader />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
