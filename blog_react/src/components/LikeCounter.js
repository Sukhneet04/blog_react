// src/components/LikeCounter.js
import React, { useState } from 'react';
import './LikeCounter.css';

const LikeCounter = () => {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => setLikes(likes + 1);

  return (
    <div className="like-counter">
      <button onClick={incrementLikes}>Like</button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
};

export default LikeCounter;
