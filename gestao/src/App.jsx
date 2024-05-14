import './app.css';
import HomePage from './pages/home/homepage';
import YearPage from './pages/years/YearPage';
import TeacherPage from './pages/teachers/TeacherPage';
import DiscPage from './pages/disciplines/discpage';
import Register from './pages/student/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/years" element={<YearPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/disc" element={<DiscPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;