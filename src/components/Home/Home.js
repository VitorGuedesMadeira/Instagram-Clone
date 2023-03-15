/* eslint-disable max-len */
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

  const groupDuplicateStories = (storiesToGroup) => {
    const groupedStories = [];
    const ids = [];

    storiesToGroup.forEach((story) => {
      const { id } = story.story_user;
      const index = ids.indexOf(id);
      if (index === -1) {
        // If the ID is not already in the array, add it and add a new subarray for this ID
        ids.push(id);
        groupedStories.push([story]);
      } else {
        // If the ID is already in the array, add the story to the existing subarray for this ID
        groupedStories[index].push(story);
      }
    });

    return groupedStories;
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
        {groupDuplicateStories(stories).map((story, index) => (
          <Story key={story[0].id} story={story} index={index} stories={groupDuplicateStories(stories)} />
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
