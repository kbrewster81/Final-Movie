import { Link } from "react-router-dom";
import Movies from "../Movies";
import MovieList from "./MovieList";

const HomePage = () => {
  const movies = [MovieList.id, MovieList.title, MovieList.poster_path];

  return (
    <div>
      {Movies.map((movie) => (
        <Link key={MovieList.id} to={`/movie/${Movies.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${Movies.poster_path}`}
            alt={Movies.title}
          />
          <h3>{Movies.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
