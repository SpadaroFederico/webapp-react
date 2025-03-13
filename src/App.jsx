import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/movies/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;