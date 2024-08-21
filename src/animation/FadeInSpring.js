// FadeInComponent.jsx
// npm install react-spring 

import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInSpring = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  return <animated.div style={fadeIn}>Hello, I fade in with react-spring!</animated.div>;
};

export default FadeInSpring;
