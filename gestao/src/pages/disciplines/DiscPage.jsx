import React from "react";
import { Link } from "react-router-dom";
import "./disc.css";

function DiscPage() {
  const disciplines = [
    { name: "Português", path: "/.../portugues" },
    { name: "Redação", path: "/.../redacao" },
    { name: "Inglês", path: "/.../ingles" },
    { name: "Matemática", path: "/.../matematica" },
    { name: "Geometria", path: "/.../geometria" },
    { name: "Ciências", path: "/.../ciencias" },
    { name: "História", path: "/.../historia" },
    { name: "Geografia", path: "/.../geografia" },
    { name: "Filosofia", path: "/.../filosofia" },
    { name: "Arte", path: "/.../arte" },
    { name: "Educação Física", path: "/.../educacao-fisica" },
    { name: "Direito e Cidadania", path: "/.../direito-e-cidadania" },
    { name: "Religião", path: "/.../religiao" },
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
                <Link className="disc-link" to={discipline.path}>
                  {discipline.name}
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
