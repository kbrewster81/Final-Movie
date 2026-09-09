import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import movieReel from "./assets/movie-reel.jpg";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5b53b7f6f16e2001e5418298c990bf2a",
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <header>
      <div>
        <img className="background-image" src={movieReel.jpg} alt="" />
      </div>
      <div className="header__container">
        <div className="header__description">
          <h1>The best movie library in America</h1>
          <p>Browse through our collection and discover new favorites.</p>
        </div>
        <div className="input__wrapper">
          <input
            className="input__search"
            type="text"
            placeholder="Search for a movie"
          />
          <button className="btn__search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Home;
