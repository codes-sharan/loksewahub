import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../logo.png";
import home_logo2 from "../home_logo2.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const topHeader = document.querySelector('.TopHeader');
    const topHeaderHeight = topHeader ? topHeader.offsetHeight : 0;

    if (window.scrollY > topHeaderHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`Header-all ${isSticky ? 'sticky' : ''}`}>
      <div className={`Header-image ${isSticky ? 'sticky-Header-image' : ''}`}>
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <h1 className="logo-title1">Loksewa </h1>
        <h1 className="logo-title2">Hub</h1>

      </div>
      <div className={`Nav-bar ${isSticky ? 'sticky-Nav-bar' : ''}`} >
        <div className="Nav-bar-content">
          <ul>
            <li><NavLink to="/" className="nav-item" activeClassName='active'> <img src={home_logo2} alt="Home Logo" className="nav-home_logo" /></NavLink></li>
            <li><NavLink to="/kharidaar" className="nav-item" activeClassName='active'>Kharidaar</NavLink></li>
            <li><NavLink to="/subba" className="nav-item" activeClassName='active'>Subba</NavLink></li>
            <li><NavLink to="/officer" className="nav-item" activeClassName='active'>Officer</NavLink></li>
            <li><NavLink to="/oldquestions" className="nav-item" activeClassName='active'>OldQuestions</NavLink></li>
            <li><NavLink to="/articlepage" className="nav-item" activeClassName='active'>ArticlePage</NavLink></li>
            <li><NavLink to="/syllabus" className="nav-item" activeClassName='active'>Syllabus</NavLink></li>
            <li><NavLink to="/quiz" className="nav-item" activeClassName='active'>Quiz</NavLink></li>
            <li><NavLink to="/contactus" className="nav-item" activeClassName='active'>ContactUs</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
