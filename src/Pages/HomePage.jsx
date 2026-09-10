import { Link } from "react-router-dom";
import { movies } from "../data/movies";


const HomePage = () => {
  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img
            src={movie.Poster} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
};


export default HomePage;
