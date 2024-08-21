import React, { useEffect, useState } from 'react';
import './SlideIn.css';

const SlideIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`slide-in ${isVisible ? 'visible' : ''}`}>
      <h2>Check Out Our Features</h2>
      <p>This content slides in from the left.</p>
    </div>
  );
};

export default SlideIn;
