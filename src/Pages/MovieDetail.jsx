import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  console.log("Movie ID:", id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=cc724532&i=${id}`;

    console.log("Request URL:", url);

    axios
      .get(url)
      .then((res) => {
        console.log("Movie data:", res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link className="movie-detail--link" to="/">
        <button>Back to Home</button>
      </Link>

      <div className="movie-detail">
        <h1>{movie.Title}</h1>
        <div className="movie-detail__content">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-detail__info">
            <p className="movie__detail">
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p className="movie__detail">
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p className="movie__detail">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="movie__detail">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="movie__detail">
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p className="movie__detail">
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="movie__detail">
              <strong>Box Office:</strong> {movie.BoxOffice}
            </p>
            <p className="movie__detail">
              <strong>Rating:</strong> {movie.imdbRating}
            </p>
            <p className="movie__detail">
              <strong>Plot:</strong>{movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
