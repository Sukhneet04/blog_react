// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import MyComponent from './components/MyComponent';
import ClassComponent from './components/ClassComponent';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import './App.css';

import sampleImage1 from './images/sample1.jpg';
import sampleImage2 from './images/sample2.jpg';
import userAvatar from './images/user-avatar.png';

const App = () => {
  return (
    <div>
      <NavBar userName="Sukhneet" />
      <TopBar />
      <div className="container">
        <MyComponent />
        <ClassComponent />
        <UserCard
          name="Sukhneet"
          email="sainisukhneet54@gmail.com"
          avatar={userAvatar}
        />
        <BlogPost
          title="The Majestic Mountains"
          date="May 31, 2024"
          author="Kaur"
          image={sampleImage1}
          body="The majestic mountains are a true wonder of nature. Towering peaks covered in snow, lush green valleys, and pristine rivers make for a breathtaking sight. Whether you're an avid hiker or just someone who enjoys the beauty of nature, the mountains offer something for everyone. The crisp, clean air and the tranquil surroundings provide a perfect escape from the hustle and bustle of everyday life."
        />
        <BlogPost
          title="Enchanting Forest Trails"
          date="June 1, 2024"
          author="Saini"
          image={sampleImage2}
          body="Exploring forest trails is like stepping into a fairy tale. The dense canopy of trees, the dappled sunlight filtering through the leaves, and the rich earthy scent of the forest floor create an enchanting atmosphere. Each trail offers a unique journey, filled with surprises and hidden wonders."
        />
      </div>
    </div>
  );
};

export default App;
