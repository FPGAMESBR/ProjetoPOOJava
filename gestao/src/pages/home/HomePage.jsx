import '../../assets/fontawesome-pro-6.5.2-web/css/all.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import logo from '../../assets/pngtree-school.png';
import Modal from './Modal.js';

const HomePage = () => {
  const [events, setEvents] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // Novo estado para o evento selecionado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDescription, setEventDescription] = useState('');
  const [extraInfo, setExtraInfo] = useState('');

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events'));
    setEvents(savedEvents || {});
  }, []);

  const closeModalAndView = () => {
    setIsModalOpen(false);
    setSelectedEvent(null); // Limpa o evento selecionado ao fechar o modal
  };

  const changeMonth = (amount) => {
    setSelectedMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + amount);
      return newMonth;
    });
  };

  const deleteEvent = () => {
    if (selectedDay instanceof Date && !isNaN(selectedDay)) {
      const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), selectedDay.getDate());
  
      // Exclui o evento para o dia selecionado, se existir
      const updatedEvents = { ...events };
      delete updatedEvents[selectedDate.toISOString().split('T')[0]];
  
      // Atualiza o estado dos eventos e salva no localStorage
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      closeModalAndView(); // Fechar o modal
      setSelectedDay(null); // Define selectedDay como null após excluir o evento
    } else {
      console.log("Valor inválido encontrado. selectedDay:", selectedDay, "selectedMonth:", selectedMonth);
    }
  };
  
  const addEvent = (description, extraInfo) => {
    if (!(selectedDay instanceof Date) || isNaN(selectedDay)) {
      console.error("selectedDay é inválido:", selectedDay);
      return;
    }
  
    if (!(selectedMonth instanceof Date) || isNaN(selectedMonth)) {
      console.error("selectedMonth é inválido:", selectedMonth);
      return;
    }
  
    const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), selectedDay.getDate());
  
    if (!(selectedDate instanceof Date) || isNaN(selectedDate)) {
      console.error("selectedDate é inválido:", selectedDate);
      return;
    }
  
    const updatedEvents = { ...events };
    updatedEvents[selectedDate.toISOString().split('T')[0]] = { description, extraInfo };
    setEvents(updatedEvents);
    closeModalAndView();
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };  

  const openAddModal = () => {
    setIsModalOpen(true);
    setEventDescription('');
    setExtraInfo('');
    setSelectedEvent(null); // Limpa o evento selecionado ao abrir o modal de adicionar evento
  };

  const openViewModal = () => {
    setIsModalOpen(true);
  };

  const handleDayClick = (day) => {
    if (day > 0) {
      const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
      setSelectedDay(selectedDate); // Definir selectedDay como uma instância de Date
      if (events[selectedDate.toISOString().split('T')[0]]) {
        setSelectedEvent(events[selectedDate.toISOString().split('T')[0]]); // Define o evento selecionado
        openViewModal(); // Abre o modal de visualização se houver um evento
      } else {
        openAddModal(); // Abre o modal de adicionar se não houver evento
      }
    }
  };

  const navigate = useNavigate();
  const goToYears = () => navigate('/years');
  const goToStudents = () => navigate('/students');
  const goToTeachers = () => navigate('/teachers');
  const goToDisciplines = () => navigate('/disc');
  const goToRegister = () => navigate('/register');

  const daysOfMonth = [];
  const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1).getDay();

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  for (let i = 1; i <= 42; i++) {
    if (i <= firstDayOfMonth || i > daysInMonth + firstDayOfMonth) {
      daysOfMonth.push('');
    } else {
      daysOfMonth.push(i - firstDayOfMonth);
    }
  }

  return (
    <div className="container">
    <div className="menu">
      <img src={logo} className="logo" alt="Logo da Escola" />
      <div className="menu-item"><button data-testid = 'page-button' onClick={goToRegister}>Register</button></div>
    </div>
      <div className="content">
        <div className="top">
          <div className="button" onClick={goToYears}><i className="fas fa-calendar-alt"></i> Salas</div>
          <div className="button" onClick={goToTeachers}><i className="fas fa-graduation-cap"></i> Professores</div>
          <div className="button" onClick={goToDisciplines}><i className="fas fa-book-open"></i> Disciplinas</div>
        </div>
        <div className="calendar">
          <div className="month">{months[selectedMonth.getMonth()]} de {selectedMonth.getFullYear()}</div>
          <div className="days">
            {weekDays.map((day, index) => (
              <div key={index} className="day">{day}</div>
            ))}
            {daysOfMonth.map((day, index) => {
              const currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
              const formattedDate = currentDate.toISOString().split('T')[0];
              return (
                <div key={index} className={`day ${day ? '' : 'empty'}`} onClick={() => handleDayClick(day)}>
                  {day}
                  {events[formattedDate] && <span className="event-indicator" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => changeMonth(-1)}>Mês Anterior</button>
          <button onClick={() => changeMonth(1)}>Próximo Mês</button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModalAndView}
        addEvent={addEvent}
        eventDescription={eventDescription}
        setEventDescription={setEventDescription}
        deleteEvent={deleteEvent}
        extraInfo={extraInfo}
        setExtraInfo={setExtraInfo}
        selectedEvent={selectedEvent} // Passa o evento selecionado, se existir
        closeViewModal={closeModalAndView} // Função para fechar o modal de visualização
      />
    </div>
  );
};

export default HomePage;
