import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation();
  const { score } = state;
  const totalQuestions = 6; // Update this if the number of questions changes

  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Your score: {score} out of {totalQuestions}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  );
};

export default Results;
