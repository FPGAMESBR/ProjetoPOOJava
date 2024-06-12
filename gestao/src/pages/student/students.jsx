import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './students.css';

function StudentButton({ nomeAluno, dataNascimento, alunoStatus, onClick, onDelete }) {
    return (
        <div className='student'>
            <p>{nomeAluno}</p>
            <p>{dataNascimento}</p>
            <p>{alunoStatus}</p>
            <button onClick={onClick}>Detalhes</button>
            <button onClick={onDelete}>Deletar</button>
        </div>
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

function StudentInfo({ student }) {
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
        </div>
    );
}

function Students() {
    const { serieAluno } = useParams();
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

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

    return (
        <div className='app'>
            <div className='list-students'>
                <h1>Lista de Alunos</h1>
                <div className='container-students'>
                    <div className='table-header'>
                        <p>Alunos</p>
                        <p>Nascimento</p>
                        <p>Status</p>
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
                <h1 className='info-detail'>Informações detalhadas</h1>
                <StudentInfo student={selectedStudent} />
            </div>
        </div>
    );
}

export default Students;

