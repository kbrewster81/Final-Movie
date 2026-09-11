import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  console.log("Movie ID:", id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`,
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
