import React from 'react';

export const NoteIcon = ({ size = 20, className = "" }) => {
  return (
    <img
      src="/assets/note-icon.png"
      alt="note"
      width={size}
      height={size}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '5px',
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        transition: 'transform 0.2s ease, opacity 0.2s ease'
      }}
    />
  );
};

export default NoteIcon;
