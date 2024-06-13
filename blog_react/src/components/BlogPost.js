// src/components/BlogPost.js
import React from 'react';
import './BlogPost.css';
import LikeCounter from './LikeCounter'; // Import LikeCounter

const BlogPost = ({ title, date, author, image, body }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{date} by {author}</p>
      <img src={image} alt={title} />
      <p>{body}</p>
      <LikeCounter /> {/* Use LikeCounter */}
    </div>
  );
};

export default BlogPost;
