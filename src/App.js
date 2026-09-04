import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
