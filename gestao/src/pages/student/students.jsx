import React from 'react';
import './students.css';

function Students() { 
    return (
        <div className='app'>
            <div className='list-students'>
                <h1>Lista de Alunos</h1>
                <div className='container-students'>
                    <div className='table-header'>
                        <p>Alunos</p>
                        <p>Nascimento</p>
                        <p>Média</p>
                    </div>
                    <button className='student'>
                        <p>Mayron Wilke Ferreira Freire</p>
                        <p>28/03/2005</p>
                        <p>8.9</p>
                    </button>
                </div>
            </div>
        
            <div className='student-info'>
                <h1 className='info-detail'>Informações detalhada</h1>

                <div className='info'>
                    <div>
                    <h4>Nome Completo</h4>
                    <p>Mayron Wilke Ferreira Freire</p>
                    </div>
                    <div>
                    <h4>Data de Nascimento</h4>
                    <p>28/03/2005</p>
                    </div>
                    <div>
                    <h4>Gênero</h4>
                    <p>Masculino</p>
                    </div>
                    <div>
                    <h4>Endereço</h4>
                    <p>Rua: Jóse raimundo Alves N°: 1</p>
                    </div>
                    <div>
                    <h4>Email</h4>
                    <p>mayronwilke28@gmail.com</p>
                    </div>
                    <div>
                    <h4>Email Responsavel</h4>
                    <p>monicamayron123@gmail.com</p>
                    </div>
                    <div>
                    <h4>CPF</h4>
                    <p>123.456.789-10</p>
                    </div>
                    <div>
                    <h4>RG</h4>
                    <p>123456789</p>
                    </div>
                    <div>
                    <h4>Telefone</h4>
                    <p>(99) 99999-9999</p>
                    </div>
                    <div>
                    <h4>Telefone Responsavel</h4>
                    <p>(99) 99999-9999</p>
                    </div>
                    <div>
                    <h4>Série/Ano</h4>
                    <p>3° Semestre</p>
                    </div>
                    <div>
                    <h4>Turno</h4>
                    <p>Manhã</p>
                    </div>
                </div>
                    <h2 className='grades-title'>Notas</h2>
                    <div className='student-grades'>
                        <div className='grade'>
                            <h4>Matemática</h4>
                            <p>8.5</p>
                        </div>
                        <div className='grade'>
                            <h4>Português</h4>
                            <p>9.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Geografia</h4>
                            <p>7.5</p>
                        </div>
                        <div className='grade'>
                            <h4>História</h4>
                            <p>8.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Ciências</h4>
                            <p>9.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Artes</h4>
                            <p>10.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Edu Física</h4>
                            <p>9.5</p>
                        </div>
                        <div className='grade'>
                            <h4>Inglês</h4>
                            <p>8.0</p>
                        </div>
                        <div className='grade'>
                            <h4>Religião</h4>
                            <p>10.0</p>
                        </div>
                        <div>
                            <h4>Redação</h4>
                            <p>8.9</p>
                        </div>
                        <div>
                            <h4>Filosofia</h4>
                            <p>8.9</p>
                        </div>
                        <div>
                            <h4>Cidadania</h4>
                            <p>8.9</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}


export default Students;