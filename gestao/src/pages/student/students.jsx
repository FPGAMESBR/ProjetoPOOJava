import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.css';


//Lista de Alunos
function StudentButton({ name, bithdate, average }) {

    return (
        <button className='student'>
            <p>{name}</p>
            <p>{bithdate}</p>
            <p>{average}</p>
        </button>
    );
}

const students = [
    {
        name: 'Mayron Wilke Ferreira Freire',
        bithdate: '28/03/2005',
        average: '8.9'
    },
];

//Informações detalhadas
function StudentInfo() {
    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get('https://api.example.com/student') // Substitua com a URL da sua API
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

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
        </div>
    );
}

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
                    {students.map((student, index) => (
                        <StudentButton key={index} name={student.name} bithdate={student.bithdate} average={student.average} />
                    ))}
                </div>
            </div>
        
            <div className='student-info'>
                <h1 className='info-detail'>Informações detalhada</h1>

                <div className='info'>
                    <div>
                    <h4>Nome Completo</h4>
                    <p>Mayron Wilke Ferreira Freire</p>
                    </div>
                </div>
                
                    <h2 className='grades-title'>Notas</h2>
                    <div className='student-grades'>
                        <div className='grade'>
                            <h4>Matemática</h4>
                            <p>8.5</p>
                        </div>
                        <div className='grade'>
                            <h4>Português</h4>
                            <p>9.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Geografia</h4>
                            <p>7.5</p>
                        </div>
                        <div className='grade'>
                            <h4>História</h4>
                            <p>8.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Ciências</h4>
                            <p>9.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Artes</h4>
                            <p>10.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Edu Física</h4>
                            <p>9.5</p>
                        </div>
                        <div className='grade'>
                            <h4>Inglês</h4>
                            <p>8.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Religião</h4>
                            <p>10.0</p>
                        </div>
                        <div>
                            <h4>Redação</h4>
                            <p>8.9</p>
                        </div>
                        <div>
                            <h4>Filosofia</h4>
                            <p>8.9</p>
                        </div>
                        <div>
                            <h4>Cidadania</h4>
                            <p>8.9</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}


export default Students;