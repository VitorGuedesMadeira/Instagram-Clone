/* eslint-disable linebreak-style */
import React from 'react';
import plusIcon from '../../../assets/icons/plus.png';
import './UserStory.scss';

const UserStory = () => {
  const story = 'Your story';
  return (
    <div id="user-story-wrapper">
      <div>
        <img id="user-story" alt="user story" />
        <img id="plus" src={plusIcon} alt="plus-icon" />
      </div>
      <p>{story}</p>
    </div>
  );
};

export default UserStory;
