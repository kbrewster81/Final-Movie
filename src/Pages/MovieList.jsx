import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "The Terminator",
      poster_path: "https://www.themoviedb.org/movie/218-the-terminator",
    },
    {
      id: 2,
      title: "Terminator 2: Judgment Day",
      poster_path: "https://www.themoviedb.org/movie/280-terminator-2-judgment-day",
    },
    {
      id: 3,
      title: "Terminator 3: Rise of the Machines",
      poster_path: "https://www.themoviedb.org/movie/296-terminator-3-rise-of-the-machines",
    },
    {
      id: 4,
      title: "Terminator: Dark Fate",
      poster_path: "https://www.themoviedb.org/movie/290859-terminator-dark-fate",
    },
    {
      id: 5,
      title: "Terminator Salvation",
      poster_path: "https://www.themoviedb.org/movie/534-terminator-salvation",
    },
    {
      id: 6,
      title: "Terminator Genisys",
      poster_path: "https://www.themoviedb.org/movie/87101-terminator-genisys",
    },
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

export default MovieList;
