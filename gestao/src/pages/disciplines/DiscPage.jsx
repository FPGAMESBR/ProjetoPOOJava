import React from "react";
import "./disc.css";

function discpage() {
  return (
    <div className="Container">
      <header className="Header">
        <h1>Disciplinas</h1>
      </header>
      <div className="Disciplines-Container">
        <div className="Disciplines">
            <ul className="Itens">
            <a className="fas fa-book-open" href=""><li>Português</li></a>
            <a className="fas fa-book-open" href=""><li>Redação</li></a>
            <a className="fas fa-book-open" href=""><li>Inglês</li></a>
            <a className="fas fa-book-open" href=""><li>Matemática</li></a>
            <a className="fas fa-book-open" href=""><li>Geometria</li></a>
            <a className="fas fa-book-open" href=""><li>Ciências</li></a>
            <a className="fas fa-book-open" href=""><li>História</li></a>
            <a className="fas fa-book-open" href=""><li>Geografia</li></a>
            <a className="fas fa-book-open" href=""><li>Filosofia</li></a>
            <a className="fas fa-book-open" href=""><li>Arte</li></a>
            <a className="fas fa-book-open" href=""><li>Educação Física</li></a>
            <a className="fas fa-book-open" href=""><li>Direito e Cidadania</li></a>
            <a className="fas fa-book-open" href=""><li>Religião</li></a>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default discpage;

