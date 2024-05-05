import React, { useState, useEffect } from 'react';
import './home.css';
import Modal from './Modal.js';
import './../../assets/fontawesome-pro-6.5.2-web/css/all.min.css';

const HomePage = () => {
  // Estado para armazenar os eventos
  const [events, setEvents] = useState({});

  // Estado para controlar o mês selecionado no calendário
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDescription, setEventDescription] = useState('');
  const [extraInfo, setExtraInfo] = useState(''); // Adicionando estado para extraInfo

  // Função para abrir o modal
  const openModal = () => setIsModalOpen(true);

  // Função para fechar o modal
  const closeModal = () => setIsModalOpen(false);

  // Carregar os eventos do localStorage ao inicializar o componente
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events'));
    setEvents(savedEvents || {});
  }, []);

  // Função para mudar o mês selecionado
  const changeMonth = (amount) => {
    setSelectedMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + amount);
      return newMonth;
    });
  };

  const addEvent = (description, extraInfo) => {
    console.log("Adding event:", description, extraInfo, selectedDay);
    const updatedEvents = { ...events };
    updatedEvents[selectedDay] = { description, extraInfo };
    console.log("Updated events:", updatedEvents);
    setEvents(updatedEvents);
    closeModal();
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };  


  const existingEvent = {
    id: 1, // ID do evento existente
    description: "Descrição do evento existente",
    extraInfo: "Informações extras do evento existente"
  };
  
  // Função para abrir o modal ao clicar em um dia
  const handleDayClick = (day) => {
    setSelectedDay(day);
    openModal();
  };

  const editEvent = (eventId, updatedDescription, updatedExtraInfo) => {
    const updatedEvents = { ...events };
    if (updatedEvents[eventId]) {
      updatedEvents[eventId].description = updatedDescription;
      updatedEvents[eventId].extraInfo = updatedExtraInfo;
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
  };  
  
  // Função para deletar um evento
  const deleteEvent = () => {
    // Excluir o evento existente
    const updatedEvents = { ...events };
    delete updatedEvents[selectedDay]; // Remover o evento do objeto usando o selectedDay como id
    setEvents(updatedEvents); // Atualizar o estado dos eventos
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Salvar no localStorage
    closeModal(); // Fechar o modal
  };

  // Função para obter o número de dias em um mês específico
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Função para obter o primeiro dia da semana para um mês específico
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Array de nomes dos dias da semana
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Array de nomes dos meses
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  // Obter o número de dias e o primeiro dia da semana para o mês selecionado
  const daysInMonth = getDaysInMonth(selectedMonth.getMonth(), selectedMonth.getFullYear());
  const firstDayOfMonth = getFirstDayOfMonth(selectedMonth.getMonth(), selectedMonth.getFullYear());

  // Array de dias do mês atual
  const daysOfMonth = [];

  // Preencher o array com os dias do mês
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
            <div className="button"><i className="fas fa-calendar-alt"></i> Anos</div>
            <div className="button"><i className="fas fa-graduation-cap"></i> Professores</div>
            <div className="button"><i className="fas fa-book-open"></i> Disciplinas</div>
          </div>
          <div className="calendar">
            <div className="calendar">
              <div className="month">{months[selectedMonth.getMonth()]} de {selectedMonth.getFullYear()}</div>
              <div className="days">
                {/* Dias da semana */}
              {weekDays.map((day, index) => (
                <div key={index} className="day">{day}</div>
              ))}
              {/* Dias do mês */}
              {daysOfMonth.map((day, index) => (
                <div key={index} className={`day ${day ? '' : 'empty'}`} onClick={() => handleDayClick(day)}>
                  {day}
                  {/* Aqui você pode adicionar um indicador visual se houver um evento neste dia */}
                  {events[day] && <span className="event-indicator" />}
                </div>
              ))}
              </div>
            </div>
            <div className="button-container">
              <button onClick={() => changeMonth(-1)}>Mês Anterior</button>
              <button onClick={() => changeMonth(1)}>Próximo Mês</button>
            </div>
          </div>
          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            addEvent={addEvent}
            eventDescription={eventDescription}
            setEventDescription={setEventDescription}
            editEvent={editEvent}
            deleteEvent={deleteEvent}
            existingEvent={existingEvent}
            extraInfo={extraInfo}
            setExtraInfo={setExtraInfo}
          />
        </div>
      </div>
  );
};

export default HomePage;
