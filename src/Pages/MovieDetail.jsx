import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';

const MovieDetail = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  return <div>Details for Movie {id}</div>

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5b53b7f6f16e2001e5418298c990bf2a`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} />
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;