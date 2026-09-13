import { useEffect, useState } from "react";
import terminator1 from "./assets/The Terminator.jpg";
import terminator2 from "./assets/Terminator-2.jpg";
import terminator3 from "./assets/Terminator-3.jpg";
import terminator4 from "./assets/Terminator-Salvation.jpg";
import terminator5 from "./assets/Terminator-Genisys.jpg";
import terminator6 from "./assets/Terminator Dark Fate.jpg";
import movieReel from "./assets/movie-reel.jpg";
import Home from "./Pages/Home";
import MovieList from "./Pages/MovieList";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, []);

  function filterMovies(event) {
    const filter = event.target.value;
    const sortedMovies = [...movies];

    if (filter === "LOW_TO_HIGH") {
      sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
    } else if (filter === "HIGH_TO_LOW") {
      sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    setMovies(sortedMovies);
  }

  async function searchMovies() {
    const searchInput = document.querySelector(".input__search");
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) return;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=cc724532&s=${searchTerm}`,
      );

      const data = await response.json();

      setMovies(data.Search || []);
    } catch (error) {
      document.querySelector(".movies").innerHTML =
        `<p>Something went wrong. Please try again.</p>`;
    }
  }

  const searchButton = document.querySelector(".btn__search");

  if (searchButton) {
    searchButton.addEventListener("click", searchMovies);
  }

  const searchInput = document.querySelector(".input__search");

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        searchMovies();
      }
    });
  }

  function getMovies() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            imdbID: "tt0088247",
            Title: "The Terminator",
            Poster: terminator1,
            Year: 1984,
          },
          {
            imdbID: "tt0103064",
            Title: "Terminator 2: Judgment Day",
            Poster: terminator2,
            Year: 1991,
          },
          {
            imdbID: "tt0181852",
            Title: "Terminator 3: Rise of the Machines",
            Poster: terminator3,
            Year: 2003,
          },
          {
            imdbID: "tt0438488",
            Title: "Terminator Salvation",
            Poster: terminator4,
            Year: 2009,
          },
          {
            imdbID: "tt1340138",
            Title: "Terminator Genisys",
            Poster: terminator5,
            Year: 2015,
          },
          {
            imdbID: "tt6450804",
            Title: "Terminator: Dark Fate",
            Poster: terminator6,
            Year: 2019,
          },
        ]);
      });
    });
  }
  return (
    <>
      <nav>
        <div className="nav__container">
          <ul className="nav__links">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Movies
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main id="movies__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">
                  All <span className="purple">Movies</span>
                </h2>
                <select id="filter" onChange={filterMovies}>
                  <option value="SORT">Sort</option>
                  <option value="LOW_TO_HIGH">Year, Low to High</option>
                  <option value="HIGH_TO_LOW">Year, High to Low</option>
                </select>
                <h3 className="Featured Movies">
                  Featured <span className="red">Movies</span>
                </h3>
              </div>
              <div className="movies">
                {movies.map((movie) => (
                  <Link
                    to={`/movie-details/${movie.imdbID}`}
                    className="movie"
                    key={movie.imdbID}
                  >
                    <figure className="movie__img--wrapper">
                      <img
                        className="movie__img"
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                    </figure>
                    <div class="movie__info">
                      <div className="movie__description">
                        <h1>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                  </Link>
                ))}
                ;
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="row row__column">
            <div className="footer__list">
              <a href="#" className="footer__link">
                Home
              </a>
              <a href="#features" className="footer__link">
                Contact
              </a>
              <a className="footer__link no-cursor">Movies</a>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2026 Movies
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Movies;
