// src/components/UserCard.js
import React from 'react';
import './UserCard.css'; // Import the CSS file for styling

const UserCard = ({ name, email, avatar }) => {
  return (
    <div className="user-card">
      <img src={avatar} alt="User Avatar" className="user-avatar" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
