import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'; // Importe o axios
import "./grade.css";

function GradeDisc() {
  const { subject } = useParams();

  // Simulated student data
  const students = [
    { name: "Mayron Wilke Ferreira Freire", series: "Maternal II", cpf: "142.250.044-65", gender: "Masculino", grade: '' },
    { name: "Mônica dos Santos Ferreira", series: "9° Ano", cpf: "123.123.123-87", gender: "Feminino", grade: '' },
    // Add more students as needed
  ];

  // Estado para armazenar as notas dos alunos
  const [studentGrades, setStudentGrades] = useState(students.map(student => ({ ...student })));

  // Função para atualizar a nota de um aluno
  const updateGrade = (index, grade) => {
    const updatedGrades = [...studentGrades];
    updatedGrades[index].grade = grade;
    setStudentGrades(updatedGrades);
  };

  // Função para enviar as notas para o backend
  const sendGrades = () => {
    const gradesToSend = studentGrades.map(student => ({ cpf: student.cpf, grade: student.grade }));
    axios.post(`http://localhost:5000/adicionar-notas/${subject}`, gradesToSend)
      .then(response => {
        console.log('Notas enviadas com sucesso:', response.data);
        // Se necessário, lógica adicional após o envio bem-sucedido
      })
      .catch(error => console.error('Erro ao enviar notas:', error));
  };

  return (
    <div className="grade-students-page">
      <div className="list-students-grades">
        <h1>Atribuir Notas para {subject}</h1>

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
              <p>{student.name}</p>
              <p>{student.series}</p>
              <p>{student.cpf}</p>
              <p>{student.gender}</p>
              <input 
                className="grade-input" 
                placeholder="Nota" 
                name="grade" 
                type="number"
                value={student.grade} 
                onChange={(e) => updateGrade(index, e.target.value)} 
              />
            </div>
          ))}
        </div>
        <button onClick={sendGrades}>Enviar Notas</button>
      </div>
    </div>
  );
}

export default GradeDisc;
