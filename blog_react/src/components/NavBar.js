// src/components/NavBar.js
import React from 'react';
import './NavBar.css'; // Import the CSS file for styling
import logo from '../images/logo.png'; // Ensure you have a logo image in the images folder

const NavBar = ({ userName }) => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Logo" className="nav-logo" />
      <span className="nav-user">{userName}</span>
    </div>
  );
};

export default NavBar;
