import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import plusIcon from '../../assets/icons/new-post.png';
import likeIcon from '../../assets/icons/like.png';
import commentIcon from '../../assets/icons/comment-balloon-nav.png';
import './Home.scss';
import Post from './Post/Post';
import Story from './Story/Story';
import UserStory from './UserStory/UserStory';

const Home = () => {
  useEffect(() => {
    window.scrollTo(20, 0);
  });

  return (
    <div id="home-wrapper">
      <div id="home-wrapper__navigation">
        <div id="home-wrapper__navigation-logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram-logo" />
        </div>

        <div id="home-wrapper__navigation-links">
          <a href="https://google.com/">
            <img src={plusIcon} alt="plus-icon" />
          </a>
          <a href="https://google.com/">
            <img src={likeIcon} alt="like-icon" />
          </a>
          <Link to="/messages">
            <img src={commentIcon} alt="comment-icon" />
          </Link>
        </div>
      </div>

      <div id="home-wrapper__stories">
        <UserStory />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>

      <div id="home-wrapper__posts">
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
