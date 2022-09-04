import React from 'react';
import plusIcon from '../../assets/icons/new-post.png';
import likeIcon from '../../assets/icons/like.png';
import commentIcon from '../../assets/icons/comment-balloon-nav.png';
import './Home.css';
import Post from './Post/Post';
import Story from './Story/Story';

const Home = () => {
  const stories = 'https://google.com/';
  return (
    <div className="home-section">
      <div className="home-navigation-bar">
        <div className="instagram-logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram-logo" />
        </div>
        <div className="home-navigation-links">
          <a href={stories}>
            <img className="plus-icon" src={plusIcon} alt="plus-icon" />
          </a>
          <a href="https://google.com/">
            <img className="like-icon" src={likeIcon} alt="like-icon" />
          </a>
          <a href="https://google.com/">
            <img className="comment-icon" src={commentIcon} alt="comment-icon" />
          </a>
        </div>
      </div>

      <div className="home-stories">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
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
