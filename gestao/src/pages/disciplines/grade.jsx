import React, { useState, useEffect } from "react";
import axios from 'axios';
import './grade.css';

function GradesPage() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [grades, setGrades] = useState({});
  const [modifiedGrades, setModifiedGrades] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/alunos/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    axios.get(`http://localhost:8080/api/classes/notas-alunos`, { params: { cpf: student.cpf } })
      .then(response => {
        console.log(`Notas do aluno ${student.cpf}:`, response.data);
        const studentGrades = response.data;
        if (studentGrades) {
          const gradesObject = extractGrades(studentGrades);
          setGrades(gradesObject);
          setModifiedGrades(gradesObject);
        } else {
          setGrades({});
          setModifiedGrades({});
        }
      })
      .catch(error => console.error(`Erro ao buscar notas para o aluno ${student.cpf}:`, error));
  };

  const extractGrades = (data) => {
    const subjects = [
      'portugues',
      'matematica',
      'ingles',
      'redacao',
      'ciencias',
      'historia',
      'geografia',
      'filosofia',
      'arte',
      'efisica',
      'direitoCidadania',
      'religiao',
      'geometria'
    ];

    const gradesObject = {};

    subjects.forEach((subject, index) => {
      gradesObject[subject] = data[0][index + 2]; // Ajuste o índice de acordo com a estrutura real dos dados
    });

    return gradesObject;
  };

  const handleGradeChange = (subject, value) => {
    setModifiedGrades(prevModifiedGrades => ({
      ...prevModifiedGrades,
      [subject]: value
    }));
  };

  const sendGrades = () => {
    if (selectedStudent) {
      axios.put(`http://localhost:8080/api/classes/editar-notas/${selectedStudent.cpf}`, {
        cpfAluno: selectedStudent.cpf,
        ...modifiedGrades
      })
        .then(response => {
          console.log(`Notas atualizadas com sucesso para o CPF ${selectedStudent.cpf}:`, response.data);
          setGrades({ ...modifiedGrades });
        })
        .catch(error => console.error(`Erro ao atualizar notas para o CPF ${selectedStudent.cpf}:`, error));
      setModifiedGrades({});
    }
  };

  return (
    <div className="grades-page">
      <header className="Header-grades">
        <h1>Notas dos Alunos</h1>
      </header>
      <div className="list-students-grades">
        <h1>Lista de Alunos</h1>
        <div className="students-list">
          {students.map(student => (
            <div
              key={student.cpf}
              className={`student ${selectedStudent?.cpf === student.cpf ? 'selected' : ''}`}
              onClick={() => handleStudentClick(student)}
            >
              <p>{student.nomeAluno}</p>
              <p>{student.serieAno}</p>
              <p>{student.cpf}</p>
              <p>{student.genero}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedStudent && (
        <div className="edit-grades">
          <h1>Editar Notas de {selectedStudent.nomeAluno}</h1>
          <div className="give-grade-list">
            {[
              'portugues',
              'matematica',
              'ingles',
              'redacao',
              'ciencias',
              'historia',
              'geografia',
              'filosofia',
              'arte',
              'efisica',
              'direitoCidadania',
              'religiao',
              'geometria'
            ].map(subject => (
              <div key={subject} className="grade-input-container">
                <label className="subject-label">{subject}</label>
                <input
                  className="grade-input"
                  placeholder="Nota"
                  name={subject}
                  type="number"
                  step="0.1"
                  value={modifiedGrades[subject] !== undefined ? modifiedGrades[subject] : ''}
                  onChange={(e) => handleGradeChange(subject, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button className="button-send-grades" onClick={sendGrades}>Enviar Notas</button>
        </div>
      )}
    </div>
  );
}

export default GradesPage;
