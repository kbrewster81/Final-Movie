import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = [
    {
      imdbID: "tt0088247",
      title: "The Terminator",
      poster_path: "https://www.imdb.com/title/tt0088247/?ref_=fn_t_2",
    },
    {
      imdbID: "tt0103064",
      title: "Terminator 2: Judgment Day",
      poster_path:
        "https://www.imdb.com/title/tt0103064/?ref_=nv_sr_srsg_0_tt_7_nm_0_in_1_q_Termin",
    },
    {
      imdbID: "tt0181852",
      title: "Terminator 3: Rise of the Machines",
      poster_path:
        "https://www.imdb.com/title/tt0181852/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Terminator%203%3A%20Rise%20of%20the%20Machines",
    },
    {
      imdbID: "tt6450804",
      title: "Terminator: Dark Fate",
      poster_path:
        "https://www.imdb.com/title/tt6450804/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Terminator%3A%20Dark%20Fate",
    },
    {
      imdbID: "tt0438488",
      title: "Terminator Salvation",
      poster_path:
        "https://www.imdb.com/title/tt0438488/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Terminator%20Salvation",
    },
    {
      imdbID: "tt1340138",
      title: "Terminator Genisys",
      poster_path:
        "https://www.imdb.com/title/tt1340138/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_Terminator%20Genisys",
    },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie-details/${movie.id}`}>
          <img
            src={`https://www.imdb.com/movie w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
