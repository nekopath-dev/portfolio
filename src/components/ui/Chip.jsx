import React from 'react';
import './Chip.css';

const Chip = ({ label, icon, className = '' }) => {
    return (
        <div className={`material-chip ${className}`}>
            {icon && <span className="chip-icon">{icon}</span>}
            <span className="chip-label">{label}</span>
        </div>
    );
};

export default Chip;
