import React from 'react';
import './Popup.css'; // Ensure to create this CSS file

const Popup = ({ message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
