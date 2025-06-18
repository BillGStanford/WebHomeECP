import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div 
      whileHover={hover ? { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        bg-white p-6 rounded-xl shadow-lg
        ${hover ? 'hover:shadow-xl transition-all' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
