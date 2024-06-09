import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './students.css';

function StudentButton({ name, bithdate, average, onClick }) {
    return (
        <button className='student' onClick={onClick}>
            <p>{name}</p>
            <p>{bithdate}</p>
            <p>{average}</p>
        </button>
    );
}

function StudentInfo({ student }) {
    if (!student) return null;

    return (
        <div className='info'>
            {/* Renderizar todas as informações do aluno aqui */}
        </div>
    );
}

function Students() {
    const { serieAluno } = useParams();
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        // Fetch students based on serieAluno
        axios.get(`http://localhost:8080/api/alunos/${serieAluno}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [serieAluno]);

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
                    {students.map((student, index) => (
                        <StudentButton
                            key={index}
                            name={student.name}
                            bithdate={student.bithdate}
                            average={student.average}
                            onClick={() => setSelectedStudent(student)}
                        />
                    ))}
                </div>
            </div>
            <div className='student-info'>
                <h1 className='info-detail'>Informações detalhadas</h1>
                <StudentInfo student={selectedStudent} />
            </div>
        </div>
    );
}

export default Students;
