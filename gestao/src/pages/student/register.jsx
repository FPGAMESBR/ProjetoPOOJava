import './register.css';

import React, { useState } from 'react';

const StudentRegistration = () => {
  const [student, setStudent] = useState({
    name: '',
    birthDate: '',
    gender: '',
    address: '',
    email: '',
    guardianEmail: '',
    phone: '',
    guardianPhone: '',
    registrationNumber: '',
    gradeYear: '',
    nationality: '',
    cpf: '',
    rg: '',
    historicalRecord: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setStudent({
      ...student,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  };

  return (
    <div className="contain">
      <div className="sidebar"></div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-half">
          <h2>Registro de Aluno</h2>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="name" value={student.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input type="date" name="birthDate" value={student.birthDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gênero:</label>
            <select name="gender" value={student.gender} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input type="text" name="address" value={student.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={student.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email do Responsável:</label>
            <input type="email" name="guardianEmail" value={student.guardianEmail} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" name="cpf" value={student.cpf} onChange={handleChange} required />
          </div>
        </form>
        <form onSubmit={handleSubmit} className="form-half">
          <div className="form-group">
            <label>Telefone:</label>
            <input type="tel" name="phone" value={student.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Telefone do Responsável:</label>
            <input type="tel" name="guardianPhone" value={student.guardianPhone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>RG:</label>
            <input type="text" name="rg" value={student.rg} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Série/Ano:</label>
            <input type="text" name="gradeYear" value={student.gradeYear} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Naturalidade:</label>
            <input type="text" name="nationality" value={student.nationality} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Histórico Escolar:</label>
            <input type="file" name="historicalRecord" onChange={handleChange} />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;