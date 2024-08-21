import React from 'react';
import './Home.css';
import homefirstimage from "../homefirstimage.jpeg";
import NewsTicker from '../components/NewsTicker';



const Home = () => {

  return (
    <div className="homepage">
      
      <NewsTicker />

      <div className= "home-first"> 

      <div className="header">
        <h1>Welcome to LoksewaHub.Com!</h1>
        <p>Your Ultimate Destination for Public Service  Examination Preparation</p>
      </div>

      <div> 
      <img src={homefirstimage} alt="Homepageimage" className="homefirstimage" />
      </div>

      </div>

      
      <section className="introduction">
        <h2>Achieve Your Dreams with LoksewaHub</h2>
        <p>
          At LoksewaHub, we understand the importance of public service exams in shaping your career. Our mission is to provide you with the best resources, guidance, and support to help you succeed in your Loksewa exams. Whether you are a first-time aspirant or a seasoned candidate looking to improve your scores, we are here to help you every step of the way.
        </p>
      </section>

      <section className="features">
        <h2>Why Choose LoksewaHub?</h2>
        <ul>
          <li><strong>Comprehensive Study Materials:</strong> Our extensive library of study materials covers all the subjects and topics you need to master for the Loksewa exams. From detailed notes and eBooks to practice questions and previous year papers, we have everything you need to excel.</li>
          <li><strong>Expert Guidance:</strong> Learn from the best with our team of experienced educators and former public service exam toppers. Our expert instructors provide insightful lessons, tips, and strategies to help you understand complex concepts and perform at your best.</li>
          <li><strong>Interactive Learning:</strong> Engage in interactive learning with our live classes, webinars, and discussion forums. Get your doubts cleared in real-time and participate in group studies to enhance your preparation.</li>
          <li><strong>Personalized Preparation Plans:</strong> We believe that every student is unique, and so should be their preparation strategy. Our personalized study plans are tailored to your strengths and weaknesses, helping you focus on areas that need improvement.</li>
          <li><strong>Mock Tests & Assessments:</strong> Practice makes perfect. Our series of mock tests and assessments simulate the real exam environment, helping you build confidence and improve your time management skills.</li>
        </ul>
      </section>

      <section className="offerings">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Subject-Wise Study Material:</strong> Detailed notes, video lectures, and quizzes for every subject.</li>
          <li><strong>Previous Year Papers:</strong> Access to a vast collection of past exam papers with solutions.</li>
          <li><strong>Daily Current Affairs:</strong> Stay updated with the latest news and events relevant to your exams.</li>
          <li><strong>Expert Mentorship:</strong> One-on-one mentorship sessions with our experienced educators.</li>
          <li><strong>Discussion Forums:</strong> Join our community of aspirants to share knowledge and resources.</li>
        </ul>
      </section>

      <section className="success-stories">
        <h2>Success Stories</h2>
        <p>
          Hear from our successful students who have achieved their dreams with LoksewaHub. Their stories of dedication, hard work, and success will inspire you to aim higher and achieve your goals.
        </p>
      </section>

      <section className="call-to-action">
        <h2>Join LoksewaHub Today!</h2>
        <p>
          Embark on your journey to success with LoksewaHub. Sign up now and get access to our exclusive resources and start your preparation on the right track. Together, let's achieve your dreams of serving the nation.
        </p>
        <a href="mailto:helloloksewahub@gmail.com" className="contact-link">Contact Us</a>

      </section>

      <footer className="footer">
        <p><strong>LoksewaHub – Your Partner in Public Service Exam Success</strong></p>
        <p>Email: <a href="mailto:helloloksewahub@gmail.com">helloloksewahub@gmail.com</a></p>
        <p>Address: LoksewaHub, Kathmandu, Nepal</p>
      </footer>
    </div>
  );
}

export default Home;
