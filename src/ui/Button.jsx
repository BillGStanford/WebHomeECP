import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-red-700 text-red-700 hover:bg-red-50',
    white: 'bg-white text-red-700 hover:bg-gray-100 shadow-lg hover:shadow-xl',
    yellow: 'bg-yellow-400 text-red-800 hover:bg-yellow-300 shadow-lg hover:shadow-xl'
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
