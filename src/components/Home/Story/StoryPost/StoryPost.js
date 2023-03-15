/* eslint-disable linebreak-style */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import crossIcon from '../../../../assets/icons/cross.png';
import likeIcon from '../../../../assets/icons/like.png';
import directIcon from '../../../../assets/icons/direct.png';
import './StoryPost.scss';

const StoryPost = () => {
  const location = useLocation();
  const story = location.state;

  return (
    <div id="story-post-wrapper">
      <div id="story-post-wrapper__navigation">
        <div id="story-post-wrapper__timeline" />
        <div id="story-post-wrapper__information">
          <div id="story-post-wrapper__flex">
            <img src={story.story_user.image} />
            <div>
              <p>{story.story_user.name}</p>
              <p>music</p>
            </div>
          </div>
          <NavLink to="/">
            <img id="story-post-wrapper__close" src={crossIcon} alt="close" />
          </NavLink>
        </div>
      </div>
      <img id="story-post-wrapper__image" src={story.image_url} alt="story" />
      <div id="story-post-wrapper__inputs">
        <input type="text" placeholder="Send message" />
        <div id="story-post-wrapper__buttons">
          <img src={likeIcon} alt="like" />
          <img src={directIcon} alt="direct" />
        </div>
      </div>
    </div>
  );
};

export default StoryPost;
