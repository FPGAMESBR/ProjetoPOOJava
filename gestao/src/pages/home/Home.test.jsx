import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";
import YearPage from "../years/YearPage";
import TeacherPage from "../teachers/TeacherPage";
import DiscPage from "../disc/discpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('givenHome_whenRendered_thenShowWelcomeMessage', async () => {
    render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/years" element={<YearPage />} />
            <Route path="/teachers" element={<TeacherPage />} />
            <Route path="/disc" element={<DiscPage />} />
          </Routes>
        </BrowserRouter>
    );

    // Selecione o botão da página que quer testar
    const pageButton = screen.getByText(/Anos/i); // Aqui você pode selecionar o botão pelo texto
    await userEvent.click(pageButton);

    // Aguarde a navegação ocorrer
    await screen.findByText(/Welcome to the Years Page/i);

    // Verifique se a rota mudou para '/years'
    expect(window.location.pathname).toEqual('/years');

    // Repita o processo para os outros botões
    const teachersButton = screen.getByText(/Professores/i);
    await userEvent.click(teachersButton);
    await screen.findByText(/Welcome to the Teachers Page/i);
    expect(window.location.pathname).toEqual('/teachers');

    const discButton = screen.getByText(/Disciplinas/i);
    await userEvent.click(discButton);
    await screen.findByText(/Welcome to the Disciplinas Page/i);
    expect(window.location.pathname).toEqual('/disc');

    // E, por fim, volte para a página inicial e verifique novamente
    const homeButton = screen.getByText(/Início/i);
    await userEvent.click(homeButton);
    expect(window.location.pathname).toEqual('/');
});
