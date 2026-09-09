import { Link } from "react-router-dom";

const Movie = () => {
  const movies = [
    
  ];

  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Movie;
