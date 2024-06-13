// src/components/MyComponent.js
import React from 'react';

const MyComponent = () => {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
