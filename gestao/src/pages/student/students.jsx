import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './students.css';

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

function StudentButton({ nomeAluno, dataNascimento, alunoStatus, onClick, onDelete }) {
    return (
            <button className='student-button' onClick={onClick}>
            <p>{nomeAluno}</p>
            <p>28/03/2005</p>
            <p>{alunoStatus}</p>
            <button className='student-button-delete' onClick={onDelete}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 14"
    class="svgIcon bin-top"
  >
    <g clip-path="url(#clip0_35_24)">
      <path
        fill="black"
        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_24">
        <rect fill="white" height="14" width="69"></rect>
      </clipPath>
    </defs>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 57"
    class="svgIcon bin-bottom"
  >
    <g clip-path="url(#clip0_35_22)">
      <path
        fill="black"
        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_22">
        <rect fill="white" height="57" width="69"></rect>
      </clipPath>
    </defs>
  </svg>
    </button>
            </button>
    );
}

function displayNotes(notasArray) {
    return (
        <div>
            <h2>Notas</h2>
            <table>
                <tbody>
                    {notasArray.map((nota, index) => (
                        <React.Fragment key={index}>
                        <div className='student-grades'>
                            <div>
                                <h4>Geografia</h4>
                                <p>{nota.geografia}</p>
                            </div>
                            <div>
                                <h4>Arte</h4>
                                <p>{nota.arte}</p>
                            </div>
                            <div>
                                <h4>Redação</h4>
                                <p>{nota.redacao}</p>
                            </div>
                            <div>
                                <h4>Religião</h4>
                                <p>{nota.religiao}</p>
                            </div>
                            <div>
                                <h4>Inglês</h4>
                                <p>{nota.ingles}</p>
                            </div>
                            <div>
                                <h4>Português</h4>
                                <p>{nota.portugues}</p>
                            </div>
                            <div>
                                <h4>História</h4>
                                <p>{nota.historia}</p>
                            </div>
                            <div>
                                <h4>Ciências</h4>
                                <p>{nota.ciencias}</p>
                            </div>
                            <div>
                                <h4>Geometria</h4>
                                <p>{nota.geometria}</p>
                            </div>
                            <div>
                                <h4>Filosofia</h4>
                                <p>{nota.filosofia}</p>
                            </div>
                            <div>
                                <h4>Educação Física</h4>
                                <p>{nota.efisica}</p>
                            </div>
                            <div>
                                <h4>Matemática</h4>
                                <p>{nota.matematica}</p>
                            </div>
                            <div>
                                <h4>Direito e Cidadania</h4>
                                <p>{nota.direitoCidadania}</p>
                            </div>
                        </div>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function EditStudentForm({ student, onSave }) {
    const [editedStudent, setEditedStudent] = useState({ ...student });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedStudent({ ...editedStudent, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedStudent);
    };

    return (
        <div className='student-edit'>
            <h2>Editar Aluno</h2>
            <form onSubmit={handleSubmit}>
            <label>Série/Ano:</label>
          <select name="serieAno" value={editedStudent.serieAno} onChange={handleChange} required>
            <option value="">Selecione</option>
            {seriesOptions.map(option => (
              <option key={option.series} value={option.series}>{option.name}</option>
            ))}
            </select>
                <label>Email Resposavel:</label>
                <input type="text" name="emailResposavel" value={editedStudent.emailResposavel} onChange={handleChange} />
                <label>Cpf Mãe:</label>
                <input type="text" name="cpfMae" value={editedStudent.cpfMae} onChange={handleChange} />
                <label>Cpf Pai:</label>
                <input type="text" name="cpfPai" value={editedStudent.cpfPai} onChange={handleChange} />
                <label>RG Mãe:</label>
                <input type="text" name="rgMae" value={editedStudent.rgMae} onChange={handleChange} />S
                <label>RG Pai:</label>
                <input type="text" name="rgPai" value={editedStudent.rgPai} onChange={handleChange} />
                <label>Endereço:</label>
                <input type="text" name="endereco" value={editedStudent.endereco} onChange={handleChange} />
                {/* Adicione mais campos conforme necessário */}
                <button className='student-edit-button' type="submit">Salvar</button>
            </form>
        </div>
    );
}

function StudentInfo({ student, onEdit }) {
    if (!student) return null;

    return (
        <div className='student-info'>
            <h1>Informações do Estudante</h1>

            <div className='info'>
                <div>
                    <h4>Nome do Aluno:</h4>
                    <p>{student.nomeAluno}</p>
                </div>
                <div>
                    <h4>Data de Nascimento</h4>
                    <p>28/03/2005{student.dataNascimento}</p>
                </div>
                <div>
                    <h4>CPF</h4>
                    <p>{student.cpf}</p>
                </div>
                <div>
                    <h4>RG</h4>
                    <p>{student.rgAluno}</p>
                </div>
                <div>
                    <h4>NIS</h4>
                    <p>{student.nis}</p>
                </div>
                <div>
                    <h4>Número da Certidão </h4>
                    <p>{student.numeroCertidao}</p>
                </div>
                <div>
                    <h4>Naturalidade</h4>
                    <p>{student.naturnalidadeEstado}</p>
                </div>
                <div>
                    <h4>Nacionalidade</h4>
                    <p>{student.nacionalidade}</p>
                </div>
                <div>
                    <h4>turma</h4>
                    <p>{student.serieAno}</p>
                </div>
                <div>
                    <h4>Status da Matricula</h4>
                    {student.alunoStatus}
                </div>
                <div>
                    <h4>Tipo Sanguíneo</h4>
                    <p>{student.tipoSanguinio}</p>
                </div>
                <div>
                    <h4>Gênero</h4>
                    <p>{student.genero}</p>
                </div>
                <div>
                    <h4>E-mail do Responsável</h4>
                    <p>{student.emailResposavel}</p>
                </div>
                <div>
                    <h4>Endereço</h4>
                    <p>{student.endereco}</p>
                </div>
                <div>
                    <h4>Nome do Pai</h4>
                    <p>{student.nomePai}</p>
                </div>
                <div>
                    <h4>Nome da Mãe</h4>
                    <p>{student.nomeMae}</p>
                </div>
                <div>
                    <h4>CPF do Pai</h4>
                    <p>{student.cpfPai}</p>
                </div>
                <div>
                    <h4>CPF da Mãe</h4>
                    <p>{student.cpfMae}</p>
                </div>
                <div>
                    <h4>RG do Pai</h4>
                    <p>{student.rgPai}</p>
                </div>
                <div>
                    <h4>RG da Mãe</h4>
                    <p>{student.rgMae}</p>
                </div>
                
            </div>
            {displayNotes(student.notas)}
            <button className='student-edit-button' onClick={onEdit}>Editar</button>
        </div>
    );
}

function Students() {
    const { serieAluno } = useParams();
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/alunos/alunos?serieAno=${serieAluno}`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [serieAluno]);

    const handleDelete = (cpf) => {
        axios.delete(`http://localhost:8080/api/alunos/${cpf}`)
            .then(() => {
                alert('Aluno deletado com sucesso!');
                setStudents(students.filter(student => student.cpf !== cpf));
                if (selectedStudent && selectedStudent.cpf === cpf) {
                    setSelectedStudent(null);
                }
            })
            .catch(error => {
                console.error('Erro ao deletar aluno', error);
                alert('Erro ao deletar aluno.');
            });
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = (editedStudent) => {
        axios.put(`http://localhost:8080/api/alunos/`, editedStudent)
            .then(() => {
                alert('Aluno editado com sucesso!');
                setEditing(false);
            })
            .catch(error => {
                console.error('Erro ao editar aluno', error);
                alert('Erro ao editar aluno.');
            });
    };

    return (
        <div className='app'>
            <div className='list-students'>
                <h1>Lista de Alunos</h1>
                <div className='container-students'>
                    <div className='table-header'>
                        <p>Alunos</p>
                        <p>Nascimento</p>
                        <p>Status</p>
                        <p>Deletar</p>
                    </div>
                    {students.map(student => (
                        <StudentButton
                            key={student.cpf}
                            nomeAluno={student.nomeAluno}
                            dataNascimento={student.dataNascimento}
                            alunoStatus={student.alunoStatus}
                            onClick={() => setSelectedStudent(student)}
                            onDelete={() => handleDelete(student.cpf)}
                        />
                    ))}
                </div>
            </div>
            <div className='student-info'>
                {editing ? (
                    <EditStudentForm student={selectedStudent} onSave={handleSave} />
                ) : (
                    <StudentInfo student={selectedStudent} onEdit={handleEdit} />
                )}
            </div>
        </div>
    );
}


export default Students;

