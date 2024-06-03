import '../../assets/fontawesome-pro-6.5.2-web/css/all.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './teacher.css';  

const TeacherPage = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedYear, setSelectedYear] = useState('');
    const [filter, setFilter] = useState('');
    const [subjects, setSubjects] = useState([]);  // Lista de matérias
    const [years, setYears] = useState([]);  // Lista de anos
    const [filteredTeachers, setFilteredTeachers] = useState([]);

    useEffect(() => {
        const applyFilter = () => {
            if (!filter) {
                setFilteredTeachers(teachers);
            } else {
                setFilteredTeachers(teachers.filter(teacher => teacher.subjects.includes(filter)));
            }
        };
    
        fetchTeachers();
        fetchSubjects();
        fetchYears();
        applyFilter();
    }, [filter, teachers]);
    
    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/teachers');
            setTeachers(response.data);
        } catch (error) {
            console.error('Erro ao buscar professores:', error);
        }
    };

    const fetchSubjects = async () => {
        try {
            const response = await axios.get('http://localhost:8080/subjects');
            setSubjects(response.data);
        } catch (error) {
            console.error('Erro ao buscar matérias:', error);
        }
    };

    const fetchYears = async () => {
        try {
            const response = await axios.get('http://localhost:8080/years');
            setYears(response.data);
        } catch (error) {
            console.error('Erro ao buscar anos:', error);
        }
    };

    const addTeacher = async () => {
        try {
            const response = await axios.post('http://localhost:8080/teachers', { name });
            setTeachers([...teachers, response.data]);
            setName('');
        } catch (error) {
            console.error('Erro ao adicionar professor:', error);
        }
    };

    const removeTeacher = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/teachers/${id}`);
            setTeachers(teachers.filter(teacher => teacher.id !== id));
        } catch (error) {
            console.error('Erro ao remover professor:', error);
        }
    };

    const assignSubject = async () => {
        if (!selectedTeacher || !subject || !selectedYear) return;
        try {
            await axios.post('http://localhost:8080/assign', { teacherId: selectedTeacher, subject, year: selectedYear });
            setSelectedTeacher('');
            setSubject('');
            setSelectedYear('');
        } catch (error) {
            console.error('Erro ao atribuir matéria ao professor:', error);
        }
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <header>
                <h1><button className='bt3' data-testid="page-button" onClick={goToHome}><i className="fas fa-home"></i></button></h1>
            </header>
            <div className="teacher-container">
                <div className="teacher-list">
                    <h2>Professores</h2>
                    <div className="filter">
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">Filtrar por Matéria</option>
                            {subjects.map(subject => (
                                <option key={subject.id} value={subject.name}>{subject.name}</option>
                            ))}
                        </select>
                    </div>
                    <ul>
                        {filteredTeachers.map(teacher => (
                            <li key={teacher.id}>
                                {teacher.name} - {teacher.subjects.join(', ')}
                                <button onClick={() => removeTeacher(teacher.id)}>Remover</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer">
                    <div className="add-teacher">
                        <h2>Adicionar Professor</h2>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Nome do Professor" 
                        />
                        <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                            <option value="">Selecione uma Matéria</option>
                            {subjects.map(subject => (
                                <option key={subject.id} value={subject.name}>{subject.name}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
                            <option value="">Selecione um Ano</option>
                            {years.map(year => (
                                <option key={year.id} value={year.name}>{year.name}</option>
                            ))}
                        </select>
                        <button onClick={addTeacher}>Adicionar</button>
                    </div>
                    <div className="assign-subject">
                        <h2>Atribuir Matéria</h2>
                        <select onChange={(e) => setSelectedTeacher(e.target.value)} value={selectedTeacher}>
                            <option value="">Selecione um Professor</option>
                            {teachers.map(teacher => (
                                <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                            <option value="">Selecione uma Matéria</option>
                            {subjects.map(subject => (
                                <option key={subject.id} value={subject.name}>{subject.name}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
                            <option value="">Selecione um Ano</option>
                            {years.map(year => (
                                <option key={year.id} value={year.name}>{year.name}</option>
                            ))}
                        </select>
                        <button onClick={assignSubject}>Atribuir Matéria</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherPage;
