import Movies from "./Movies";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie.jsx";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <>
      <Home className="Home"></Home>
      <Movies className="Movies"></Movies>
      <Movie className="Movie"></Movie>
      <MovieDetail className="MovieDetail"></MovieDetail>
    </>
  );
}

export default App;
