import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded transition-colors font-semibold';
  const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800',
    outline: 'border-2 border-red-700 text-red-700 hover:bg-red-50',
    white: 'bg-white text-red-700 hover:bg-gray-100',
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;