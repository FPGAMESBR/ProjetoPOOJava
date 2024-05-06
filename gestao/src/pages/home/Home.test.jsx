import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HomePage from "./HomePage"
import YearPage from "../years/YearPage"
import TeacherPage from "../teachers/TeacherPage"
import DiscPage from "../disc/DiscPage"
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
    const pageButton = screen.getByTestId('page-button');
    await userEvent.click(pageButton);

    expect(window.location.pathname).toEqual('/years');
    expect(window.location.pathname).toEqual('/teachers');
    expect(window.location.pathname).toEqual('/disc');
    expect(window.location.pathname).toEqual('/');
})