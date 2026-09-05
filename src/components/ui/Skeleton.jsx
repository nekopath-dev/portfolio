import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width = '100%', height = '20px', borderRadius, className = '', style = {} }) => {
  return (
    <span
      className={`m3-skeleton ${className}`}
      style={{
        width,
        height,
        ...(borderRadius ? { borderRadius } : {}),
        ...style
      }}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
