import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const handleSubmit = async (event) => {
  event.preventDefault();
  
  try {
      const response = await axios.post('http://localhost:8080/api/alunos/', {
          // Dados do formulário
      });
      console.log('Aluno registrado com sucesso:', response.data);
  } catch (error) {
      if (error.response) {
          // A resposta foi recebida e o servidor respondeu com um status fora do intervalo 2xx
          if (error.response.status === 409) {
              console.error('CPF já existente');
          } else {
              console.error('Erro na resposta do servidor:', error.response.data);
          }
      } else if (error.request) {
          // A requisição foi feita, mas nenhuma resposta foi recebida
          console.error('Erro de rede ou servidor inativo:', error.request);
      } else {
          // Algo aconteceu ao configurar a requisição
          console.error('Erro na configuração da requisição:', error.message);
      }
  }
};


const StudentRegistration = () => {
  const [servico, setServico] = useState({
    cpf:'',
    rgAluno:'',
    nis:'',
    numeroCertidao:'',
    serieAno:'',
    nomeAluno:'',
    alunoStatus:'',
    naturnalidadeEstado:'',
    nacionalidade:'',
    tipoSanguinio:'',
    genero:'',
    nomePai:'',
    nomeMae:'',
    emailResposavel:'',
    cpfPai:'',
    cpfMae:'',
    rgPai:'',
    rgMae:'',
    endereco:'',
    dataNascimento:''
  });
  const [servicos, setServicos] = useState({});

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

 
  function handleChange(event){
    setServico({...servico,[event.target.name]:event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8080/api/alunos/', servico).then(result=>{
      console.log(result)
      alert("Aluno cadastrado com sucesso!");
      window.location.reload();
    })
    .catch(error => {
      console.error('CPF já existente', error);
  });
  }
  
  return (
    <div className="containr">
      <form onSubmit={handleSubmit}>
        <h2>Registro de Aluno</h2>
        <div className="student-form">
          <label>Nome:</label>
          <input type="text" name="nomeAluno" value={servico.nomeAluno} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Gênero:</label>
          <select name="genero" value={servico.genero} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Série/Ano:</label>
          <select name="serieAno" value={servico.serieAno} onChange={handleChange} required>
            <option value="">Selecione</option>
            {seriesOptions.map(option => (
              <option key={option.series} value={option.series}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="student-form">
          <label>Naturalidade/Estado:</label>
          <select name="naturnalidadeEstado" value={servico.naturnalidadeEstado} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Agrestina">Agrestina</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Nacionalidade:</label>
          <select name="nacionalidade" value={servico.nacionalidade} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Brasil">Brasil</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="student-form">
          <label>Data de Nascimento:</label>
          <input type="date" name="dataNascimento" value={servico.dataNascimento} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>NIS:</label>
          <input type="text" name="nis" value={servico.nis} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>RG:</label>
          <input type="text" name="rgAluno" value={servico.rgAluno} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Endereço:</label>
          <input type="text" name="endereco" value={servico.endereco} onChange={handleChange}  />
        </div>
        <div className="student-form">
          <label>CPF:</label>
          <input type="text" name="cpf" value={servico.cpf} onChange={handleChange} required />
        </div>
        <div className="student-form">
          <label>Tipo Sanguíneo:</label>
          <select name="tipoSanguinio" value={servico.tipoSanguinio} onChange={handleChange} required>
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
          <input type="text" name="nomePai" value={servico.nomePai} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Nome da Mãe:</label>
          <input type="text" name="nomeMae" value={servico.nomeMae} onChange={handleChange} required />
        </div>
        <div className="parent-form">
          <label>Email do Responsável:</label>
          <input type="email" name="emailResposavel" value={servico.emailResposavel} onChange={handleChange}  />
        </div>
        <div className="parent-form">
          <label>CPF do Pai:</label>
          <input type="text" name="cpfPai" value={servico.cpfPai} onChange={handleChange}  />
        </div>
        <div className="parent-form">
          <label>CPF da Mãe:</label>
          <input type="text" name="cpfMae" value={servico.cpfMae} onChange={handleChange}  />
        </div>
        <div className="parent-form">
          <label>RG do Pai:</label>
          <input type="text" name="rgPai" value={servico.rgPai} onChange={handleChange}  />
        </div>
        <div className="parent-form">
          <label>RG da Mãe:</label>
          <input type="text" name="rgMae" value={servico.rgMae} onChange={handleChange}  />
        </div>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </div>
  );
};

export default StudentRegistration;
