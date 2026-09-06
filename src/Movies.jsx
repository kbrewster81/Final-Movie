const Movies = () => {
  let movies = [];

  async function renderMovies(filter) {
    const moviesWrapper = document.querySelector(".movies");

    let filteredMovies = [...movies];

    if (filter === "LOW_TO_HIGH") {
      filteredMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
    } else if (filter === "HIGH_TO_LOW") {
      filteredMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    const moviesHtml = filteredMovies
      .map((movie) => {
        return `
        <div className="movie">
          <figure className="movie__img--wrapper">
            <img className="movie__img" src="${movie.Poster}" alt="${movie.Title}">
          </figure>
          <div className="movie__title">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          </div>
        </div>
      `;
      })
      .join("");

    moviesWrapper.innerHTML = moviesHtml;
  }

  function filterMovies(event) {
    renderMovies(event.target.value);
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

      movies = data.Search || [];
      renderMovies();
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

  renderMovies();

  function getMovies() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            Title: "The Terminator",
            Poster: "The Terminator.jpg",
            Year: "1984",
            Type: "movie",
          },
          {
            id: 2,
            Title: "Terminator 2: Judgment Day",
            Poster: "Terminator-2.jpg",
            Year: "1991",
            Type: "movie",
          },
          {
            id: 3,
            Title: "Terminator 3: Rise of the Machines",
            Poster: "Terminator-3.jpg",
            Year: "2003",
            Type: "movie",
          },
          {
            id: 4,
            Title: "The Terminator-Sarah Connor Chronicles",
            Poster: "The Terminator-Sarah Connor Chronicles.jpg",
            Year: "2008",
            Type: "movie",
          },
          {
            id: 5,
            Title: "Terminator Salvation",
            Poster: "Terminator-Salvation.jpg",
            Year: "2009",
            Type: "movie",
          },
          {
            id: 6,
            Title: "Terminator Genisys",
            Poster: "Terminator-Genisys.jpg",
            Year: "2015",
            Type: "movie",
          },
        ]);
      });
    });
  }
  return (
    <>
      <section>
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
                <a href="#" className="nav__link nav__link--primary">
                  Movies
                </a>
              </li>
            </ul>
            <input
              className="input__search"
              type="text"
              placeholder="Search for a movie"
            ></input>
            <button className="btn__menu" onClick={() => openMenu()}>
              <p className="fas fa-bars"></p>
            </button>
            <div className="menu__backdrop" style={{ visibility: "hidden" }}>
              <button
                className="btn__menu btn__menu--close"
                onClick={() => closeMenu()}
              >
                <p className="fas fa-times"></p>
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <a
                    href="#"
                    className="menu__link"
                    onClick={() => closeMenu()}
                  >
                    Home
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    href="#features"
                    className="menu__link"
                    onClick={() => closeMenu()}
                  >
                    Movies
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    className="menu__link no-cursor"
                    onClick={() => closeMenu()}
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <main id="movies__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">
                  All <span className="purple">Movies</span>
                </h2>
                <select id="filter" onChange={() => filterMovies(event)}>
                  <option value="SORT">Sort</option>
                  <option value="LOW_TO_HIGH">Year, Low to High</option>
                  <option value="HIGH_TO_LOW">Year, High to Low</option>
                </select>
              </div>
              <div className="movies">
                <p className="fas fa-spinner movies__loading--spinner"></p>
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
