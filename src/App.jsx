import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import HomePage from "./Pages/HomePage.jsx";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/movie-details/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
