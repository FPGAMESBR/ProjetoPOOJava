# Projeto-POO-Java
Projeto Extensionista de POO

# React-icons
https://react-icons.github.io/react-icons/

# React-router
O React Router é uma biblioteca popular para roteamento em aplicativos React. Ele permite que você navegue entre diferentes partes de sua aplicação, mantendo a URL sincronizada com o estado do aplicativo.

Com o React Router, você pode definir diferentes rotas em seu aplicativo e renderizar componentes específicos com base na URL atual. Isso é útil para criar aplicativos de página única (SPA) onde diferentes componentes são exibidos em resposta à navegação do usuário, sem a necessidade de recarregar a página inteira.

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*//

Neste exemplo, estamos usando <BrowserRouter> como o roteador principal e definindo várias rotas dentro de <Routes>. Cada rota está associada a um componente específico que será renderizado quando a URL corresponder ao caminho da rota. As tags <Link> são usadas para navegar entre as diferentes rotas.
