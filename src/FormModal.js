import React from 'react';

const FormModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Form Title</h2>
        {/* Your form content goes here */}
        <p> hello there</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FormModal;
