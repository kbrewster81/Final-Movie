import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import App from './App';
import './App.css';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
function App() {
  return (
    <Routes>
      <Switch>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Switch>
    </Routes>
  );
}
export default App;
