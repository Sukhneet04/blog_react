// App.js
import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import './App.css'; // If you have any global styles

import sampleImage1 from './images/sample1.jpg';
import sampleImage2 from './images/sample2.jpg';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <BlogPost
          title="The Majestic Mountains"
          date="May 31, 2024"
          author="Sukhneet Kaur"
          image={sampleImage1}
          body="The majestic mountains are a true wonder of nature. Towering peaks covered in snow, lush green valleys, and pristine rivers make for a breathtaking sight. Whether you're an avid hiker or just someone who enjoys the beauty of nature, the mountains offer something for everyone. The crisp, clean air and the tranquil surroundings provide a perfect escape from the hustle and bustle of everyday life. "
        />
        <BlogPost
          title="Enchanting Forest Trails"
          date="June 1, 2024"
          author="Sukhneet Kaur"
          image={sampleImage2}
          body="Exploring forest trails is like stepping into a fairy tale. The dense canopy of trees, the dappled sunlight filtering through the leaves, and the rich earthy scent of the forest floor create an enchanting atmosphere. Each trail offers a unique journey, filled with surprises and hidden wonders. "
        />
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default App;
