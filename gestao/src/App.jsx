import './app.css';
import HomePage from './pages/home/HomePage';
import YearPage from './pages/years/YearPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/years" element={<YearPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
