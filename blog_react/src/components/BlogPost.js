// BlogPost.js
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, author, image, body }) => {
  return (
    <div className="blogpost">
      <h2 className="title">{title}</h2>
      <div className="meta">
        <span className="date">{date}</span>
        <span className="author">{author}</span>
      </div>
      <img src={image} alt="Post" className="image" />
      <p className="body">{body}</p>
      <hr />
    </div>
  );
};

export default BlogPost;
