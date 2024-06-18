import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './grade.css';

function GradeDisc() {
    const { subject } = useParams();

    // Estado para armazenar os alunos e as notas dos alunos
    const [students, setStudents] = useState([]);
    const [studentGrades, setStudentGrades] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/alunos/`)
            .then(response => {
                const studentsData = response.data;
                const initialStudentGrades = studentsData.map(student => ({
                    cpf: student.cpf,
                    nomeAluno: student.nomeAluno,
                    serieAno: student.serieAno,
                    genero: student.genero,
                    notas: {
                        portugues: parseFloat(student.notas?.find(nota => nota.materia === 'portugues')?.media) || 0,
                        matematica: parseFloat(student.notas?.find(nota => nota.materia === 'matematica')?.media) || 0,
                        ingles: parseFloat(student.notas?.find(nota => nota.materia === 'ingles')?.media) || 0,
                        // Adicione outras disciplinas conforme necessário
                    }
                }));
                setStudents(studentsData);
                setStudentGrades(initialStudentGrades);
            })
            .catch(error => console.error('Erro ao buscar alunos:', error));
    }, []);

    // Função para atualizar a nota de um aluno para uma disciplina específica
    const updateGrade = (index, value) => {
        const updatedGrades = [...studentGrades];
        updatedGrades[index].notas[subject.toLowerCase()] = parseFloat(value);
        setStudentGrades(updatedGrades);
    };

    // Função para enviar as notas para o backend usando PUT
    const sendGrades = () => {
        studentGrades.forEach(student => {
            const { cpf, notas } = student;

            // Verifica se a nota da disciplina específica é maior que 0.1 antes de enviar
            const notaDisciplina = notas[subject.toLowerCase()];
            if (notaDisciplina > 0.1) {
                const payload = { [subject.toLowerCase()]: notaDisciplina };
                axios.put(`http://localhost:8080/api/classes/editar-notas/${cpf}`, payload)
                    .then(response => {
                        console.log(`Notas atualizadas com sucesso para o CPF ${cpf}:`, response.data);

                        // Atualiza apenas a nota da disciplina específica no estado local
                        const updatedStudentGrades = [...studentGrades];
                        const updatedStudentIndex = updatedStudentGrades.findIndex(s => s.cpf === cpf);
                        updatedStudentGrades[updatedStudentIndex].notas[subject.toLowerCase()] = response.data[subject.toLowerCase()];
                        setStudentGrades(updatedStudentGrades);
                    })
                    .catch(error => console.error(`Erro ao atualizar notas para o CPF ${cpf}:`, error));
            } else {
                console.log(`Notas não foram atualizadas para o CPF ${cpf} porque são menores ou iguais a 0.1`);
            }
        });
    };

    return (
        <div className="grade-students-page">
            <header className="Header-grades">
                <h1>Notas dos Alunos</h1>
            </header>
            <div className="list-students-grades">
                <h1>Atribuir notas para {subject}</h1>

                <div className="give-grade-list">
                    <div className="give-grade-list-header">
                        <p>Selecionar</p>
                        <p>Nome</p>
                        <p>Série</p>
                        <p>CPF</p>
                        <p>Sexo</p>
                        <p>Nota</p>
                    </div>
                    {studentGrades.map((student, index) => (
                        <div className="student-grade" key={index}>
                            <label className="custom-checkbox">
                                <input name="dummy" type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <p>{student.nomeAluno}</p>
                            <p>{student.serieAno}</p>
                            <p>{student.cpf}</p>
                            <p>{student.genero}</p>
                            <input 
                                className="grade-input" 
                                placeholder="Nota"
                                name={subject.toLowerCase()} 
                                type="number"
                                step="0.1"
                                value={student.notas[subject.toLowerCase()]} // Acesso direto à nota da disciplina específica
                                onChange={(e) => updateGrade(index, e.target.value)} 
                            />
                        </div>
                    ))}
                </div>
                <button className="button-send-grades" onClick={sendGrades}>Enviar Notas</button>
            </div>
        </div>
    );
}

export default GradeDisc;
