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
            <div>
                <h4>Nome Completo</h4>
                <p>{student.name}</p>
            </div>
            <div>
                <h4>Data de Nascimento</h4>
                <p>{student.bithdate}</p>
            </div>
            <div>
                <h4>Gênero</h4>
                <p>{student.gender}</p>
            </div>
            <div>
                <h4>Endereço</h4>
                <p>{student.address}</p>
            </div>
            <div>
                <h4>Email</h4>
                <p>{student.email}</p>
            </div>
            <div>
                <h4>Email Responsavel</h4>
                <p>{student.email_responsible}</p>
            </div>
            <div>
                <h4>CPF</h4>
                <p>{student.cpf}</p>
            </div>
            <div>
                <h4>RG</h4>
                <p>{student.rg}</p>
            </div>
            <div>
                <h4>Telefone</h4>
                <p>{student.phone}</p>
            </div>
            <div>
                <h4>Telefone Responsavel</h4>
                <p>{student.phone_responsible}</p>
            </div>
            <div>
                <h4>Série/Ano</h4>
                <p>{student.year}</p>
            </div>
            <div>
                <h4>Turno</h4>
                <p>{student.shift}</p>
            </div>
            <h2 className='grades-title'>Notas</h2>
            <div className='student-grades'>
                {student.grades.map((grade, index) => (
                    <div className='grade' key={index}>
                        <h4>{grade.subject}</h4>
                        <p>{grade.score}</p>
                    </div>
                ))}
            </div>
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
