import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import Home from "./Pages/Home";
import HomePage from "./Pages/HomePage.jsx";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
