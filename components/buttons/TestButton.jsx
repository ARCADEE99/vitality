'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <button
      className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors ${isHovered ? 'animate-bounce' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <span className="mr-1">
        <FontAwesomeIcon icon={faArrowDown} />
      </span>
      Click me
    </button>
  );
};

export default Button;
