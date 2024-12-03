'use client';

import React from 'react';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-0 ${
        direction === 'left' ? 'left-0' : 'right-0'
      } z-40 h-full w-12 bg-black bg-opacity-50 hover:bg-opacity-70 transition-all`}
    >
      <span className="text-white text-2xl">
        {direction === 'left' ? '←' : '→'}
      </span>
    </button>
  );
};

export default ScrollButton;
