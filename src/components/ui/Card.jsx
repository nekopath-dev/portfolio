import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', hoverable = true, ...props }) => {
    return (
        <motion.div
            className={`material-card ${hoverable ? 'hoverable' : ''} ${className}`}
            whileHover={hoverable ? { y: -8, scale: 1.02 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
