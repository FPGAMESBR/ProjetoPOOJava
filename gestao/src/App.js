import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import './style.css';

// Página YearDetails que exibe os detalhes do ano
function YearDetails({ match }) {
  return (
    <div>
      <h2>Detalhes do Ano {match.params.year}</h2>
      {/* Adicione aqui o conteúdo detalhado sobre o ano */}
    </div>
  );
}

function App() {
  // Função para lidar com o clique do botão
  const handleButtonClick = (year) => {
    // Redirecionar o usuário para a página YearDetails com o ano selecionado
    window.location.href = `/year/${year}`;
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Gestão de Informações de Alunos</h1>
        </header>
        <div className="blackboard">
          <div className="folders">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((year) => (
              <button
                className="folder"
                key={year}
                onClick={() => handleButtonClick(year)}
              >
                <div className="folder-content">
                  <FaFolderOpen className="folder-icon" />
                  <span>{year}° Ano</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Definir as rotas dentro do componente <Routes> */}
      <Routes>
        {/* Rota para a página YearDetails */}
        <Route path="/year/:year" element={<YearDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
