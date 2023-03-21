/* eslint-disable linebreak-style */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import nextIcon from '../../../../../assets/icons/back.png';
import backIcon from '../../../../../assets/icons/angle-left.png';

import './PostStory.scss';

const PostStory = () => {
  const location = useLocation();
  const source = location.state;

  return (
    <div id="post-story-wrapper">
      <div id="post-story-wrapper__image">
        <div id="post-story-wrapper__header-options">
          <NavLink id="post-story-wrapper__back" to="/new-story">
            <img src={backIcon} alt="back" />
          </NavLink>

          <div id="post-story-wrapper__effects">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
          </div>
        </div>
        <img src={source} alt="post" />
      </div>

      <div id="post-story-wrapper__post-options">
        <button type="button" className="buttons">
          <img src="" alt="your story" />
          <p>Your story</p>
        </button>

        <button type="button" className="buttons">
          <img src="" alt="your story" />
          <p>Close friends</p>
        </button>

        <button type="button" id="next-button">
          <img src={nextIcon} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default PostStory;
