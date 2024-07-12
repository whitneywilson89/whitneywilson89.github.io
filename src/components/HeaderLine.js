import React from 'react';
import './HeaderLine.css';

const HeaderLine = ({ header }) => {
    return (
        <div className="header-line-container">
            <div className="line-l"></div>
            <span className="lakes-heading">{header}</span>
            <div className="line-r"></div>
        </div>
    );
}

export default HeaderLine;