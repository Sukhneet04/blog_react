// TopBar.js
import React from 'react';
import './TopBar.css'; // Import CSS for styling

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="logo">My Blog Post</div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default TopBar;
