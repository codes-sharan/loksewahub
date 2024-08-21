// SlideInComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SlideInFramerMotion = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      I slide in from the left with framer-motion!
    </motion.div>
  );
};

export default SlideInFramerMotion;
