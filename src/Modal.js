// Modal.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    // Add event listener to close modal when clicking outside
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white rounded-lg p-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
