import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import likeIcon from '../../assets/icons/like.png';
import commentIcon from '../../assets/icons/comment-balloon-nav.png';
import Post from './Post/Post';
import Story from './Story/Story';
import UserStory from './UserStory/UserStory';
import './Home.scss';
import getPosts from '../../redux/thunks/postsThunk';

const Home = () => {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div id="home-wrapper">
      <div id="home-wrapper__navigation">
        <div id="home-wrapper__navigation-logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram-logo"
          />
        </div>
        <div id="home-wrapper__navigation-links">
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
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
