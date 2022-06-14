import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Battle } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/battle' element={<Battle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
