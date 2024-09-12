import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Syllabus from "./pages/Syllabus";
import ContactUs from "./pages/ContactUs";
import OldQuestions from "./pages/OldQuestions";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader />
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/oldquestions" element={<OldQuestions />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
