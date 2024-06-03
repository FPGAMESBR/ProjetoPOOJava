import React from 'react';
import { Link } from 'react-router-dom';
import './year.css';

function YearPage() {
  const years = [
    { name: 'Maternal', series: 'maternal' },
    { name: 'Jardim I', series: 'jardim1' },
    { name: 'Jardim II', series: 'jardim2' },
    { name: '1° ano', series: 'ano1' },
    { name: '2° ano', series: 'ano2' },
    { name: '3° ano', series: 'ano3' },
    { name: '4° ano', series: 'ano4' },
    { name: '5° ano', series: 'ano5' },
    { name: '6° ano', series: 'ano6' },
    { name: '7° ano', series: 'ano7' },
    { name: '8° ano', series: 'ano8' },
    { name: '9° ano', series: 'ano9' },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Salas de Aula</h1>
      </header>
      <div className="blackboard">
        <div className="folders">
          {years.map(({ name, series }) => (
            <Link to={`/students/${series}`} key={series} className="folder">
              <div className="folder-content">
                 <span>{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YearPage;
