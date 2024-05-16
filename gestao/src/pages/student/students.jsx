import React from 'react';
import './students.css';

function Students() { 
    return (
        <div className='app'>
            <div className='list-students'>
                <h1>Lista de Alunos</h1>
                <ul>
                    <li>Aluno 1</li>
                    <li>Aluno 2</li>
                    <li>Aluno 3</li>
                    <li>Aluno 4</li>
                    <li>Aluno 5</li>
                </ul>
            </div>
        
            <div className='student-info'>
                <h1>Nome Completo do Aluno</h1>
            </div>
        </div>
    );
}

export default Students;