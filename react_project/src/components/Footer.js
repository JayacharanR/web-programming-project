import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <hr />
      <h1>
        <center>
          <Link to="/about">About</Link>
        </center>
        <center>
          <Link to="/about#contact">Contact Us</Link>
        </center>
      </h1>
      <center>
        <p className="copyright">&copy; Jayacharan, 23BDS0065</p>
      </center>
    </footer>
  );
};

export default Footer;
