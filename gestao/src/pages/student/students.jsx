import React from 'react';
import './students.css';

function Students() { 
    return (
        <div className='app'>
            <div className='list-students'>
                <h1>Lista de Alunos</h1>
                <div className='container-students'>
                    <div className='table-header'>
                        <p>Alunos</p>
                        <p>Nascimento</p>
                        <p>Média</p>
                    </div>
                    <button className='student'>
                        <p>Mayron Wilke Ferreira Freire</p>
                        <p>28/03/2005</p>
                        <p>8.9</p>
                    </button>
                </div>
            </div>
        
            <div className='student-info'>
                <h1>Nome Completo do Aluno</h1>
            </div>
        </div>
    );
}

export default Students;