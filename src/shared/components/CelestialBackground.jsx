import React, { useEffect, useRef } from 'react';

const CelestialBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear any existing stars
    const existingStars = container.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());
    
    // Create fewer stars for better readability
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 4000); // Reduced density by half
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      star.style.left = `${left}%`;
      star.style.top = `${top}%`;
      
      // Reduce brightness by using lower opacity
      star.style.opacity = (Math.random() * 0.5 + 0.2).toString(); // Between 0.2 and 0.7
      
      // Random twinkle animation timing
      star.style.setProperty('--duration', `${3 + Math.random() * 4}s`);
      star.style.setProperty('--delay', `${Math.random() * 5}s`);
      
      container.appendChild(star);
    }
    
    // Clean up on unmount
    return () => {
      const stars = container.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden cosmic-bg pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default CelestialBackground;