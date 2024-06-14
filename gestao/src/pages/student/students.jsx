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
            <button onClick={onDelete}>Deletar</button>
            </button>
    );
}

function displayNotes(notasArray) {
    return (
        <div>
            <h2>Notas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Matéria</th>
                        <th>Média</th>
                    </tr>
                </thead>
                <tbody>
                    {notasArray.map((nota, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>Geografia</td>
                                <td>{nota.geografia}</td>
                            </tr>
                            <tr>
                                <td>Arte</td>
                                <td>{nota.arte}</td>
                            </tr>
                            <tr>
                                <td>Redação</td>
                                <td>{nota.redacao}</td>
                            </tr>
                            <tr>
                                <td>Religião</td>
                                <td>{nota.religiao}</td>
                            </tr>
                            <tr>
                                <td>Inglês</td>
                                <td>{nota.ingles}</td>
                            </tr>
                            <tr>
                                <td>Português</td>
                                <td>{nota.portugues}</td>
                            </tr>
                            <tr>
                                <td>História</td>
                                <td>{nota.historia}</td>
                            </tr>
                            <tr>
                                <td>Ciências</td>
                                <td>{nota.ciencias}</td>
                            </tr>
                            <tr>
                                <td>Geometria</td>
                                <td>{nota.geometria}</td>
                            </tr>
                            <tr>
                                <td>Filosofia</td>
                                <td>{nota.filosofia}</td>
                            </tr>
                            <tr>
                                <td>Educação Física</td>
                                <td>{nota.efisica}</td>
                            </tr>
                            <tr>
                                <td>Matemática</td>
                                <td>{nota.matematica}</td>
                            </tr>
                            <tr>
                                <td>Direito e Cidadania</td>
                                <td>{nota.direitoCidadania}</td>
                            </tr>
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
        <div>
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
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

function StudentInfo({ student, onEdit }) {
    if (!student) return null;

    return (
        <div className='info'>
            <p>CPF: {student.cpf}</p>
            <p>RG do Aluno: {student.rgAluno}</p>
            <p>NIS: {student.nis}</p>
            <p>Número da Certidão: {student.numeroCertidao}</p>
            <p>Série/Ano: {student.serieAno}</p>
            <p>Nome do Aluno: {student.nomeAluno}</p>
            <p>Status do Aluno: {student.alunoStatus}</p>
            <p>Naturalidade (Estado): {student.naturnalidadeEstado}</p>
            <p>Nacionalidade: {student.nacionalidade}</p>
            <p>Tipo Sanguíneo: {student.tipoSanguinio}</p>
            <p>Gênero: {student.genero}</p>
            <p>Nome do Pai: {student.nomePai}</p>
            <p>Nome da Mãe: {student.nomeMae}</p>
            <p>E-mail do Responsável: {student.emailResposavel}</p>
            <p>CPF do Pai: {student.cpfPai}</p>
            <p>CPF da Mãe: {student.cpfMae}</p>
            <p>RG do Pai: {student.rgPai}</p>
            <p>RG da Mãe: {student.rgMae}</p>
            <p>Endereço: {student.endereco}</p>
            <p>Data de Cadastro: {student.dataCadastro}</p>
            <p>Data de Nascimento: {student.dataNascimento}</p>
            {displayNotes(student.notas)}
            <button onClick={onEdit}>Editar</button>
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

