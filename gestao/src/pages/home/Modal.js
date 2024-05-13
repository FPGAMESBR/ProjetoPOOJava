import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onRequestClose, addEvent, eventDescription, setEventDescription, extraInfo, setExtraInfo, deleteEvent, selectedEvent, closeViewModal }) => {
  const isAddingEvent = !selectedEvent; // Verifica se está adicionando um novo evento ou visualizando um existente

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onRequestClose}>&times;</span>
        <h2>{isAddingEvent ? 'Adicionar Evento' : 'Visualizar Evento'}</h2>
        {isAddingEvent && (
          <>
            <input
              type="text"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Nome do evento"
            />
            <input
              type="text"
              value={extraInfo}
              onChange={(e) => setExtraInfo(e.target.value)}
              placeholder="Informações extras"
            />
            <button className="modalButton" onClick={() => addEvent(eventDescription, extraInfo)}>Adicionar</button>
            <button className="modalButton" onClick={onRequestClose}>Cancelar</button>
          </>
        )}
        {!isAddingEvent && (
          <>
            <p><strong>Nome do evento:</strong> {selectedEvent.description}</p>
            <p><strong>Informações extras:</strong> {selectedEvent.extraInfo}</p>
            <button className="modalButton" onClick={deleteEvent}>Excluir</button>
            <button className="modalButton" onClick={closeViewModal}>Fechar</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
