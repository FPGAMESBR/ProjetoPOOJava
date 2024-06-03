import React from "react";
import { Link } from "react-router-dom";
import "./disc.css";

function DiscPage() {
  const disciplines = [
    { name: "Português", icon: <i class="fa-solid fa-book"></i>, path: "/.../portugues" },
    { name: "Redação", icon: <i class="fa-solid fa-pencil"></i>, path: "/.../redacao" },
    { name: "Inglês", icon: <i class="fa-solid fa-flag-usa"></i>, path: "/.../ingles" },
    { name: "Matemática", icon: <i class="fa-solid fa-calculator"></i>, path: "/.../matematica" },
    { name: "Geometria", icon: <i class="fa-regular fa-cube"></i>, path: "/.../geometria" },
    { name: "Ciências", icon: <i class="fa-light fa-atom"></i>, path: "/.../ciencias" },
    { name: "História", icon: <i class="fa-regular fa-landmark"></i>, path: "/.../historia" },
    { name: "Geografia", icon: <i class="fa-regular fa-globe"></i>, path: "/.../geografia" },
    { name: "Filosofia", icon: <i class="fa-solid fa-question"></i>, path: "/.../filosofia" },
    { name: "Arte", icon: <i class="fa-regular fa-paintbrush"></i>, path: "/.../arte" },
    { name: "Educação Física", icon: <i class="fa-solid fa-volleyball"></i>, path: "/.../educacao-fisica" },
    { name: "Direito e Cidadania", icon: <i class="fa-solid fa-leaf"></i>, path: "/.../direito-e-cidadania" },
    { name: "Religião", icon: <i class="fa-solid fa-book-bible"></i>, path: "/.../religiao" },
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
                  {discipline.name} {discipline.icon}
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
