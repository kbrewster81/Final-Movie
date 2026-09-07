import React from "react";
import movieReel from "../assets/movie-reel.jpg";

function Home() {
  return (
    <header>
      <div>
        <img className="background-image" src={movieReel} alt="" />
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
