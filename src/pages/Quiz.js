import React from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
  { question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 'Pacific Ocean' },
  { question: 'Which country is known as the Land of the Rising Sun?', options: ['China', 'Japan', 'Thailand', 'South Korea'], answer: 'Japan' },
  { question: 'Who wrote the play "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], answer: 'William Shakespeare' },
  { question: 'Who is known as the father of modern physics?', options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Niels Bohr'], answer: 'Albert Einstein' },
  { question: 'What is the name of the famous clock tower in London?', options: ['Big Ben', 'Eiffel Tower', 'Leaning Tower of Pisa', 'Colosseum'], answer: 'Big Ben' },
];

function Quiz({ score, setScore, currentQuestion, setCurrentQuestion }) {
  const navigate = useNavigate();

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/results', { state: { score, totalQuestions: questions.length } });
    }
  };
  

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
