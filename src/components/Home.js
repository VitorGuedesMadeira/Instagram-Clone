import React from 'react';
import Post from './Post';
import './Home.css';

const Home = () => {
  const logo = 'INSTAGRAM';
  return (
    <div className="home-section">
      <div className="home-navigation-bar">
        <div className="instagram-logo">
          {logo}
        </div>
        <div className="home-navigation-links">
          <a href="https://google.com/">PLUS</a>
          <a href="https://google.com/">HEART</a>
          <a href="https://google.com/">CHAT</a>
        </div>
      </div>

      <div className="home-stories">
        STORIES
      </div>

      <div className="home-posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
