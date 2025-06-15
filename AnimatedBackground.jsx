// src/components/AnimatedBackground.jsx
import React, { useState, useEffect } from 'react';

const CircuitPattern = () => (
  <div className="absolute inset-0 opacity-20">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0,10 L5,10 L5,5 L15,5 L15,15 L10,15 L10,20" 
                stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none"/>
          <circle cx="5" cy="10" r="1" fill="rgba(59, 130, 246, 0.4)"/>
          <circle cx="15" cy="5" r="1" fill="rgba(59, 130, 246, 0.4)"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </svg>
  </div>
);

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>
      <CircuitPattern />
    </div>
  );
};

export default AnimatedBackground;