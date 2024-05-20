import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import './Year.css';

function YearPage() {

  return (
    <div className="App">
      <header className="header">
        <h1>Salas de Aula</h1>
      </header>
      <div className="blackboard">
        <div className="folders">
          {['Maternal','Jardim I','Jardim II', '1° ano', '2° ano', '3° ano', '4° ano', '5° ano', '6° ano', '7° ano', '8° ano', '9° ano',  ].map((year) => (
            <button
              className="folder"
              key={year}
            >
              <div className="folder-content">
                <span>{year}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YearPage;
