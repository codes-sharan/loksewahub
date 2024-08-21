import React, { useEffect, useState } from 'react';
import './FadeIn.css'; // Import the CSS file for styling

const FadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to My Website!</h1>
      <p>This is a simple fade-in animation.</p>
    </div>
  );
};

export default FadeIn;
