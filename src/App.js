import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import TopHeader from './components/TopHeader';
import Kharidaar from './pages/Kharidaar';
import Subba from './pages/Subba';
import Officer from './pages/Officer';
import Syllabus from './pages/Syllabus'
import ContactUs from './pages/ContactUs'
import OldQuestions from './pages/OldQuestions';
// import ArticleItem from './components/ArticleItem';

const questions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  // Add more questions as needed
];

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <Router>
      <div className="App">
        <TopHeader/>
        <Header />
        {/* <main style={{ paddingTop: '20px' }}>  */}
        <div className='page-content'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/kharidaar' element={<Kharidaar/>} />
          <Route path="/subba" element={<Subba />} />
          <Route path='/Officer' element={<Officer/>} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path='/oldquestions' element={<OldQuestions/>} />
          <Route path='/contactus' element={<ContactUs/>} />
  

          <Route
            path="/quiz"
            element={
              <Quiz
                score={score}
                setScore={setScore}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                questions={questions}
              />
            }
          />
          <Route path="/results" element={<Results score={score} totalQuestions={questions.length} />} />
        </Routes>
        {/* </main> */}

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
