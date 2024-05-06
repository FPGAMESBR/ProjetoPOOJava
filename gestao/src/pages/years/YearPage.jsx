import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import './Year.css';

function YearPage() {
  // Função para lidar com o hover do botão
  const handleMouseEnter = (event) => {
    event.target.classList.add('hovered'); // Adiciona a classe 'hovered' quando o mouse entra
  };

  // Função para lidar com a saída do hover do botão
  const handleMouseLeave = (event) => {
    event.target.classList.remove('hovered'); // Remove a classe 'hovered' quando o mouse sai
  };

  return (
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
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
  );
}

export default YearPage;
