import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onRequestClose, addEvent, eventDescription, setEventDescription, extraInfo, setExtraInfo, deleteEvent }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onRequestClose}>&times;</span>
        <h2>Adicionar Evento</h2>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Descrição do evento"
        />
        <input
          type="text"
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          placeholder="Informações extras"
        />
        <button onClick={() => addEvent(eventDescription, extraInfo)}>Adicionar</button>
        <button onClick={deleteEvent}>Excluir</button> {/* Botão de exclusão */}
        <button onClick={onRequestClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default Modal;