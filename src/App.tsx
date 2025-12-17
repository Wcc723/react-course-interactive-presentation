import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SeparationOfConcernsSlide } from './week1/關注點分離';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/week1/separation-of-concerns" element={<SeparationOfConcernsSlide />} />
    </Routes>
  );
}

export default App;
