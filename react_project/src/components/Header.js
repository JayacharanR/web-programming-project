import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="title">
        <img src="/images/logo.png" alt="Logo" style={{ borderRadius: '40px', paddingLeft: '8px' }} />
        <span style={{ paddingRight: '225px', color: 'white' }}>Ed Electronic</span>
        <span className="bar_content" align="left">
          <Link to="/signin">Sign In</Link>
        </span>
      </div>
      <div className="bar">
        <span className="bar_content"><Link to="/main">Home</Link></span>
        <span className="bar_content"><Link to="/learn">Laptop</Link></span>
        <span className="bar_content"><Link to="/tablet">Mobile</Link></span>
        <span className="bar_content"><Link to="/quiz">Take a Quiz!</Link></span>
        <span className="bar_content"><Link to="/about#feedback">Feedback</Link></span>
        <span className="bar_content"><Link to="/about#contact">Contact Us</Link></span>
        <span className="bar_content"><Link to="/about">About</Link></span>
      </div>
    </header>
  );
};

export default Header;
