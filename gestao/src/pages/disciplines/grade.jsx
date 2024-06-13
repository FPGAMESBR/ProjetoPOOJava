import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./grade.css";

function GradeDisc() {
  const { subject } = useParams();

  // Estado para armazenar os alunos e as notas dos alunos
  const [students, setStudents] = useState([]);
  const [studentGrades, setStudentGrades] = useState([]);

  useEffect(() => {
    // Faça uma chamada ao backend para obter os dados dos alunos
    axios.get(`http://localhost:8080/api/alunos/`)
      .then(response => {
        setStudents(response.data);
        setStudentGrades(response.data.map(student => ({
          ...student,
          media: parseFloat(student.notas?.find(nota => nota.materia === subject)?.media) || 0,
          portugues: parseFloat(student.notas?.find(nota => nota.materia === 'portugues')?.media) || 0
        })));
      })
      .catch(error => console.error('Erro ao buscar alunos:', error));
  }, [subject]);

  // Função para atualizar a nota de um aluno
  const updateGrade = (index, media, type) => {
    const updatedGrades = [...studentGrades];
    if (type === "media") {
      updatedGrades[index].media = parseFloat(media); // Converte para número float
    } else if (type === "portugues") {
      updatedGrades[index].portugues = parseFloat(media); // Converte para número float
    }
    setStudentGrades(updatedGrades);
  };

  // Função para enviar as notas para o backend usando PUT
  const sendGrades = () => {
    studentGrades.forEach(student => {
      const { media, portugues } = student;

      // Verifica se as notas são maiores que 0.1 antes de enviar
      if (media > 0.1 || portugues > 0.1) {
        const gradeData = {
          media,
          portugues
          // Adicione outras notas conforme necessário
        };

        axios.put(`http://localhost:8080/api/classes/editar-notas/${student.cpf}`, gradeData)
          .then(response => {
            console.log(`Notas atualizadas com sucesso para o CPF ${student.cpf}:`, response.data);
          })
          .catch(error => console.error(`Erro ao atualizar notas para o CPF ${student.cpf}:`, error));
      } else {
        console.log(`Notas não foram atualizadas para o CPF ${student.cpf} porque são menores ou iguais a 0.1`);
      }
    });
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
            <p>Português</p>
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
                placeholder="Português" 
                name="portugues" 
                type="number" // Mantido como type="number"
                step="0.1" // Permite decimais
                value={student.portugues} // Exemplo de exibição da nota de português
                onChange={(e) => updateGrade(index, e.target.value, "portugues")} 
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
