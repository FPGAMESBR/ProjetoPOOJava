import './app.css';
import HomePage from './pages/home/HomePage';
import YearPage from './pages/years/YearPage';
import TeacherPage from './pages/teachers/TeacherPage';
import DiscPage from './pages/disciplines/DiscPage';
import Register from './pages/student/register';
import Students from './pages/student/students';

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
        <Route path="/students" element={<Students />} />
        <Route path="/students/:serieAluno" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
