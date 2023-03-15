import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import plusIcon from '../../assets/icons/new-post.png';
import likeIcon from '../../assets/icons/like.png';
import commentIcon from '../../assets/icons/comment-balloon-nav.png';
import Post from './Post/Post';
import Story from './Story/Story';
import UserStory from './UserStory/UserStory';
import getPosts from '../../redux/thunks/postsThunk';
import getStories from '../../redux/thunks/storiesThunk';
import './Home.scss';

const Home = () => {
  const posts = useSelector((state) => state.posts.data);
  const stories = useSelector((state) => state.stories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
    dispatch(getPosts());
  }, []);

  const removeDuplicateStories = (stories_to_filter) => {
    const uniqueStories = [];
    const ids = [];

    stories_to_filter.forEach((story) => {
      if (!ids.includes(story.story_user.id)) {
        ids.push(story.story_user.id);
        uniqueStories.push(story);
      }
    });
    return uniqueStories;
  };

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
        {removeDuplicateStories(stories).map((story) => (
          <Story key={story.id} story={story} />
        ))}
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
