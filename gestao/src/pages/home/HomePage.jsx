import '../../assets/fontawesome-pro-6.5.2-web/css/all.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import logo from '../../assets/pngtree-school.png';
import Modal from './Modal.js';

const HomePage = () => {
  const [events, setEvents] = useState({});
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDescription, setEventDescription] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(response => {
        const eventsFromDb = {};
        response.data.forEach(event => {
          eventsFromDb[event.date] = { description: event.description, extraInfo: event.extraInfo };
        });
        setEvents(eventsFromDb);
      })
      .catch(error => console.error('Erro ao buscar eventos:', error));
  }, []);

  const closeModalAndView = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
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
      const selectedDate = selectedDay.toISOString().split('T')[0];
      axios.delete(`http://localhost:5000/events/${selectedDate}`)
        .then(() => {
          const updatedEvents = { ...events };
          delete updatedEvents[selectedDate];
          setEvents(updatedEvents);
          closeModalAndView();
          setSelectedDay(null);
        })
        .catch(error => console.error('Erro ao deletar evento:', error));
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
  
    const formattedDate = selectedDate.toISOString().split('T')[0];
    axios.post('http://localhost:5000/events', { date: formattedDate, description, extraInfo })
      .then(() => {
        const updatedEvents = { ...events };
        updatedEvents[formattedDate] = { description, extraInfo };
        setEvents(updatedEvents);
        closeModalAndView();
      })
      .catch(error => console.error('Erro ao adicionar evento:', error));
  };

  const openAddModal = () => {
    setIsModalOpen(true);
    setEventDescription('');
    setExtraInfo('');
    setSelectedEvent(null); 
  };

  const openViewModal = () => {
    setIsModalOpen(true);
  };

  const handleDayClick = (day) => {
    if (day > 0) {
      const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
      setSelectedDay(selectedDate);
      const formattedDate = selectedDate.toISOString().split('T')[0];
      if (events[formattedDate]) {
        setSelectedEvent(events[formattedDate]);
        openViewModal();
      } else {
        openAddModal();
      }
    }
  };

  const navigate = useNavigate();
  const goToYears = () => navigate('/years');
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      selectedMonth.getMonth() === today.getMonth() &&
      selectedMonth.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="container">
      <div className="menu">
        <img src={logo} className="logo" alt="Logo da Escola" />
        <div className="menu-item"></div>
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
      </button>
      </div>
      <div className="content">
      <div className={`top ${menuOpen ? 'hide' : ''}`}>
          <div className="button" onClick={goToYears}><i className="fas fa-calendar-alt"></i> Salas</div>
          <div className="button" onClick={goToRegister}><i class="fa-solid fa-cabinet-filing"></i> Registrar</div>
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
                <div 
                  key={index} 
                  className={`day ${day ? '' : 'empty'} ${isToday(day) ? 'today' : ''}`} 
                  onClick={() => handleDayClick(day)}>
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
          <img src={logo} className="logo2" alt="Logo da Escola" />
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
        selectedEvent={selectedEvent}
        closeViewModal={closeModalAndView}
      />
    </div>
  );
};

export default HomePage;
