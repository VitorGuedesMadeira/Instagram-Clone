/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import plusIcon from '../../../assets/icons/plus.png';
import './UserStory.scss';

const UserStory = () => {
  const story = 'Your story';
  return (
    <div id="user-story-wrapper">
      <NavLink className="image-wrapper" to="/new-story">
        <img id="user-story" src="" alt="user story" />
        <img id="plus" src={plusIcon} alt="plus-icon" />
      </NavLink>
      <p>{story}</p>
    </div>
  );
};

export default UserStory;
