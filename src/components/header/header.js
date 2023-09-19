import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/movie-review-logo.svg";
import "./header.css";
function AppHeader() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header_icon" alt="..." src={Logo} />
        </Link>
        <Link to="/movies/popular">
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated">
          <span>Top_Rated</span>
        </Link>
        <Link to="/movies/upcoming">
          <span>Upcomming</span>
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;
