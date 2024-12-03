'use client';

import React from 'react';
import ScrollButton from './ScrollButton';

interface MovieRowControlsProps {
  children: React.ReactNode;
}

const MovieRowControls: React.FC<MovieRowControlsProps> = ({ children }) => {
  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('movie-row-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="group relative">
      <ScrollButton direction="left" onClick={() => handleScroll('left')} />
      {children}
      <ScrollButton direction="right" onClick={() => handleScroll('right')} />
    </div>
  );
};

export default MovieRowControls;
