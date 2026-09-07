import { useEffect, useState } from "react";
import terminator1 from "./assets/The Terminator.jpg";
import terminator2 from "./assets/Terminator-2.jpg";
import terminator3 from "./assets/Terminator-3.jpg";
import terminator4 from "./assets/The Terminator-Sarah Connor Chronicles.jpg";
import terminator5 from "./assets/Terminator-Salvation.jpg";
import terminator6 from "./assets/Terminator-Genisys.jpg";
import movieReel from "./assets/movie-reel.jpg";
import Home from "./Home.jsx";

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
        `https://www.omdbapi.com/?apikey=cc724532&s=${encodeURIComponent(searchTerm)}`,
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
            id: 1,
            Title: "The Terminator",
            Poster: terminator1,
            Year: "1984",
            Type: "movie",
          },
          {
            id: 2,
            Title: "Terminator 2: Judgment Day",
            Poster: terminator2,
            Year: "1991",
            Type: "movie",
          },
          {
            id: 3,
            Title: "Terminator 3: Rise of the Machines",
            Poster: terminator3,
            Year: "2003",
            Type: "movie",
          },
          {
            id: 4,
            Title: "The Terminator-Sarah Connor Chronicles",
            Poster: terminator4,
            Year: "2008",
            Type: "movie",
          },
          {
            id: 5,
            Title: "Terminator Salvation",
            Poster: terminator5,
            Year: "2009",
            Type: "movie",
          },
          {
            id: 6,
            Title: "Terminator Genisys",
            Poster: terminator6,
            Year: "2015",
            Type: "movie",
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
              </div>
              <div className="movies">
                {movies.map((movie) => (
                  <div className="movie" key={movie.id}>
                    <figure className="movie__img--wrapper">
                      <img
                        className="movie__img"
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                    </figure>
                    <div className="movie__title">
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                    </div>
                  </div>
                ))}
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
              <a className="footer__link no-cursor">About</a>
              <a href="#features" className="footer__link">
                Movies
              </a>
              <a className="footer__link no-cursor">Contact</a>
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
