import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";
import YearPage from "../years/YearPage";
import TeacherPage from "../teachers/TeacherPage";
import DiscPage from "../disc/discpage";
import Register from "../student/register";
import Students from "../student/students";
import Grade from "../disciplines/grade";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('givenHome_whenRendered_thenShowWelcomeMessage', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/years" element={<YearPage />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/disc" element={<DiscPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grade/:subject" element={<Grade />} />
      </Routes>
    </BrowserRouter>
  );

  // Initial check to ensure HomePage is rendered
  expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();

  // Navigate to Years Page
  const yearsButton = screen.getByRole('button', { name: /Anos/i });
  await userEvent.click(yearsButton);
  expect(await screen.findByText(/Welcome to the Years Page/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/years');

  // Navigate to Teachers Page
  const teachersButton = screen.getByRole('button', { name: /Professores/i });
  await userEvent.click(teachersButton);
  expect(await screen.findByText(/Welcome to the Teachers Page/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/teachers');

  // Navigate to Disciplines Page
  const discButton = screen.getByRole('button', { name: /Disciplinas/i });
  await userEvent.click(discButton);
  expect(await screen.findByText(/Disciplinas/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/disc');

  // Navigate to Register Page
  const registerButton = screen.getByRole('button', { name: /Registro/i });
  await userEvent.click(registerButton);
  expect(await screen.findByText(/Registro de Aluno/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/register');

  // Navigate to Students Page
  const studentsButton = screen.getByRole('button', { name: /Students/i });
  await userEvent.click(studentsButton);
  expect(await screen.findByText(/Lista de Estudantes/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/students');

  // Navigate back to Home Page
  const homeButton = screen.getByRole('button', { name: /Início/i });
  await userEvent.click(homeButton);
  expect(screen.getByText(/Welcome to the Home Page/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/');

  // Navigate to a specific discipline
  const discLink = screen.getByRole('link', { name: /Português/i });
  await userEvent.click(discLink);
  expect(await screen.findByText(/Grade for Português/i)).toBeInTheDocument();
  expect(window.location.pathname).toBe('/grade/portugues');
});
