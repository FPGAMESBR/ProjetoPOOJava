import React from "react";
import { Link } from "react-router-dom";
import "./disc.css";

function DiscPage() {
  const disciplines = [
    { name: "Português", icon: <i className="fa-solid fa-book"></i>, path: "/grade/portugues" },
    { name: "Redação", icon: <i className="fa-solid fa-pencil"></i>, path: "/grade/redacao" },
    { name: "Inglês", icon: <i className="fa-solid fa-flag-usa"></i>, path: "/grade/ingles" },
    { name: "Matemática", icon: <i className="fa-solid fa-calculator"></i>, path: "/grade/matematica" },
    { name: "Geometria", icon: <i className="fa-regular fa-cube"></i>, path: "/grade/geometria" },
    { name: "Ciências", icon: <i className="fa-light fa-atom"></i>, path: "/grade/ciencias" },
    { name: "História", icon: <i className="fa-regular fa-landmark"></i>, path: "/grade/historia" },
    { name: "Geografia", icon: <i className="fa-regular fa-globe"></i>, path: "/grade/geografia" },
    { name: "Filosofia", icon: <i className="fa-solid fa-question"></i>, path: "/grade/filosofia" },
    { name: "Arte", icon: <i className="fa-regular fa-paintbrush"></i>, path: "/grade/arte" },
    { name: "Educação Física", icon: <i className="fa-solid fa-volleyball"></i>, path: "/grade/educacao-fisica" },
    { name: "Direito e Cidadania", icon: <i className="fa-solid fa-leaf"></i>, path: "/grade/direito-e-cidadania" },
    { name: "Religião", icon: <i className="fa-solid fa-book-bible"></i>, path: "/grade/religiao" },
  ];

  return (
    <div className="Container">
      <header className="Header">
        <h1>Disciplinas</h1>
      </header>
      <div className="Disciplines-Container">
        <div className="Disciplines">
          <ul className="Itens">
            {disciplines.map((discipline) => (
              <li key={discipline.path}>
                <Link className="disc-link" to={`${discipline.path}?name=${encodeURIComponent(discipline.name)}`}>
                  {discipline.icon} {discipline.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiscPage;