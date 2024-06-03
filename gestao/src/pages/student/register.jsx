import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    Nome: '',
    Genero: '',
    Serie: '',
    NumeroCertidaoNascimento: '',
    DataNascimento: '',
    Naturalidade: '',
    Nacionalidade: '',
    RG: '',
    CPF: '',
    NIS: '',
    TipoSanguineo: '',
    NomePai: '',
    NomeMae: '',
    EmailResponsavel: '',
    CPFPai: '',
    CPFmae: '',
    RGPai: '',
    RGMae: '',
    Endereco: '',
  });

  const seriesOptions = [
    { name: 'Maternal', series: 'maternal' },
    { name: 'Jardim I', series: 'jardim1' },
    { name: 'Jardim II', series: 'jardim2' },
    { name: '1° Ano', series: 'ano1' },
    { name: '2° Ano', series: 'ano2' },
    { name: '3° Ano', series: 'ano3' },
    { name: '4° Ano', series: 'ano4' },
    { name: '5° Ano', series: 'ano5' },
    { name: '6° Ano', series: 'ano6' },
    { name: '7° Ano', series: 'ano7' },
    { name: '8° Ano', series: 'ano8' },
    { name: '9° Ano', series: 'ano9' }
  ];

  const isValidRG = (rg) => {
    if (!/^\d{9}$/.test(rg)) {
      return false;
    }

    return true;
  };

  const isValidCPF = (cpf) => {
    if (!/^\d{11}$/.test(cpf)) {
      return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    if (remainder === 0 || remainder === 1) {
      remainder = 0;
    } else {
      remainder = 11 - remainder;
    }
    if (parseInt(cpf.charAt(9)) !== remainder) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    if (remainder === 0 || remainder === 1) {
      remainder = 0;
    } else {
      remainder = 11 - remainder;
    }
    if (parseInt(cpf.charAt(10)) !== remainder) {
      return false;
    }

    return true;
  };

  const isValidNIS = (nis) => {
    if (!/^\d{11}$/.test(nis)) {
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ['Nome', 'Genero', 'Serie', 'NumeroCertidaoNascimento', 'DataNascimento', 'Naturalidade', 'Nacionalidade', 'RG', 'CPF', 'NIS', 'TipoSanguineo', 'NomePai', 'NomeMae', 'EmailResponsavel', 'CPFPai', 'CPFmae', 'RGPai', 'RGMae', 'Endereco'];
    const missingFields = requiredFields.filter(field => !student[field]);
  
    if (missingFields.length > 0) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (!isValidRG(student.RG)) {
      console.error('RG inválido. Por favor, insira um RG válido.');
      return;
    }
  
    if (!isValidCPF(student.CPF)) {
      console.error('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }
  
    if (!isValidNIS(student.NIS)) {
      console.error('NIS inválido. Por favor, insira um NIS válido.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/alunos/', student);
      console.log('Estudante registrado com sucesso:', response.data);
    } catch (error) {
      console.error('Houve um erro ao registrar o estudante!', error);
    }
  };
  
  return (
    <div className="containr">
      <form onSubmit={handleSubmit}>
        <h2>Registro de Aluno</h2>
        <div className="student-form">
          <label>Nome:</label>
          <input type="text" name="Nome" value={student.Nome} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Gênero:</label>
          <select name="Genero" value={student.Genero} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Série/Ano:</label>
          <select name="Serie" value={student.Serie} onChange={handleChange} required>
            <option value="">Selecione</option>
            {seriesOptions.map(option => (
              <option key={option.series} value={option.series}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="student-form">
          <label>Naturalidade/Estado:</label>
          <select name="Naturalidade" value={student.Naturalidade} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Agrestina">Agrestina</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Nacionalidade:</label>
          <select name="Nacionalidade" value={student.Nacionalidade} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Brasil">Brasil</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>NIS:</label>
          <input type="text" name="NIS" value={student.NIS} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>RG:</label>
          <input type="text" name="RG" value={student.RG} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Endereço:</label>
          <input type="text" name="Endereco" value={student.Endereco} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>CPF:</label>
          <input type="text" name="CPF" value={student.CPF} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Tipo Sanguíneo:</label>
          <select name="TipoSanguineo" value={student.TipoSanguineo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
            {/* Adicione outras opções conforme necessário */}
          </select>
        </div>
        <div className="parent-form">
          <label>Nome do Pai:</label>
          <input type="text" name="NomePai" value={student.NomePai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Nome da Mãe:</label>
          <input type="text" name="NomeMae" value={student.NomeMae} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Email do Responsável:</label>
          <input type="email" name="EmailResponsavel" value={student.EmailResponsavel} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>CPF do Pai:</label>
          <input type="text" name="CPFPai" value={student.CPFPai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>CPF da Mãe:</label>
          <input type="text" name="CPFmae" value={student.CPFmae} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>RG do Pai:</label>
          <input type="text" name="RGPai" value={student.RGPai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>RG da Mãe:</label>
          <input type="text" name="RGMae" value={student.RGMae} onChange={handleChange} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
