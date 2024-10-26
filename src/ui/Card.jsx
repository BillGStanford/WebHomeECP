import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`
        bg-white p-6 rounded-lg shadow-md 
        ${hover ? 'hover:shadow-lg transition-shadow' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;