import './register.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    Nome: '',
    dataNascimento: '',
    Sexo: '',
    Endereco: '',
    Email: '',
    NomeResponsavel: '',
    Telefone1: '',
    Telefone2: '',
    CPF: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setStudent({
      ...student,
      [name]: newValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(student);  // Log the student data to the console

    // Create a FormData object to handle file upload
    const formData = new FormData();
    for (let key in student) {
      formData.append(key, student[key]);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/alunos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Student registered successfully:', response.data);
    } catch (error) {
      console.error('There was an error registering the student!', error);
    }
  };

  // Fetch data (if necessary)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/alunos/');
        console.log('Fetched students:', response.data);
        // Optionally, you can set the fetched data to state if needed
      } catch (error) {
        console.error('There was an error fetching the students!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contain">
      <div className="sidebar"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-half">
          <h2>Registro de Aluno</h2>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="Nome" value={student.Nome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input type="date" name="dataNascimento" value={student.dataNascimento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gênero:</label>
            <select name="Sexo" value={student.Sexo} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input type="text" name="Endereco" value={student.Endereco} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="Email" value={student.Email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nome do Responsável:</label>
            <input type="text" name="NomeResponsavel" value={student.NomeResponsavel} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" name="CPF" value={student.CPF} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input type="tel" name="Telefone1" value={student.Telefone1} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Telefone do Responsável:</label>
            <input type="tel" name="Telefone2" value={student.Telefone2} onChange={handleChange} required />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
