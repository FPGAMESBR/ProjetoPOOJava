import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const changeMonth = (amount) => {
    setSelectedMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + amount);
      return newMonth;
    });
  };

  const deleteEvent = () => {
    // Verifica se há um dia selecionado e se selectedMonth é uma data válida
    if (selectedDay instanceof Date && !isNaN(selectedDay)) {
      console.log("selectedDay:", selectedDay);
      console.log("selectedMonth:", selectedMonth);
  
      // Cria uma nova data com o ano, mês e dia selecionados
      const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), selectedDay.getDate());
      console.log("selectedDate:", selectedDate);
  
      // Verifica se a data é válida antes de prosseguir
      if (!(selectedDate instanceof Date) || isNaN(selectedDate)) {
        console.error("selectedDate é inválido:", selectedDate);
        return;
      }
  
      // Formata a data para o formato 'YYYY-MM-DD'
      const formattedDate = selectedDate.toISOString().split('T')[0];
      console.log("formattedDate:", formattedDate);
  
      // Exclui o evento para o dia selecionado, se existir
      const updatedEvents = { ...events };
      delete updatedEvents[formattedDate];
  
      // Atualiza o estado dos eventos e salva no localStorage
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      closeModal(); // Fechar o modal
    } else {
      console.log("Valor inválido encontrado. selectedDay:", selectedDay, "selectedMonth:", selectedMonth);
    }
  };
  
  const addEvent = (description, extraInfo) => {
    // Verifica se selectedDay é um objeto Date válido
    if (!(selectedDay instanceof Date) || isNaN(selectedDay)) {
      console.error("selectedDay é inválido:", selectedDay);
      return;
    }
  
    // Verifica se selectedMonth é uma data válida
    if (!(selectedMonth instanceof Date) || isNaN(selectedMonth)) {
      console.error("selectedMonth é inválido:", selectedMonth);
      return;
    }
  
    // Cria uma nova data com o ano, mês e dia selecionados
    const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), selectedDay.getDate());
  
    // Verifica se a data é válida antes de prosseguir
    if (!(selectedDate instanceof Date) || isNaN(selectedDate)) {
      console.error("selectedDate é inválido:", selectedDate);
      return;
    }
  
    console.log("Selected date:", selectedDate);
  
    // Formata a data para o formato 'YYYY-MM-DD'
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
  
    console.log("Formatted date:", formattedDate);
  
    const updatedEvents = { ...events };
    updatedEvents[formattedDate] = { description, extraInfo };
    console.log("Updated events:", updatedEvents);
    setEvents(updatedEvents);
    closeModal();
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };  
  

  const openAddModal = () => {
    setIsModalOpen(true);
    setEventDescription('');
    setExtraInfo('');
  };

  const openViewModal = () => {
    setIsModalOpen(true);
  };

  const handleDayClick = (day) => {
    const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
    setSelectedDay(selectedDate); // Definir selectedDay como uma instância de Date
    if (events[selectedDate.toISOString().split('T')[0]]) {
      setSelectedEvent(events[selectedDate.toISOString().split('T')[0]]); // Define o evento selecionado
      openViewModal(); // Abre o modal de visualização se houver um evento
    } else {
      openAddModal(); // Abre o modal de adicionar se não houver evento
    }
  };

  const navigate = useNavigate();
  const goToYears = () => navigate('/years');
  const goToTeachers = () => navigate('/teachers');
  const goToDisciplines = () => navigate('/disc');

  const daysOfMonth = [];
  const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1).getDay();

  // Definição dos dias da semana e meses
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
        <div className="menu-item">Início</div>
      </div>
      <div className="content">
        <div className="top">
          <div className="button" onClick={goToYears}><i className="fas fa-calendar-alt"></i> Anos</div>
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
        onRequestClose={closeModal}
        addEvent={addEvent}
        eventDescription={eventDescription}
        setEventDescription={setEventDescription}
        deleteEvent={deleteEvent}
        extraInfo={extraInfo}
        setExtraInfo={setExtraInfo}
        selectedEvent={selectedEvent} // Passa o evento selecionado, se existir
        closeViewModal={() => {
          setSelectedDay(null);
          setSelectedEvent(null); // Limpa o evento selecionado
        }} // Função para fechar o modal de visualização
      />
    </div>
  );
};

export default HomePage;
